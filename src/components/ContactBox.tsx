import React from 'react';
import useIntersectionAnimation from '../hooks/useIntersectionAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';
import Contact from './Contact';

const ContactBox = () => {
  useIntersectionAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate>
          <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-animate>
            <Contact/>
          </div>

          {/* Contact Information */}
          <div data-animate>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start group">
                <a href="https://maps.app.goo.gl/zkXXMwVj66MkyYYZ7" className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </a>
                <div>
                  <h4 className="font-medium text-xl mb-2">Manufacturing Facility</h4>
                  <p className="text-gray-300"> 8, Pushp Industrial Estate, <br />
                  Gatrad-Bakrol Road, Bakrol Bujrang, Daskroi, <br />
                  Ahmedabad, Gujarat, 382430</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-2">Sales Department</h4>
                  <p className="text-gray-300">+91 99799 62633</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mr-4 p-3 bg-white/10 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-2">Email</h4>
                  <p className="text-gray-300">kameshwarind@gmail.com</p>
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
  );
};

export default ContactBox;
