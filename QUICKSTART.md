# Development Quick Start

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173

## Adding Assets

Before the site will look correct, add the required assets:

1. **Fonts** - See `ASSETS_GUIDE.md`
   - Download SpaceGrotesk fonts
   - Place in `/public/fonts/`

2. **Images** - See `ASSETS_GUIDE.md`
   - Add hero, show, team, and milestone images
   - Place in `/public/images/`

## Database Setup

See `DATABASE_SETUP.md` for detailed instructions:

1. Create Neon database
2. Run schema from `database/schema.sql`
3. Configure `.env` with `DATABASE_URL`

## Project Structure

```
backstage-website-v2/
├── public/              # Static assets
├── src/
│   ├── components/     # Vue components
│   ├── composables/    # Composition API logic
│   ├── styles/         # Global CSS
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── netlify/
│   └── functions/      # Serverless functions
└── database/           # SQL schema
```

## Deployment

See `DEPLOYMENT.md` for complete deployment instructions to Netlify.

Quick deploy:
```bash
npm run build
netlify deploy --prod
```
