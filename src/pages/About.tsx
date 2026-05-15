const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 mb-6">Haqqımızda</h1>

        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">GameStore nədir?</h2>
          <p className="text-gray-300 leading-relaxed">
            GameStore — oyunsevərlər üçün yaradılmış onlayn oyun mağazasıdır.
            Burada ən populyar oyunları kəşf edə, qiymətləndirə və səbətinizə
            əlavə edə bilərsiniz.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Texnologiyalar</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Tailwind CSS", "React Router", "Vite"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Əsas Xüsusiyyətlər</h2>
          <ul className="text-gray-300 flex flex-col gap-2">
            <li>🎮 Oyun kataloqu və axtarış</li>
            <li>🔍 Janr və qiymət filtri</li>
            <li>🛒 Səbət sistemi</li>
            <li>⭐ Oyun reytinqləri</li>
            <li>📝 Rəy forması</li>
            <li>📱 Responsive dizayn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;