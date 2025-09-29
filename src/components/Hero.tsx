import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Shield, Award, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coral-green-dark/90 via-coral-green/70 to-coral-green-light/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Award className="w-4 h-4 mr-2" />
            Premium Car Dealership
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury Cars
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the finest collection of premium SUVs from world's most prestigious brands.
            Experience luxury, performance, and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-coral-green hover:bg-white/90 font-semibold px-8 py-4 text-lg"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              Schedule Test Drive
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="text-white/80">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="text-white/80">Cars Delivered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};