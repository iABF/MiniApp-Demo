import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onBook: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onBook }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4 border border-gray-100">
      <div className="relative h-48 w-full">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-green-700 shadow-sm">
          ¥{event.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-1">
          <Calendar size={14} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        <button 
          onClick={() => onBook(event)}
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};