import { Circle, CheckCircle2 } from "lucide-react";
import { DayButton } from "./DayButton";
import type { DayData, CompletedDays } from "../../types/types";

interface DayGridProps {
  days: DayData[];
  completedDays: CompletedDays;
  selectedMonthId: number;
  onDaySelect: (dayId: number) => void;
}

export const DayGrid = ({
  days,
  completedDays,
  selectedMonthId,
  onDaySelect,
}: DayGridProps) => {
  return (
    <div className="mt-8 md:mt-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Kunlar ro'yxati
        </h2>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <Circle className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 mr-4">Boshlanmagan</span>
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span className="text-purple-300">Bajarilgan</span>
        </div>
      </div>

      <div className="grid grid-cols-7 xs:grid-cols-8 sm:grid-cols-10 md:grid-cols-10 gap-2 md:gap-3">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
          const day = days.find((d) => d.id === dayNum);
          const isCompleted =
            completedDays[`month${selectedMonthId}-day${dayNum}`];
          const hasContent = !!day;

          return (
            <div key={dayNum} className="min-h-[44px]">
              <DayButton
                dayNum={dayNum.toString()}
                isCompleted={isCompleted}
                hasContent={hasContent}
                onClick={() => hasContent && onDaySelect(dayNum)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
