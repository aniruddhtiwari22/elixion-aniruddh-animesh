import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Phone, Mail, MapPin, Upload } from 'lucide-react';

interface HeaderProps {
  onImageUpload: () => void;
}

export const Header = ({ onImageUpload }: HeaderProps) => {
  return (
    <header className="bg-card/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@elixion.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Delhi, Mumbai, Bangalore</span>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary">
              Authorized Dealer
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Elixion
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
              <a href="#inventory" className="font-medium hover:text-primary transition-colors">Inventory</a>
              <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search luxury cars..." 
                className="pl-10 w-64 border-primary/20 focus:border-primary"
              />
            </div>
            <Button 
              onClick={onImageUpload}
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
            <Button className="coral-button hidden md:flex">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};