# The Seasons Roleplay Website

A modern, sleek website for "The Seasons Roleplay" FiveM RP server, built with Next.js 15, React, and featuring glass morphism design elements inspired by React Bits.

## ✨ Features

- **Modern Glass Morphism Design** - Sleek, translucent UI elements with backdrop blur effects
- **Fluid Animations** - Smooth transitions and animations using Framer Motion
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Server Integration** - Real-time server information and connection details
- **Community Showcase** - Player testimonials and community statistics
- **Interactive Elements** - Engaging hover effects and micro-interactions

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack (for development)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SeasonsRenewed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/
│   ├── ui/
│   │   ├── Button.tsx   # Reusable button component
│   │   └── GlassCard.tsx # Glass morphism card component
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Server features section
│   ├── ServerInfo.tsx   # Server connection information
│   ├── Community.tsx    # Community showcase
│   └── Footer.tsx       # Site footer
```

## 🎨 Design System

### Glass Morphism
The design uses custom CSS classes for glass effects:
- `.glass` - Light glass effect with backdrop blur
- `.glass-dark` - Dark glass effect for overlays

### Color Palette
- **Primary**: Purple to Blue gradients
- **Background**: Dark with subtle gradients
- **Text**: White and gray variations
- **Accents**: Various colors for different elements

### Typography
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable fonts with proper spacing
- **Code**: Monospace font for server information

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Key Components

#### Hero Section
- Animated background elements
- Call-to-action buttons
- Server statistics cards

#### Features Grid
- Interactive feature cards
- Icon animations on hover
- Progressive loading animations

#### Server Information
- Live server stats
- Connection instructions
- Copyable server IP

#### Community Showcase
- Player testimonials
- Community statistics
- Discord integration

## 🎯 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to the main page
3. Follow the existing animation patterns

### Modifying Styles
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in Tailwind config

### Server Integration
Update server information in `ServerInfo.tsx`:
- Server IP address
- Live statistics
- Connection instructions

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- **Next.js App Router** for optimal performance
- **Turbopack** for fast development builds
- **Framer Motion** optimizations for smooth animations
- **Tailwind CSS** for minimal CSS bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and created specifically for The Seasons Roleplay server.

---

**Built with ❤️ for The Seasons Roleplay Community**
