import React from 'react';
import { Gift, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PriceDisplay } from './PriceDisplay';
export function BonusSection() {
  return (
    <section className="py-20 bg-[#fefce8] relative overflow-hidden pt-[20px] pb-[20px]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Y esto es solo el Kit. También incluye estos bonos:
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {/* Bonus 1 */}
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
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-amber-400 flex flex-col md:flex-row gap-6 items-start">
            
            <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                BONO 1 — Guía anti clientes difíciles
              </h3>
              <p className="text-slate-600 mb-4">
                Aprendé a identificar las señales de alerta antes de aceptar un
                proyecto y cómo manejar situaciones incómodas sin perder la
                cabeza ni el cliente.
              </p>
              <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg font-medium">
                <span className="text-slate-500">Valor:</span>
                <PriceDisplay
                  amountArs={10000}
                  crossedOut
                  className="text-slate-400" />
                
                <span className="text-emerald-600 font-bold ml-1">
                  — GRATIS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bonus 2 */}
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
              delay: 0.1
            }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-amber-400 flex flex-col md:flex-row gap-6 items-start">
            
            <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                BONO 2 — Cómo enviar tu propuesta y hacer seguimiento (sin
                quedar pesado)
              </h3>
              <p className="text-slate-600 mb-4">
                La propuesta perfecta no sirve de nada si no sabés cuándo ni
                cómo dar seguimiento. Esta guía te da los mensajes exactos para
                hacer follow-up de forma profesional y natural.
              </p>
              <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg font-medium">
                <span className="text-slate-500">Valor:</span>
                <PriceDisplay
                  amountArs={10000}
                  crossedOut
                  className="text-slate-400" />
                
                <span className="text-emerald-600 font-bold ml-1">
                  — GRATIS
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Total Value Box */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

          <h3 className="text-2xl font-bold mb-6 text-center border-b border-slate-700 pb-6">
            Resumen de lo que te llevás hoy:
          </h3>

          <div className="space-y-4 mb-8 max-w-lg mx-auto">
            <div className="flex justify-between items-center text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Kit Propuesta Pro</span>
              </div>
              <PriceDisplay amountArs={35000} crossedOut />
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Bono 1: Guía anti clientes difíciles</span>
              </div>
              <PriceDisplay amountArs={10000} crossedOut />
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Bono 2: Seguimiento sin quedar pesado</span>
              </div>
              <PriceDisplay amountArs={10000} crossedOut />
            </div>
            <div className="flex justify-between items-center text-slate-400 pt-4 border-t border-slate-800 font-medium">
              <span>Valor total:</span>
              <PriceDisplay amountArs={55000} crossedOut />
            </div>
          </div>

          <div className="text-center bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <p className="text-slate-300 text-lg mb-2">HOY LO LLEVÁS POR:</p>
            <div className="text-4xl md:text-5xl font-extrabold text-amber-400">
              <PriceDisplay amountArs={18000} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}