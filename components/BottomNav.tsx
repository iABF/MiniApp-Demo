import React from 'react';
import { Calendar, ShoppingBag, User } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  purchaseCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, purchaseCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-6 h-16 flex items-start justify-between z-50 max-w-md mx-auto">
      <button 
        onClick={() => setActiveTab('events')}
        className={`flex flex-col items-center justify-center w-16 space-y-1 ${activeTab === 'events' ? 'text-green-600' : 'text-gray-400'}`}
      >
        <Calendar size={24} strokeWidth={activeTab === 'events' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Events</span>
      </button>

      <button 
        onClick={() => setActiveTab('shop')}
        className={`flex flex-col items-center justify-center w-16 space-y-1 relative ${activeTab === 'shop' ? 'text-green-600' : 'text-gray-400'}`}
      >
        <div className="relative">
          <ShoppingBag size={24} strokeWidth={activeTab === 'shop' ? 2.5 : 2} />
          {purchaseCount > 0 && (
             <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center border-2 border-white">
               {purchaseCount}
             </span>
          )}
        </div>
        <span className="text-[10px] font-medium">Shop</span>
      </button>

      <button 
        onClick={() => setActiveTab('profile')}
        className={`flex flex-col items-center justify-center w-16 space-y-1 ${activeTab === 'profile' ? 'text-green-600' : 'text-gray-400'}`}
      >
        <User size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Me</span>
      </button>
    </div>
  );
};