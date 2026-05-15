import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  const links = [
    { to: "/", label: "Ana Səhifə" },
    { to: "/games", label: "Oyunlar" },
    { to: "/about", label: "Haqqımızda" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-700">
      <Link to="/" className="text-2xl font-bold text-purple-400">
        🎮 GameStore
      </Link>

      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`hover:text-purple-400 transition font-medium ${
              location.pathname === link.to
                ? "text-purple-400 border-b-2 border-purple-400"
                : "text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/cart"
          className={`relative hover:text-purple-400 transition font-medium ${
            location.pathname === "/cart"
              ? "text-purple-400"
              : "text-gray-300"
          }`}
        >
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;