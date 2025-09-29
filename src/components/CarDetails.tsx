import { Car } from '@/types/car';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FullscreenImageViewer } from '@/components/FullscreenImageViewer';
import { 
  Phone, 
  Mail, 
  Heart, 
  Share, 
  Calendar,
  Car as CarIcon,
  Fuel,
  Settings,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

interface CarDetailsProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CarDetails = ({ car, isOpen, onClose }: CarDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  if (!car) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative bg-muted">
            <img 
              src={car.images[currentImageIndex]} 
              alt={car.name}
              className="w-full h-64 lg:h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsFullscreenOpen(true)}
            />
            
            {/* Image Navigation */}
            {car.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                >
                  ←
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                >
                  →
                </button>
              </>
            )}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {car.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="bg-white/90 hover:bg-white p-2 rounded-full transition-all"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
              <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-all">
                <Share className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 space-y-6">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div>
                  <DialogTitle className="text-3xl font-bold mb-2">{car.name}</DialogTitle>
                  <div className="price-tag text-3xl font-bold">
                    {car.price}
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Available
                </Badge>
              </div>
            </DialogHeader>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {car.description}
            </p>

            <Separator />

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Engine</p>
                    <p className="text-sm text-muted-foreground">{car.specifications.engine}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Transmission</p>
                    <p className="text-sm text-muted-foreground">{car.specifications.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Fuel Type</p>
                    <p className="text-sm text-muted-foreground">{car.specifications.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Seating</p>
                    <p className="text-sm text-muted-foreground">{car.specifications.seating}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <Badge key={index} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="coral-button flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Test Drive
              </Button>
              <Button variant="outline" className="flex-1 border-primary/30">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline" className="flex-1 border-primary/30">
                <Mail className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Interested?</strong> Contact our Elixion specialists for personalized assistance
                </p>
                <p className="text-center mt-2 font-semibold text-primary">
                  +91 9755106826
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fullscreen Image Viewer */}
        <FullscreenImageViewer
          images={car.images}
          currentIndex={currentImageIndex}
          isOpen={isFullscreenOpen}
          onClose={() => setIsFullscreenOpen(false)}
          carName={car.name}
        />
      </DialogContent>
    </Dialog>
  );
};