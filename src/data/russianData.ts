import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for Russian - to be filled later
const month1: MonthData = {
  id: 1,
  title: "Основы русского",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-sky-500 to-blue-500",
  days: [],
};

export const russianData: LanguageData = {
  id: "russian",
  name: "Russian",
  nativeName: "Русский",
  icon: "🇷🇺",
  color: "from-sky-500 to-blue-500",
  description: "Rus tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
