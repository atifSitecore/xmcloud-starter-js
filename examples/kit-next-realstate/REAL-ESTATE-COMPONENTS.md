# Real Estate Demo Site - Component Documentation

## Overview
This Next.js application has been configured as a real estate demo site inspired by Ellington Properties. It includes custom components designed for showcasing properties, communities, news/blogs, and contact forms.

## Sitecore Deployment

### Automatic Template & Rendering Creation
All templates, renderings, and sample content are automatically created when you deploy to XM Cloud. The serialization files are located in:

- **Module Configuration**: `authoring/items/items/templates/realstate.module.json`
- **Templates**: `authoring/items/items/templates/items/realstate.templates/`
- **Renderings**: `authoring/items/items/templates/items/realstate.renderings/`
- **Branch Templates (Sample Site)**: `authoring/items/items/templates/items/realstate.templates.branches/`
- **Media Library**: `authoring/items/items/templates/items/realstate.media/`
- **Setup Script**: `authoring/spe-scripts/realstate-setup.ps1`

### Deployment Steps
1. Deploy to XM Cloud using the standard deployment process
2. The Sitecore Content Serialization (SCS) will automatically push:
   - Component templates (PropertyHero, PropertyCard, etc.)
   - JSON renderings linked to the Next.js components
   - **Site branch template "Sitecore Properties"** with sample site structure
   - Sample content items (Properties, Communities, News)
   - Media library with logos and placeholder images
3. After deployment, run the SPE script `realstate-setup.ps1` if you need additional data folder setup

### Creating a New Site
When creating a new site in XM Cloud:
1. Use the **"Sitecore Properties"** branch template
2. This automatically creates:
   - Sample page structure (Home, Properties, Communities, News, About, Contact)
   - Sample property data (4 properties)
   - Sample community data (3 communities)
   - Sample news articles (3 articles)
   - Home page with pre-configured components

## Sample Site Structure

### Information Architecture (IA)
```
Sitecore Properties (Site)
├── Home (Page)
│   ├── PropertyHero - Hero section with featured property
│   ├── PropertyGrid - Featured properties showcase
│   ├── CommunityShowcase - Featured communities
│   └── PropertyEnquiryForm - Contact form
├── Properties (Page)
│   ├── Azure Heights Penthouse
│   ├── Seaside Villa
│   ├── Garden Estate
│   └── City Penthouse
├── Communities (Page)
│   ├── Downtown District
│   ├── Waterfront Living
│   └── Suburban Oasis
├── News (Page)
│   ├── Market Trends 2025
│   ├── New Development Announced
│   └── Investment Guide
├── About (Page)
└── Contact (Page)
```

### Sample Content Data

#### Properties
| Name | Location | Price | Beds | Baths | Area |
|------|----------|-------|------|-------|------|
| Azure Heights Penthouse | Downtown District | $2,450,000 | 4 | 3 | 3,200 sq ft |
| Seaside Villa | Waterfront Living | $3,850,000 | 5 | 4 | 4,500 sq ft |
| Garden Estate | Suburban Oasis | $4,200,000 | 6 | 5 | 6,800 sq ft |
| City Penthouse | Downtown District | $1,850,000 | 3 | 2 | 2,100 sq ft |

#### Communities
| Name | Location | Properties |
|------|----------|------------|
| Downtown District | City Center | 24 |
| Waterfront Living | Oceanfront | 18 |
| Suburban Oasis | Green Valley | 32 |

#### News Articles
| Title | Category | Date |
|-------|----------|------|
| Real Estate Market Trends for 2025 | Market Insights | Dec 1, 2025 |
| Sitecore Heights: New Development Announced | New Projects | Nov 15, 2025 |
| Smart Property Investment Guide | Investment Tips | Nov 8, 2025 |

### Media Library
Located at `/sitecore/media library/Project/Sitecore Properties/`:
- **Logos**: Brand logos (main and white version)
- **Properties**: Property images for each listing
- **Communities**: Community images
- **Heroes**: Hero banner images

