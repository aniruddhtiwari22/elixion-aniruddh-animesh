export interface Car {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    engine: string;
    transmission: string;
    fuelType: string;
    seating: string;
    driveType: string;
  };
}