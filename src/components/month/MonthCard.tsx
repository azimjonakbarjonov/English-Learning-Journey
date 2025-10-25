import type { MonthData } from "../../types/types";

interface MonthCardProps {
  monthData: MonthData;
  isSelected: boolean;
  progress: number;
  completedCount: number;
  onSelect: () => void;
}

export const MonthCard = ({
  monthData,
  isSelected,
  progress,
  completedCount,
  onSelect,
}: MonthCardProps) => {
  const monthNumber = `${monthData.id}-oy`;

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
        isSelected
          ? "bg-white/10 ring-2 ring-white/50 scale-105"
          : "bg-white/5 hover:bg-white/10"
      }`}
    >
      <div
        className={`inline-flex px-4 py-2 rounded-full bg-linear-to-r ${monthData.color} text-white font-semibold mb-4`}
      >
        {monthNumber}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{monthData.title}</h3>
      <p className="text-purple-300 mb-4">{monthData.description}</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-purple-300">Progress</span>
          <span className="text-white font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-linear-to-r ${monthData.color} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-sm text-purple-300">
          {completedCount}/30 kunlar bajarilgan
        </div>
      </div>
    </div>
  );
};
