import { useParams, useNavigate, Navigate } from "react-router-dom";
import { DayGrid } from "../components/day/DayGrid";
import { Header } from "../components/layout/Header";
import { useProgress } from "../hooks/useProgress";
import { getLanguageById } from "../data/platformData";

export const MonthPage = () => {
  const { languageId, monthId } = useParams<{
    languageId: string;
    monthId: string;
  }>();
  const navigate = useNavigate();
  const { completedDays, getTotalProgress } = useProgress();

  const languageData = languageId ? getLanguageById(languageId) : null;

  if (!languageData) {
    return <Navigate to="/" replace />;
  }

  const currentMonth = languageData.learningData.months.find(
    (m) => m.id === Number(monthId)
  );

  if (!currentMonth) {
    navigate(`/${languageId}`);
    return null;
  }

  const handleDaySelect = (dayId: number) => {
    navigate(`/${languageId}/month/${monthId}/day/${dayId}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header
        totalProgress={getTotalProgress()}
        languageName={languageData.name}
        languageIcon={languageData.icon}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(`/${languageId}`)}
          className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-6"
        >
          ← Orqaga
        </button>

        <h2 className="text-3xl font-bold text-white mb-6">
          {currentMonth.title}
        </h2>

        <DayGrid
          days={currentMonth.days}
          completedDays={completedDays}
          selectedMonthId={currentMonth.id}
          onDaySelect={handleDaySelect}
        />
      </div>
    </div>
  );
};
