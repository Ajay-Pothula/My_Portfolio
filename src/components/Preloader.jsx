import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [stage, setStage] = useState('gathering');

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('mixing'), 1500),
      setTimeout(() => setStage('flash'), 3500),
      setTimeout(() => finishLoading(), 5000)
    ];
    return () => timers.forEach(clearTimeout);
  }, [finishLoading]);

  // Particle variations
  const particles = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {stage === 'gathering' && (
          <div className="relative w-64 h-64">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 800 - 400, 
                  y: Math.random() * 800 - 400,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: 0, 
                  y: 0,
                  opacity: 1,
                  scale: [0, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.03,
                  ease: "easeInOut"
                }}
                className={`absolute w-2.5 h-2.5 rounded-full ${i % 2 === 0 ? 'bg-primary-cyan' : 'bg-brown'} blur-[2px]`}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </div>
        )}

        {stage === 'mixing' && (
          <motion.div 
            className="relative"
            animate={{ 
              x: [0, -2, 2, -2, 2, 0],
              y: [0, 2, -2, 2, -2, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            {/* Swirling Vortex */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-48 h-48 rounded-full border-t border-primary-cyan shadow-[0_0_40px_rgba(0,240,255,0.4)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-48 h-48 rounded-full border-b border-brown shadow-[0_0_30px_rgba(180,140,90,0.3)]"
            />
            
            {/* Pulsing Core */}
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-6 h-6 bg-white rounded-full blur-md"
            />
          </motion.div>
        )}

        {stage === 'flash' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-[110] bg-dark-bg px-4"
          >
            {/* Soft Cyan Energy Aura */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ 
                scale: [0, 80, 150],
                opacity: [0.8, 0.4, 0] 
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-8 h-8 bg-primary-cyan/30 rounded-full blur-[80px]"
            />
            
            {/* Elegant Welcome Text - "WELCOME TO MY PORTFOLIO" - Word by Word for performance */}
            <div className="relative z-20 flex flex-col items-center max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center gap-x-4 md:gap-x-6"
              >
                {"WELCOME TO MY PORTFOLIO".split(" ").map((word, wordIdx) => (
                  <motion.span 
                    key={wordIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.3 + (wordIdx * 0.15),
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] // Super smooth easeOut
                    }}
                    className="text-3xl md:text-5xl font-light text-primary-cyan/90 tracking-[0.1em] uppercase italic inline-block"
                    style={{ 
                      textShadow: '0 0 30px rgba(0,240,255,0.3)',
                      willChange: 'transform, opacity'
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Subtle line */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '40%', opacity: 0.3 }}
                transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
                className="h-[1px] bg-primary-cyan mt-10 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Particles/Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
