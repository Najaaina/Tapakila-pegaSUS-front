import { useState, useMemo } from "react";
import { Event } from "@/types";

export const useEventSearch = (events: Event[], searchTerm = "")=> {
    const filteredEvents = useMemo(() => {
        if (!searchTerm) return events;
        return events.filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [events, searchTerm]);

    return { filteredEvents };
};