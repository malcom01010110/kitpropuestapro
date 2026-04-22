import React, { memo } from 'react';
import { FileText, FileSignature, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
const items = [
{
  id: 1,
  title: 'Plantilla de propuesta profesional',
  description:
  'Canva editable de 7 páginas. Incluye: portada, sobre mí, alcance del proyecto, entregables, precio y próximos pasos. Lista para personalizar con tus datos y enviar en el día.',
  icon: FileText,
  color: 'bg-blue-100 text-blue-600',
  image: "/mockup1.jpg"

},
{
  id: 2,
  title: 'Contrato de servicios simplificado',
  description:
  'Google Docs editable. Cláusulas claras sobre pagos, revisiones, derechos y cancelación. En lenguaje simple, sin términos legales complicados. Sin abogado. Sin confusión.',
  icon: FileSignature,
  image: "/mocklup2.jpg",

  color: 'bg-emerald-100 text-emerald-600'
},
{
  id: 3,
  title: 'Calculadora de precios',
  description:
  'Google Sheets + fórmulas. Ingresás tus horas, costos y margen de ganancia. Te devuelve un precio sugerido con su justificación. Nunca más cobrás de memoria.',
  icon: Calculator,
  color: 'bg-amber-100 text-amber-600',
  image: "/mockup1.jpg"

}];

export function WhatYouGet() {
  return (
    <section className="py-20 bg-slate-50 pt-[20px] pb-[20px] space-y-[64px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Lo que recibís cuando comprás el Kit
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {items.map((item, index) => {
            const isEven = index % 2 !== 0;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 30
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
                }}
                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-xl">
                      {item.id}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed pl-16">
                    {item.description}
                  </p>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  {item.image ?
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover" />
                    
                    </div> :

                  <div className="relative aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden flex items-center justify-center group hover:shadow-xl transition-shadow">
                      <div
                      className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center relative z-10 transform group-hover:scale-110 transition-transform duration-500`}>
                      
                        <Icon className="w-12 h-12" />
                      </div>
                      {/* Decorative elements to look like a document/app */}
                      <div className="absolute top-4 left-4 right-4 h-6 bg-slate-100 rounded flex items-center px-2 gap-1.5 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 h-24 bg-slate-100 rounded opacity-50"></div>
                    </div>
                  }
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}