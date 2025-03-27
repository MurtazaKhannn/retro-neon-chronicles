
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold font-mono tracking-wide text-primary">
              RETRO<span className="text-neon-pink">NEON</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Showcase', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-mono tracking-wide text-foreground/90 hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="primary-btn">
              Subscribe
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="section-container py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Features', 'Showcase', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-mono tracking-wide text-foreground/90 hover:text-primary transition-colors duration-200 p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="primary-btn self-start mt-2">
                Subscribe
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
