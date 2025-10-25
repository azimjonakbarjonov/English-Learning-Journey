import { Calendar } from "lucide-react";
import type { HomeworkSection as HomeworkSectionType } from "../../types/types";

interface HomeworkSectionProps {
  homework: HomeworkSectionType;
}

export const HomeworkSection = ({ homework }: HomeworkSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          Uy vazifalar
        </h3>
        <div className="space-y-4">
          <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-5">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">
              Writing:
            </h4>
            <p className="text-white">{homework.writing}</p>
          </div>
          <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-5">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              Speaking:
            </h4>
            <p className="text-white">{homework.speaking}</p>
          </div>
          <div className="bg-linear-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-5">
            <h4 className="text-lg font-semibold text-orange-400 mb-2">
              Vocabulary:
            </h4>
            <p className="text-white">{homework.vocabulary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
