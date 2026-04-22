import React from 'react';
import { AlertBar } from './components/AlertBar';
import { HeroSection } from './components/HeroSection';
import { SalesLetter } from './components/SalesLetter';
import { WhatYouGet } from './components/WhatYouGet';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-200 selection:text-slate-900">
      <AlertBar />
      <main>
        <HeroSection />
        <SalesLetter />
        <WhatYouGet />
        <BonusSection />
        <PricingSection />
        <Testimonials />
      </main>
      <Footer />
    </div>);

}