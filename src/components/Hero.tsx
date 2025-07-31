'use client';

import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">The Seasons</span>
            <br />
            <span className="text-gray-900">Roleplay</span>
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our immersive FiveM roleplay community
          </motion.p>

          <motion.div
            className="space-y-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Connection Info */}
            <GlassSurface 
              width="100%" 
              height={300} 
              borderRadius={20} 
              brightness={45} 
              opacity={0.95}
              blur={25}
              backgroundOpacity={0.15}
              saturation={2.2}
              displace={3}
              redOffset={5}
              greenOffset={15}
              blueOffset={25}
              className="p-6 glass-surface-enhanced max-w-lg mx-auto"
            >
              <div className="text-center h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect to Server</h3>
                <div className="text-lg md:text-xl font-mono text-blue-600 mb-6 bg-white/30 rounded-lg py-3 px-4 border border-white/40">
                  cfx.re/join/p3eyem
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://cfx.re/join/p3eyem" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" icon={Play}>
                      Join Server
                    </Button>
                  </a>
                  <Button variant="secondary" size="lg" icon={Users}>
                    Discord
                  </Button>
                </div>
              </div>
            </GlassSurface>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
