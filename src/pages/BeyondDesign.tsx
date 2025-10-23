import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpeg";

const images = [img1, img2, img3, img4]; // Add as many as you want

const BeyondDesign = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333" }}>
        Beyond Design Gallery
      </h1>
      <p style={{ maxWidth: "700px", color: "#555", marginBottom: "2rem" }}>
        Explore our gallery showcasing creativity, design, and innovation. Each image represents our journey beyond conventional design.
      </p>

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          justifyItems: "center", // Center each image in its cell
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover", // Crop image nicely
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BeyondDesign;
