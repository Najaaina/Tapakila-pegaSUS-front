// /types/index.ts

export interface Event {
    id: string | number;
    title: string;
    artist: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    image: string;
    maxPerPerson: number;
    price: number;
    availableTickets?: number;
    ticketType?: string;
    category: string;
  }
  
  export interface EventCardProps {
    event: {
      id: string | number;
      title: string;
      artist: string;
      date: string;
      startTime: string;
      endTime: string;
      location: string;
      image: string;
      maxPerPerson: number;
      price: number;
      ticketType: string;
    };
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
  }