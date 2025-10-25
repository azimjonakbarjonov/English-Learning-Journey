import { ChevronRight, CheckCircle2, Circle } from "lucide-react";

interface DayHeaderProps {
  dayNum: string;
  monthTitle: string;
  isCompleted: boolean;
  onBack: () => void;
  onToggleComplete: () => void;
}

export const DayHeader = ({
  dayNum,
  monthTitle,
  isCompleted,
  onBack,
  onToggleComplete,
}: DayHeaderProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Orqaga</span>
          </button>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {dayNum}-kun
            </h2>
            <p className="text-purple-300 text-xs md:text-sm">{monthTitle}</p>
          </div>
          <button
            onClick={onToggleComplete}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl font-semibold transition-all ${
              isCompleted
                ? "bg-green-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
            {isCompleted ? "Bajarilgan" : "Bajarish"}
          </button>
        </div>
      </div>
    </div>
  );
};
