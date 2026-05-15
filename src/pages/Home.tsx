import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-6xl font-bold text-purple-400 mb-4">GameStore</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Ən yaxşı oyunları kəşf et, səbətinə əlavə et və oyun dünyasına qoşul!
        </p>
        <Link
          to="/games"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
        >
          Oyunlara Bax
        </Link>
      </div>
    </div>
  );
};

export default Home;