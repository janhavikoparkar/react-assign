import * as React from "react";
import p1 from "../assets/cs6041-1.jpg";
import p2 from "../assets/cs6041-2.jpg";
import p3 from "../assets/cs6041-3.jpg";

const CS6041: React.FC = () => {
  const photos = [
    { id: "1", src: p1, title: "Passion in Life", caption: "Music, Capturing Movement & Moments and Beautiful Nature all in one frame. " },
    { id: "2", src: p2, title: "Aesthetic Shot", caption: "Rhythm & Lines- Repeating patterns guiding the eye." },
    { id: "3", src: p3, title: "Business Shot", caption: "Designed to grow." },
  ];

  return (
    <div style={{ padding: "2rem clamp(1rem, 4vw, 2.5rem)" }}>
      <header style={{ maxWidth: 1200, margin: "0 auto 1.25rem" }}>
        <h1 style={{ margin: 0 }}>CS6041 — Assignment 3</h1>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Three shots with brief notes.
        </p>
      </header>

      <section style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // bigger cards
            gap: "1.25rem",
          }}
        >
          {photos.map((ph) => (
            <figure
              key={ph.id}
              style={{
                margin: 0,
                border: "1px solid #eee",
                borderRadius: 14,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={ph.src}
                alt={ph.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "clamp(300px, 45vw, 520px)", // taller & responsive
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <figcaption style={{ padding: "0.9rem 1rem" }}>
                <div style={{ fontWeight: 600, color: "#222", marginBottom: 6, fontSize: "1.06rem" }}>
                  {ph.title}
                </div>
                <div style={{ color: "#555", lineHeight: 1.6 }}>{ph.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CS6041;
