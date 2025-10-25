import { MonthGrid } from "../components/month/MonthGrid";
import { Header } from "../components/layout/Header";
import { useProgress } from "../hooks/useProgress";
import { learningData } from "../data/learningData";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const { getMonthProgress, getTotalProgress } = useProgress();

  const handleMonthSelect = (monthId: number) => {
    navigate(`/month/${monthId}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header totalProgress={getTotalProgress()} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <MonthGrid
          months={learningData.months}
          selectedMonthId={0} // No month selected on home page
          getMonthProgress={getMonthProgress}
          onMonthSelect={handleMonthSelect}
        />
      </div>
    </div>
  );
};
