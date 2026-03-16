import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/projects";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorFallback from "./ErrorBondry/ErrorBondry";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";

export default function App() {
  return (
    // <ErrorFallback>
      <div className="min-h-screen bg-[#080808]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />



          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </div>
    // </ErrorFallback>
  );
}
