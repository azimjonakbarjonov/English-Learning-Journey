import { BookOpen, Target, Volume2, Calendar } from "lucide-react";

interface SectionTabsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "vocabulary", label: "So'zlar", icon: BookOpen },
  { id: "grammar", label: "Grammatika", icon: Target },
  { id: "speaking", label: "Speaking", icon: Volume2 },
  { id: "listening", label: "Listening", icon: Volume2 },
  { id: "homework", label: "Uy vazifa", icon: Calendar },
];

export const SectionTabs = ({
  activeSection,
  onSectionChange,
}: SectionTabsProps) => {
  return (
    <>
      {/* Top tabs (desktop/tablet) */}
      <div className="hidden md:flex gap-2 mb-8 overflow-x-auto pb-2">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeSection === id
                ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                : "bg-white/5 text-purple-300 hover:bg-white/10"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>

      {/* Bottom fixed nav (mobile) */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/30 backdrop-blur-md"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-5">
          {sections.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => onSectionChange(id)}
                className={`w-full flex flex-col items-center justify-center py-3 text-xs ${
                  activeSection === id ? "text-cyan-400" : "text-purple-300"
                }`}
                aria-label={label}
              >
                <Icon
                  className={`w-5 h-5 ${
                    activeSection === id ? "scale-110" : "opacity-80"
                  }`}
                />
                <span className="mt-1">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
