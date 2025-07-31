'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Server, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Features', href: '#features', icon: Server },
    { name: 'Community', href: '#community', icon: Users },
    { name: 'Discord', href: '#discord', icon: MessageCircle },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-full mx-auto px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <GlassSurface
        width="100%"
        height={80}
        borderRadius={24}
        brightness={scrolled ? 40 : 50}
        opacity={scrolled ? 0.95 : 0.9}
        blur={15}
        backgroundOpacity={scrolled ? 0.2 : 0.15}
        saturation={1.8}
        className="transition-all duration-500"
      >
        <div className="flex items-center justify-between w-full px-6">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            The Seasons RP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{item.name}</span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
              </motion.a>
            ))}
            
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="primary" size="sm" className="shadow-lg shadow-purple-500/25">
                Join Server
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </motion.button>
        </div>
      </GlassSurface>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden mt-2"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <GlassSurface
          width="100%"
          borderRadius={20}
          brightness={45}
          opacity={0.95}
          blur={15}
          backgroundOpacity={0.2}
          saturation={1.8}
          className="overflow-hidden"
        >
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                <item.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            
            <motion.div
              className="pt-4 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="primary" size="md" className="w-full shadow-lg shadow-purple-500/25">
                Join Server
              </Button>
            </motion.div>
          </div>
        </GlassSurface>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
