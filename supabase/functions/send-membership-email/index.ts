import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  registrationNumber: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received membership application request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: MembershipApplicationRequest = await req.json();
    console.log("Application data received for:", data.fullName);

    // Send notification email to the council
    const adminEmailResponse = await resend.emails.send({
      from: "KZN E-hailing Council <onboarding@resend.dev>",
      to: ["info@ehailingcouncil.org.za"],
      subject: `New Membership Application: ${data.fullName}`,
      html: `
        <h1>New Membership Application</h1>
        <h2>Personal Information</h2>
        <ul>
          <li><strong>Full Name:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Address:</strong> ${data.address || "Not provided"}</li>
        </ul>
        <h2>Vehicle Information</h2>
        <ul>
          <li><strong>Make:</strong> ${data.vehicleMake || "Not provided"}</li>
          <li><strong>Model:</strong> ${data.vehicleModel || "Not provided"}</li>
          <li><strong>Year:</strong> ${data.vehicleYear || "Not provided"}</li>
          <li><strong>Registration:</strong> ${data.registrationNumber || "Not provided"}</li>
        </ul>
        <p><em>Submitted on ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</em></p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to the applicant
    const applicantEmailResponse = await resend.emails.send({
      from: "KZN E-hailing Council <onboarding@resend.dev>",
      to: [data.email],
      subject: "Your Membership Application Has Been Received",
      html: `
        <h1>Thank You for Your Application, ${data.fullName}!</h1>
        <p>We have received your membership application for the KwaZulu-Natal E-hailing Council.</p>
        <p>Our team will review your application and get back to you shortly.</p>
        <h2>Application Summary</h2>
        <ul>
          <li><strong>Name:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
        </ul>
        <p>If you have any questions, please contact us at <a href="mailto:info@ehailingcouncil.org.za">info@ehailingcouncil.org.za</a></p>
        <p>Best regards,<br>KwaZulu-Natal E-hailing Council</p>
      `,
    });

    console.log("Applicant email sent:", applicantEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-membership-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
