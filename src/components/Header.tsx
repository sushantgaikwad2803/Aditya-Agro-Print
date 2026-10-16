// components/Header.tsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

/* ============================================================
   ASSETS
   ============================================================ */

/** Cloudinary-hosted brand logo (auto format + auto quality, 2× retina) */
const LOGO_URL =
  "https://res.cloudinary.com/aewdi5ja/image/upload/f_auto,q_auto,w_180/v1792073269/logo_222.png";

/* ============================================================
   TYPES
   ============================================================ */

interface NavChild {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

/* ============================================================
   NAV DATA
   ============================================================ */

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Packaging Solutions", to: "/products" },
      { label: "Agro Commodities", to: "/agro" },
    ],
  },
  {
    label: "Capabilities",
    to: "/capabilities",
    children: [
      { label: "All Capabilities", to: "/capabilities" },
      { label: "Extrusion", to: "/capabilities/extrusion" },
      { label: "Printing", to: "/capabilities/printing" },
      { label: "Lamination", to: "/capabilities/lamination" },
      { label: "Slitting & Finishing", to: "/capabilities/slitting-finishing" },
      { label: "Pouch Manufacturing", to: "/capabilities/pouch-manufacturing" },
      { label: "In-House Gravure Cylinder", to: "/capabilities/in-house-gravure" },
      { label: "Quality Assurance", to: "/capabilities/quality-assurance" },
      { label: "Shipping & Logistics", to: "/capabilities/shipping-logistics" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "About Us", to: "/about" },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* ---------- Close everything on route change ---------- */
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  /* ---------- Close dropdowns on outside click ---------- */
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-item")) setOpenDropdown(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  /* ---------- Close mobile menu + dropdowns on resize ---------- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- Escape key closes menu & dropdowns ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------- Lock body scroll when mobile menu is open ---------- */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* ---------- Navbar shadow on scroll ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrapper">
        {/* ---------- Brand ---------- */}
        <Link
          to="/"
          className="logo-wrapper"
          onClick={() => setMenuOpen(false)}
          aria-label="Aditya Agro Print — Home"
        >
          <span className="logo-mark">
            <img
              className="logo-img"
              src={LOGO_URL}
              alt=""
              loading="eager"
              decoding="async"
            />
          </span>

          <span className="logo-divider" aria-hidden="true" />

          <span className="logo-text">
            <span className="logo-text-main">Aditya Agro Print Ind</span>
            <span className="logo-text-tag">
              Built for Business · Designed for Growth
            </span>
          </span>
        </Link>

        {/* ---------- Nav Links ---------- */}
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          {navItems.map((item) => {
            const isSectionActive =
              item.to !== "/" && location.pathname.startsWith(item.to);

            return (
              <div key={item.label} className="nav-item">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={`nav-link-btn ${
                        isSectionActive ? "active" : ""
                      }`}
                      onClick={(e) => toggleDropdown(item.label, e)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <span className="nav-caret" aria-hidden="true">
                        <svg viewBox="0 0 10 6" fill="none">
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`dropdown ${
                        openDropdown === item.label ? "open" : ""
                      }`}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          role="menuitem"
                          className={({ isActive }) =>
                            `dropdown-item ${isActive ? "active" : ""}`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            );
          })}

          {/* Mobile-only CTA */}
          <Link
            to="/contact"
            className="nav-btn nav-btn-mobile"
            onClick={() => setMenuOpen(false)}
          >
            <span>Get In Touch</span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              width="14"
              height="14"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ---------- Desktop CTA ---------- */}
        <Link
          to="/contact"
          className="nav-btn nav-btn-desktop"
          onClick={() => setMenuOpen(false)}
        >
          <span>Get In Touch</span>
        </Link>

        {/* ---------- Mobile menu toggle ---------- */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`menu-icon ${menuOpen ? "open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
}