import { useState } from 'react';
import { menuItems, categories, MenuItem } from '../data/menuData';
import { Plus, X } from 'lucide-react';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
}

export function MenuPage({ onAddToCart }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('hot-drinks');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      {/* Категорії */}
      <div className="bg-white shadow-md sticky top-[72px] z-40">
        <div className="flex gap-2 p-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Список товарів */}
      <div className="p-4 space-y-4 pb-20">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              onClick={() => setSelectedItem(item)}
              className="flex items-center gap-4 p-4 cursor-pointer"
            >
              <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                <p className="mt-2 font-semibold text-yellow-700">{item.price} ₴</p>
              </div>
            </div>

            <div className="px-4 pb-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(item);
                }}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg border-2 border-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Додати в кошик
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Модальне вікно деталей товару */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{selectedItem.name}</h2>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <p className="text-3xl font-bold text-yellow-700 mb-6">{selectedItem.price} ₴</p>

              <button
                onClick={() => {
                  onAddToCart(selectedItem);
                  setSelectedItem(null);
                }}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-lg border-2 border-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Додати в кошик
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
