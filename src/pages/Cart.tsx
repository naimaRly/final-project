import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🛒</p>
          <p className="text-2xl mb-4">Səbətiniz boşdur</p>
          <Link
            to="/games"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Oyunlara Bax
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Səbət</h1>

      <div className="flex flex-col gap-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.game.id}
            className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4"
          >
            <img
              src={item.game.image}
              alt={item.game.title}
              className="w-full sm:w-32 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{item.game.title}</h2>
              <p className="text-purple-400 text-sm">{item.game.genre}</p>
              <p className="text-green-400 font-bold">
                {item.game.price === 0 ? "Pulsuz" : `$${item.game.price}`}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.game.id)}
                className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full transition"
              >
                −
              </button>
              <span className="text-lg font-bold">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.game.id)}
                className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.game.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Sil
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl p-6 max-w-sm ml-auto">
        <h2 className="text-xl font-bold mb-4">Cəmi</h2>
        <p className="text-3xl font-bold text-green-400 mb-6">
          ${totalPrice.toFixed(2)}
        </p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition">
          Ödəniş Et
        </button>
      </div>
    </div>
  );
};

export default Cart;