import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageSelectionPage } from "./pages/LanguageSelectionPage";
import { CourseSelectionPage } from "./pages/CourseSelectionPage";
import { HomePage } from "./pages/HomePage";
import { MonthPage } from "./pages/MonthPage";
import { DayPage } from "./pages/DayPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageSelectionPage />} />
        <Route path="/:languageId" element={<CourseSelectionPage />} />
        <Route path="/:languageId/:courseId" element={<HomePage />} />
        <Route
          path="/:languageId/:courseId/month/:monthId"
          element={<MonthPage />}
        />
        <Route
          path="/:languageId/:courseId/month/:monthId/day/:dayId"
          element={<DayPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
