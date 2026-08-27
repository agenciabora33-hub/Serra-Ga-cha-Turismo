export interface ServiceItem {
  id: string;
  title: string;
  category: 'transfer' | 'tour' | 'vip';
  badge: string;
  shortDesc: string;
  fullDesc: string;
  route: string;
  duration?: string;
  highlights: string[];
  vehicleTypes: string[];
  priceInfo: string;
  imageUrl: string;
  featured?: boolean;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggageCapacity: string;
  comfortFeatures: string[];
  idealFor: string;
  imageUrl: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  originCity: string;
  tripType: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  avatarUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'transfer' | 'voo' | 'pagamento' | 'passeios';
}

export interface BookingFormData {
  name: string;
  whatsapp: string;
  email: string;
  serviceType: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  flightNumber?: string;
  needsChildSeat: boolean;
  notes?: string;
}
