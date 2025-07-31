'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Calendar, Trophy } from 'lucide-react';
import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';
import Button from './ui/Button';

const communityStats = [
  { icon: Users, label: 'Community Members', value: '5,000+', color: 'text-blue-400' },
  { icon: MessageCircle, label: 'Daily Messages', value: '15,000+', color: 'text-green-400' },
  { icon: Calendar, label: 'Events This Month', value: '25+', color: 'text-purple-400' },
  { icon: Trophy, label: 'Active Competitions', value: '3', color: 'text-yellow-400' },
];

const testimonials = [
  {
    name: 'Alex Rodriguez',
    role: 'Police Officer',
    content: 'The most realistic and immersive RP server I\'ve ever played on. The community is incredible!',
    avatar: '👮‍♂️'
  },
  {
    name: 'Sarah Chen',
    role: 'Business Owner',
    content: 'Building my empire here has been amazing. The economy system is so well designed.',
    avatar: '👩‍💼'
  },
  {
    name: 'Mike Thompson',
    role: 'EMS Paramedic',
    content: 'Love the medical RP here. Every call feels important and meaningful.',
    avatar: '🚑'
  }
];

const Community = () => {
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
            <span className="gradient-text">Join Our Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of roleplayers in our vibrant and welcoming community.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {communityStats.map((stat, index) => (
            <GlassSurface 
              key={stat.label} 
              width="100%" 
              height={160} 
              borderRadius={16} 
              brightness={45} 
              opacity={0.9} 
              blur={12}
              className="p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            </GlassSurface>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Our Players Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassSurface 
                  width="100%" 
                  height={220} 
                  borderRadius={16} 
                  brightness={45} 
                  opacity={0.9} 
                  blur={12}
                  className="p-6 h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </GlassSurface>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Discord CTA */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassSurface 
            width="100%" 
            height={400} 
            borderRadius={24} 
            brightness={45} 
            opacity={0.9} 
            blur={15}
            className="p-12 max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-gray-300">
                Join our Discord community to connect with other players, get support, 
                and stay updated on server events and announcements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" icon={MessageCircle}>
                Join Discord
              </Button>
              <Button variant="secondary" size="lg">
                View Rules
              </Button>
            </div>

            <motion.div
              className="mt-8 flex justify-center space-x-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Online Now</div>
                <div className="text-sm text-gray-400">Ready to Play</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7 Support</div>
                <div className="text-sm text-gray-400">Always Here to Help</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">Regular Events</div>
                <div className="text-sm text-gray-400">Never Gets Boring</div>
              </div>
            </motion.div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
