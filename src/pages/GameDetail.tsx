import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { games } from "../data/games";
import { useCart } from "../context/CartContext";

const GameDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const game = games.find((g) => g.id === Number(id));

  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl mb-4">😕</p>
          <p className="text-xl mb-4">Oyun tapılmadı</p>
          <Link to="/games" className="text-purple-400 hover:underline">
            ← Geri qayıt
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!name || !platform || !review) {
      setError("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }
    if (review.length < 10) {
      setError("Rəy ən azı 10 simvol olmalıdır.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <Link to="/games" className="text-gray-400 hover:text-white text-sm mb-8 inline-block transition">
        ← Oyunlara qayıt
      </Link>

      {/* oyun melumati */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={game.image}
          alt={game.title}
          className="w-full md:w-80 h-56 object-cover rounded-xl"
        />
        <div>
          <h1 className="text-4xl font-black mb-2">{game.title}</h1>
          <p className="text-purple-400 mb-1">{game.genre}</p>
          <p className="text-yellow-400 mb-1">⭐ {game.rating}</p>
          <p className="text-gray-400 mb-1">📅 {game.releaseYear}</p>
          <p className="text-gray-400 mb-4">🖥️ {game.platform.join(", ")}</p>
          <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">{game.description}</p>
          <p className="text-2xl font-bold text-green-400 mb-5">
            {game.price === 0 ? "Pulsuz" : `$${game.price}`}
          </p>
          <button
            onClick={() => addToCart(game)}
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-semibold"
          >
            Səbətə Əlavə Et
          </button>
        </div>
      </div>

      {/* rey formu */}
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg">
        <h2 className="text-xl font-bold mb-5">Rəy Yaz</h2>

        {submitted ? (
          <div className="bg-green-700/40 border border-green-600 text-green-300 px-4 py-3 rounded-lg">
            ✅ Rəyiniz qəbul edildi, təşəkkür edirik!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {error && (
              <p className="text-red-400 text-sm bg-red-900/30 border border-red-800 px-4 py-2 rounded-lg">
                ⚠️ {error}
              </p>
            )}
            <input
              type="text"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border border-gray-600 focus:border-purple-500 outline-none px-4 py-2 rounded-lg transition"
            />
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-gray-700 border border-gray-600 focus:border-purple-500 outline-none px-4 py-2 rounded-lg transition"
            >
              <option value="">Platform seçin</option>
              {game.platform.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <textarea
              placeholder="Rəyinizi yazın... (min 10 simvol)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="bg-gray-700 border border-gray-600 focus:border-purple-500 outline-none px-4 py-2 rounded-lg resize-none transition"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-semibold"
            >
              Göndər
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetail;