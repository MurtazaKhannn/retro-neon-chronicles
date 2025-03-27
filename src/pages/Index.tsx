import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import FeaturedVehicle from "@/components/FeaturedVehicle";
import Brands from "@/components/Brands";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import { Film, Image, Star } from "lucide-react";

const Index = () => {
  // Feature card data
  const features = [
    {
      title: "LING's ELECTRIC DEALS",
      description:
        "Explore our premium selection of electric vehicles. From compact city cars to luxury SUVs, find your perfect electric companion with incredible monthly deals.",
      icon: <Film size={24} />,
      color: "bg-neon-yellow",
      delay: 0.1,
      imageSrc:
        "https://imgs.search.brave.com/C3Zld1lYw-7hQxPgzmj2elqvJl66b1bDX7Y4NbMveGc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzM3Lzk3/LzM2MF9GXzI3OTM3/OTczN19nQ1NSNFhp/SkpYOTUzc01MOWlC/dndKd3pwUnlBWVNC/NC5qcGc",
    },
    {
      title: "LING's IN STOCK",
      description:
        "Browse our wide range of immediately available vehicles. Skip the wait and drive away today with our extensive collection of in-stock models.",
      icon: <Image size={24} />,
      color: "bg-neon-blue",
      delay: 0.2,
      imageSrc:
        "https://imgs.search.brave.com/3nyQyR_YZlOpqTOz2IjqE-5oHcG2Jmr0JOTDIyZe24Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAwLzkxLzE5/LzM2MF9GXzEwMDkx/MTkxN19qOGZKQzZu/cUlIVW92ZFZoTzkz/eEt3RFU2WUk3dk50/VS5qcGc",
    },
    {
      title: "LING's SPECIAL OFFERS",
      description:
        "Take advantage of our limited-time special offers. Exclusive discounts, financing options, and packages designed to give you the best value possible.",
      icon: <Star size={24} />,
      color: "bg-neon-pink",
      delay: 0.3,
      imageSrc:
        "https://imgs.search.brave.com/eHtCiqSxLdQ1AJX2qBOylAHVL7bmtB4UFcUlF-FsXZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzA3Lzg5LzQ1/LzM2MF9GXzc4OTQ1/ODJfT1RTQ0VnUzE5/V0wxVjJQU1FVNE0w/NTV4RWFhelpTT28u/anBn",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />

      <main>
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="newspaper-heading text-2xl">
                FEATURED COLLECTIONS
              </h2>
              <p className="text-foreground/70">
                Discover our carefully curated selections, each designed to meet
                your specific needs and preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  delay={feature.delay}
                  imageSrc={feature.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Vehicle */}
        <FeaturedVehicle />

        {/* Brands Section */}
        <Brands />

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0"></div>
          <div className="section-container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block font-mono text-sm tracking-wider text-neon-pink mb-2">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl md:text-4xl font-mono font-bold leading-tight tracking-tighter mb-4">
                  <span className="block text-vintage-gold">SUBSCRIBE</span>
                  <span className="block text-foreground/80 mt-1">
                    TO OUR NEWSLETTER
                  </span>
                </h2>
                <p className="text-foreground/70 mb-6">
                  Stay updated with our latest models, exclusive deals, and
                  industry insights. Join our community of automotive
                  enthusiasts and be the first to know about special promotions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center mr-4">
                      <span className="text-neon-pink font-mono font-bold">
                        1
                      </span>
                    </div>
                    <p className="text-foreground/80">
                      Fill out the form with your details
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4">
                      <span className="text-neon-blue font-mono font-bold">
                        2
                      </span>
                    </div>
                    <p className="text-foreground/80">
                      Receive personalized offers based on your preferences
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neon-yellow/10 flex items-center justify-center mr-4">
                      <span className="text-neon-yellow font-mono font-bold">
                        3
                      </span>
                    </div>
                    <p className="text-foreground/80">
                      Get exclusive access to limited-time deals
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
