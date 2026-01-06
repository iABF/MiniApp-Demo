import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <div className="text-xs text-green-600 font-medium mb-1 uppercase tracking-wide">{product.type}</div>
        <h3 className="text-gray-900 font-bold text-base leading-tight mb-1">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-3">{product.origin}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">¥{product.price}</span>
          <button 
            onClick={() => onBuy(product)}
            className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 active:scale-95 transition-all"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};