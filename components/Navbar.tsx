
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-end ${isScrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-sm py-4' : 'bg-transparent'}`}>
      <div>
        <a href="#" className="text-2xl font-medium tracking-tighter serif">Quinn Foster</a>
      </div>
      
      <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium text-soft">
        <a href="#services" className="editorial-link">Services</a>
        <a href="#rack" className="editorial-link">The Rack</a>
        <a href="#studio" className="editorial-link">Studio</a>
        <a href="#community" className="editorial-link">Community</a>
        <a href="#contact" className="editorial-link">Inquire</a>
      </div>
      
      <div className="md:hidden">
        <span className="text-[10px] uppercase tracking-widest">Menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