### Components Available in Pages
After deployment, the following components will be available in Sitecore Pages:
- PropertyHero, PropertyCard, PropertyGrid (Property category)
- CommunityCard, CommunityShowcase (Community category)
- NewsCard (News category)
- PropertyEnquiryForm (Forms category)

## Design System

### Color Palette
The Tailwind theme has been updated with elegant real estate colors:

- **Primary**: `hsl(220, 13%, 13%)` - Sophisticated dark charcoal
- **Secondary**: `hsl(40, 15%, 90%)` - Warm light beige
- **Accent**: `hsl(40, 60%, 60%)` - Elegant gold
- **Background**: White
- **Muted**: `hsl(210, 15%, 96%)` - Soft gray-blue

### Typography
- Clean, modern fonts (Figtree)
- Large, impactful headings
- Excellent readability

## Real Estate Components

### Property Components

#### 1. PropertyHero
**Purpose**: Full-width hero section for property pages  
**Location**: `src/components/property-hero/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/Property/PropertyHero`

**Fields**:
- Heading (Single-Line Text) *
- Subheading (Single-Line Text)
- Location (Single-Line Text)
- BackgroundImage (Image) *
- Price (Single-Line Text)
- PropertyType (Single-Line Text)
- Bedrooms (Single-Line Text)
- Bathrooms (Single-Line Text)
- Area (Single-Line Text)

**Features**:
- Full viewport height with overlay gradient
- Property details with icons
- CTA buttons (Schedule Viewing, Download Brochure)
- Scroll indicator animation
- Location pin icon

---

#### 2. PropertyCard
**Purpose**: Card component for individual property listings  
**Location**: `src/components/property-card/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/Property/PropertyCard`

**Fields**:
- Title (Single-Line Text) *
- Location (Single-Line Text)
- Image (Image) *
- Price (Single-Line Text)
- PropertyType (Single-Line Text)
- Bedrooms (Single-Line Text)
- Bathrooms (Single-Line Text)
- Area (Single-Line Text)
- Link (General Link)
- Status (Droplist: For Sale|Sold|Under Construction|Reserved)

**Features**:
- Hover effects with image scale
- Status badge
- Favorite button (appears on hover)
- Property feature icons
- Clickable card with link support

---

#### 3. PropertyGrid
**Purpose**: Container for multiple PropertyCard components  
**Location**: `src/components/property-grid/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/Property/PropertyGrid`

**Fields**:
- Heading (Single-Line Text)
- Subheading (Multi-Line Text)

**Rendering Parameters**:
- Columns (Droplist: 2|3|4) - Default: 3
- ShowViewAll (Checkbox)

**Features**:
- Responsive grid layout (1, 2, 3, or 4 columns)
- Optional "View All" button
- Uses Sitecore placeholder: `property-grid`

---

### Community Components

#### 4. CommunityCard
**Purpose**: Showcase community/neighborhood information  
**Location**: `src/components/community-card/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/Community/CommunityCard`

**Fields**:
- Title (Single-Line Text) *
- Description (Multi-Line Text)
- Image (Image) *
- Location (Single-Line Text)
- PropertyCount (Single-Line Text)
- Link (General Link)

**Features**:
- Image overlay with gradient
- Property count display
- "Explore Community" link (hover reveal)
- Location icon

---

#### 5. CommunityShowcase
**Purpose**: Grid container for community cards  
**Location**: `src/components/community-showcase/`  
**Sitecore Template**: Similar to PropertyGrid

**Fields**:
- Heading (Single-Line Text)
- Subheading (Multi-Line Text)

**Features**:
- 3-column responsive grid
- Optional "View All Communities" button
- Uses Sitecore placeholder: `community-showcase`

---

### News/Blog Components

#### 6. NewsCard
**Purpose**: Display news articles or blog posts  
**Location**: `src/components/news-card/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/News/NewsCard`

**Fields**:
- Title (Single-Line Text) *
- Excerpt (Rich Text)
- Image (Image) *
- Date (Datetime)
- Category (Single-Line Text)
- Author (Single-Line Text)
- Link (General Link)

