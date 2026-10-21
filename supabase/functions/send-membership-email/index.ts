import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MembershipApplicationRequest {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  joiningAs: string;
  groupName?: string;
  groupLocation?: string;
  associationName?: string;
  associationLocation?: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  registrationNumber: string;
}

const trimTo = (value: unknown, max: number): string | null => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Received membership application request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: MembershipApplicationRequest = await req.json();
    console.log("Application data received for:", data.fullName);

    const fullName = trimTo(data.fullName, 120);
    const email = trimTo(data.email, 255);
    const phone = trimTo(data.phone, 40);
    const joiningAs = trimTo(data.joiningAs, 20);

    if (!fullName || !email || !phone || !joiningAs) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Email sending is disabled (Resend account cancelled). Store the
    // application in the database so no submissions are lost; emails
    // can be re-enabled once the sender domain is verified.
    const { error: insertError } = await supabase
      .from("membership_applications")
      .insert({
        full_name: fullName,
        email,
        phone,
        address: trimTo(data.address, 300),
        joining_as: joiningAs,
        group_name: trimTo(data.groupName, 150),
        group_location: trimTo(data.groupLocation, 200),
        association_name: trimTo(data.associationName, 150),
        association_location: trimTo(data.associationLocation, 200),
        vehicle_make: trimTo(data.vehicleMake, 60),
        vehicle_model: trimTo(data.vehicleModel, 60),
        vehicle_year: trimTo(data.vehicleYear, 10),
        registration_number: trimTo(data.registrationNumber, 20),
      });

    if (insertError) {
      console.error("Failed to store membership application:", insertError);
      return new Response(
        JSON.stringify({ error: "Could not save your application. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Application stored for:", fullName);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application received. Our team will be in touch soon.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-membership-email function:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
