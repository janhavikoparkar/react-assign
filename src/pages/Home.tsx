import sampleImage from "../assets/sample.jpg"; // Replace with your image path



const Home = () => {
  return (
    
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Left-aligned text */}
      <div style={{ flex: 1, textAlign: "left", paddingRight: "2rem" }}>
        <h1>Welcome to My Website</h1>
        <p>
          This is the Home page built with Vite, React, and TypeScript. Explore design, creativity,
          and technology in a clean layout.
        </p>
      </div>

      {/* Right-side cropped and smaller image */}
      <div style={{ flex: 1, textAlign: "right" }}>
        <img
          src={sampleImage}
          alt="Sample"
          style={{
            width: "300px",       // ✅ Fixed width
            height: "200px",      // ✅ Fixed height
            objectFit: "cover",   // ✅ Crops the image nicely
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;