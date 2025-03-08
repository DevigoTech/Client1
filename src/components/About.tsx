import React from 'react';
import useIntersectionAnimation from '../hooks/useIntersectionAnimation';
import { Shield, Clock, Award, Truck } from 'lucide-react';

const About = () => {
  useIntersectionAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story & Services</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-16" data-animate>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Founded in 2005, AANVI ENTERPRISE has established itself as a leading manufacturer of high-quality 
              metal pipes for various industrial applications. Our mission is to provide durable, precision-engineered 
              metal pipe solutions that meet the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 staggered-fade">
            {[
              { icon: Shield, title: "Quality Assurance", desc: "Rigorous quality control processes ensure our pipes meet international standards." },
              { icon: Clock, title: "Custom Manufacturing", desc: "Tailored pipe solutions designed to your exact specifications." },
              { icon: Award, title: "Certification Services", desc: "Comprehensive certification packages for material testing and compliance." },
              { icon: Truck, title: "Logistics Solutions", desc: "End-to-end logistics management ensuring safe and timely delivery." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 group" data-animate>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
