import { useParams, useNavigate } from "react-router-dom";
import { DayGrid } from "../components/day/DayGrid";
import { Header } from "../components/layout/Header";
import { useProgress } from "../hooks/useProgress";
import { learningData } from "../data/learningData";

export const MonthPage = () => {
  const { monthId } = useParams();
  const navigate = useNavigate();
  const { completedDays, getMonthProgress, getTotalProgress } = useProgress();

  const currentMonth = learningData.months.find(
    (m) => m.id === Number(monthId)
  );

  if (!currentMonth) {
    navigate("/");
    return null;
  }

  const handleDaySelect = (dayId: number) => {
    navigate(`/month/${monthId}/day/${dayId}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header totalProgress={getTotalProgress()} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate("/")}
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
