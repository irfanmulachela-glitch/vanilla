-- Supabase Schema for Penta Pelita Vanilla Website
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('beans', 'paste', 'powder')),
  short_description TEXT,
  description TEXT,
  image TEXT,
  specifications JSONB DEFAULT '{}',
  certifications TEXT[] DEFAULT '{}',
  moq TEXT,
  lead_time TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT,
  published BOOLEAN DEFAULT FALSE,
  author TEXT,
  read_time TEXT,
  featured_image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  product_id UUID REFERENCES products(id),
  product_name TEXT,
  quantity TEXT,
  region TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Public read access for products and published posts
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

CREATE POLICY "Published posts are viewable by everyone" ON posts
  FOR SELECT USING (published = true);

-- Insert policies for authenticated users (admin)
CREATE POLICY "Authenticated users can insert products" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update products" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete products" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert posts" ON posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update posts" ON posts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete posts" ON posts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Anyone can submit inquiries
CREATE POLICY "Anyone can submit inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);

-- Authenticated users can view and manage inquiries
CREATE POLICY "Authenticated users can view inquiries" ON inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update inquiries" ON inquiries
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Anyone can subscribe to newsletter
CREATE POLICY "Anyone can subscribe" ON subscribers
  FOR INSERT WITH CHECK (true);

-- Authenticated users can view subscribers
CREATE POLICY "Authenticated users can view subscribers" ON subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Insert initial product data
INSERT INTO products (name, slug, category, short_description, description, specifications, certifications, moq, lead_time) VALUES
(
  'Vanilla Beans',
  'vanilla-beans',
  'beans',
  'Premium Grade A & Grade B vanilla beans, hand-picked and sun-cured for 6-9 months.',
  'Our vanilla beans are sourced directly from Indonesian smallholder farmers and carefully cured using traditional methods. Each bean is hand-picked at peak maturity and sun-dried for 6-9 months to develop optimal vanillin content (1.8-2.7%). Available in Grade A Gourmet and Grade B Extraction grades.',
  '{"species": "V. planifolia / V. tahitensis", "moistureContent": "25-35%", "vanillinContent": "1.3-2.7%", "beanLength": "16-20 cm (Grade A) / 10-16 cm (Grade B)", "curing": "6-9 months, sun-dried + sweat-box", "hsCode": "0905.10", "incoterms": "EXW / FOB Semarang, Jakarta, Surabaya / CIF / DDP"}',
  ARRAY['Quality Assured', 'Halal', 'Phytosanitary'],
  '1 kg',
  '3-7 days (air freight) from Semarang, Jakarta, or Surabaya'
),
(
  'Vanilla Paste',
  'vanilla-paste',
  'paste',
  'Custom composition vanilla paste tailored to your exact specifications.',
  'Our vanilla paste is manufactured to your exact requirements. We offer custom formulations with adjustable vanillin concentration, sugar content, and viscosity. Perfect for food manufacturers, bakeries, and beverage companies requiring consistent, high-quality vanilla flavoring.',
  '{"vanillinContent": "Custom (1.0-3.0%)", "sugarContent": "Custom (0-65%)", "viscosity": "Adjustable", "shelfLife": "24 months", "packaging": "Bulk drums / Retail bottles", "hsCode": "2106.90", "incoterms": "EXW / FOB Semarang, Jakarta, Surabaya / CIF / DDP"}',
  ARRAY['Quality Assured', 'Halal', 'FDA Compliant'],
  '100 kg',
  '7-14 days (production + shipping)'
),
(
  'Vanilla Powder',
  'vanilla-powder',
  'powder',
  '100% pure vanilla powder, finely ground from premium cured beans.',
  'Our vanilla powder is made from 100% pure cured vanilla beans, finely ground to a consistent mesh size. No fillers, no additives. Ideal for dry mixes, baking blends, and applications where liquid vanilla is not suitable.',
  '{"meshSize": "40-80 mesh (customizable)", "vanillinContent": "1.5-2.5%", "moisture": "< 5%", "purity": "100% pure vanilla", "packaging": "Bulk bags / Retail containers", "hsCode": "0905.20", "incoterms": "EXW / FOB Semarang, Jakarta, Surabaya / CIF / DDP"}',
  ARRAY['Quality Assured', 'Halal', 'Organic'],
  '5 kg',
  '3-7 days (air freight) from Semarang, Jakarta, or Surabaya'
);
