'use client';

import { motion } from 'framer-motion';
import { 
  Car, 
  Building, 
  Users, 
  Shield, 
  Briefcase, 
  Heart,
  Gamepad2,
  MapPin
} from 'lucide-react';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';

const features = [
  {
    icon: Car,
    title: 'Custom Vehicles',
    description: 'Extensive collection of realistic vehicles with custom handling and modifications.',
    color: 'text-blue-400'
  },
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Own properties, businesses, and create your empire in our detailed economy.',
    color: 'text-green-400'
  },
  {
    icon: Briefcase,
    title: 'Diverse Jobs',
    description: 'From legal careers to underground activities - choose your path.',
    color: 'text-purple-400'
  },
  {
    icon: Shield,
    title: 'Law Enforcement',
    description: 'Professional police and EMS departments with realistic procedures.',
    color: 'text-red-400'
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join thousands of roleplayers in our welcoming and mature community.',
    color: 'text-yellow-400'
  },
  {
    icon: Heart,
    title: 'Healthcare System',
    description: 'Comprehensive medical system with realistic injuries and treatments.',
    color: 'text-pink-400'
  },
  {
    icon: Gamepad2,
    title: 'Custom Scripts',
    description: 'Unique gameplay mechanics and systems built specifically for our server.',
    color: 'text-indigo-400'
  },
  {
    icon: MapPin,
    title: 'Custom Locations',
    description: 'Exclusive map additions and modifications for enhanced roleplay.',
    color: 'text-orange-400'
  }
];

const Features = () => {
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
            <span className="gradient-text">Server Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes The Seasons Roleplay the premier destination 
            for immersive FiveM roleplay experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassSurface 
                width="100%" 
                height={280} 
                borderRadius={16} 
                brightness={45} 
                opacity={0.9} 
                blur={12}
                className="p-6 h-full group cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300 self-start`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
