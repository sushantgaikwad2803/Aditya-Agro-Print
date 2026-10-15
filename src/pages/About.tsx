// pages/About.tsx
import { Link } from "react-router-dom";
import "./About.css";

/* ---------- Types ---------- */
interface WhatWeDoItem {
  icon: string;
  title: string;
}

interface DetailBlock {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  listTitle: string;
  listItems: string[];
  closingParagraph?: string;
  image: string;
  imagePosition: "left" | "right";
}

interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

/* ---------- Data ---------- */
const whatWeDo: WhatWeDoItem[] = [
  {
    icon: "M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z",
    title: "Concept & design",
  },
  {
    icon: "M3 21l4-2 10-10-2-2L5 17l-2 4z M14 5l3-3 3 3-3 3z",
    title: "Material selection & sourcing",
  },
  {
    icon: "M3 21V8l4-2 4 2v13 M11 21V3l4-2 4 2v18",
    title: "Production & quality control",
  },
  {
    icon: "M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 19a2 2 0 100-4 2 2 0 000 4z M18.5 19a2 2 0 100-4 2 2 0 000 4z",
    title: "Logistics & delivery",
  },
];

const detailBlocks: DetailBlock[] = [
  {
    id: "design",
    title: "Design",
    subtitle: "Packaging developed with production in mind.",
    paragraphs: [
      "Every order is custom-built based on your product, application, and market requirements.",
      "We work closely with you to define structure, materials, and format, ensuring the final pack delivers both functionality and visual impact.",
    ],
    listTitle: "Capabilities include",
    listItems: [
      "Rotogravure and flexographic printing",
      "High-resolution graphics and colour consistency",
      "Custom formats across a wide range of flexible packaging",
    ],
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=900",
    imagePosition: "right",
  },
  {
    id: "sourcing",
    title: "Sourcing",
    subtitle:
      "We partner with established ISO-certified manufacturing facilities across key markets.",
    paragraphs: [],
    listTitle: "Our sourcing model focuses on",
    listItems: [
      "Selecting the right supplier for each packaging requirement",
      "Maintaining consistency across batches and volumes",
      "Accessing advanced manufacturing capabilities when required",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=900",
    imagePosition: "left",
  },
  {
    id: "quality",
    title: "Quality Control",
    subtitle: "Built into every stage, not inspected at the end.",
    paragraphs: [
      "Our team is actively involved throughout the production cycle to ensure consistency and compliance.",
    ],
    listTitle: "",
    listItems: [
      "On-ground inspections at partner facilities",
      "Defined quality benchmarks and process checks",
      "Continuous monitoring of production standards",
    ],
    closingParagraph:
      "Every product is aligned with strict quality expectations before it reaches you.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900",
    imagePosition: "right",
  },
  {
    id: "customer",
    title: "Customer Approach",
    subtitle: "Direct, responsive, and accountable.",
    paragraphs: [
      "We prioritise clear communication, quick turnaround, and long-term partnerships.",
    ],
    listTitle: "",
    listItems: [
      "Dedicated support across development and execution",
      "Confidential handling of all projects",
      "Consistent availability for technical and commercial queries",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
    imagePosition: "left",
  },
];

const whyChoose: WhyItem[] = [
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2",
    title: "30+ years of industry experience",
    description:
      "Providing expertise and proven solutions for over three decades",
  },
  {
    icon: "M3 12l3-3 4 4 8-8 M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6",
    title: "End-to-end flexible packaging capability",
    description: "Full-service capabilities from design to delivery",
  },
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z M2 12h20 M12 2c3 3 3 17 0 20 M12 2c-3 3-3 17 0 20",
    title: "Global sourcing with controlled quality",
    description: "Leveraging a worldwide network of trusted suppliers",
  },
  {
    icon: "M9 2h6v4H9z M5 6h14v16H5z M9 12h6 M9 16h4",
    title: "Cost-efficient, scalable solutions",
    description:
      "Offering competitive pricing without compromising quality",
  },
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z M8 13s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01",
    title: "Long-term relationships",
    description:
      "Building strong partnerships based on trust and reliability",
  },
];

