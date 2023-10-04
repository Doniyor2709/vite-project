import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StudentsPage from "./pages/StudentsPage";
import StudentsPageWithHook from "./pages/StudentsPageWithHook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsPageWithHook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
