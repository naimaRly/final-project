import { Link } from "react-router-dom";
import { games } from "../data/games";

const Home = () => {
  const topGames = games.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* hero */}
      <div className="px-6 py-20 text-center">
        <h1 className="text-5xl font-black mb-4">
          Ən Yaxşı <span className="text-purple-400">Oyunlar</span> Burada
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Minlərlə oyun arasından seçim et, səbətinə əlavə et və oynamağa başla.
        </p>
        <Link
          to="/games"
          className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-semibold text-white inline-block"
        >
          Kataloqa Bax
        </Link>
      </div>

      {/* top 3 oyun */}
      <div className="px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">🔥 Həftənin Oyunları</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topGames.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{game.title}</h3>
                  <p className="text-yellow-400 text-sm mt-1">⭐ {game.rating}</p>
                  <p className="text-green-400 font-semibold mt-1">
                    {game.price === 0 ? "Pulsuz" : `$${game.price}`}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;