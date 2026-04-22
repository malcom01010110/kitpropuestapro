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
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">
            
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-500 fill-amber-500" />

                )}
              </div>
              <span className="text-sm font-medium text-slate-600">
                Más de 200 diseñadores, fotógrafos y videógrafos ya lo usan
              </span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <Download className="w-3 h-3" /> Descarga inmediata
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Dejá de perder proyectos por mandar un precio por WhatsApp
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              El Kit Propuesta Pro tiene todo lo que necesitás para presentarte
              con seriedad, justificar tu precio y cerrar sin quedar en visto,
              aunque nunca hayas mandado una propuesta formal en tu vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#cart"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-slate-900 bg-amber-400 hover:bg-amber-500 shadow-lg shadow-amber-500/30 transition-all w-full sm:w-auto">
                
                👉 Quiero el Kit ahora
              </motion.a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Pago único</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Acceso de por vida</span>
              </div>
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
              <img
  src="/images/hero.jpg"
  alt="Mockup propuesta"
  className="rounded-xl w-full h-full object-cover"
/>
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
