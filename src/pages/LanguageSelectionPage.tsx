import { Link } from "react-router-dom";
import { platformData } from "../data/platformData";
import { BookOpen, Globe } from "lucide-react";

export const LanguageSelectionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">PolyglotPath</h1>
          </div>
          <p className="text-center text-slate-300 mt-2">
            Xalqaro tillarni professional darajada o'rganing
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Qaysi tilni o'rganmoqchisiz?
          </h2>
          <p className="text-xl text-slate-300">
            O'zingizga mos tilni tanlang va o'rganishni boshlang
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {platformData.languages.map((language) => {
            const hasContent = language.learningData.months.some(
              (month) => month.days.length > 0
            );

            return (
              <Link
                key={language.id}
                to={`/${language.id}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
                  language.color
                } p-1 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  !hasContent && "opacity-60"
                }`}
              >
                <div className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group-hover:bg-slate-900/70">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">
                    {language.icon}
                  </div>

                  {/* Language Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {language.name}
                  </h3>
                  <p className="text-lg text-slate-300 text-center mb-4">
                    {language.nativeName}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 text-center mb-4">
                    {language.description}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-300">
                      {hasContent
                        ? `${language.learningData.months.length} modul`
                        : "Tez orada"}
                    </span>
                  </div>

                  {!hasContent && (
                    <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full border border-yellow-500/30">
                      Tayyorlanmoqda
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nima uchun PolyglotPath?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <div className="text-3xl mb-2">📚</div>
                <p className="font-semibold mb-1">Strukturali Dastur</p>
                <p className="text-sm text-slate-400">
                  Har bir til uchun 3 oylik professional dastur
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold mb-1">Amaliy Mashqlar</p>
                <p className="text-sm text-slate-400">
                  Kundalik vocabulary, grammar, speaking va listening
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <p className="font-semibold mb-1">Tezkor Rivojlanish</p>
                <p className="text-sm text-slate-400">
                  90 kunda pre-intermediate dan intermediate gacha
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2025 PolyglotPath. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};
