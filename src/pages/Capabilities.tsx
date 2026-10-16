import { Link } from "react-router-dom";
import "./Capabilities.css";

/* ---------- Types ---------- */
interface Capability {
  id: number;
  title: string;
  description: string;
  image: string;
  to: string;
}

/* ---------- Data ---------- */
const capabilities: Capability[] = [
  {
    id: 1,
    title: "Film Extrusion",
    description: "High-performance mono and multi-layer film production.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792146232/Extrusion1.webp",
    to: "/capabilities/extrusion",
  },
  {
    id: 2,
    title: "Rotogravure Printing",
    description:
      "Vibrant, high-definition printing with precise color registration.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792146565/Printing.webp",
    to: "/capabilities/printing",
  },
  {
    id: 3,
    title: "Solvent-less Lamination",
    description:
      "Eco-friendly, high-bond strength lamination for durable packaging.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792146746/Lamination.webp",
    to: "/capabilities/lamination",
  },
  {
    id: 4,
    title: "Slitting & Finishing",
    description:
      "Precision cutting and finishing tailored to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800&h=500",
    to: "/capabilities/slitting-finishing",
  },
  {
    id: 5,
    title: "Pouch Manufacturing",
    description: "Stand-up, zippered, and custom-shaped pouch solutions.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792147042/pouch.webp",
    to: "/capabilities/pouch-manufacturing",
  },
  {
    id: 6,
    title: "In-House Gravure Cylinders",
    description:
      "Proprietary cylinder engraving for unmatched print quality control.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792147459/copper-plated-cylinders.webp",
    to: "/capabilities/in-house-gravure",
  },
  {
    id: 7,
    title: "Quality Assurance",
    description:
      "Rigorous in-line and offline testing to guarantee zero defects.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792147590/Quality.webp",
    to: "/capabilities/quality-assurance",
  },
  {
    id: 8,
    title: "Shipping & Logistics",
    description:
      "Reliable, global supply chain management and on-time delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
    to: "/capabilities/shipping-logistics",
  },
];

/* ---------- Component ---------- */
const Capabilities = () => {
  return (
    <div className="capabilities-page">
      {/* ---------- 1. HERO ---------- */}
      <section className="cap-hero">
        <div className="cap-container">
          <div className="cap-hero-content">
            <nav className="cap-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="cap-breadcrumb-link">
                Home
              </Link>
              <span className="cap-breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="cap-breadcrumb-current">Capabilities</span>
            </nav>

            <h1 className="cap-hero-title">
              Packaging built{" "}
              <span className="cap-text-accent">around your product</span>
            </h1>

            <p className="cap-hero-description">
              Click any product below to view full specifications, materials,
              and application formats. Each format is engineered around real
              supply-chain constraints — not catalogue theory.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 2. CAPABILITIES GRID ---------- */}
      <section className="cap-grid-section" id="capabilities-grid">
        <div className="cap-container">
          <header className="cap-grid-header">
            <h2 className="cap-grid-heading">Explore our capabilities</h2>
            <p className="cap-grid-subheading">
              Eight integrated processes — from film extrusion to global
              logistics — under one roof.
            </p>
          </header>

          <div className="cap-grid">
            {capabilities.map((cap, index) => (
              <Link
                key={cap.id}
                to={cap.to}
                className="cap-card"
                style={{ animationDelay: `${index * 0.06}s` }}
                aria-label={`Explore ${cap.title} capabilities`}
              >
                <div className="cap-card-image">
                  <img
                    src={cap.image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="cap-card-overlay" aria-hidden="true" />
                </div>
                <div className="cap-card-content">
                  <h3>{cap.title}</h3>
                  <p className="cap-card-desc">{cap.description}</p>
                  <span className="cap-card-cta" aria-hidden="true">
                    View details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. CTA ---------- */}
      <section className="cap-cta">
        <div className="cap-container">
          <div className="cap-cta-content">
            <h2 className="cap-cta-title">
              Looking for reliable packaging solutions?
            </h2>
            <p className="cap-cta-text">
              From film production to pouch manufacturing, we provide complete
              end-to-end packaging services under one roof. Let's build
              something great.
            </p>
            <Link to="/contact" className="cap-cta-btn"> 
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;