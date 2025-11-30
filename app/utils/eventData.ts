import { Event } from '../types';

let events: Event[] = [
  {
    id: '1',
    title: 'Summer Music Festival',
    description: 'Join us for an unforgettable night of live music featuring local and international artists. Experience multiple stages, food trucks, and a vibrant atmosphere.',
    date: 'July 15, 2025',
    location: 'Central Park, New York',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    category: 'Music',
    price: '$45',
    organizer: 'NYC Events Co.',
    capacity: 5000,
    attendees: 3420
  },
  {
    id: '2',
    title: 'Tech Innovation Conference 2025',
    description: 'Explore the future of technology with industry leaders. Network with innovators, attend workshops, and discover cutting-edge solutions.',
    date: 'August 22, 2025',
    location: 'Convention Center, San Francisco',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    category: 'Technology',
    price: '$199',
    organizer: 'Tech Forward',
    capacity: 2000,
    attendees: 1850
  },
  {
    id: '3',
    title: 'Food & Wine Festival',
    description: 'Savor exquisite dishes from renowned chefs and sample premium wines from around the world. A culinary journey awaits!',
    date: 'September 10, 2025',
    location: 'Harbor Bay, Seattle',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
    category: 'Food',
    price: '$75',
    organizer: 'Gourmet Events LLC',
    capacity: 1500,
    attendees: 1200
  },
  {
    id: '4',
    title: 'Art & Design Exhibition',
    description: 'Immerse yourself in contemporary art and design. Meet artists, view stunning installations, and find inspiration.',
    date: 'October 5, 2025',
    location: 'Modern Art Gallery, Chicago',
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&h=600&fit=crop',
    category: 'Arts',
    price: 'Free',
    organizer: 'Chicago Arts Council',
    capacity: 800,
    attendees: 620
  },
  {
    id: '5',
    title: 'Marathon & Fun Run',
    description: 'Challenge yourself in our annual marathon or enjoy a leisurely fun run. All fitness levels welcome!',
    date: 'November 12, 2025',
    location: 'Lakefront Trail, Boston',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=600&fit=crop',
    category: 'Sports',
    price: '$30',
    organizer: 'Boston Runners Club',
    capacity: 3000,
    attendees: 2750
  },
  {
    id: '6',
    title: 'Comedy Night Live',
    description: 'Laugh until your sides hurt with top comedians from across the country. An evening of pure entertainment!',
    date: 'December 1, 2025',
    location: 'Comedy Club, Austin',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=600&fit=crop',
    category: 'Entertainment',
    price: '$25',
    organizer: 'Laugh Factory',
    capacity: 400,
    attendees: 380
  },
  {
    id: '7',
    title: 'Startup Pitch Competition',
    description: 'Watch innovative startups pitch their ideas to top investors. Network with entrepreneurs and industry experts.',
    date: 'January 20, 2026',
    location: 'Innovation Hub, Silicon Valley',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    category: 'Business',
    price: '$50',
    organizer: 'Venture Partners',
    capacity: 600,
    attendees: 450
  },
  {
    id: '8',
    title: 'Photography Workshop',
    description: 'Learn from professional photographers in this hands-on workshop. Perfect for beginners and enthusiasts.',
    date: 'February 8, 2026',
    location: 'Photo Studio, Portland',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
    category: 'Education',
    price: '$85',
    organizer: 'Creative Lens Academy',
    capacity: 30,
    attendees: 28
  },
  {
    id: '9',
    title: 'Jazz & Blues Evening',
    description: 'An intimate evening featuring smooth jazz and soulful blues. Enjoy cocktails and great music.',
    date: 'March 14, 2026',
    location: 'Blue Note, New Orleans',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop',
    category: 'Music',
    price: '$40',
    organizer: 'Jazz Society',
    capacity: 250,
    attendees: 240
  },
  {
    id: '10',
    title: 'Yoga & Wellness Retreat',
    description: 'Rejuvenate your mind and body with yoga, meditation, and wellness workshops in a serene setting.',
    date: 'April 10, 2026',
    location: 'Zen Garden, Denver',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    category: 'Wellness',
    price: '$120',
    organizer: 'Mindful Living',
    capacity: 100,
    attendees: 85
  }
];

export const getEvents = (): Event[] => {
  return [...events];
};

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const addEvent = (event: Omit<Event, 'id'>): Event => {
  const newEvent: Event = {
    ...event,
    id: Date.now().toString()
  };
  events = [newEvent, ...events];
  return newEvent;
};

export const updateEvent = (id: string, updates: Partial<Event>): Event | undefined => {
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return undefined;

  events[index] = { ...events[index], ...updates };
  return events[index];
};

export const deleteEvent = (id: string): boolean => {
  const initialLength = events.length;
  events = events.filter(e => e.id !== id);
  return events.length < initialLength;
};
