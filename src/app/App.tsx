import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { MenuPage } from './components/MenuPage';
import { CartPage, CartItem } from './components/CartPage';
import { ContactsPage } from './components/ContactsPage';
import { MenuItem } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
        <Header />
        <Routes>
          <Route path="/" element={<MenuPage onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}