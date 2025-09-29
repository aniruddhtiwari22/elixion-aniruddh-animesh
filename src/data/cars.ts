import { Car } from '@/types/car';

// Import car images
import landRoverDefender1 from '@/assets/cars/land-rover-defender-1.jpg';
import landRoverDefender2 from '@/assets/cars/land-rover-defender-2.jpg';
import toyotaFortuner1 from '@/assets/cars/toyota-fortuner-1.jpg';
import toyotaFortuner2 from '@/assets/cars/toyota-fortuner-2.jpg';
import mahindraXuv7001 from '@/assets/cars/mahindra-xuv700-1.jpg';
import mahindraXuv7002 from '@/assets/cars/mahindra-xuv700-2.jpg';
import mahindraScorpio1 from '@/assets/cars/mahindra-scorpio-1.jpg';
import jeepWrangler1 from '@/assets/cars/jeep-wrangler-1.jpg';
import toyotaLandCruiser1 from '@/assets/cars/toyota-landcruiser-1.jpg';

export const cars: Car[] = [
  {
    id: 'land-rover-defender',
    name: 'Land Rover Defender',
    price: 'Rs 2.60 Crores',
    priceNumeric: 26000000,
    images: [landRoverDefender1, landRoverDefender2],
    description: 'The most capable Land Rover ever. Built for the most challenging terrains with uncompromising luxury.',
    features: [
      'Terrain Response 2',
      'ClearSight Ground View',
      'Wade Sensing',
      'Configurable Terrain Response',
      'Advanced Tow Assist'
    ],
    specifications: {
      engine: '3.0L P400 MHEV Petrol',
      transmission: '8-Speed Automatic',
      fuelType: 'Petrol + Electric',
      seating: '5-7 Seats',
      driveType: 'AWD'
    }
  },
  {
    id: 'toyota-fortuner-legender',
    name: 'Toyota Fortuner Legender',
    price: 'Rs 60 Lakhs',
    priceNumeric: 6000000,
    images: [toyotaFortuner1, toyotaFortuner2],
    description: 'The premium SUV that combines legendary reliability with contemporary luxury and advanced technology.',
    features: [
      'Sequential LED DRLs',
      'Premium Interior',
      'Advanced Safety Features',
      '4WD System',
      'Touch Screen Infotainment'
    ],
    specifications: {
      engine: '2.8L Diesel',
      transmission: '6-Speed Automatic',
      fuelType: 'Diesel',
      seating: '7 Seats',
      driveType: '4WD'
    }
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV 700',
    price: 'Rs 32 Lakhs',
    priceNumeric: 3200000,
    images: [mahindraXuv7001, mahindraXuv7002],
    description: 'India\'s most advanced SUV with cutting-edge technology and premium comfort for the modern family.',
    features: [
      'AdrenoX Infotainment',
      'Advanced Driver Assistance',
      'Premium Sound System',
      'Panoramic Sunroof',
      'Connected Car Technology'
    ],
    specifications: {
      engine: '2.2L mHawk Diesel',
      transmission: '6-Speed Automatic',
      fuelType: 'Diesel/Petrol',
      seating: '5-7 Seats',
      driveType: 'AWD/FWD'
    }
  },
  {
    id: 'mahindra-scorpio-n',
    name: 'Mahindra Scorpio N',
    price: 'Rs 28 Lakhs',
    priceNumeric: 2800000,
    images: [mahindraScorpio1],
    description: 'The bold and rugged SUV that embodies power, performance, and adventure-ready capabilities.',
    features: [
      'Twin Peaks Design',
      'Adventure-Ready Build',
      'Premium Interiors',
      '4XPLOR Modes',
      'Advanced Connectivity'
    ],
    specifications: {
      engine: '2.2L mHawk Diesel',
      transmission: '6-Speed Manual/Automatic',
      fuelType: 'Diesel/Petrol',
      seating: '6-7 Seats',
      driveType: '4WD/RWD'
    }
  },
  {
    id: 'jeep-wrangler-rubicon',
    name: 'Jeep Wrangler Rubicon',
    price: 'Rs 68 Lakhs',
    priceNumeric: 6800000,
    images: [jeepWrangler1],
    description: 'The most capable SUV ever. Built for extreme off-road adventures with iconic Jeep design.',
    features: [
      'Rock-Trac 4WD System',
      'Tru-Lok Differentials',
      'Disconnecting Sway Bar',
      'Skid Plates',
      'All-Terrain Tires'
    ],
    specifications: {
      engine: '2.0L Turbo Petrol',
      transmission: '8-Speed Automatic',
      fuelType: 'Petrol',
      seating: '5 Seats',
      driveType: '4WD'
    }
  },
  {
    id: 'toyota-land-cruiser',
    name: 'Toyota Land Cruiser',
    price: 'Rs 3 Crores',
    priceNumeric: 30000000,
    images: [toyotaLandCruiser1],
    description: 'The ultimate luxury SUV combining legendary off-road capability with unmatched luxury and reliability.',
    features: [
      'Multi-Terrain Select',
      'Kinetic Dynamic Suspension',
      'Premium Leather Interior',
      'JBL Audio System',
      'Advanced Safety Suite'
    ],
    specifications: {
      engine: '4.6L V8 Petrol',
      transmission: '6-Speed Automatic',
      fuelType: 'Petrol',
      seating: '8 Seats',
      driveType: 'AWD'
    }
  }
];