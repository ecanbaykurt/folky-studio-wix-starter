

# Interactive Blog with Individual Post Pages

## Overview
Transform the static blog cards into fully interactive pages with individual article content, improving SEO and user engagement.

---

## What Will Be Built

### 1. Blog Post Data Structure
Create comprehensive blog post content with:
- Full article body with multiple sections
- Table of contents
- Related posts suggestions
- Social share buttons
- Author bio section

### 2. Individual Blog Post Page
A new `BlogPost.tsx` component that displays:
- Hero image with title overlay
- Reading progress indicator
- Full formatted article content
- Back to blog navigation
- Related posts at the bottom

### 3. Updated Blog Listing Page
- Make each card clickable (links to `/blog/:id`)
- Add hover effects indicating clickability
- Category filtering option

### 4. Route Configuration
- Add dynamic route `/blog/:postId` in App.tsx

### 5. Sitemap Updates
- Add all individual blog post URLs to sitemap.xml
- Update lastmod dates

---

## File Changes

| File | Action |
|------|--------|
| `src/data/blogPosts.ts` | Create - centralized blog data with full content |
| `src/pages/BlogPost.tsx` | Create - individual post page component |
| `src/pages/Blog.tsx` | Update - make cards clickable |
| `src/App.tsx` | Update - add blog post route |
| `public/sitemap.xml` | Update - add blog post URLs |

---

## How to Submit Sitemap to Google Search Console

After publishing, follow these steps:

### Step 1: Access Google Search Console
1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account

### Step 2: Add Your Property
1. Click "Add property" (top-left dropdown)
2. Choose "URL prefix" method
3. Enter: `https://folky-studio-wix-starter.lovable.app`
4. Click "Continue"

### Step 3: Verify Ownership
Google offers several verification methods:
- **HTML tag** (easiest): Copy the meta tag Google provides, then ask me to add it to your `index.html`
- **HTML file**: Download and upload to your site
- **DNS record**: Add a TXT record to your domain

### Step 4: Submit Your Sitemap
1. Once verified, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml` in the "Add a new sitemap" field
3. Click "Submit"

### Step 5: Monitor Indexing
- Check "Coverage" report to see indexed pages
- Check "URL Inspection" to request indexing for specific pages
- Google typically indexes within 1-7 days

---

## Technical Details

### Blog Post Data Structure
```text
blogPosts = [
  {
    id: "slug",
    title: "Post Title",
    excerpt: "Short description",
    content: "Full markdown/HTML content",
    category: "Category",
    author: { name, avatar, bio },
    date: "2025-01-25",
    readTime: "5 min",
    image: "hero-image-url",
    tags: ["AI", "Infrastructure"]
  }
]
```

### New Route
```text
/blog/:postId -> BlogPost component
```

### SEO Benefits
- Each blog post gets its own indexable URL
- Better keyword targeting per article
- Internal linking opportunities
- Increased time on site

