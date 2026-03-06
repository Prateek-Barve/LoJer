import { BrowserRouter, Routes, Route } from "react-router-dom";
import JournalPage from "./pages/JournalPage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JournalPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}