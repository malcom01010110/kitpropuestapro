import React from 'react';
import { Star, CheckCircle2, Download } from 'lucide-react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
<motion.div
  initial={{
    opacity: 0,
    x: 20
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    duration: 0.6,
    delay: 0.2
  }}
  className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
>
  <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl blur opacity-20"></div>

    <div className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-100 aspect-[4/3]">
      <img
        src="/images/hero.jpeg"
        alt="Mockup propuesta"
        className="w-full h-full object-cover"
      />
    </div>

    <motion.div
      initial={{
        y: 20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: 0.8
      }}
      className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium">
          Propuesta enviada
        </p>
        <p className="text-sm font-bold text-slate-900">
          Proyecto Cerrado
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>

          {/* Image/Mockup Placeholder */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none">
            
            <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
  
  <div className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-100 aspect-[4/3]">
    
    <img
      src="/images/hero.jpeg"
      alt="Mockup propuesta"
      className="w-full h-full object-cover"
    />

  </div>
</div>
                {/* Mockup Body */}
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-8 bg-slate-200 rounded-lg"></div>
                  <div className="w-full h-4 bg-slate-200 rounded mt-4"></div>
                  <div className="w-5/6 h-4 bg-slate-200 rounded"></div>
                  <div className="w-4/6 h-4 bg-slate-200 rounded"></div>

                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="h-24 bg-amber-100 rounded-lg border border-amber-200"></div>
                    <div className="h-24 bg-slate-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
              {/* Floating Badge */}
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  delay: 0.8
                }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Propuesta enviada
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Proyecto Cerrado
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
