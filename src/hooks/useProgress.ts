import { useState, useEffect } from "react";
import type { CompletedDays } from "../types/types";

export const useProgress = () => {
  const [completedDays, setCompletedDays] = useState<CompletedDays>({});

  useEffect(() => {
    const saved = localStorage.getItem("languageLearningProgress");
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const toggleDayComplete = (
    monthId: number,
    dayId: number,
    languageId: string = "english"
  ) => {
    const key = `${languageId}-month${monthId}-day${dayId}`;
    const newCompleted = { ...completedDays, [key]: !completedDays[key] };
    setCompletedDays(newCompleted);
    localStorage.setItem(
      "languageLearningProgress",
      JSON.stringify(newCompleted)
    );
  };

  const getMonthProgress = (
    monthId: number,
    languageId: string = "english"
  ) => {
    const monthCompleted = Object.keys(completedDays).filter((k) =>
      k.startsWith(`${languageId}-month${monthId}`)
    ).length;
    return {
      completed: monthCompleted,
      progress: Math.round((monthCompleted / 30) * 100),
    };
  };

  const getTotalProgress = (languageId?: string) => {
    if (languageId) {
      return Object.keys(completedDays).filter((k) =>
        k.startsWith(`${languageId}-`)
      ).length;
    }
    return Object.keys(completedDays).length;
  };

  return {
    completedDays,
    toggleDayComplete,
    getMonthProgress,
    getTotalProgress,
  };
};
