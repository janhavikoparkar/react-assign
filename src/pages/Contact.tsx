import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={page}>
      {/* Background blobs */}
      <div style={blobA} aria-hidden />
      <div style={blobB} aria-hidden />

      <div style={wrap}>
        <header style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h1 style={title}>Contact Me</h1>
          <p style={subtitle}>
            Have a question or want to collaborate? Drop a message — I’ll get back soon.
          </p>
        </header>

        <form onSubmit={handleSubmit} style={card} aria-label="Contact form">
          <div style={row}>
            <div style={col}>
              <label htmlFor="name" style={label}>Your Name</label>
              <input
                id="name" name="name" type="text" required
                value={formData.name} onChange={handleChange}
                style={input}
                placeholder="Janhavi Koparkar"
              />
            </div>
            <div style={col}>
              <label htmlFor="email" style={label}>Email</label>
              <input
                id="email" name="email" type="email" required
                value={formData.email} onChange={handleChange}
                style={input}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div style={colFull}>
            <label htmlFor="subject" style={label}>Subject</label>
            <input
              id="subject" name="subject" type="text" required
              value={formData.subject} onChange={handleChange}
              style={input}
              placeholder="Let’s work together"
            />
          </div>

          <div style={colFull}>
            <label htmlFor="message" style={label}>Message</label>
            <textarea
              id="message" name="message" rows={5} required
              value={formData.message} onChange={handleChange}
              style={{ ...input, resize: "vertical" }}
              placeholder="Tell me a bit about your project or question…"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" style={button}>
              Send Message
            </button>
          </div>
        </form>

        <footer style={note}>
          <small>Prefer email? <span style={{ fontWeight: 600 }}>janhavi.koparkar@gmail.com</span></small>
        </footer>
      </div>
    </div>
  );
};


const page: React.CSSProperties = {
  position: "relative",
  minHeight: "100vh",
  padding: "4rem 1.5rem",
  background:
    "radial-gradient(1200px 600px at 10% -10%, #e8f2ff 0%, transparent 60%)," +
    "radial-gradient(1000px 600px at 100% 0%, #ffeef6 0%, transparent 60%)," +
    "linear-gradient(180deg, #fbfbfc 0%, #f5f7fb 100%)",
};

const blobA: React.CSSProperties = {
  position: "absolute", top: "-80px", left: "-80px", width: 240, height: 240,
  borderRadius: "50%", background: "rgba(120, 176, 255, 0.25)", filter: "blur(40px)",
};

const blobB: React.CSSProperties = {
  position: "absolute", top: "-60px", right: "-60px", width: 200, height: 200,
  borderRadius: "50%", background: "rgba(255, 138, 187, 0.22)", filter: "blur(42px)",
};

const wrap: React.CSSProperties = {
  maxWidth: 860, margin: "0 auto", position: "relative",
};

const title: React.CSSProperties = {
  fontSize: "2.25rem", margin: 0, color: "#1f2937", letterSpacing: "-0.02em",
};

const subtitle: React.CSSProperties = {
  margin: "0.5rem auto 0", maxWidth: 560, color: "#4b5563", lineHeight: 1.6,
};

const card: React.CSSProperties = {
  backdropFilter: "saturate(140%) blur(8px)",
  background: "rgba(255,255,255,0.75)",
  border: "1px solid rgba(17, 24, 39, 0.06)",
  boxShadow:
    "0 10px 30px rgba(31,41,55,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
  borderRadius: 16,
  padding: "1.25rem",
};

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  marginBottom: "1rem",
 
};

const col: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: "0.375rem",
};

const colFull: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1rem",
};

const label: React.CSSProperties = {
  fontSize: "0.9rem", color: "#374151", fontWeight: 600,
};

const input: React.CSSProperties = {
  padding: "0.85rem 0.95rem",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  background:
    "linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9))," +
    "linear-gradient(180deg, rgba(255,255,255,0.3), rgba(249,250,251,0.8))",
  boxShadow:
    "inset 0 1px 1px rgba(0,0,0,0.03), 0 1px 0 rgba(255,255,255,0.6)",
  outline: "none",
  fontSize: "1rem",
  color: "#111827",
} as const;

// Add focus style with JS since we’re inline-styling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Object.assign as any)(input, {
  transition: "box-shadow 140ms ease, border-color 140ms ease",
});
const button: React.CSSProperties = {
  padding: "0.85rem 1.2rem",
  background:
    "linear-gradient(180deg, #111827, #0b1220)",
  color: "#fff",
  border: "1px solid #0b1220",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 600,
  letterSpacing: "0.01em",
  boxShadow: "0 6px 16px rgba(17,24,39,0.18)",
  transition: "transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease",
};

const note: React.CSSProperties = {
  textAlign: "center",
  marginTop: "1rem",
  color: "#6b7280",
};

/* Simple responsive tweak */
if (typeof window !== "undefined" && window.matchMedia) {
  const twoCol = window.matchMedia("(min-width: 700px)");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (twoCol.matches) (row as any).gridTemplateColumns = "1fr 1fr";
}

export default Contact;
