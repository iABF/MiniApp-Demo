import React, { useState, useEffect } from 'react';
import { Tab, Booking, Purchase, Event, Product } from './types';
import { EVENTS, PRODUCTS, CURRENT_USER } from './constants';
import { EventCard } from './components/EventCard';
import { ProductCard } from './components/ProductCard';
import { BottomNav } from './components/BottomNav';
import { ChevronRight, Settings, Ticket, Wine, Award } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('events');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Helper for simple toast notifications
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const handleBookEvent = (event: Event) => {
    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      eventId: event.id,
      event: event,
      timestamp: Date.now(),
      status: 'confirmed'
    };
    setBookings(prev => [newBooking, ...prev]);
    showToast('Event Booked Successfully!');
  };

  const handleBuyProduct = (product: Product) => {
    setPurchases(prev => {
      const existing = prev.find(p => p.productId === product.id);
      if (existing) {
        return prev.map(p => 
          p.productId === product.id 
            ? { ...p, quantity: p.quantity + 1, timestamp: Date.now() } 
            : p
        );
      }
      const newPurchase: Purchase = {
        id: Math.random().toString(36).substr(2, 9),
        productId: product.id,
        product: product,
        quantity: 1,
        timestamp: Date.now()
      };
      return [newPurchase, ...prev];
    });
    showToast('Added to Cart!');
  };

  // Calculate total bottles purchased
  const totalBottles = purchases.reduce((acc, curr) => acc + curr.quantity, 0);

  // --- Page Components (Inline for simple state access) ---

  const EventsPage = () => (
    <div className="pb-20 pt-4 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Discover Events</h1>
        <p className="text-gray-500">Exclusive tastings and tours nearby.</p>
      </div>
      {EVENTS.map(event => (
        <EventCard key={event.id} event={event} onBook={handleBookEvent} />
      ))}
    </div>
  );

  const ShopPage = () => (
    <div className="pb-20 pt-4 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Fine Wines</h1>
        <p className="text-gray-500">Curated selection for your cellar.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} onBuy={handleBuyProduct} />
        ))}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white p-6 pb-8 rounded-b-3xl shadow-sm mb-4">
        <div className="flex items-center space-x-4 mb-6">
          <img src={CURRENT_USER.avatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-green-100" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{CURRENT_USER.name}</h2>
            <div className="flex items-center mt-1">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                <Award size={12} className="mr-1" />
                {CURRENT_USER.level}
              </span>
            </div>
          </div>
          <Settings className="text-gray-400" size={20} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center border border-green-100">
            <span className="text-3xl font-bold text-green-700 mb-1">{bookings.length}</span>
            <span className="text-green-800 text-xs font-medium uppercase tracking-wide">Events Booked</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl flex flex-col items-center justify-center border border-indigo-100">
            <span className="text-3xl font-bold text-indigo-700 mb-1">{totalBottles}</span>
            <span className="text-indigo-800 text-xs font-medium uppercase tracking-wide">Bottles Owned</span>
          </div>
        </div>
      </div>

      {/* Lists */}
      <div className="px-4 space-y-4">
        
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
            <h3 className="font-bold text-gray-800 flex items-center">
              <Ticket size={18} className="mr-2 text-green-600" />
              My Bookings
            </h3>
            <span className="text-xs text-gray-400">View All</span>
          </div>
          
          {bookings.length === 0 ? (
            <div className="text-center py-6 text-gray-400 text-sm">No events booked yet.</div>
          ) : (
            <div className="space-y-3">
              {bookings.slice(0, 3).map(booking => (
                <div key={booking.id} className="flex items-start space-x-3">
                  <img src={booking.event.image} className="w-12 h-12 rounded-lg object-cover bg-gray-200" alt="event" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{booking.event.title}</h4>
                    <p className="text-xs text-gray-500">{booking.event.date}</p>
                  </div>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Confirmed</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Purchases */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
            <h3 className="font-bold text-gray-800 flex items-center">
              <Wine size={18} className="mr-2 text-indigo-600" />
              My Wine Cellar
            </h3>
            <span className="text-xs text-gray-400">View All</span>
          </div>
          
          {purchases.length === 0 ? (
            <div className="text-center py-6 text-gray-400 text-sm">No wines purchased yet.</div>
          ) : (
            <div className="space-y-3">
              {purchases.map(p => (
                <div key={p.id} className="flex items-center space-x-3 justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <img src={p.product.image} className="w-10 h-10 rounded-full object-cover bg-gray-100 border border-gray-200" alt="wine" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{p.product.name}</h4>
                      <p className="text-xs text-gray-500">{p.product.origin}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-700">x{p.quantity}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mt-4">
          {['Membership Benefits', 'Address Book', 'Help & Support'].map((item, idx) => (
             <div key={idx} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 active:bg-gray-50">
               <span className="text-sm text-gray-700">{item}</span>
               <ChevronRight size={16} className="text-gray-300" />
             </div>
          ))}
        </div>
        
        <div className="h-6"></div> {/* Spacer */}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl overflow-hidden">
      {activeTab === 'events' && <EventsPage />}
      {activeTab === 'shop' && <ShopPage />}
      {activeTab === 'profile' && <ProfilePage />}
      
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        purchaseCount={totalBottles}
      />

      {/* Simple Toast Notification */}
      {toastMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium z-[100] backdrop-blur-sm animate-fade-in-up">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;