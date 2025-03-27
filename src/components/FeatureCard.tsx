
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  color,
  delay = 0,
  imageSrc
}) => {
  return (
    <div 
      className="retro-card group h-full"
      style={{animationDelay: `${delay}s`}}
    >
      <div className="relative h-full flex flex-col">
        {/* Card header with color */}
        <div 
          className={`p-6 flex items-center ${color} rounded-t-md`}
        >
          <div className="mr-3 text-black">
            {icon}
          </div>
          <h3 className="font-mono font-bold text-xl tracking-wide text-black">
            {title}
          </h3>
        </div>
        
        {/* Card content */}
        <div className="p-6 flex-grow">
          {imageSrc && (
            <div className="mb-4 overflow-hidden rounded-sm">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-48 object-cover object-center sepia-filter transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}
          
          <p className="text-foreground/80 mb-6">
            {description}
          </p>
          
          <div className="mt-auto">
            <a 
              href="#" 
              className="inline-flex items-center font-mono text-sm text-primary hover:text-vintage-gold transition-colors duration-300"
            >
              READ MORE
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
