import { useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import { useCart } from "../context/CartContext";

const genres = ["Hamısı", "RPG", "Action", "Adventure", "Indie", "Shooter"];

const Games = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Hamısı");
  const [sort, setSort] = useState("default");
  const { addToCart } = useCart();

  const filtered = games
    .filter((g) => {
      const matchName = g.title.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genre === "Hamısı" || g.genre === genre;
      return matchName && matchGenre;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Oyunlar</h1>
      <p className="text-gray-400 mb-8">{filtered.length} oyun tapıldı</p>

      {/* filterler */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Oyun axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg outline-none focus:border-purple-500 w-full md:w-64 transition"
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg outline-none focus:border-purple-500 transition"
        >
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg outline-none focus:border-purple-500 transition"
        >
          <option value="default">Sırala</option>
          <option value="price-asc">Qiymət ↑</option>
          <option value="price-desc">Qiymət ↓</option>
          <option value="rating">Reytinq</option>
        </select>
      </div>

      {/* empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">
          <p className="text-4xl mb-3">🎮</p>
          <p className="text-lg">Heç bir oyun tapılmadı</p>
          <p className="text-sm mt-1">Axtarışı dəyişməyə cəhd edin</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden flex flex-col">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-bold text-base mb-1">{game.title}</h2>
                <p className="text-purple-400 text-xs mb-1">{game.genre}</p>
                <p className="text-yellow-400 text-xs mb-3">⭐ {game.rating}</p>
                <p className="text-green-400 font-bold mb-4">
                  {game.price === 0 ? "Pulsuz" : `$${game.price}`}
                </p>
                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/games/${game.id}`}
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm transition"
                  >
                    Ətraflı
                  </Link>
                  <button
                    onClick={() => addToCart(game)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-sm transition"
                  >
                    + Səbət
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;