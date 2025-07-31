'use client';

import { motion } from 'framer-motion';
import { Copy, Server, Clock, Globe } from 'lucide-react';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';
import Button from './ui/Button';
import { useState } from 'react';

const ServerInfo = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = 'connect.seasonsrp.com';

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy server IP');
    }
  };

  const serverStats = [
    { label: 'Server Status', value: 'Online', color: 'text-green-400' },
    { label: 'Players Online', value: '142/200', color: 'text-blue-400' },
    { label: 'Queue Position', value: '0', color: 'text-yellow-400' },
    { label: 'Restart In', value: '2h 34m', color: 'text-purple-400' },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Server Information</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect to our server and join the most immersive roleplay experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Server Connection */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassSurface 
              width="100%" 
              height={400} 
              borderRadius={16} 
              brightness={45} 
              opacity={0.9} 
              blur={12}
              className="p-8"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 mr-4">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Connect to Server</h3>
                    <p className="text-gray-300">Join our FiveM server directly</p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <code className="text-green-400 font-mono text-lg">{serverIP}</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      icon={Copy}
                      onClick={copyServerIP}
                      className={copied ? 'text-green-400' : ''}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Step 1:</strong> Open FiveM client
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Step 2:</strong> Press F8 to open console
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Step 3:</strong> Type <code className="bg-black/30 px-2 py-1 rounded text-green-400">connect {serverIP}</code>
                  </p>
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Server Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassSurface 
              width="100%" 
              height={450} 
              borderRadius={16} 
              brightness={45} 
              opacity={0.9} 
              blur={12}
              className="p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Live Server Stats</h3>
                  <p className="text-gray-300">Real-time server information</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {serverStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-black/20 rounded-xl p-4 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-white font-semibold">Server Schedule</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Restarts every 4 hours for optimal performance
                </p>
              </motion.div>
            </GlassSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
