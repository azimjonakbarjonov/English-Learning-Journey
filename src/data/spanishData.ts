import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for Spanish - to be filled later
const month1: MonthData = {
  id: 1,
  title: "Español Básico",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-red-500 to-pink-500",
  days: [],
};

export const spanishData: LanguageData = {
  id: "spanish",
  name: "Spanish",
  nativeName: "Español",
  icon: "🇪🇸",
  color: "from-red-500 to-pink-500",
  description: "Ispan tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
