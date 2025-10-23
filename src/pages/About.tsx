const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // ✅ Center content horizontally
        justifyContent: "center", // Optional: center vertically if needed
        textAlign: "center",
        padding: "3rem 2rem",
      }}
    >
      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
        ( Jan-Ha-Vi )
      </h1>

      {/* Description */}
      <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "600px", lineHeight: "1.6" }}>
        Welcome to the About section! Jan-Ha-Vi is dedicated to exploring creativity, design, and
        technology. Our mission is to provide innovative solutions while keeping a human touch in
        every project. We believe in blending aesthetics with functionality to create meaningful
        experiences.
      </p>
    </div>
  );
};

export default About;