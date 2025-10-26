import { useParams, useNavigate, Navigate } from "react-router-dom";
import { DayHeader } from "../components/layout/DayHeader";
import { SectionTabs } from "../components/shared/SectionTabs";
import { VocabularySection } from "../components/sections/VocabularySection";
import { GrammarSection } from "../components/sections/GrammarSection";
import { SpeakingSection } from "../components/sections/SpeakingSection";
import { ListeningSection } from "../components/sections/ListeningSection";
import { HomeworkSection } from "../components/sections/HomeworkSection";
import { useProgress } from "../hooks/useProgress";
import { getLanguageById } from "../data/platformData";
import { useState } from "react";

export const DayPage = () => {
  const { languageId, courseId, monthId, dayId } = useParams<{
    languageId: string;
    courseId: string;
    monthId: string;
    dayId: string;
  }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("vocabulary");
  const { completedDays, toggleDayComplete } = useProgress();

  const languageData = languageId ? getLanguageById(languageId) : null;

  if (!languageData) {
    return <Navigate to="/" replace />;
  }

  const courseData = courseId
    ? languageData.courses.find((c) => c.id === courseId)
    : null;

  if (!courseData) {
    return <Navigate to={`/${languageId}`} replace />;
  }

  const currentMonth = courseData.learningData.months.find(
    (m) => m.id === Number(monthId)
  );

  const currentDay = currentMonth?.days.find((d) => d.id === Number(dayId));

  if (!currentMonth || !currentDay) {
    navigate(`/${languageId}/${courseId}`);
    return null;
  }

  const isCompleted =
    completedDays[`${languageId}-${courseId}-month${monthId}-day${dayId}`];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <DayHeader
        dayNum={dayId!}
        monthTitle={currentMonth.title}
        isCompleted={isCompleted}
        onBack={() => navigate(`/${languageId}/${courseId}/month/${monthId}`)}
        onToggleComplete={() =>
          toggleDayComplete(
            Number(monthId),
            Number(dayId),
            languageId,
            courseId
          )
        }
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 pb-24 md:pb-8">
        <SectionTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {activeSection === "vocabulary" && (
          <VocabularySection vocabulary={currentDay.vocabulary} />
        )}

        {activeSection === "grammar" && (
          <GrammarSection grammar={currentDay.grammar} />
        )}

        {activeSection === "speaking" && (
          <SpeakingSection speaking={currentDay.speaking} />
        )}

        {activeSection === "listening" && (
          <ListeningSection listening={currentDay.listening} />
        )}

        {activeSection === "homework" && (
          <HomeworkSection homework={currentDay.homework} />
        )}
      </div>
    </div>
  );
};
