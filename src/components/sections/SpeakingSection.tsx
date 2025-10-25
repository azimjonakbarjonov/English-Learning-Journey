import { CheckCircle2 } from "lucide-react";
import type { SpeakingSection as SpeakingSectionType } from "../../types/types";

interface SpeakingSectionProps {
  speaking: SpeakingSectionType;
}

export const SpeakingSection = ({ speaking }: SpeakingSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-4">{speaking.topic}</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">
              Foydali iboralar:
            </h4>
            {speaking.phrases.map((p, idx) => (
              <div
                key={idx}
                className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 mb-3"
              >
                <p className="text-white font-semibold mb-1">{p.phrase}</p>
                <p className="text-purple-300 text-sm">{p.translation}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">
              Topshiriqlar:
            </h4>
            {speaking.tasks.map((task, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4 mb-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                <p className="text-white">{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
