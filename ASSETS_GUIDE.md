# Backstage Website - Assets Guide

## Required Assets

This project requires various images and fonts to be added to the `public` folder. Below is a guide for the assets you need to add.

## Fonts

### SpaceGrotesk Font Files

Place the following font files in `/public/fonts/`:

- `SpaceGrotesk-Regular.woff2` (400 weight)
- `SpaceGrotesk-Bold.woff2` (700 weight)

**Where to get the fonts:**
- Download from [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- Or from [GitHub](https://github.com/floriankarsten/space-grotesk)

**Font Subsetting (Optional but Recommended):**
Use a tool like [glyphhanger](https://github.com/zachleat/glyphhanger) to subset fonts for Latin characters only, reducing file size.

## Images

### Hero Carousel Images

Path: `/public/images/`

Required images for the hero carousel (1920x1080px recommended):
- `hero-1.jpg` - First carousel slide background
- `hero-2.jpg` - Second carousel slide background
- `hero-3.jpg` - Third carousel slide background

**Recommendations:**
- Use high-quality concert/event photos
- Optimize images (use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/))
- Consider WebP format with JPEG fallback
- Aspect ratio: 16:9
- File size: < 300KB per image after optimization

### Upcoming Shows Images

Path: `/public/images/`

Required images for event cards (600x750px recommended for 4:5 ratio, or 800x800px for 1:1):
- `show-1.jpg` through `show-6.jpg` - Artist/event photos

**Recommendations:**
- Portrait orientation works best
- Use artist promo photos or event posters
- Consistent aspect ratio across all images
- File size: < 150KB per image

### About Section Image

Path: `/public/images/`

Required:
- `about-team.jpg` - Team or backstage photo (1200x900px recommended)

**Recommendations:**
- Show your team or behind-the-scenes moment
- Aspect ratio: 4:3 (desktop) but responsive
- File size: < 200KB

### Bio/Timeline Images

Path: `/public/images/`

Required:
- `milestone-1.jpg` through `milestone-6.jpg` - Historical event photos

**Recommendations:**
- Photos representing company milestones
- Can be events, concerts, or team moments
- Aspect ratio: 16:9 or 4:3
- File size: < 150KB per image

### Team Member Photos

Path: `/public/images/`

Required:
- `team-1.jpg` through `team-4.jpg` - Team member headshots

**Recommendations:**
- Professional headshots or casual team photos
- Square aspect ratio (1:1) - 600x600px recommended
- Consistent style/background
- File size: < 100KB per image

## Image Optimization Tips

### Recommended Tools

1. **Squoosh** (https://squoosh.app/)
   - Web-based, free
   - Supports WebP conversion
   - Great for batch processing

2. **TinyPNG** (https://tinypng.com/)
   - Smart lossy compression
   - Reduces file size significantly
   - Maintains quality

3. **ImageOptim** (Mac only)
   - Desktop app
   - Lossless compression
   - Batch processing

### WebP Format

For modern browsers, create WebP versions of your images:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Responsive Images

For better performance, create multiple sizes:

- Small: 640px wide (mobile)
- Medium: 1024px wide (tablet)
- Large: 1920px wide (desktop)

Use the `srcset` attribute:

```html
<img
  src="image.jpg"
  srcset="image-640.jpg 640w, image-1024.jpg 1024w, image-1920.jpg 1920w"
  alt="Description"
/>
```

## Placeholder Images

During development, you can use placeholder services:

- [Unsplash Source](https://source.unsplash.com/) - `https://source.unsplash.com/1920x1080/?concert`
- [Picsum Photos](https://picsum.photos/) - `https://picsum.photos/1920/1080`
- [Placeholder.com](https://placeholder.com/) - `https://via.placeholder.com/1920x1080`

## File Structure

```
public/
├── fonts/
│   ├── SpaceGrotesk-Regular.woff2
│   └── SpaceGrotesk-Bold.woff2
├── images/
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   ├── hero-3.jpg
│   ├── show-1.jpg
│   ├── show-2.jpg
│   ├── show-3.jpg
│   ├── show-4.jpg
│   ├── show-5.jpg
│   ├── show-6.jpg
│   ├── about-team.jpg
│   ├── milestone-1.jpg
│   ├── milestone-2.jpg
│   ├── milestone-3.jpg
│   ├── milestone-4.jpg
│   ├── milestone-5.jpg
│   ├── milestone-6.jpg
│   ├── team-1.jpg
│   ├── team-2.jpg
│   ├── team-3.jpg
│   └── team-4.jpg
└── logo.svg (already created)
```

## Copyright & Licensing

⚠️ **Important:** Ensure you have the rights to use all images:

- Use your own photos
- Purchase stock photos from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or [Adobe Stock](https://stock.adobe.com/)
- Get permission from photographers/artists
- Follow Creative Commons licenses

## Next Steps

1. Add your actual photos to `/public/images/`
2. Download and add SpaceGrotesk fonts to `/public/fonts/`
3. Optimize all images for web
4. Update image paths in components if needed
5. Test image loading in development server

Once assets are added, run:
```bash
npm run dev
```

Visit http://localhost:5173 to see your site with all assets loaded!
