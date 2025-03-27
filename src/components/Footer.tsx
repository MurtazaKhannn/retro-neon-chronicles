
import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#' },
        { name: 'Our Team', url: '#' },
        { name: 'Careers', url: '#' },
        { name: 'Contact', url: '#' },
        { name: 'Terms of Use', url: '#' },
        { name: 'Privacy Policy', url: '#' }
      ]
    },
    {
      title: 'Our Products',
      links: [
        { name: 'Electric Cars', url: '#' },
        { name: 'Hybrid Models', url: '#' },
        { name: 'Special Offers', url: '#' },
        { name: 'New Arrivals', url: '#' },
        { name: 'Popular Models', url: '#' },
        { name: 'Financing', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Community', url: '#' },
        { name: 'Events', url: '#' },
        { name: 'Dealers', url: '#' },
        { name: 'Press Kit', url: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Facebook', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'YouTube', url: '#' },
        { name: 'Discord', url: '#' }
      ]
    }
  ];

  return (
    <footer className="relative bg-muted/70 pt-16 pb-8 border-t border-border">
      <div className="noise-overlay"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="font-mono text-sm font-bold tracking-wider text-primary mb-4 uppercase">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-xl font-bold font-mono tracking-wide text-primary">
                RETRO<span className="text-neon-pink">NEON</span>
              </a>
              <p className="text-sm text-foreground/60 mt-1">
                Where vintage meets innovation
              </p>
            </div>
            
            <div className="text-sm text-foreground/60">
              © {new Date().getFullYear()} RetroNeon Chronicles. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
