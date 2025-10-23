import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "flex-end", // ✅ Align items to top-right
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          margin: 0,
        }}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><Link to="/beyonddesign">BeyondDesign</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;