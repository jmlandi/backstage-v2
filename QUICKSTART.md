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

## Email Configuration

Create a `.env` file with your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key
```

Get your API key from [Resend Dashboard](https://resend.com/api-keys)

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
└── netlify/
    └── functions/      # Serverless functions
```

## Deployment

See `DEPLOYMENT.md` for complete deployment instructions to Netlify.

Quick deploy:
```bash
npm run build
netlify deploy --prod
```
