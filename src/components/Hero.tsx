'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative min-h-screen w-full bg-[#1A1A1A] flex items-center overflow-hidden pt-20">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2C363F] to-[#1A1A1A] opacity-90 z-0" />
      
      {/* Animated Gold Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] z-0" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span 
              variants={itemVariants}
              className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-6"
            >
              VIP Mobile Hair Artist
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6"
            >
              A Salon-Level <br />
              <span className="italic font-light text-[#C5A880]">Experience.</span>
              <br />
              In Your Home.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl max-w-md font-light leading-relaxed mb-10"
            >
              Award-winning colour specialist and master stylist delivering bespoke, luxury hair services directly to your door in Cardiff and Wales.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button className="bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C5A880] rounded-none px-8 py-7 text-sm font-semibold tracking-wider uppercase flex items-center gap-2 group">
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 py-7 text-sm font-semibold tracking-wider uppercase bg-transparent">
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block h-[700px] w-full"
          >
            <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-[#2C363F] overflow-hidden">
              {/* Fallback image using Unsplash since we don't have local assets yet */}
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2938&auto=format&fit=crop" 
                alt="Luxury Hair Styling" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A1A1A] font-bold text-xl">
                10+
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Years of</p>
                <p className="font-heading text-xl text-[#1A1A1A]">Excellence</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
