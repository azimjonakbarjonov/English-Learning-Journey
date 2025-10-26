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
  courses: [
    {
      id: "speaking",
      name: "General Speaking",
      description:
        "Kundalik suhbat va umumiy speaking ko'nikmalarini rivojlantirish",
      icon: "💬",
      color: "from-blue-500 to-cyan-500",
      duration: "3 oy (90 kun)",
      learningData: {
        months: [month1, month2, month3],
      },
    },
    {
      id: "ielts",
      name: "IELTS Preparation",
      description:
        "IELTS imtihoniga tayyorgarlik: Listening, Reading, Writing, Speaking",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      level: "Band 6.5-8.0",
      duration: "3 oy (90 kun)",
      learningData: {
        months: [],
      },
    },
    {
      id: "cefr",
      name: "CEFR Levels",
      description: "Xalqaro standart bo'yicha A1 dan C2 gacha",
      icon: "📚",
      color: "from-amber-500 to-orange-500",
      level: "A1-C2",
      duration: "6 oy",
      learningData: {
        months: [],
      },
    },
  ],
};
