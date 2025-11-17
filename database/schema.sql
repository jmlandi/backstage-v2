-- Neon Database Schema for Backstage Website
-- This file contains the SQL schema for the contact form database

-- Create the contacts table
CREATE TABLE IF NOT EXISTS contatos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contatos_email ON contatos(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contatos_created_at ON contatos(created_at DESC);

-- Add a comment to the table
COMMENT ON TABLE contatos IS 'Stores contact form submissions from the Backstage website';

-- Add comments to columns
COMMENT ON COLUMN contatos.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN contatos.nome IS 'Full name of the person submitting the form';
COMMENT ON COLUMN contatos.email IS 'Email address of the person';
COMMENT ON COLUMN contatos.telefone IS 'Optional phone number';
COMMENT ON COLUMN contatos.mensagem IS 'Message content from the contact form';
COMMENT ON COLUMN contatos.created_at IS 'Timestamp when the record was created';
