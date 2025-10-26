import type { LanguageData, MonthData } from "../types/types";

// Placeholder data for French - to be filled later
const month1: MonthData = {
  id: 1,
  title: "Français Fondamental",
  description: "Asosiy grammatika va so'z boyligi",
  color: "from-indigo-500 to-purple-500",
  days: [],
};

export const frenchData: LanguageData = {
  id: "french",
  name: "French",
  nativeName: "Français",
  icon: "🇫🇷",
  color: "from-indigo-500 to-purple-500",
  description: "Fransuz tilini professional darajada o'rganing",
  learningData: {
    months: [month1],
  },
};
