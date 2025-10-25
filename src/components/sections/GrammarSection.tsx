import type { GrammarSection as GrammarSectionType } from "../../types/types";
import { BookOpen, Info } from "lucide-react";

interface GrammarSectionProps {
  grammar: GrammarSectionType;
}

export const GrammarSection = ({ grammar }: GrammarSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" />
          {grammar.topic}
        </h3>

        {/* Formula Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-purple-400" />
            Formulalar:
          </h4>
          <div className="grid gap-4">
            {grammar.formulas.map((formula, idx) => (
              <div
                key={idx}
                className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5"
              >
                <h5 className="text-blue-400 font-semibold mb-3">
                  {formula.title}
                </h5>
                <div className="bg-black/30 rounded-lg p-4 font-mono">
                  <p className="text-white">{formula.structure}</p>
                </div>
                {formula.examples && (
                  <div className="mt-3 space-y-2">
                    {formula.examples.map((example, i) => (
                      <p key={i} className="text-purple-200">
                        • {example}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-purple-300 mb-4">
            Qoidalar:
          </h4>
          <div className="grid gap-3">
            {grammar.rules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
              >
                <p className="text-white">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises Section */}
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-4">
            Mashqlar:
          </h4>
          <div className="grid gap-4">
            {grammar.exercises.map((ex, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-5">
                <p className="text-white mb-3 font-medium">{ex.question}</p>
                <details className="mt-2">
                  <summary className="text-cyan-400 cursor-pointer hover:text-cyan-300">
                    Javobni ko'rish
                  </summary>
                  <div className="mt-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-semibold mb-2">
                      {ex.answer}
                    </p>
                    <p className="text-purple-300 text-sm">{ex.explanation}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
