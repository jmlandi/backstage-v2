# Backstage Website - Database Setup Guide

## Prerequisites

1. Create a Neon Database account at https://neon.tech
2. Create a new project and database

## Setup Instructions

### 1. Get Your Database Connection String

1. Go to your Neon dashboard
2. Select your project
3. Copy the connection string from the "Connection Details" section
4. It should look like: `postgresql://user:password@host/database?sslmode=require`

### 2. Configure Environment Variables

#### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your database connection string:
   ```
   DATABASE_URL=postgresql://your_user:your_password@your_host/your_database?sslmode=require
   ```

#### Netlify Deployment

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add a new variable:
   - **Key**: `DATABASE_URL`
   - **Value**: Your Neon database connection string

### 3. Create Database Schema

Run the SQL schema in your Neon database:

1. Go to Neon dashboard
2. Open the SQL Editor
3. Copy and paste the contents of `database/schema.sql`
4. Execute the query

Or use the Neon CLI:
```bash
psql $DATABASE_URL -f database/schema.sql
```

### 4. Test the Connection

#### Local Testing with Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Link your project:
   ```bash
   netlify link
   ```

3. Run development server with functions:
   ```bash
   netlify dev
   ```

4. Test the contact form at http://localhost:8888

### 5. Verify Database

After submitting a test form, verify the data in Neon:

```sql
SELECT * FROM contatos ORDER BY created_at DESC LIMIT 10;
```

## Database Schema

### Table: `contatos`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Unique identifier |
| nome | VARCHAR(255) | NOT NULL | Full name |
| email | VARCHAR(255) | NOT NULL | Email address |
| telefone | VARCHAR(20) | NULL | Phone number (optional) |
| mensagem | TEXT | NOT NULL | Message content |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation timestamp |

## Troubleshooting

### Connection Issues

- Verify your connection string is correct
- Ensure `DATABASE_URL` environment variable is set
- Check that your IP is allowed in Neon (usually not required)

### Function Errors

- Check Netlify function logs in the dashboard
- Verify the `@neondatabase/serverless` package is installed
- Ensure the function is deployed correctly

### Security Notes

- Never commit `.env` file to git
- Always use environment variables for sensitive data
- The connection string contains credentials - keep it secure
- Use read-only database users for production if possible

## Additional Resources

- [Neon Documentation](https://neon.tech/docs)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [@neondatabase/serverless Package](https://www.npmjs.com/package/@neondatabase/serverless)
