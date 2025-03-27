
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Battery, Gauge, Clock, Zap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  // Car specifications data
  const carSpecs = [
    {
      title: "Battery Range",
      value: "310 miles",
      icon: <Battery className="h-6 w-6 text-neon-blue" />,
      color: "bg-neon-blue/10"
    },
    {
      title: "Top Speed",
      value: "155 mph",
      icon: <Gauge className="h-6 w-6 text-neon-pink" />,
      color: "bg-neon-pink/10"
    },
    {
      title: "0-60 mph",
      value: "3.9 sec",
      icon: <Clock className="h-6 w-6 text-neon-yellow" />,
      color: "bg-neon-yellow/10"
    },
    {
      title: "Max Power",
      value: "480 HP",
      icon: <Zap className="h-6 w-6 text-neon-purple" />,
      color: "bg-neon-purple/10"
    }
  ];

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
          
          {/* Car Specs Carousel */}
          <div className="mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
            >
              <CarouselContent>
                {carSpecs.map((spec, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className={`${spec.color} rounded-md p-4 h-full flex flex-col items-center justify-center text-center border border-border/30 backdrop-blur-sm vintage-box`}>
                      <div className="mb-2">{spec.icon}</div>
                      <h3 className="text-sm font-mono text-foreground/80 mb-1">{spec.title}</h3>
                      <p className="text-xl font-mono font-bold">{spec.value}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static mr-2 transform-none" />
                <CarouselNext className="static ml-2 transform-none" />
              </div>
            </Carousel>
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
