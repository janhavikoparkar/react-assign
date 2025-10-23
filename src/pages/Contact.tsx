import { useState } from "react";

const Contact = () => {
  // Optional: simple form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 2rem",
      }}
    >
      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
        Contact Me
      </h1>

      {/* Description */}
      <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "600px", textAlign: "center", marginBottom: "2rem" }}>
        Have a question or want to work together? Fill out the form below and I will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.8rem 1.2rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 500,
            transition: "background-color 0.3s ease",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// Reusable input styling
const inputStyle: React.CSSProperties = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default Contact;
