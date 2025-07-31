'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Shield, Users, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Rules', href: '#rules', icon: Shield },
    { name: 'Staff', href: '#staff', icon: Users },
    { name: 'Store', href: 'https://play.theseasonsroleplay.store/', icon: ShoppingBag, external: true },
  ];

  return (
    <motion.nav
      className="fixed top-2 left-2 right-2 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <GlassSurface
        width="100%"
        height={72}
        borderRadius={20}
        brightness={45}
        opacity={0.95}
        blur={25}
        backgroundOpacity={0.15}
        saturation={2.2}
        displace={2}
        redOffset={3}
        greenOffset={10}
        blueOffset={18}
        className="transition-all duration-300 ease-out w-full glass-surface-enhanced"
        style={{ maxWidth: '95vw' }}
      >
        <div className="flex items-center justify-between px-8 h-full w-full">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="The Seasons RP"
              width={150}
              height={50}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-white/20 group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{item.name}</span>
              </motion.a>
            ))}
            
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://cfx.re/join/p3eyem" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="shadow-lg shadow-purple-500/25">
                  Join Server
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
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
          width={800}
          height={300}
          borderRadius={16}
          brightness={40}
          opacity={0.9}
          blur={25}
          backgroundOpacity={0.2}
          saturation={2.2}
          displace={3}
          redOffset={3}
          greenOffset={10}
          blueOffset={20}
          className="overflow-hidden"
        >
          <div className="p-6 space-y-2 h-full flex flex-col">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-3 p-3 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-all duration-300 group"
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
              className="pt-4 border-t border-gray-400/30 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="https://cfx.re/join/p3eyem" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" className="w-full shadow-lg shadow-purple-500/25">
                  Join Server
                </Button>
              </a>
            </motion.div>
          </div>
        </GlassSurface>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
