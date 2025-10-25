interface DayButtonProps {
  dayNum: string;
  isCompleted: boolean;
  hasContent: boolean;
  onClick: () => void;
}

export const DayButton = ({
  dayNum,
  isCompleted,
  hasContent,
  onClick,
}: DayButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={!hasContent && dayNum !== "1"}
      className={`aspect-square rounded-xl font-semibold transition-all duration-200 w-full h-full ${
        hasContent
          ? isCompleted
            ? "bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50"
            : "bg-linear-to-br from-blue-500 to-cyan-500 text-white hover:scale-110 shadow-lg shadow-blue-500/50"
          : "bg-white/5 text-gray-500 cursor-not-allowed"
      }`}
    >
      {dayNum}
    </button>
  );
};
