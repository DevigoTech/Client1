import React, { useEffect, useRef } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Truck,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Process from "./components/Process";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Process />
      <ContactBox/>
      <Footer/>
    </div>
  );
}

export default App;
