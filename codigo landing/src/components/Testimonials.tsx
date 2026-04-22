import React, { memo } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
const testimonials = [
{
  quote:
  'Mandé mi primera propuesta con la plantilla y el cliente me dijo que era la más profesional que había recibido. Cerré el proyecto ese mismo día.',
  name: 'Valentina R.',
  role: 'Diseñadora gráfica',
  location: 'CABA',
  initials: 'VR',
  color: 'bg-purple-100 text-purple-700'
},
{
  quote:
  'Antes cobraba de memoria y siempre quedaba barato. Con la calculadora de precios entendí lo que realmente vale cada trabajo y lo hago en 1 min.',
  name: 'Mateo G.',
  role: 'Fotógrafo freelance',
  location: 'Rosario',
  initials: 'MG',
  color: 'bg-blue-100 text-blue-700'
},
{
  quote:
  'El contrato me salvó de una situación horrible con un cliente que pedía cambios infinitos. Ahora trabajo con límites claros desde el día 1.',
  name: 'Luciana M.',
  role: 'Videógrafa',
  location: 'Córdoba',
  initials: 'LM',
  color: 'bg-emerald-100 text-emerald-700'
}];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 pt-[30px] pb-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Lo que dicen quienes ya lo usan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
            
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
              <Star
                key={i}
                className="w-5 h-5 text-amber-400 fill-amber-400" />

              )}
              </div>

              <blockquote className="text-slate-700 text-lg mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}