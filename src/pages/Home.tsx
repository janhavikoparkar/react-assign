import { Link } from "react-router-dom";
import sampleImage from "../assets/sample.jpg";
import caltrackImg from "../assets/caltrack.jpg";
import banterImg from "../assets/banter.jpg";
import portalImg from "../assets/inclusiveportal.jpg";
// ⬇️ NEW import
import cs6041Img from "../assets/cs6041.jpg";

const Home = () => {
  return (
    <div style={{ padding: "2rem clamp(1rem, 4vw, 2.5rem)" }}>
      {/* Cover wrapper with extra side padding */}
      <div style={{ padding: "0 clamp(1rem, 6vw, 4rem)" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "420px",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundImage: `url(${sampleImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
            marginBottom: "2rem",
          }}
          aria-label="Cover image"
        >
          <div
            style={{
              position: "absolute",
              right: "2rem",
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "520px",
              textAlign: "left",
              color: "#A739A9",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "3rem", lineHeight: 1.15 }}>
              Hi,<br />I am Janhavi.
            </h1>
            <p style={{ marginTop: "0.75rem", lineHeight: 1.6, fontSize: "1.1rem" }}>
              Part UI-UX designer, part stargazer, full-time explorer. Whether it’s
              fine-tuning a user experience, learning to speak in three new languages,
              or chasing the perfect photo, I’m always up for a new challenge!
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Featured Case Studies</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {/* CalTrack */}
        <Link
          to="/caltrack"
          style={{ textDecoration: "none", color: "inherit", width: "100%", maxWidth: "320px" }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={caltrackImg} alt="CalTrack" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>CalTrack</h3>
              <p style={{ color: "#555" }}>A calorie-tracking app designed for intuitive and mindful eating.</p>
            </div>
          </div>
        </Link>

        {/* Banter */}
        <Link
          to="/banter"
          style={{ textDecoration: "none", color: "inherit", width: "100%", maxWidth: "320px" }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={banterImg} alt="Banter" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>Banter Kiosk</h3>
              <p style={{ color: "#555" }}>An interactive kiosk UI built for Banter’s smart retail experience.</p>
            </div>
          </div>
        </Link>

        {/* Inclusive Portal */}
        <Link
          to="/inclusiveportal"
          style={{ textDecoration: "none", color: "inherit", width: "100%", maxWidth: "320px" }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={portalImg} alt="Inclusive Portal" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>Inclusive Job Portal</h3>
              <p style={{ color: "#555" }}>A platform designed with accessibility filters and inclusive UX principles.</p>
            </div>
          </div>
        </Link>

        {/* ✅ CS6041 — Assignment 3 (4th card) */}
        <Link
          to="/cs6041"
          style={{ textDecoration: "none", color: "inherit", width: "100%", maxWidth: "320px" }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={cs6041Img} alt="CS6041 — Assignment 3" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>CS6041 — Assignment 3</h3>
              <p style={{ color: "#555" }}>Approach, notes, and key design decisions.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
