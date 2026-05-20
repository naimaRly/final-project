const About = () => {
  const techs = ["React", "TypeScript", "Tailwind CSS", "React Router", "Vite"];

  const features = [
    { icon: "🎮", text: "Oyun kataloqu və axtarış" },
    { icon: "🔍", text: "Janr və qiymət filtri" },
    { icon: "🛒", text: "Səbət sistemi" },
    { icon: "⭐", text: "Oyun reytinqləri" },
    { icon: "📝", text: "Rəy forması" },
    { icon: "📱", text: "Responsive dizayn" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Haqqımızda</h1>
        <p className="text-gray-400 mb-10">GameStore layihəsi haqqında qısa məlumat</p>

        <div className="bg-gray-800 rounded-xl p-6 mb-5">
          <h2 className="font-bold text-lg mb-3">GameStore nədir?</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            GameStore oyunsevərlər üçün hazırlanmış sadə bir onlayn mağazadır.
            Burada oyunları axtara, filtrləyə, ətraflı məlumat əldə edə və
            səbətinizə əlavə edə bilərsiniz. Layihə React + TypeScript ilə yazılıb.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 mb-5">
          <h2 className="font-bold text-lg mb-4">İstifadə olunan texnologiyalar</h2>
          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="bg-purple-600/30 border border-purple-600 text-purple-300 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="font-bold text-lg mb-4">Xüsusiyyətlər</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-sm text-gray-300">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;