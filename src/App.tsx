import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BeyondDesign from "./pages/BeyondDesign";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import CalTrack from "./pages/CalTrack";
import Banter from "./pages/Banter";
import InclusivePortal from "./pages/InclusivePortal";
import Blog from "./pages/Blog";
import CS6041 from "./pages/CS6041"; // ✅ import ONLY the page, not images

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ padding: "2rem", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beyonddesign" element={<BeyondDesign />} />
          <Route path="/caltrack" element={<CalTrack />} />
          <Route path="/banter" element={<Banter />} />
          <Route path="/inclusiveportal" element={<InclusivePortal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cs6041" element={<CS6041 />} /> {/* ✅ route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <div
        style={{
          textAlign: "center",
          fontSize: ".95rem",
          color: "#6b7280",
          padding: "0.75rem 1rem",
          borderTop: "1px solid #eee",
          background: "#fafafa",
        }}
      >
        If you’ve scrolled this far, you deserve a cookie 🍪
      </div>
    </div>
  );
}

export default App;
