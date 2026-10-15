import { Link } from "react-router-dom";
import "./Services.css";

/* ---------- Types ---------- */
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

/* ---------- Data ---------- */
const services: Service[] = [
  {
    id: 1,
    title: "Prototype Development",
    description:
      "Rapid prototyping and sampling to validate your packaging concepts before full-scale production.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "Design",
  },
  {
    id: 2,
    title: "Technical Assistance",
    description:
      "Expert guidance on material selection, barrier properties, and structural integrity for your products.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "Consulting",
  },
  {
    id: 3,
    title: "Artwork & Custom Design",
    description:
      "In-house design support to ensure your packaging artwork is print-ready, compliant, and visually striking.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "Creative",
  },
  {
    id: 4,
    title: "Warehousing Solutions",
    description:
      "Secure domestic and overseas warehousing to optimize your supply chain and inventory management.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "Logistics",
  },
  {
    id: 5,
    title: "Global Export Services",
    description:
      "Seamless export of assorted agro products and packaging materials with comprehensive logistical support.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "Export",
  },
];

/* ---------- Component ---------- */
const Services = () => {
  return (
    <div className="services-page">
      {/* ---------- 1. HERO ---------- */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-wrapper">
            <nav className="hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="breadcrumb-current">Services</span>
            </nav>

            <h1 className="hero-title">
              Comprehensive support for{" "}
              <span className="text-accent">your packaging journey</span>
            </h1>

            <p className="hero-description">
              Beyond manufacturing, we offer end-to-end services including
              prototyping, custom design, technical consulting, and global
              logistics to ensure your product succeeds in the market.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 2. SERVICES GRID ---------- */}
      <section className="services-grid-section" id="services-grid">
        <div className="container">
          <header className="services-header">
            <h2 className="services-heading">What we offer</h2>
            <p className="services-subheading">
              Five core services designed to move your packaging from concept
              to market — reliably and efficiently.
            </p>
          </header>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <span className="service-tag">{service.tag}</span>
                  <div className="service-image-overlay" aria-hidden="true" />
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <span className="service-cta" aria-hidden="true">
                    Learn more
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. CTA ---------- */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to elevate your packaging?</h2>
            <p className="cta-text">
              Partner with us for reliable, end-to-end packaging solutions
              tailored to your exact specifications and business goals.
            </p>
            <Link to="/contact" className="cta-btn">
              Get In Touch
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

export default Services;