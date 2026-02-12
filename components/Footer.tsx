
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-24 px-8 md:px-16 bg-[#F9F8F6] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <h2 className="text-xl serif mb-4">Quinn Foster</h2>
          <p className="text-xs text-soft leading-relaxed font-light mb-6">
            Styling and curation exclusively through Myntra. Building confidence through intentional choices.
          </p>
          <div className="flex gap-6 text-neutral-400">
            <a href="#" className="hover:text-neutral-800 transition-colors text-[10px] uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-neutral-800 transition-colors text-[10px] uppercase tracking-widest">Pinterest</a>
            <a href="#" className="hover:text-neutral-800 transition-colors text-[10px] uppercase tracking-widest">LinkedIn</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Practice</span>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">Services</a>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">The Rack</a>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">Curation Team</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Contact</span>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">Inquiries</a>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">Press</a>
            <a href="#" className="text-xs text-soft hover:text-neutral-800 font-light">Privacy</a>
          </div>
        </div>
        
        <div className="md:text-right flex flex-col items-start md:items-end">
          <p className="text-sm italic serif text-neutral-500 mb-2">"Dress for the life you are currently living."</p>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">© 2024 Quinn Foster Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
