export interface IDoctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  availability: string[];
  photo: string;
  rating: number;
}

export interface IAppointment {
  time: string;
  id: number;
  name: string;
  specialty: string;
  location: string;
  availability: string[];
  photo: string;
  rating: number;
}

export const specialties = [
  'All',
  'Cardiology',
  'Dermatology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
]