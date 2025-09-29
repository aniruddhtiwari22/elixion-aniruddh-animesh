import { Car } from '@/types/car';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Phone } from 'lucide-react';
import { useState } from 'react';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

export const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <Card className="luxury-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={car.images[currentImageIndex]} 
          alt={car.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Image Navigation */}
        {car.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-all"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-all"
            >
              →
            </button>
          </>
        )}

        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge className="price-tag bg-white/95 text-primary font-bold px-3 py-1 text-lg">
            {car.price}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {car.name}
        </CardTitle>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {car.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={() => onViewDetails(car)}
            className="coral-button flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="border-primary/30 hover:bg-primary/10"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};