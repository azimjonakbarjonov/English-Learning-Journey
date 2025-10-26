import type { LanguageData } from "../types/types";
import { month1 } from "./month1";
import { month2 } from "./month2";
import { month3 } from "./month3";

export const englishData: LanguageData = {
  id: "english",
  name: "English",
  nativeName: "English",
  icon: "🇬🇧",
  color: "from-blue-500 to-cyan-500",
  description: "3 oyda professional English darajasiga yeting",
  learningData: {
    months: [month1, month2, month3],
  },
};
