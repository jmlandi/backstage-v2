# Backstage Produtora de Eventos - Landing Page

Modern landing page built with Vue 3 (Composition API) for Backstage event production company.

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Email**: Resend API
- **Font**: SpaceGrotesk (local)

## Design System

### Colors
- **Primary (Black)**: `#000000`
- **Secondary (Off-White)**: `#fdf9ed`
- **Accent (Red)**: `#cb0000`

### Responsive Breakpoints
- **Mobile**: 320-767px
- **Tablet**: 768-1024px
- **Desktop**: 1025-1440px
- **Ultrawide**: 1441px+

## Features

- ✅ Auto-rotating hero carousel
- ✅ Responsive event cards grid
- ✅ Animated hamburger menu (mobile)
- ✅ Contact form with email integration (Resend)
- ✅ Smooth scroll navigation
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Modern minimalist design

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
```

## Deployment

This project is configured for Netlify deployment with serverless functions.

1. Connect your repository to Netlify
2. Set the `RESEND_API_KEY` environment variable in Netlify dashboard
3. Deploy!

## Project Structure

```
backstage-website-v2/
├── public/              # Static assets
│   ├── fonts/          # SpaceGrotesk font files
│   └── images/         # Event and banner images
├── src/
│   ├── components/     # Vue components
│   ├── composables/    # Composition API composables
│   ├── assets/         # Processed assets
│   ├── styles/         # Global styles
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── netlify/
│   └── functions/      # Serverless functions
└── netlify.toml        # Netlify configuration

```

## Code Conventions

All code, comments, variable names, and documentation are written in **English** as per project standards.

## License

© 2025 Backstage Produtora de Eventos. All rights reserved.
