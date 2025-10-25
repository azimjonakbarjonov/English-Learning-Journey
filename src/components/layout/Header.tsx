import { BookOpen, Trophy } from "lucide-react";

interface HeaderProps {
  totalProgress: number;
}

export const Header = ({ totalProgress }: HeaderProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                English Learning Journey
              </h1>
              <p className="text-purple-300 mt-1">
                3 oyda professional darajaga
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-purple-300">Umumiy progress</div>
              <div className="text-2xl font-bold text-white">
                {totalProgress}/90 kun
              </div>
            </div>
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
