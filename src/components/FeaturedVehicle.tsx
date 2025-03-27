import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

interface PricingTier {
  title: string;
  price: string;
  period: string;
  color: string;
  features: string[];
}

const FeaturedVehicle = () => {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      title: "36 month contract",
      price: "£378",
      period: "A MONTH",
      color: "bg-neon-pink text-white",
      features: ["Inclusive maintenance", "Free delivery", "Road tax included"],
    },
    {
      title: "6 months upfront",
      price: "£315",
      period: "+ VAT",
      color: "bg-neon-blue text-white",
      features: ["10% discount", "Premium support", "Flexible upgrades"],
    },
    {
      title: "9000 miles a year",
      price: "BUSINESS LEASE",
      period: "Available now",
      color: "bg-neon-purple text-white",
      features: ["Tax deductible", "Corporate benefits", "Fleet management"],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-lg mb-10">
          <span className="inline-block font-mono text-sm tracking-wider text-neon-yellow mb-2">
            FEATURED MODEL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight tracking-tighter animate-fade-in">
            <span className="block text-neon-yellow">BYD SEALION 7</span>
            <span className="block text-foreground/80 text-xl md:text-2xl mt-1">
              330KW COMFORT 87KWH SDR AUTOMATIC
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Vehicle Image Column */}
          <div className="md:col-span-2 relative">
            <div className="vintage-box p-0 overflow-hidden">
              <div className="absolute top-3 left-3 flex items-center">
                <Star className="fill-neon-yellow text-neon-yellow" size={14} />
                <Star className="fill-neon-yellow text-neon-yellow" size={14} />
                <Star className="fill-neon-yellow text-neon-yellow" size={14} />
                <Star className="fill-neon-yellow text-neon-yellow" size={14} />
                <Star className="fill-neon-yellow text-neon-yellow" size={14} />
                <span className="ml-1 text-xs text-white font-medium">5.0</span>
              </div>
            </div>
          </div>

          {/* Pricing Tiers Column */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="relative transition-all duration-500 transform"
                style={{
                  transform:
                    hoveredTier === index ? "translateY(-10px)" : "none",
                  zIndex: hoveredTier === index ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredTier(index)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className={`rounded-t-md p-4 ${tier.color}`}>
                  <h3 className="font-mono text-sm font-medium uppercase tracking-wider">
                    {tier.title}
                  </h3>
                </div>
                <div className="p-5 bg-card rounded-b-md border border-t-0 border-border transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-mono font-bold text-primary">
                        {tier.price}
                      </span>
                      <span className="ml-1 text-sm text-foreground/60">
                        {tier.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <ArrowRight
                          size={14}
                          className="mr-2 mt-1 text-primary"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 px-4 rounded font-mono text-sm tracking-wider transition-colors duration-300 ${
                      index === 0
                        ? "bg-neon-pink text-white hover:bg-neon-pink/90"
                        : index === 1
                        ? "bg-neon-blue text-white hover:bg-neon-blue/90"
                        : "bg-neon-purple text-white hover:bg-neon-purple/90"
                    }`}
                  >
                    SELECT PLAN
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicle;
