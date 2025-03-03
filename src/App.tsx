import React, { useEffect, useRef } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Shield, Clock, Award, Truck, Menu, X, ChevronRight } from 'lucide-react';
import Contact from './components/Contact';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-soft sticky top-0 z-10 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">AANVI ENTERPRISE</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
            <a href="#products" className="text-gray-700 hover:text-primary-600 transition-colors">Products</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 transition-colors">Process</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
          </nav>
          
          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110">
              <Twitter size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#process" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Manufacturing Facility Photo */}
      <section className="relative h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Metal Pipe Manufacturing Facility" 
          className="w-full h-full object-cover scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 staggered-fade">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Metal Pipe <span className="text-primary-400">Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
              Delivering quality steel and metal pipes for industrial applications since 2005
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#products" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-full transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Us & Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-animate>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story & Services</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-16" data-animate>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in 2005, AANVI ENTERPRISE has established itself as a leading manufacturer of high-quality metal pipes for various industrial applications. 
                What began as a small manufacturing unit has grown into a state-of-the-art facility equipped with advanced machinery and staffed by skilled professionals.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is to provide durable, precision-engineered metal pipe solutions that meet the highest industry standards while ensuring timely delivery and exceptional customer service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 staggered-fade">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Rigorous quality control processes ensure our pipes meet international standards for durability, pressure resistance, and structural integrity.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Custom Manufacturing</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Tailored pipe solutions designed to your exact specifications, including custom diameters, wall thickness, and material compositions.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Certification Services</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Comprehensive certification packages including material testing reports, dimensional verification, and compliance documentation.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Truck size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Logistics Solutions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">End-to-end logistics management ensuring your pipes are delivered safely and on time to any location worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-radial from-gray-50 to-white" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Premium Metal Pipe Solutions</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft group hover:shadow-lg transition-all duration-300" data-animate>
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Stainless Steel Pipes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Stainless Steel Pipes</h3>
                <p className="text-gray-600 mb-5">High-quality stainless steel pipes resistant to corrosion, ideal for chemical processing, food production, and pharmaceutical applications.</p>
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group">
                  Technical specs <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft group hover:shadow-lg transition-all duration-300" data-animate>
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Carbon Steel Pipes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Carbon Steel Pipes</h3>
                <p className="text-gray-600 mb-5">Durable carbon steel pipes designed for structural applications, oil and gas transportation, and general industrial use.</p>
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group">
                  Technical specs <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft group hover:shadow-lg transition-all duration-300" data-animate>
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Specialty Alloy Pipes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Specialty Alloy Pipes</h3>
                <p className="text-gray-600 mb-5">Advanced alloy pipes engineered for extreme conditions, including high-temperature environments and corrosive applications.</p>
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group">
                  Technical specs <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Manufacturing Excellence</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-animate>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Raw Material Selection" 
                  className="rounded-lg shadow-md relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-lg -z-10"></div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Raw Material Selection</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We source only the highest quality raw materials from trusted suppliers. Each batch undergoes rigorous testing to ensure it meets our strict quality standards before entering the production process.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-animate>
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Precision Manufacturing</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Using state-of-the-art equipment and advanced techniques, our skilled technicians transform raw materials into precision-engineered pipes. Every step of the manufacturing process is carefully monitored to ensure consistent quality.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Precision Manufacturing" 
                  className="rounded-lg shadow-md relative z-10"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-100 rounded-lg -z-10"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center" data-animate>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Quality Testing" 
                  className="rounded-lg shadow-md relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-lg -z-10"></div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Quality Testing</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every pipe undergoes comprehensive testing, including hydrostatic pressure tests, ultrasonic examination, and dimensional verification. Only products that pass all quality checks are approved for delivery to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Contact/>
            
            {/* Contact Information */}
            <div data-animate>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Manufacturing Facility</h4>
                    <p className="text-gray-300">123 Industrial Zone, Building A<br />Manufacturing City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Sales Department</h4>
                    <p className="text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Email</h4>
                    <p className="text-gray-300">sales@aanvienterprise.com</p>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium text-xl mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">AANVI ENTERPRISE</h2>
              <p className="text-gray-400 mb-6">Delivering premium metal pipe solutions for industrial applications worldwide since 2005.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" /> About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" /> Our Products
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" /> Manufacturing Process
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" /> Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Industrial Zone, Building A<br />Manufacturing City, State 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400">sales@aanvienterprise.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 AANVI ENTERPRISE. All Rights Reserved.</p>
            <p className="text-gray-500">Designed with <span className="text-red-500">♥</span> for quality manufacturing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;