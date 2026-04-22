import React from 'react';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
const painPoints = [
{
  title: 'Mandás el precio y el cliente desaparece.',
  quote:
  '"¿Le habrá parecido caro? ¿Lo habré asustado? No sé ni si mandarle un mensaje..."'
},
{
  title: 'Trabajás de palabra y terminás haciendo MUCHOS cambios.',
  quote:
  '"Ya van seis revisiones y no sé cómo decirle que no sin que se enoje y me deje mala reseña."'
},
{
  title:
  'Cobrás menos de lo que vale porque no sabés bien cómo justificarlo.',
  quote: '"Es que si le digo ese número se va a ir con otro."'
},
{
  title: 'Te presentás sin documentos y el cliente no te toma en serio.',
  quote:
  '"Me comparó con una agencia y sentí que perdí antes de que pueda ver como trabajo."'
}];

export function SalesLetter() {
  return (
    <section className="py-20 bg-white pt-[9px] pb-[9px] space-y-[32px]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            ¿Te suena alguna de estas situaciones?
          </h2>

          <div className="space-y-8 mb-16">
            {painPoints.map((point, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="flex gap-4 items-start">
              
                <div className="mt-1 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800 mb-2">
                    {point.title}
                  </p>
                  <p className="text-slate-500 italic border-l-2 border-slate-200 pl-4 py-1 font-[Inter,_sans-serif]">
                    {point.quote}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6">
              Y no es que seas malo en lo que hacés.{' '}
              <span className="font-bold text-slate-900">
                Lo que pasa es que nadie te enseñó a venderte.
              </span>
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Sabés hacer tu trabajo. Lo único que falta es un sistema, una
              forma de presentarte que genere confianza antes de que el cliente
              vea el precio.
            </p>
            <p className="text-xl font-bold text-amber-600">
              Eso es exactamente lo que hace el Kit Propuesta Pro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}