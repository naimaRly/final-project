import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { games } from "../data/games";
import { useCart } from "../context/CartContext";

const GameDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const game = games.find((g) => g.id === Number(id));

  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-4">😔 Oyun tapılmadı</p>
          <Link to="/games" className="text-purple-400 hover:underline">
            Oyunlara qayıt
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!username || !review || !platform) {
      setError("Bütün sahələri doldurun!");
      return;
    }
    if (review.length < 10) {
      setError("Rəy minimum 10 simvol olmalıdır!");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <Link to="/games" className="text-purple-400 hover:underline mb-6 inline-block">
        ← Oyunlara qayıt
      </Link>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <img
          src={game.image}
          alt={game.title}
          className="w-full md:w-96 h-64 object-cover rounded-xl"
        />
        <div>
          <h1 className="text-4xl font-bold text-purple-400 mb-2">{game.title}</h1>
          <p className="text-gray-400 mb-2">🎮 {game.genre}</p>
          <p className="text-yellow-400 mb-2">⭐ {game.rating}</p>
          <p className="text-gray-400 mb-2">📅 {game.releaseYear}</p>
          <p className="text-gray-400 mb-4">
            🖥️ {game.platform.join(", ")}
          </p>
          <p className="text-gray-300 mb-6">{game.description}</p>
          <p className="text-green-400 text-2xl font-bold mb-6">
            {game.price === 0 ? "Pulsuz" : `$${game.price}`}
          </p>
          <button
            onClick={() => addToCart(game)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Səbətə Əlavə Et
          </button>
        </div>
      </div>

      {/* Review Form */}
      <div className="bg-gray-800 rounded-xl p-6 max-w-xl">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Rəy Yaz</h2>

        {submitted ? (
          <div className="bg-green-600 text-white p-4 rounded-lg">
            ✅ Rəyiniz uğurla göndərildi! Təşəkkür edirik!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {error && (
              <p className="text-red-400 bg-red-900 px-4 py-2 rounded-lg">
                ⚠️ {error}
              </p>
            )}
            <input
              type="text"
              placeholder="Adınız"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-purple-500"
            />
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-purple-500"
            >
              <option value="">Platform seçin</option>
              {game.platform.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Rəyinizi yazın (minimum 10 simvol)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-purple-500 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition"
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