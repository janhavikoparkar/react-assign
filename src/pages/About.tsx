import * as React from "react";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  { title: "Empathize", description: "Understand users via interviews, observations, and data." },
  { title: "Define", description: "Synthesize insights into clear problem statements & goals." },
  { title: "Ideate", description: "Generate multiple solutions, then narrow to the most promising." },
  { title: "Prototype & Test", description: "Build quick prototypes, test with users, iterate fast." },
];

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "1rem",
  textAlign: "left",
  background: "#fff",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "9999px",
  background: "#f3f4f6",
  color: "#111827",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const About: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "3rem 2rem",
      }}
    >
      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
        ( Jan-huh-vee )
      </h1>

      {/* Description */}
      <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "1000px", lineHeight: "1.6" }}>
        “Great things are done by a series of small things brought together.” — Vincent van Gogh
Hi! I’m Janhavi, a digital experience designer. An observant streak (and a soft spot for shiny gadgets) pulled me into design, where I blend curiosity with craft to turn small, thoughtful details into big, intuitive experiences.
When I’m off-screen, I’m usually star-spotting, chasing light with my camera, or swapping music recs. 🎶
      </p>

      {/* My Design Process */}
      <section style={{ marginTop: "3rem", width: "100%", maxWidth: "1000px" }} aria-labelledby="process-title">
        <h2 id="process-title" style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
          My Design Process
        </h2>

        <div style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
          A lightweight, repeatable flow I use across projects.
        </div>

        <div style={gridStyle} role="list" aria-label="Design process steps">
          {steps.map((step, i) => (
            <article key={step.title} style={cardStyle} role="listitem" aria-label={step.title}>
              <div style={badgeStyle} aria-hidden>
                {i + 1}
              </div>
              <h3 style={{ fontSize: "1.1rem", color: "#111827", margin: "0 0 0.25rem" }}>
                {step.title}
              </h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
