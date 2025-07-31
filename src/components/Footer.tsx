'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Globe, Mail, Shield, FileText } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    community: [
      { name: 'Discord Server', href: '#', icon: MessageCircle },
      { name: 'Forums', href: '#', icon: Users },
      { name: 'Reddit', href: '#', icon: Globe },
    ],
    server: [
      { name: 'Server Rules', href: '#', icon: Shield },
      { name: 'Whitelist Application', href: '#', icon: FileText },
      { name: 'Staff Applications', href: '#', icon: Users },
    ],
    support: [
      { name: 'Contact Us', href: '#', icon: Mail },
      { name: 'Bug Reports', href: '#', icon: FileText },
      { name: 'Suggestions', href: '#', icon: MessageCircle },
    ]
  };

  return (
    <footer className="relative py-16 px-6 border-t border-gray-300/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="The Seasons RP"
                width={200}
                height={66}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              A non-P2W server where every story matters and every character comes to life.
            </p>
            <div className="flex space-x-4">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400 text-sm font-medium">Server Online</span>
            </div>
          </motion.div>

          {/* Community Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Server Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold mb-4">Server</h4>
            <ul className="space-y-3">
              {footerLinks.server.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
                {/* Bottom section */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 The Seasons Roleplay. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">Made with</span>
                <motion.span
                  className="text-red-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
