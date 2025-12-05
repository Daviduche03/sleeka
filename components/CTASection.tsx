import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-geko-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-geko-accent rounded-full blur-[120px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-geko-accent rounded-full blur-[120px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your Creative Engine
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Whether you need an on-demand creative team or a dedicated creative talent, Sleeka helps you scale smarter and faster. Let's discuss your creative goals and find the best way to support your growth.
            </p>
            <button className="px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 duration-300 mx-auto" style={{ backgroundColor: '#47ff01', color: '#000' }}>
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
