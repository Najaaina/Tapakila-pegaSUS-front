export const events = [
    {
        "idEvent": "550e8400-e29b-41d4-a716-446655440000",
        "title": "Festival de Jazz",
        "description": "Un festival réunissant les meilleurs musiciens de jazz.",
        "eventDate": 1735689600,
        "location": "Lyon, France",
        "organizer": "Jazz Club",
        "category": "concert",
        "status": "published",
        "image": {
            "imageId": "550e8400-e29b-41d4-a716-446655440001",
            "url": "https://picsum.photos/seed/event_1/600/400"
        },
        "ticketTypes": [
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440002",
                "ticketName": "VIP",
                "price": 80.00,
                "disponibility": 30,
                "buyingLimit": 2
            },
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440003",
                "ticketName": "Standard",
                "price": 40.00,
                "disponibility": 200,
                "buyingLimit": 4
            }
        ]
    },
    {
        "idEvent": "550e8400-e29b-41d4-a716-446655440004",
        "title": "Marathon International",
        "description": "Un défi sportif avec des coureurs du monde entier.",
        "eventDate": 1736755200,
        "location": "New York, USA",
        "organizer": "NY Sports",
        "category": "sport",
        "status": "published",
        "image": {
            "imageId": "550e8400-e29b-41d4-a716-446655440005",
            "url": "https://picsum.photos/seed/event_2/600/400"
        },
        "ticketTypes": [
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440006",
                "ticketName": "Standard",
                "price": 25.00,
                "disponibility": 500,
                "buyingLimit": 1
            }
        ]
    },
    {
        "idEvent": "550e8400-e29b-41d4-a716-446655440007",
        "title": "Conférence Tech 2025",
        "description": "Les plus grands experts du numérique se réunissent.",
        "eventDate": 1740000000,
        "location": "San Francisco, USA",
        "organizer": "TechWorld",
        "category": "conference",
        "status": "published",
        "image": {
            "imageId": "550e8400-e29b-41d4-a716-446655440008",
            "url": "https://picsum.photos/seed/event_3/600/400"
        },
        "ticketTypes": [
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440009",
                "ticketName": "VIP",
                "price": 150.00,
                "disponibility": 50,
                "buyingLimit": 2
            },
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440010",
                "ticketName": "Early Bird",
                "price": 80.00,
                "disponibility": 100,
                "buyingLimit": 3
            },
            {
                "idTicket": "550e8400-e29b-41d4-a716-446655440011",
                "ticketName": "Standard",
                "price": 100.00,
                "disponibility": 200,
                "buyingLimit": 5
            }
        ]
    },
    ...Array.from({ length: 22 }, (_, i) => ({
        "idEvent": `550e8400-e29b-41d4-a716-4466554400${12 + i}`,
        "title": `Événement ${i + 4}`,
        "description": `Description de l'événement ${i + 4}`,
        "eventDate": 1735689600 + i * 86400,
        "location": "Paris, France",
        "organizer": `Organisateur ${i + 4}`,
        "category": ["cinema", "sport", "concert", "theatre", "exposition", "gala", "spectacle", "conference", "other"][i % 9],
        "status": ["draft", "published", "cancel"][i % 3],
        "image": {
            "imageId": `550e8400-e29b-41d4-a716-4466554400${13 + i}`,
            "url": `https://picsum.photos/seed/event_${i + 4}/600/400`
        },
        "ticketTypes": Array.from({ length: (i % 3) + 1 }, (_, j) => ({
            "idTicket": `550e8400-e29b-41d4-a716-4466554400${14 + i + j}`,
            "ticketName": ["VIP", "Standard", "Early Bird"][j % 3],
            "price": (j + 1) * 50,
            "disponibility": (j + 1) * 100,
            "buyingLimit": (j + 1) * 2
        }))
    }))
];
