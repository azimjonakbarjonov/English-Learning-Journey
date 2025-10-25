import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MonthPage } from "./pages/MonthPage";
import { DayPage } from "./pages/DayPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/month/:monthId" element={<MonthPage />} />
        <Route path="/month/:monthId/day/:dayId" element={<DayPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
