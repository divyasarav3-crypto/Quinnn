
import React from 'react';

const services = [
  {
    title: "Personal Consultations",
    desc: "A deep dive into your existing wardrobe to identify what serves you and what hinders your clarity.",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1287&auto=format&fit=crop"
  },
  {
    title: "Intentional Curation",
    desc: "Thoughtful selection of pieces exclusively through Myntra, tailored to your lifestyle, proportions, and professional goals.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-8 md:px-16 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-neutral-200 pb-12">
          <h2 className="text-4xl md:text-5xl serif mb-6 md:mb-0">Styling Services</h2>
          <p className="max-w-md text-soft leading-relaxed font-light italic">
            "My goal isn't to change you, but to clarify the version of you that already exists."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="aspect-[4/5] overflow-hidden mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-2xl mb-4 serif tracking-tight">{service.title}</h3>
              <p className="text-soft leading-relaxed font-light mb-6">
                {service.desc}
              </p>
              <a href="#" className="text-[10px] uppercase tracking-widest editorial-link pb-1">Inquire for details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
