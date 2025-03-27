
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToContent = () => {
    const contentSection = document.getElementById('features');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollY = window.scrollY;
        scrollRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with noise effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted z-0">
        <div className="noise-overlay"></div>
      </div>
      
      {/* Decorative elements */}
      <div 
        ref={scrollRef}
        className="absolute inset-0 z-0 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-purple/30 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-neon-blue/20 blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-neon-pink/20 blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-muted/50 backdrop-blur-sm border border-border rounded-full">
            <p className="text-sm font-mono tracking-wider text-primary animate-fade-in">
              ESTABLISHED 1920 • REIMAGINED 2024
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6 tracking-tighter animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="block text-vintage-gold">RETRO-NEON</span>
            <span className="block text-foreground mt-2">CHRONICLES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Where vintage elegance meets modern flair. Discover the perfect blend of nostalgia and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button className="primary-btn">
              Explore Collection
            </button>
            <button className="secondary-btn">
              Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up" style={{animationDelay: '1s'}}>
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-mono mb-2">Discover</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
