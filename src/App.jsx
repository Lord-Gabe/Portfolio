import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Test1";     // Home
import Affiliates from "./components/Test2"; // Affiliates
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Page Content */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/affiliates" element={<Affiliates />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
