-- Create inquiries table in Supabase
-- Run this SQL in your Supabase SQL Editor (https://supabase.com/dashboard/project/gfauknvhamlvdfqmywjd/sql)

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  product TEXT NOT NULL,
  quantity TEXT,
  region TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon key (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON inquiries
  FOR INSERT
  WITH CHECK (true);

-- Allow reads only for authenticated users (admin)
CREATE POLICY "Allow authenticated reads" ON inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');
