export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export interface BookingFormState {
  destinationId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}