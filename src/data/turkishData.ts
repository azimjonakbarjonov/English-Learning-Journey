import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for Turkish - to be filled later
const month1: MonthData = {
  id: 1,
  title: "Temel Türkçe",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-rose-500 to-red-500",
  days: [],
};

export const turkishData: LanguageData = {
  id: "turkish",
  name: "Turkish",
  nativeName: "Türkçe",
  icon: "🇹🇷",
  color: "from-rose-500 to-red-500",
  description: "Turk tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
