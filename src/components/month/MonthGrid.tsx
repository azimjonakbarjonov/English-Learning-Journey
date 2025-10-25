import { MonthCard } from "./MonthCard";
import type { MonthData } from "../../types/types";

interface MonthGridProps {
  months: MonthData[];
  selectedMonthId: number;
  getMonthProgress: (monthId: number) => {
    completed: number;
    progress: number;
  };
  onMonthSelect: (monthId: number) => void;
}

export const MonthGrid = ({
  months,
  selectedMonthId,
  getMonthProgress,
  onMonthSelect,
}: MonthGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {months.map((monthData) => {
        const { completed, progress } = getMonthProgress(monthData.id);

        return (
          <MonthCard
            key={monthData.id}
            monthData={monthData}
            isSelected={selectedMonthId === monthData.id}
            progress={progress}
            completedCount={completed}
            onSelect={() => onMonthSelect(monthData.id)}
          />
        );
      })}
    </div>
  );
};
