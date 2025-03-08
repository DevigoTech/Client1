import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              AANVI ENTERPRISE
            </h2>
            <p className="text-gray-400 mb-6">
              Delivering premium metal pipe solutions for industrial
              applications worldwide since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Products",
                "Manufacturing Process",
                "Contact Us",
              ].map((text, index) => (
                <li key={index}>
                  <a
                    href={`#${text.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" /> {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-gray-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  8, Pushp Industrial Estate, <br />
                  Gatrad-Bakrol Road, Bakrol Bujrang, Daskroi, <br />
                  Ahmedabad, Gujarat, 382430
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+91 99799 62633</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">kameshwarind@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">GST No: 24BJFPP1092N1ZW</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 AANVI ENTERPRISE. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            Designed with <span className="text-red-500">♥</span> for quality
            manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
