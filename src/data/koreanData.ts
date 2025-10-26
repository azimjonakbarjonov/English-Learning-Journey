import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for Korean - to be filled later
const month1: MonthData = {
  id: 1,
  title: "한국어 기초",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-teal-500 to-cyan-500",
  days: [],
};

export const koreanData: LanguageData = {
  id: "korean",
  name: "Korean",
  nativeName: "한국어",
  icon: "🇰🇷",
  color: "from-teal-500 to-cyan-500",
  description: "Koreys tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
