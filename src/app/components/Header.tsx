import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, Phone } from 'lucide-react';
import logoImage from '../../imports/image.png';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center relative overflow-hidden shadow-lg border-2 border-amber-700 p-2">
            <img src={logoImage} alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
        </div>

        <nav className="flex gap-6">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
            }`}
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs">Меню</span>
          </Link>

          <Link
            to="/contacts"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/contacts') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
            }`}
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs">Контакти</span>
          </Link>

          <Link
            to="/cart"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/cart') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Кошик</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
