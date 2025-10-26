import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageSelectionPage } from "./pages/LanguageSelectionPage";
import { HomePage } from "./pages/HomePage";
import { MonthPage } from "./pages/MonthPage";
import { DayPage } from "./pages/DayPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageSelectionPage />} />
        <Route path="/:languageId" element={<HomePage />} />
        <Route path="/:languageId/month/:monthId" element={<MonthPage />} />
        <Route
          path="/:languageId/month/:monthId/day/:dayId"
          element={<DayPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
