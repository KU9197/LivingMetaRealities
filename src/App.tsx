import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import InteractiveResults from "./pages/InteractiveResults";
import Data from "./pages/Data";
import LivingMeta from "./pages/Livingmeta";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-50 to-neutral-100 text-neutral-900">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-50 bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200/60 pt-8 pb-6 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#000000] tracking-tight">
              Living Meta-Analysis on Extended Realities (XRs) in E-Commerce
            </h1>
          </div>
          
          {/* Navigation Tabs */}
          <Navbar />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/data" element={<Data />} />
            <Route path="/interactive-results" element={<InteractiveResults />} />
            <Route path="/living-meta-analysis" element={<LivingMeta />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer className="mt-12 py-8 text-center border-t border-neutral-200">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} • Living Meta-Analysis on Extended Realities (XRs) in E-Commerce
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
