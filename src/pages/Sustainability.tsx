import { Link } from "react-router-dom";
import "./Sustainability.css";

/* ---------- Types ---------- */
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface BulletSection {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  image: string;
  imagePosition: "left" | "right";
}

/* ---------- Data ---------- */
const approachStats: FeatureItem[] = [
  {
    icon: "M3 3h18v18H3z M9 9h6v6H9z",
    title: "Lightweight structures",
    description: "",
  },
  {
    icon: "M3 17l6-6 4 4 8-8",
    title: "Reduced emissions",
    description: "",
  },
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z",
    title: "Lower food waste",
    description: "",
  },
];

const pcrConsiderations: FeatureItem[] = [
  {
    icon: "M3 3v18h18 M7 15l4-4 3 3 5-5",
    title: "Material & Performance",
    description:
      "Processed, cleaned, and re-engineered for use in multi-layer laminates with controlled barrier properties.",
  },
  {
    icon: "M12 3c-4 6-7 9-7 12a7 7 0 1014 0c0-3-3-6-7-12z",
    title: "Environmental Impact",
    description:
      "Significantly lower carbon footprint compared to virgin plastics while maintaining structural integrity.",
  },
  {
    icon: "M5 3h14v18H5z M9 8h6 M9 12h6 M9 16h4",
    title: "Application",
    description:
      "Suitable for a wide range of packaging formats, including high-barrier food applications.",
  },
  {
    icon: "M4 7h16 M9 7V4h6v3 M6 7l1 14h10l1-14",
    title: "Future Consideration",
    description:
      "Recycling of flexible laminates requires specialised collection systems, which are rapidly evolving across global markets.",
  },
];

const bulletSections: BulletSection[] = [
  {
    id: "recyclable",
    title: "Recyclable Packaging",
    subtitle: "Designed for circularity without compromising performance.",
    intro:
      "Monolayer and laminated polyethylene structures engineered for compatibility with existing recycling streams.",
    bullets: [
      "Optional barrier layers for oxygen, moisture, and aroma protection",
      "High-definition printing with maintained recyclability",
      "Suitable for liquids, solids, powders, and granulates",
      "Available in stand-up pouches, bags, and roll stock",
    ],
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142073/sustainability.png",
    imagePosition: "right",
  },
  {
    id: "biodegradable",
    title: "Biodegradable Packaging",
    subtitle: "Engineered to break down under controlled conditions.",
    intro:
      "Bioplastic-based laminated or monolayer structures designed for gradual degradation through specialised additives or bio-based materials.",
    bullets: [
      "Certified biodegradable polymers and adhesives",
      "Maintains product freshness and shelf-life requirements",
      "Ideal for organic and eco-conscious brand positioning",
      "Available in custom formats to match your product line",
    ],
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142076/sustainability2.png",
    imagePosition: "left",
  },
];

/* ---------- Component ---------- */
const Sustainability = () => {
  return (
    <div className="sustainability-page">
      {/* 1. HERO */}
      <section className="sus-hero">
        <div className="container">
          <div className="hero-wrapper">
            <nav className="hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="breadcrumb-current">Sustainability</span>
            </nav>

            <h1 className="hero-title">
              Sustainable packaging,{" "}
              <span className="text-accent">engineered for performance</span>
            </h1>

            <p className="hero-description">
              Our approach is built on a simple principle:{" "}
              <strong>Reduce, Reuse, Recycle</strong>, supported by material
              innovation, process control, and responsible sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="sus-approach">
        <div className="container">
          <div className="approach-block">
            <div className="approach-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142075/sustainability3.png"
                alt="Sustainable packaging materials"
                loading="lazy"
              />
            </div>

            <div className="approach-content">
              <h2>Our Approach</h2>
              <h3 className="approach-subheading">
                Balancing performance with environmental responsibility.
              </h3>
              <p className="approach-paragraph">
                Flexible packaging, when engineered correctly, offers measurable
                environmental advantages – lower material usage, reduced
                transport weight, and extended product shelf life.
              </p>

              <div className="approach-stats">
                {approachStats.map((stat, i) => (
                  <div key={i} className="approach-stat">
                    <div className="stat-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={stat.icon} />
                      </svg>
                    </div>
                    <span className="stat-label">{stat.title}</span>
                  </div>
                ))}
              </div>

              <p className="approach-paragraph">
                At the same time, we focus on advancing recyclable,
                biodegradable, and compostable formats to minimise long-term
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALTERNATING BLOCKS */}
      {bulletSections.map((section) => (
        <section key={section.id} className="sus-block-section">
          <div className="container">
            <div
              className={`sus-block ${
                section.imagePosition === "right" ? "reverse" : ""
              }`}
            >
              <div className="sus-card">
                <h2>{section.title}</h2>
                <h3 className="sus-subheading">{section.subtitle}</h3>
                <p className="sus-intro">{section.intro}</p>
                <ul className="sus-bullets">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>
                      <svg
                        className="bullet-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sus-image">
                <img src={section.image} alt={section.title} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4. PCR / PIR LAMINATES */}
      <section className="sus-pcr-section">
        <div className="container">
          <div className="pcr-block">
            <div className="pcr-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142074/sustainability1.png"
                alt="PCR PIR Laminates packaging"
                loading="lazy"
              />
            </div>

            <div className="pcr-card">
              <h2>PCR / PIR Laminates</h2>
              <p>
                PCR (Post-Consumer Recycled) and PIR (Post-Industrial Recycled)
                laminates are developed using recycled polymers such as LDPE and
                PET, significantly reducing dependence on virgin materials.
              </p>
              <p>
                By integrating these materials, we help brands meet their
                corporate sustainability goals while maintaining the high
                barrier and durability standards your products require.
              </p>
            </div>
          </div>

          <div className="pcr-features">
            {pcrConsiderations.map((feat, i) => (
              <div key={i} className="pcr-feature-card">
                <div className="pcr-feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={feat.icon} />
                  </svg>
                </div>
                <h4>{feat.title}</h4>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMITMENT BAND */}
      <section className="sus-commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <p className="commitment-subheading">
              Continuous improvement across materials, processes, and
              partnerships.
            </p>
            <p className="commitment-text">
              We work closely with suppliers, converters, and brands to develop
              solutions that align with evolving environmental regulations and
              market expectations, without compromising on performance, safety,
              or scalability.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TRANSITION CTA */}
      <section className="sus-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Looking to transition to sustainable packaging?
            </h2>
            <p className="cta-text">
              We help you identify the right materials and formats based on your
              product, application, and market requirements.
            </p>
            <Link to="/contact" className="cta-btn">
              Speak to Our Experts
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

export default Sustainability; 