import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for Arabic - to be filled later
const month1: MonthData = {
  id: 1,
  title: "العربية الأساسية",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-emerald-500 to-green-500",
  days: [],
};

export const arabicData: LanguageData = {
  id: "arabic",
  name: "Arabic",
  nativeName: "العربية",
  icon: "🇸🇦",
  color: "from-emerald-500 to-green-500",
  description: "Arab tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
