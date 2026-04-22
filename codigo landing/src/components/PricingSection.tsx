import React from 'react';
import { Lock, Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { PriceDisplay } from './PriceDisplay';
export function PricingSection() {
  return (
    <section id="cart" className="py-24 bg-white pt-[30px] pb-[30px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Cerrá más proyectos desde hoy
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Un solo cliente bien cerrado ya paga este kit varias veces.
          </p>

          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 relative">
            {/* Discount Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg transform -rotate-2">
              67% OFF
            </div>

            <div className="mb-8">
              <div className="text-slate-400 text-xl font-medium mb-2">
                <PriceDisplay amountArs={65000} crossedOut />
              </div>
              <div className="text-6xl font-extrabold text-slate-900 tracking-tight">
                <PriceDisplay amountArs={18000} />
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              className="block w-full py-5 px-8 bg-amber-400 hover:bg-amber-500 text-slate-900 text-xl font-bold rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all mb-8">
              
              👉 Quiero el Kit ahora
            </motion.a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-500 font-medium border-t border-slate-100 pt-8">
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-5 h-5 text-slate-400" />
                <span>Pago seguro</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Download className="w-5 h-5 text-slate-400" />
                <span>Acceso inmediato</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-5 h-5 text-slate-400" />
                <span>Descarga digital</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}