**Features**:
- Category badge
- Date and author metadata
- Rich text excerpt with line clamping
- "Read More" link with arrow animation
- Hover effects

---

### Form Components

#### 7. PropertyEnquiryForm
**Purpose**: Contact/inquiry form for potential buyers  
**Location**: `src/components/property-enquiry-form/`  
**Sitecore Template**: `authoring/items/.../realstate.templates/kit-next-realstate/Components/Forms/PropertyEnquiryForm`

**Fields**:
- Heading (Single-Line Text) *
- Description (Rich Text)
- SubmitButtonText (Single-Line Text) - Default: "Send Enquiry"
- SuccessMessage (Single-Line Text) - Default: "Thank you! We'll be in touch shortly."

**Form Fields**:
- Full Name (required)
- Email Address (required)
- Phone Number
- Property Interest (dropdown: Apartment, Villa, Townhouse, Penthouse, Commercial)
- Message (required)

**Features**:
- Responsive grid layout
- Form validation
- Loading state with spinner
- Success message with checkmark icon
- Auto-reset after submission
- Privacy notice

---

## Component Registration

All components have been registered in `.sitecore/component-map.ts`:

```typescript
['PropertyHero', PropertyHero]
['PropertyCard', PropertyCard]
['PropertyGrid', PropertyGrid]
['CommunityCard', CommunityCard]
['CommunityShowcase', CommunityShowcase]
['NewsCard', NewsCard]
['PropertyEnquiryForm', PropertyEnquiryForm]
```

## Using the Components in Sitecore

### 1. Creating a Property Listing Page

1. Add a `PropertyHero` component to the main placeholder
2. Add a `PropertyGrid` component below
3. Within the PropertyGrid placeholder, add multiple `PropertyCard` components
4. Add a `PropertyEnquiryForm` at the bottom

### 2. Creating a Communities Page

1. Add a Hero or PageHeader component
2. Add `CommunityShowcase` component
3. Within the CommunityShowcase placeholder, add `CommunityCard` components
4. Optionally add a PropertyGrid to show available properties

### 3. Creating a News/Blog Page

1. Add a page header
2. Create a container with 2 or 3 column grid
3. Add `NewsCard` components to display articles
4. Each NewsCard can link to a full article page

## Styling Customization

### Tailwind Configuration
All styling uses Tailwind CSS with custom theme variables defined in:
- `src/assets/styles/globals.css` - CSS variables
- `src/assets/tailwind.config.cjs` - Tailwind extensions

### Common Patterns

**Card Hover Effects**:
```tsx
className="group transition-all duration-300 hover:shadow-xl"
// Image: group-hover:scale-110
```

**Buttons**:
```tsx
// Primary
className="rounded-sm bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary-hover"

// Secondary/Outline
className="rounded-sm border-2 border-primary px-8 py-3 font-medium text-primary hover:bg-primary hover:text-primary-foreground"
```

**Icons**:
- SVG icons with `h-4 w-4` or `h-5 w-5`
- Use `stroke="currentColor"` for color inheritance

## Next Steps

### Additional Components to Consider:
1. **PropertyFilter** - Filter properties by price, location, type, bedrooms
2. **PropertyGallery** - Image gallery with lightbox for property details
3. **PropertyFeatures** - List of amenities and features
4. **LocationMap** - Interactive or static map component
5. **RealEstateHeader** - Custom header with property search
6. **RealEstateFooter** - Footer with quick links and contact info
7. **TestimonialSlider** - Customer testimonials
8. **VirtualTour** - 360° tour integration

### Template Improvements:
1. Create full page templates (Property Detail Page, Community Page, etc.)
2. Add more field types (Number fields for price, area calculations)
3. Create relationship fields (Link property to community)
4. Add SEO fields (meta description, keywords)

### Content Strategy:
1. Set up sample properties with real data
2. Create community pages
3. Add news/blog content
4. Configure navigation structure

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- Tested on viewport sizes from 320px to 1920px+

## Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Focus states on all interactive elements

---

**Need Help?**
Refer to the Sitecore Content SDK documentation:
https://doc.sitecore.com/xmc/en/developers/content-sdk/index.html
