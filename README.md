# Maria's Goan Eatery & Bakery Website

A modern, responsive website for Maria's Goan Eatery & Bakery - an authentic Goan and Italian café located in Vasai-Virar, Maharashtra. This project showcases a complete restaurant website with e-commerce functionality, built using Next.js 14 and modern web technologies.

## 🌟 Project Overview

Maria's Goan Eatery & Bakery is a cozy, homemade café serving authentic Goan and Italian comfort food. This website provides customers with a complete digital experience including menu browsing, online ordering, location information, and gallery showcasing the café's atmosphere and dishes.

## 🎯 Features

### 🏠 **Homepage**
- **Hero Section**: Beautiful banner with café exterior image, welcome message with soft glow effects
- **About Section**: Story-style introduction with mood words (cozy, casual, friendly, memory-filled)
- **Menu Preview**: Featured dishes from all categories with "Add to Cart" functionality
- **Gallery Section**: Photo grid showcasing customer moments and food
- **Customer Reviews**: Authentic Google reviews displayed as rounded cards with ratings
- **Location Section**: Google Maps integration with complete contact information

### 📖 **About Us Page**
- **Our Story**: Detailed narrative about Maria's journey and café philosophy
- **Team Section**: Staff profiles including Maria (Founder & Chef), John (Barista), Anita (Pastry Chef)
- **Awards & Recognition**: Showcase of café achievements and certifications
- **Customer Testimonials**: Detailed reviews with ratings and customer photos

### 🍽️ **Menu Page**
- **Complete Menu System**: Organized into 5 main categories
- **Croissants** (5 items): Plain (₹80), Butter (₹90), Cheese (₹120), Chorizo Chicken (₹150), Chicken Cafreal (₹199)
- **Goan Mains** (6 items): Chicken Cafreal (₹280), Ross Omelette (₹180), Mushroom Xacuti (₹220), Goan Curry (₹250), Pork Vindaloo (₹320), Fish Curry (₹299)
- **Italian Dishes** (5 items): Goan Shakshuka (₹250), Italian Breakfast Platter (₹320), Pasta Arrabbiata (₹280), Margherita Pizza (₹350), Chicken Alfredo (₹380)
- **Specials** (4 items): All Day English Breakfast (₹350), Maria's Special Platter (₹420), Goan Thali (₹380), Weekend Brunch (₹299)
- **Desserts & Drinks** (8 items): Red Wine Cake (₹150), Cold Coffee (₹120), Fresh Lime Soda (₹80), Bebinca (₹180), Cappuccino (₹100), Fresh Juice (₹90), Masala Chai (₹60), Chocolate Mousse (₹160)

### 📸 **Vibes & Moments Page**
- **Photo Gallery**: 9 high-quality images with captions and hover effects
- **Customer Reviews**: 6 detailed reviews with star ratings, customer names, and dates
- **Atmosphere Showcase**: Visual representation of café's cozy, friendly environment

### 📍 **Find Us Page**
- **Google Maps Integration**: Interactive map with café location
- **Contact Cards**: Address, phone number, operating hours, social media links
- **Location Details**: Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
- **Contact Information**: Phone: +91 95790 76676
- **Operating Hours**: Open Daily (Closed Thursdays), 11:00 AM - 10:00 PM

### 🛒 **E-commerce Functionality**
- **Shopping Cart System**: Global state management with React Context
- **Add to Cart**: One-click addition from menu items
- **Cart Management**: Quantity controls, item removal, price calculations
- **Price Breakdown**: Subtotal, delivery fee (free over ₹500), 5% tax calculation
- **Persistent Storage**: Cart contents saved in localStorage
- **Mobile-Optimized Cart**: Full-screen sidebar on mobile devices

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 14**: React framework with App Router
- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript development

### **Styling & UI**
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern React component library
- **Lucide React**: Beautiful icon library
- **Custom CSS**: Brand-specific styling and animations

### **Fonts**
- **Dancing Script**: Handwritten font for headings and brand elements
- **Nunito Sans**: Clean, readable font for body text
- **Inter**: System font fallback

### **State Management**
- **React Context**: Global cart state management
- **useReducer**: Complex state logic handling
- **localStorage**: Client-side data persistence

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

## 🎨 Design System

### **Color Palette**
- **Cream**: #faf7f0 (Background, light elements)
- **Rustic Brown**: #8b4513 (Primary text, navigation)
- **Sunset Orange**: #ff6b35 (Accent, buttons, highlights)
- **Mustard Yellow**: #ffb347 (Secondary accent, highlights)

### **Typography**
- **Headings**: Dancing Script (Handwritten, elegant)
- **Body Text**: Nunito Sans (Clean, readable)
- **System Fallback**: Inter (Reliable, cross-platform)

### **Design Principles**
- **Mobile-First**: Responsive design starting from mobile
- **Accessibility**: WCAG compliant, screen reader friendly
- **Performance**: Optimized images, lazy loading, efficient rendering
- **User Experience**: Intuitive navigation, clear call-to-actions

