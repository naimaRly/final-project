import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-white">
        🎮 <span className="text-purple-400">GameStore</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`text-sm font-medium transition ${
            isActive("/") ? "text-purple-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Ana Səhifə
        </Link>

        <Link
          to="/games"
          className={`text-sm font-medium transition ${
            isActive("/games") ? "text-purple-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Oyunlar
        </Link>

        <Link
          to="/about"
          className={`text-sm font-medium transition ${
            isActive("/about") ? "text-purple-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Haqqımızda
        </Link>

        <Link to="/cart" className="relative">
          <span className="text-xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;