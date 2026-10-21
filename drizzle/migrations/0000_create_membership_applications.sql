CREATE TABLE public.membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  joining_as text NOT NULL,
  group_name text,
  group_location text,
  association_name text,
  association_location text,
  vehicle_make text,
  vehicle_model text,
  vehicle_year text,
  registration_number text
);

GRANT ALL ON public.membership_applications TO service_role;

ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;