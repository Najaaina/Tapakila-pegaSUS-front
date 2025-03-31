import { Reservation } from "@/types";

export const reservations: Reservation[] = [
    {
        idReservation: "1",
        reservationDate: new Date("2025-03-02T14:30:00"),
        status: "confirmed",
        event: {
            idEvent: "event-1",
            title: "Concert de Jazz",
            description: "Un concert de jazz exceptionnel",
            eventDate: new Date("2025-04-15T20:00:00"),
            location: "Salle Pleyel, Paris",
            organizer: "Organisateur Concert Jazz",
            category: "gala",
            status: "published", // Supposition: valeur par défaut
            image: {
                imageId: "1",
                url: "https://picsum.photos/seed/event_32/600/400",
                // altText: "Affiche Concert Jazz" // Ajouté pour compléter EventImage
            },
            ticketTypes: [
                {
                    ticketName: "VIP", price: 100, disponibility: 45,
                    idTicket: "45",
                    buyingLimit: 7
                }, // Ajout des champs manquants
                {
                    ticketName: "VIP", price: 100, disponibility: 45,
                    idTicket: "45",
                    buyingLimit: 7
                }, // Ajout des champs manquants
                {
                    ticketName: "Early Bird", price: 100, disponibility: 58,
                    idTicket: "58",
                    buyingLimit: 2
                },
                {
                    ticketName: "Early Bird", price: 100, disponibility: 58,
                    idTicket: "58",
                    buyingLimit: 2
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "1-1",
                quantity: 2,
                ticketType: {
                    ticketName: "VIP", price: 100, disponibility: 45,
                    idTicket: "45",
                    buyingLimit: 7
                }
            },
            {
                idReservationTicket: "1-1",
                quantity: 2,
                ticketType: {
                    ticketName: "VIP", price: 100, disponibility: 45,
                    idTicket: "45",
                    buyingLimit: 7
                }
            },
            {
                idReservationTicket: "1-2",
                quantity: 1,
                ticketType: {
                    ticketName: "Early Bird", price: 100, disponibility: 58,
                    idTicket: "58",
                    buyingLimit: 2
                }
            },
            {
                idReservationTicket: "1-2",
                quantity: 1,
                ticketType: {
                    ticketName: "Early Bird", price: 100, disponibility: 58,
                    idTicket: "58",
                    buyingLimit: 2
                }
            }
        ]
    },
    {
        idReservation: "2",
        reservationDate: new Date("2025-02-15T10:15:00"),
        status: "confirmed",
        event: {
            idEvent: "event-2",
            title: "Festival Électro",
            description: "Festival de musique électronique sur 2 jours",
            eventDate: new Date("2025-05-22T19:00:00"),
            location: "Parc des Expositions, Lyon",
            organizer: "Organisateur Festival Electro",
            category: "spectacle",
            status: "published",
            image: {
                imageId: "2",
                url: "https://picsum.photos/seed/event_78/600/400",
                // altText: "Affiche Festival Electro"
            },
            ticketTypes: [
                {
                    ticketName: "Pass 2 jours", price: 120, disponibility: 9,
                    idTicket: "9",
                    buyingLimit: 1
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "2-1",
                quantity: 4,
                ticketType: {
                    ticketName: "Pass 2 jours", price: 120, disponibility: 9,
                    idTicket: "9",
                    buyingLimit: 1
                }
            }
        ]
    },
    {
        idReservation: "3",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    },
    {
        idReservation: "4",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    },
    {
        idReservation: "5",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    },
    {
        idReservation: "6",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    },
    {
        idReservation: "7",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    },
    {
        idReservation: "8",
        reservationDate: new Date("2025-01-20T16:45:00"),
        status: "confirmed",
        event: {
            idEvent: "event-3",
            title: "Pièce de Théâtre",
            description: "Une pièce de théâtre classique",
            eventDate: new Date("2025-03-05T18:30:00"),
            location: "Théâtre National, Marseille",
            organizer: "Compagnie Théâtrale Nationale",
            category: "conference",
            status: "published",
            image: {
                imageId: "3",
                url: "https://picsum.photos/seed/event_88/600/400",
                // altText: "Affiche Pièce de Théâtre"
            },
            ticketTypes: [
                {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                },
                {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            ]
        },
        reservationTicket: [
            {
                idReservationTicket: "3-1",
                quantity: 2,
                ticketType: {
                    ticketName: "Orchestre", price: 45, disponibility: 87,
                    idTicket: "87",
                    buyingLimit: 3
                }
            },
            {
                idReservationTicket: "3-2",
                quantity: 3,
                ticketType: {
                    ticketName: "Balcon", price: 30, disponibility: 55,
                    idTicket: "55",
                    buyingLimit: 4
                }
            }
        ]
    }
];