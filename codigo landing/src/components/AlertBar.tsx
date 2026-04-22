import React, { useState } from 'react';
import { Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function AlertBar() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: -50,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          y: -50,
          opacity: 0
        }}
        className="sticky top-0 z-50 w-full bg-slate-900 text-white py-3 px-4 shadow-md">
        
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center pr-8 md:pr-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }}>
              
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
            </motion.div>
            <span>
              <span className="font-bold text-amber-400">
                Oferta por tiempo limitado
              </span>{' '}
              | Accedé hoy y empezá a cerrar proyectos como un profesional
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            aria-label="Cerrar alerta">
            
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>);

}