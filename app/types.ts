export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
  price: string;
  organizer: string;
  capacity: number;
  attendees: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookmarkedEvents: string[];
}
