-- Supabase schema for consultations table
-- Run this in your Supabase SQL Editor to create the required table

CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  category TEXT NOT NULL,
  content TEXT NOT NULL,
  privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for the public form)
CREATE POLICY "Allow anonymous inserts" ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated users can read
CREATE POLICY "Allow authenticated reads" ON consultations
  FOR SELECT
  TO authenticated
  USING (true);
