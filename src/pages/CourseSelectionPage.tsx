import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getLanguageById } from "../data/platformData";
import { BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";

export const CourseSelectionPage = () => {
  const { languageId } = useParams<{ languageId: string }>();
  const navigate = useNavigate();
  const languageData = languageId ? getLanguageById(languageId) : null;

  if (!languageData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Barcha tillar</span>
          </button>
          <div className="flex items-center justify-center gap-3">
            <div className="text-5xl">{languageData.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {languageData.name} Learning
              </h1>
              <p className="text-slate-300 mt-1">{languageData.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Qaysi kursni tanlaysiz?
          </h2>
          <p className="text-xl text-slate-300">
            O'zingizga mos kursni tanlang va o'rganishni boshlang
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {languageData.courses.map((course) => {
            const hasContent = course.learningData.months.length > 0;

            return (
              <Link
                key={course.id}
                to={`/${languageId}/${course.id}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
                  course.color
                } p-1 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  !hasContent && "opacity-60"
                }`}
              >
                <div className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group-hover:bg-slate-900/70">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">{course.icon}</div>

                  {/* Course Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {course.name}
                  </h3>

                  {/* Level Badge */}
                  {course.level && (
                    <div className="flex items-center justify-center mb-3">
                      <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                        {course.level}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-400 text-center mb-4">
                    {course.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-300">
                      {course.duration}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-2">
                    {hasContent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">
                          {course.learningData.months.length} modul mavjud
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-yellow-400">Tez orada</span>
                    )}
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
              Har bir kurs nima beradi?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <div className="text-3xl mb-2">📖</div>
                <p className="font-semibold mb-1">Vocabulary</p>
                <p className="text-sm text-slate-400">
                  Kundalik yangi so'zlar va iboralar
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">📝</div>
                <p className="font-semibold mb-1">Grammar</p>
                <p className="text-sm text-slate-400">
                  Strukturali grammatika qoidalari
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎤</div>
                <p className="font-semibold mb-1">Speaking & Listening</p>
                <p className="text-sm text-slate-400">
                  Amaliy mashqlar va audio materiallar
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
