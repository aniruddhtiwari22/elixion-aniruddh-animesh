import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { CarDetails } from '@/components/CarDetails';
import { ImageUpload } from '@/components/ImageUpload';
import { cars } from '@/data/cars';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Filter,
  ArrowUpDown,
  Grid3X3,
  List,
  Star,
  Shield,
  HeadphonesIcon,
  TruckIcon
} from 'lucide-react';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false);
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'name'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsCarDetailsOpen(true);
  };

  const handleImageUpload = () => {
    setIsImageUploadOpen(true);
  };

  const sortedCars = [...cars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.priceNumeric - b.priceNumeric;
      case 'price-high':
        return b.priceNumeric - a.priceNumeric;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onImageUpload={handleImageUpload} />
      <Hero />
      
      {/* Inventory Section */}
      <section id="inventory" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Luxury Inventory</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collection of premium SUVs from the world's finest manufacturers
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-primary/30">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-border rounded-lg bg-background"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Cars Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {sortedCars.map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete luxury car solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="luxury-card text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Selection</h3>
                <p className="text-muted-foreground text-sm">
                  Handpicked luxury vehicles with certified quality
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive warranty and after-sales support
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card text-center">
              <CardContent className="p-6">
                <TruckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Home Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Contactless delivery to your doorstep
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card text-center">
              <CardContent className="p-6">
                <HeadphonesIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock customer assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CarDetails 
        car={selectedCar}
        isOpen={isCarDetailsOpen}
        onClose={() => setIsCarDetailsOpen(false)}
      />
      
      <ImageUpload 
        isOpen={isImageUploadOpen}
        onClose={() => setIsImageUploadOpen(false)}
      />
    </div>
  );
};

export default Index;
