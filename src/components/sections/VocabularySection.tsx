import { Star, Volume2 } from "lucide-react";
import type { VocabularyItem } from "../../types/types";
import { useSpeech } from "../../hooks/useSpeech";

interface VocabularySectionProps {
  vocabulary: VocabularyItem[];
}

export const VocabularySection = ({ vocabulary }: VocabularySectionProps) => {
  const { speak } = useSpeech();

  return (
    <div className="space-y-4 pb-16 md:pb-0">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          Bugungi so'zlar ({vocabulary.length} ta)
        </h3>

        {/* Mobile cards */}
        <div className="md:hidden grid gap-3">
          {vocabulary.map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-lg font-bold text-white">{item.word}</h4>
                  <p className="text-purple-300 text-sm">{item.translation}</p>
                </div>
                <button
                  onClick={() => speak(item.word)}
                  className="ml-3 w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"
                  aria-label={`Speak ${item.word}`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-purple-200 italic text-sm mb-2">
                {item.example}
              </p>
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                  item.difficulty === "easy"
                    ? "bg-green-500/20 text-green-400"
                    : item.difficulty === "medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {item.difficulty === "easy"
                  ? "Oson"
                  : item.difficulty === "medium"
                  ? "O'rta"
                  : "Qiyin"}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-left text-sm font-semibold text-purple-300">
                  English
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-purple-300">
                  O'zbekcha
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-purple-300">
                  Misol
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-purple-300">
                  Daraja
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-purple-300">
                  Talaffuz
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {vocabulary.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 text-white font-medium">
                    {item.word}
                  </td>
                  <td className="py-3 px-4 text-purple-300">
                    {item.translation}
                  </td>
                  <td className="py-3 px-4 text-purple-200 italic">
                    {item.example}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.difficulty === "easy"
                          ? "bg-green-500/20 text-green-400"
                          : item.difficulty === "medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.difficulty === "easy"
                        ? "Oson"
                        : item.difficulty === "medium"
                        ? "O'rta"
                        : "Qiyin"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => speak(item.word)}
                      className="mx-auto flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
