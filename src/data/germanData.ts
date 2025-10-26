import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for German - to be filled later
const month1: MonthData = {
  id: 1,
  title: "Grundlagen Deutsch",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-amber-500 to-orange-500",
  days: [],
};

export const germanData: LanguageData = {
  id: "german",
  name: "German",
  nativeName: "Deutsch",
  icon: "🇩🇪",
  color: "from-amber-500 to-orange-500",
  description: "Nemis tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
