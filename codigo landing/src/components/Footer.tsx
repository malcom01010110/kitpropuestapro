import React from 'react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © 2024 Kit Propuesta Pro · Todos los derechos reservados
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Términos y condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>);

}