/* ---------- Component ---------- */
const About = () => {
  return (
    <div className="about-page">
      {/* ---------- 1. HERO ---------- */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1600"
            alt=""
          />
          <div className="about-hero-overlay" />
        </div>

        <div className="container">
          <div className="about-hero-content">
            <nav className="about-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="about-breadcrumb-link">
                Home
              </Link>
              <span className="about-breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="about-breadcrumb-current">About</span>
            </nav>

            <h1 className="about-hero-title">
              Engineered packaging.{" "}
              <span className="about-text-accent">Delivered with precision.</span>
            </h1>

            <p className="about-hero-description">
              Net Benefit is a Mumbai-based flexible packaging partner serving
              industries across food, retail, industrial, and hospitality
              sectors. We combine material expertise, global sourcing, and
              process control to deliver packaging that performs at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 2. WHO WE ARE ---------- */}
      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <div className="about-who-visual" aria-hidden="true">
              <div className="about-who-card">
                <span className="about-who-dot" />
                <div className="about-who-card-text">
                  <span>LOGISTIC</span>
                  <span>MANAGEMENT</span>
                </div>
              </div>
            </div>

            <div className="about-split-content">
              <span className="about-eyebrow">Who We Are</span>
              <h2 className="about-h2">
                Three decades of packaging expertise.
              </h2>
              <p className="about-lead">
                Net Benefit is a flexible packaging supplier serving customers
                globally across diverse industries, including retail, food
                service, industrial, and hospitality sectors.
              </p>

              <hr className="about-divider" />

              <p className="about-lead">
                With over 30 years of hands-on experience in the packaging
                industry, our team has been directly involved in manufacturing
                operations supplying global brands.
              </p>
              <p className="about-lead">
                This strong foundation enables us to deliver packaging
                solutions that are not only well-designed but also reliable,
                scalable, and aligned with production and logistics
                requirements.
              </p>

              <div className="about-badges">
                <div className="about-badge">
                  <span className="badge-value">30+ Years</span>
                  <span className="badge-label">Industry Experience</span>
                </div>
                <div className="about-badge">
                  <span className="badge-value">Hands-on</span>
                  <span className="badge-label">Manufacturing Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. WHAT WE DO ---------- */}
      <section className="about-section about-section-alt">
        <div className="container">
          <header className="about-section-head">
            <span className="about-eyebrow">What We Do</span>
            <h2 className="about-h2">We manage the complete packaging lifecycle.</h2>
            <p className="about-lead">
              From concept and design to material sourcing, production, quality
              control, and final delivery — every stage is managed by our team.
            </p>
          </header>

          <div className="about-what-grid">
            {whatWeDo.map((item, i) => (
              <article key={i} className="about-what-card">
                <div className="about-what-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <span className="about-what-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="about-what-title">{item.title}</h3>
              </article>
            ))}
          </div>

          <p className="about-what-footer">
            Each solution is developed to balance performance, cost, and
            scalability.
          </p>
        </div>
      </section>

      {/* ---------- 4. DETAIL BLOCKS ---------- */}
      <section className="about-section">
        <div className="container">
          <header className="about-section-head">
            <span className="about-eyebrow">Our Process</span>
            <h2 className="about-h2">How we deliver</h2>
            <p className="about-lead">
              Four pillars that guide every project — design, sourcing, quality
              control, and customer approach.
            </p>
          </header>

          <div className="about-details">
            {detailBlocks.map((block, idx) => (
              <div
                key={block.id}
                className={`about-detail-block ${
                  block.imagePosition === "right" ? "reverse" : ""
                }`}
              >
                <div className="about-detail-card">
                  <span className="about-detail-index" aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <h3>{block.title}</h3>
                  <h4 className="about-detail-subheading">
                    {block.subtitle}
                  </h4>

                  {block.paragraphs.map((p, i) => (
                    <p key={i} className="about-detail-paragraph">
                      {p}
                    </p>
                  ))}

                  {block.listItems.length > 0 && (
                    <div className="about-detail-list-wrapper">
                      {block.listTitle && (
                        <p className="about-detail-list-title">
                          {block.listTitle}
                        </p>
                      )}
                      <ul className="about-detail-list">
                        {block.listItems.map((item, i) => (
                          <li key={i}>
                            <span
                              className="about-check"
                              aria-hidden="true"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {block.closingParagraph && (
                    <p className="about-detail-paragraph about-detail-closing">
                      {block.closingParagraph}
                    </p>
                  )}
                </div>

                <div className="about-detail-image">
                  <img src={block.image} alt={block.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. WHY CHOOSE US ---------- */}
      <section className="about-section about-section-alt">
        <div className="container">
          <header className="about-section-head">
            <span className="about-eyebrow">Why Choose Us</span>
            <h2 className="about-h2">Why Choose Net Benefit?</h2>
            <p className="about-lead">
              We are a one-stop solution to help your business scale higher.
            </p>
          </header>

          <div className="about-why-grid">
            {whyChoose.map((item, i) => (
              <article key={i} className="about-why-card">
                <div className="about-why-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6. CTA ---------- */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">
              Looking for a reliable packaging partner?
            </h2>
            <p className="about-cta-text">
              Work with a team that understands both the technical and
              commercial aspects of flexible packaging.
            </p>
            <Link to="/contact" className="about-cta-btn">
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

export default About;