import { useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import { useCart } from "../context/CartContext";

const genres = ["Hamısı", "RPG", "Action", "Adventure", "Indie", "Shooter"];

const Games = () => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Hamısı");
  const [sortBy, setSortBy] = useState("default");
  const { addToCart } = useCart();

  const filtered = games
    .filter((game) => {
      const matchSearch = game.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchGenre =
        selectedGenre === "Hamısı" || game.genre === selectedGenre;
      return matchSearch && matchGenre;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Oyunlar</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Oyun axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full md:w-72 outline-none border border-gray-700 focus:border-purple-500"
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 outline-none"
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 outline-none"
        >
          <option value="default">Sırala</option>
          <option value="price-asc">Qiymət: Aşağıdan yuxarı</option>
          <option value="price-desc">Qiymət: Yuxarıdan aşağı</option>
          <option value="rating">Reytinq</option>
        </select>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-2xl mb-2">😔 Oyun tapılmadı</p>
          <p>Axtarış kriteriyalarını dəyişməyə cəhd edin</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{game.title}</h2>
                <p className="text-purple-400 text-sm mb-1">{game.genre}</p>
                <p className="text-yellow-400 text-sm mb-3">⭐ {game.rating}</p>
                <p className="text-green-400 font-bold mb-4">
                  {game.price === 0 ? "Pulsuz" : `$${game.price}`}
                </p>
                <div className="flex gap-2">
                  <Link
                    to={`/games/${game.id}`}
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition"
                  >
                    Ətraflı
                  </Link>
                  <button
                    onClick={() => addToCart(game)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm transition"
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