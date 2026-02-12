
import React from 'react';

const FashionFriday: React.FC = () => {
  return (
    <section id="community" className="py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <h2 className="text-4xl md:text-5xl serif mb-6">Fashion Friday</h2>
          <p className="text-soft leading-relaxed font-light mb-8">
            An intimate, in-person gathering for those who appreciate the intersection of style and conversation. Monthly meetups focused on seasonal transitions, textile care, and creative confidence.
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex justify-between border-b border-neutral-200 py-4">
              <span className="text-xs uppercase tracking-widest">Next Gathering</span>
              <span className="text-xs italic font-medium">Sept 22 • The Conservatory</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 py-4">
              <span className="text-xs uppercase tracking-widest">Theme</span>
              <span className="text-xs italic font-medium">Textural Landscapes</span>
            </div>
          </div>
          <button className="px-8 py-4 bg-[#D9D2C5] text-neutral-800 text-[10px] uppercase tracking-widest hover:bg-neutral-300 transition-colors">
            Request an Invitation
          </button>
        </div>
        
        <div className="md:col-span-7 flex flex-row gap-4 h-[500px]">
          <div className="flex-1 bg-gray-200 h-full overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1470&auto=format&fit=crop" 
              alt="Community gathering" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 h-full">
            <div className="flex-1 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1332&auto=format&fit=crop" 
                alt="Intimate conversation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop" 
                alt="Lifestyle details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionFriday;
