export type TicketType = {
    idTicket: string;
    ticketName: string;
    price: number;
    disponibility: number;
    buyingLimit: number;
};

export type EventImage = {
    imageId: string;
    url: string;
};

export type EventStatus = "published" | "draft" | "cancelled";

export type Category = "cinema" | "sport" | "concert" | "theatre" | "exposition" | "gala" | "spectacle" | "conference" | "other";

export type Event = {
    idEvent: string;
    title: string;
    description: string;
    eventDate: Date;
    location: string;
    organizer: string;
    category: Category;
    status: EventStatus;
    image: EventImage;
    ticketType: TicketType[];
};

export type Filters = {
    selectedDate: string;
    selectedLocation: string;
    selectedCategory: string;
    searchTerm: string;
}

export type Status = "confirmed" | "cancelled"

export type ReservationTicket = {
    idReservationTicket : string;
    quantity: number;
    ticketType: TicketType;
}

export type Reservation = {
    idReservation: string,
    reservationDate: Date,
    status: Status,
    event: Event,
    reservationTicket: ReservationTicket[];
}