import { MonthGrid } from "../components/month/MonthGrid";
import { Header } from "../components/layout/Header";
import { useProgress } from "../hooks/useProgress";
import { getLanguageById } from "../data/platformData";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const HomePage = () => {
  const navigate = useNavigate();
  const { languageId } = useParams<{ languageId: string }>();
  const { getMonthProgress, getTotalProgress } = useProgress();

  const languageData = languageId ? getLanguageById(languageId) : null;

  if (!languageData) {
    return <Navigate to="/" replace />;
  }

  const handleMonthSelect = (monthId: number) => {
    navigate(`/${languageId}/month/${monthId}`);
  };

  const handleBackToLanguages = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header
        totalProgress={getTotalProgress()}
        languageName={languageData.name}
        languageIcon={languageData.icon}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back to Languages Button */}
        <button
          onClick={handleBackToLanguages}
          className="mb-6 flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Barcha tillar</span>
        </button>

        <MonthGrid
          months={languageData.learningData.months}
          selectedMonthId={0} // No month selected on home page
          getMonthProgress={getMonthProgress}
          onMonthSelect={handleMonthSelect}
        />
      </div>
    </div>
  );
};
