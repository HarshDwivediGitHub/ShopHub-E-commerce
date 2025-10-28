import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Amazing Products
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in">
            Shop the latest trends in electronics, fashion, sports, and home goods. Quality products at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products?category=Electronics">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 hover:bg-white/20 text-primary-foreground">
                View Electronics
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
