
import React, { useState } from 'react';
import { toast } from "@/components/ui/sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [budget, setBudget] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // In a real app, you would submit this to your backend
    toast.success("Thank you for subscribing!");
    
    // Reset form
    setEmail('');
    setName('');
    setInterest('');
    setBudget('');
  };
  
  return (
    <div className="vintage-box max-w-md mx-auto">
      <div className="mb-4 border-b border-border pb-4">
        <h3 className="font-mono text-xl font-bold mb-2">GET IN TOUCH</h3>
        <p className="text-foreground/70 text-sm">
          Subscribe to our newsletter for the latest updates and exclusive offers.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-mono mb-1 text-foreground/80">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-mono mb-1 text-foreground/80">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="interest" className="block text-sm font-mono mb-1 text-foreground/80">
            I'm interested in
          </label>
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
          >
            <option value="">Select an option</option>
            <option value="electric">Electric Vehicles</option>
            <option value="hybrid">Hybrid Vehicles</option>
            <option value="luxury">Luxury Vehicles</option>
            <option value="sports">Sports Cars</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-mono mb-1 text-foreground/80">
            My Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
          >
            <option value="">Select budget range</option>
            <option value="under200">Under £200/month</option>
            <option value="200-350">£200 - £350/month</option>
            <option value="350-500">£350 - £500/month</option>
            <option value="over500">Over £500/month</option>
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 px-4 bg-neon-pink hover:bg-neon-pink/90 text-white font-mono text-sm tracking-wider uppercase rounded-md transition-colors duration-300"
        >
          Get Deals
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
