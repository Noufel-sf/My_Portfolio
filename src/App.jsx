import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/projects";
import NotFoundPage from "./pages/NotFoundPage";
import BlogsPage from "./pages/BlogsPage";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";

export default function App() {
  const location = useLocation();
  const MotionMain = motion.main;
  const MotionSpan = motion.span;

  return (
    // <ErrorFallback>
      <div className="min-h-screen bg-[#080808]">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <MotionMain
            key={location.pathname}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="route-transition"
          >
            <MotionSpan
              className="route-transition-accent"
              initial={{ scaleX: 0, opacity: 0.8 }}
              animate={{ scaleX: 1, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<BlogsPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MotionMain>
        </AnimatePresence>
        <BackToTopButton />
        <Footer />
      </div>
    // </ErrorFallback>
  );
}
