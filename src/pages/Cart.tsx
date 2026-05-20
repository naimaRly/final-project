import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🛒</p>
          <p className="text-xl font-semibold mb-2">Səbətiniz boşdur</p>
          <p className="text-gray-400 text-sm mb-6">Oyunlar səhifəsinə keçib əlavə edə bilərsiniz</p>
          <Link
            to="/games"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            Oyunlara Bax
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Səbət</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* items */}
        <div className="flex-1 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.game.id}
              className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4"
            >
              <img
                src={item.game.image}
                alt={item.game.title}
                className="w-full sm:w-28 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="font-bold">{item.game.title}</h2>
                <p className="text-purple-400 text-sm">{item.game.genre}</p>
                <p className="text-green-400 font-semibold text-sm mt-1">
                  {item.game.price === 0 ? "Pulsuz" : `$${item.game.price}`}
                </p>
              </div>

              {/* quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.game.id)}
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center font-bold"
                >
                  −
                </button>
                <span className="w-6 text-center font-bold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.game.id)}
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.game.id)}
                className="text-red-400 hover:text-red-300 text-sm transition"
              >
                Sil
              </button>
            </div>
          ))}
        </div>

        {/* total */}
        <div className="bg-gray-800 rounded-xl p-6 h-fit w-full lg:w-72">
          <h2 className="text-lg font-bold mb-4">Sifariş Xülasəsi</h2>
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span>Oyunlar</span>
            <span>{cartItems.length} əd.</span>
          </div>
          <div className="border-t border-gray-700 my-4"></div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Cəmi</span>
            <span className="text-green-400">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold">
            Ödəniş Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;