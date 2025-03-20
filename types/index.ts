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

export type Event = {
    idEvent: string;
    title: string;
    description: string;
    eventDate: Date;
    location: string;
    organizer: string;
    category: string;
    status: EventStatus;
    image: EventImage;
    ticketTypes: TicketType[];
};
