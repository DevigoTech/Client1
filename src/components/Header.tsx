import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#products" className="text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-primary-600"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-primary-600"><Instagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-primary-600"><Twitter size={20} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;