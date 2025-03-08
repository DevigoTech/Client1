import React from 'react';
import useIntersectionAnimation from '../hooks/useIntersectionAnimation';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Stainless Steel Pipes",
    description: "High-quality stainless steel pipes resistant to corrosion, ideal for chemical processing, food production, and pharmaceutical applications."
  },
  {
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    title: "Carbon Steel Pipes",
    description: "Durable carbon steel pipes designed for structural applications, oil and gas transportation, and general industrial use."
  },
  {
    image: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    title: "Specialty Alloy Pipes",
    description: "Advanced alloy pipes engineered for extreme conditions, including high-temperature environments and corrosive applications."
  }
];

const Products = () => {
  useIntersectionAnimation();

  return (
    <section className="py-20 bg-gradient-radial from-gray-50 to-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate>
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Premium Metal Pipe Solutions</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-soft group hover:shadow-lg transition-all duration-300" data-animate>
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-5">{product.description}</p>
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group">
                  Technical specs <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;