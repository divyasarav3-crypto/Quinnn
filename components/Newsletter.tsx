
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2EFE9] px-8 md:px-16 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl serif mb-4">The Personal Note</h2>
        <p className="text-soft font-light mb-10 leading-relaxed italic">
          Occasional thoughts on the philosophy of dressing, curation, and the art of slowing down. Low frequency, high substance.
        </p>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow bg-transparent border-b border-neutral-400 py-3 px-2 outline-none text-sm placeholder:text-neutral-400 focus:border-neutral-800 transition-colors"
          />
          <button className="text-[10px] uppercase tracking-[0.3em] font-medium py-3 px-8 hover:text-neutral-500 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
