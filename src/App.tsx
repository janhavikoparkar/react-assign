import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BeyondDesign from "./pages/BeyondDesign";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // ✅ Add Navbar back

function App() {
  return (
    <>
      {/* ✅ Global Navbar at the top */}
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beyonddesign" element={<BeyondDesign />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
