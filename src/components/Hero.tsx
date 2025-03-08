import React from 'react';
import useIntersectionAnimation from '../hooks/useIntersectionAnimation';

const Hero = () => {
  useIntersectionAnimation();

  return (
    <section className="relative h-[600px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        alt="Metal Pipe Manufacturing Facility" 
        className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms] hover:scale-100"
        data-animate
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4 staggered-fade" data-animate>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Metal Pipe <span className="text-primary-400">Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
            Delivering quality steel and metal pipes for industrial applications since 2005
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#products" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-glow" data-animate>
              Explore Products
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-full transition-all duration-300" data-animate>
              Request a Quote
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
