
import React from 'react';

const Brands = () => {
  // Mock brand logos - in a real app, you'd use actual brand SVGs or images
  const brands = [
    { name: 'Audi', symbol: 'A' },
    { name: 'BMW', symbol: 'B' },
    { name: 'Mercedes', symbol: 'M' },
    { name: 'Tesla', symbol: 'T' },
    { name: 'Volkswagen', symbol: 'V' },
    { name: 'Toyota', symbol: 'T' },
    { name: 'Honda', symbol: 'H' },
    { name: 'Ford', symbol: 'F' },
    { name: 'Chevrolet', symbol: 'C' },
    { name: 'Nissan', symbol: 'N' },
    { name: 'Hyundai', symbol: 'H' },
    { name: 'Kia', symbol: 'K' },
    { name: 'Mazda', symbol: 'M' },
    { name: 'Subaru', symbol: 'S' },
    { name: 'Lexus', symbol: 'L' },
  ];

  return (
    <section className="py-16 bg-muted/40">
      <div className="section-container">
        <h2 className="newspaper-heading text-2xl mb-8 text-center">
          BROWSE BY BRAND
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <a 
              key={index}
              href="#"
              className="group flex flex-col items-center justify-center vintage-box py-4 px-2 h-24 transition-all duration-300 hover:border-primary"
            >
              <div className="w-12 h-12 flex items-center justify-center border-2 border-foreground/30 rounded-full group-hover:border-primary transition-colors duration-300">
                <span className="font-mono font-bold text-lg">{brand.symbol}</span>
              </div>
              <span className="mt-2 text-sm font-mono tracking-wide group-hover:text-primary transition-colors duration-300">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="secondary-btn">
            VIEW ALL BRANDS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