## 📱 Mobile Optimization

### **Responsive Design**
- **Breakpoints**: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Minimum 44px touch targets
- **Safe Areas**: Support for notched devices (iPhone X+)
- **Viewport**: Proper meta tags to prevent zoom issues

### **Performance Features**
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Loading**: Optimized Google Fonts integration
- **Bundle Splitting**: Automatic code splitting for faster loads
- **Caching**: Static generation and caching strategies

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18.0 or later
- npm or yarn package manager
- Git for version control

### **Installation**
\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/marias-cafe.git

# Navigate to project directory
cd marias-cafe

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### **Development Commands**
\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
\`\`\`

## 📁 Project Structure

\`\`\`
marias-cafe/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   ├── find-us/                  # Find Us page
│   ├── menu/                     # Menu page
│   ├── vibes/                    # Vibes & Moments page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── home/                     # Homepage components
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── menu-preview-section.tsx
│   │   ├── gallery-section.tsx
│   │   └── location-section.tsx
│   ├── ui/                       # shadcn/ui components
│   ├── cart-button.tsx           # Shopping cart button
│   ├── cart-sidebar.tsx          # Shopping cart sidebar
│   ├── footer.tsx                # Site footer
│   └── navigation.tsx            # Main navigation
├── contexts/                     # React contexts
│   └── cart-context.tsx          # Shopping cart state
├── public/                       # Static assets
│   ├── images/                   # Image files
│   └── icons/                    # Icon files
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
\`\`\`

## 🔧 Configuration

### **Environment Variables**
\`\`\`env
# Google Maps API (for location integration)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Information
NEXT_PUBLIC_PHONE=+919579076676
NEXT_PUBLIC_EMAIL=hello@marias.com
NEXT_PUBLIC_ADDRESS="Maulana Azad Rd, Vasai West, Maharashtra 401201"
\`\`\`

### **Tailwind Configuration**
Custom color scheme, font families, and responsive breakpoints configured in \`tailwind.config.ts\`

### **Next.js Configuration**
Optimized for performance with image optimization, font optimization, and static generation

## 🎯 Key Components

### **Cart System**
- **CartProvider**: Global state management
- **CartButton**: Floating action button with item count
- **CartSidebar**: Full cart management interface
- **Price Calculation**: Real-time totals with tax and delivery

### **Navigation**
- **Responsive Design**: Desktop horizontal, mobile hamburger menu
- **Active States**: Current page highlighting
- **Accessibility**: Keyboard navigation, screen reader support

### **Menu System**
- **Category Organization**: 5 main food categories
- **Item Cards**: Image, name, price, description, add to cart
- **Search & Filter**: Category-based filtering
- **Mobile Optimization**: Touch-friendly interface

## 📊 Performance Metrics

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Optimization Features**
- **Image Optimization**: WebP format, responsive sizing
- **Font Optimization**: Preloaded, self-hosted fonts
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Static generation and CDN caching

## 🔒 Security Features

### **Data Protection**
- **Client-Side Storage**: Secure localStorage implementation
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: React's built-in XSS prevention

### **Privacy**
- **No Tracking**: No unnecessary data collection
- **Local Storage**: Cart data stored locally
- **Secure Headers**: Next.js security headers

## 🚀 Deployment

### **Vercel (Recommended)**
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
\`\`\`

### **Other Platforms**
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🔮 Future Enhancements

### **Phase 1: Core Features**
- [ ] Real menu images integration
- [ ] WhatsApp ordering system
- [ ] Payment gateway integration
- [ ] Table reservation system

### **Phase 2: Advanced Features**
- [ ] Customer loyalty program
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Multi-language support (Marathi, Hindi)

### **Phase 3: Business Intelligence**
- [ ] Analytics dashboard
- [ ] Inventory management
- [ ] Customer insights
- [ ] Marketing automation

## 👥 Team

### **Development Team**
- **Frontend Developer**: React/Next.js specialist
- **UI/UX Designer**: Brand identity and user experience
- **Content Creator**: Photography and copywriting

### **Business Team**
- **Maria**: Founder & Head Chef
- **John**: Barista & Customer Service
- **Anita**: Pastry Chef & Social Media

## 📞 Contact & Support

### **Business Contact**
- **Phone**: +91 95790 76676
- **Email**: hello@marias.com
- **Address**: Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201

### **Social Media**
- **Instagram**: [@mariasgoaneaterybakery](https://instagram.com/mariasgoaneaterybakery)
- **Facebook**: [Maria's Goan Eatery & Bakery](https://facebook.com/Mariasgoaneaterybakery)

### **Technical Support**
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: Comprehensive guides and API references
- **Community**: Discord server for developers and contributors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **shadcn/ui**: For the beautiful component library
- **Vercel**: For hosting and deployment platform
- **Tailwind CSS**: For the utility-first CSS framework
- **Next.js Team**: For the amazing React framework
- **Maria's Team**: For the authentic recipes and warm hospitality

---

**Built with ❤️ for Maria's Goan Eatery & Bakery**

*A taste of home since day one.*
