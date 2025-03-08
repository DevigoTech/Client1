import React from 'react';
import useIntersectionAnimation from '../hooks/useIntersectionAnimation';

const processSteps = [
  {
    step: "1",
    title: "Raw Material Selection",
    description: "We source only the highest quality raw materials from trusted suppliers. Each batch undergoes rigorous testing to ensure it meets our strict quality standards before entering the production process.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    step: "2",
    title: "Precision Manufacturing",
    description: "Using state-of-the-art equipment and advanced techniques, our skilled technicians transform raw materials into precision-engineered pipes. Every step of the manufacturing process is carefully monitored to ensure consistent quality.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    step: "3",
    title: "Quality Testing",
    description: "Every pipe undergoes comprehensive testing, including hydrostatic pressure tests, ultrasonic examination, and dimensional verification. Only products that pass all quality checks are approved for delivery to our customers.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
];

const Process = () => {
  useIntersectionAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate>
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Manufacturing Excellence</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`} data-animate>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg -z-10"></div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-lg shadow-md relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-lg -z-10"></div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">{step.step}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
