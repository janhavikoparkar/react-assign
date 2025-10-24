import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Me" },
  { to: "/beyonddesign", label: "BeyondDesign" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [elevated, setElevated] = useState(false); 
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
       
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: elevated ? "0 1px 8px rgba(0,0,0,0.04)" : "none",
        transition: "box-shadow .2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0.6rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "0.75rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
           
            background: "transparent",
            border: "none",
            backdropFilter: "none",
            boxShadow: "none",
          }}
        >
          {links.map((l, i) => {
            const active = pathname === l.to;
            const hovered = hoverIdx === i;

            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.65rem 0.9rem",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "#111827",
                    fontWeight: active ? 600 : 400,
                    
                    backgroundImage:
                      hovered || active
                        ? "linear-gradient(currentColor, currentColor)"
                        : "linear-gradient(transparent, transparent)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center calc(100% - 6px)",
                    backgroundSize: hovered || active ? "70% 2px" : "0% 2px",
                    transition:
                      "background-size .18s ease, color .18s ease, transform .18s ease",
                    
                    transform: hovered ? "translateY(-1px)" : "translateY(0)",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
