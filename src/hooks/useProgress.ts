import { useState, useEffect } from "react";
import type { CompletedDays } from "../types/types";

export const useProgress = () => {
  const [completedDays, setCompletedDays] = useState<CompletedDays>({});

  useEffect(() => {
    const saved = localStorage.getItem("englishProgress");
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const toggleDayComplete = (monthId: number, dayId: number) => {
    const key = `month${monthId}-day${dayId}`;
    const newCompleted = { ...completedDays, [key]: !completedDays[key] };
    setCompletedDays(newCompleted);
    localStorage.setItem("englishProgress", JSON.stringify(newCompleted));
  };

  const getMonthProgress = (monthId: number) => {
    const monthCompleted = Object.keys(completedDays).filter((k) =>
      k.startsWith(`month${monthId}`)
    ).length;
    return {
      completed: monthCompleted,
      progress: Math.round((monthCompleted / 30) * 100),
    };
  };

  const getTotalProgress = () => {
    return Object.keys(completedDays).length;
  };

  return {
    completedDays,
    toggleDayComplete,
    getMonthProgress,
    getTotalProgress,
  };
};
