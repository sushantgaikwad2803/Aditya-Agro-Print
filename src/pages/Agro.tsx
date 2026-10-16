import { Link } from "react-router-dom";
import "./Agro.css";

/* ---------- Data ---------- */
interface Category {
  title: string;
  img: string;
}

const productCategories: Category[] = [
  { title: "Spices", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142042/agro2.webp" },
  { title: "Whole Spices", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142042/agro3.webp" },
  { title: "Oil & Seeds", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142043/agro4.webp" },
  { title: "Leaves and Herbs", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142044/agro5.webp" },
  { title: "Dry Fruits", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142044/agro6.webp" },
  { title: "Grocery", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142044/agro7.webp" },
  { title: "Namkeens", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142045/agro8.webp" },
  { title: "Jaggery", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142045/agro9.webp" },
  { title: "Pickles & Chutneys", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142046/agro10.webp" },
  { title: "Flours", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142046/agro11.webp" },
  { title: "Rice", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142047/agro12.webp" },
  { title: "Beans", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142047/agro13.webp" },
  { title: "Whole Grains", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142048/agro14.webp" },
  { title: "Festival Products", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142048/agro15.webp" },
  { title: "Religious & Spiritual Products", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142049/agro16.webp" },
  { title: "Home & Kitchen", img: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792142049/agro17.webp" },
];

/* ---------- Component ---------- */
const Agro = () => {
  return (
    <div className="agro-page">
      {/* ---------- 1. HERO ---------- */}
      <section className="agro-hero">
        <div className="agro-hero-bg" aria-hidden="true">
          <img
            src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792144793/Global_Agro_Trade_and_Logistics.png"
            alt=""
          />
          <div className="agro-hero-overlay" />
        </div>

        <div className="agro-container">
          <div className="agro-hero-content">
            <nav className="agro-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="agro-breadcrumb-link">Home</Link>
              <span className="agro-breadcrumb-sep" aria-hidden="true">/</span>
              <span className="agro-breadcrumb-current">Agro Commodities</span>
            </nav>

            <h1 className="agro-hero-title">
              Agro commodities{" "}
              <span className="agro-text-accent">exported worldwide</span>
            </h1>

            <p className="agro-hero-description">
              We export high-quality Indian agro commodities to global markets,
              supported by reliable sourcing, strict quality control, and
              consistent supply.
            </p>

            <Link to="/contact" className="agro-btn agro-btn-primary">
              Start Your Sourcing Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 2. RELIABLE SOURCING ---------- */}
      <section className="agro-section">
        <div className="agro-container">
          <div className="agro-split">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142042/agro.webp"
                alt="Farmers and supply chain"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">Our Promise</span>
              <h2 className="agro-h2">Reliable Sourcing. Consistent Supply.</h2>
              <p className="agro-lead">
                We work directly with farmers, aggregators, and processors
                across India to ensure consistent quality, traceability, and
                dependable supply for global markets.
              </p>

              <ul className="agro-pill-row">
                <li className="agro-pill">Quality control</li>
                <li className="agro-pill">Traceable sourcing</li>
                <li className="agro-pill">Export-ready supply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. PRODUCTS ---------- */}
      <section className="agro-section agro-section-alt">
        <div className="agro-container">
          <header className="agro-section-head">
            <span className="agro-eyebrow">Our Portfolio</span>
            <h2 className="agro-h2">Products We Source & Supply</h2>
            <p className="agro-lead">
              From bulk agro commodities to retail-ready assortments, we export
              a wide range of Indian products tailored for global markets and
              diaspora-driven demand.
            </p>
            <p className="agro-emphasis">
              Bulk shipments or mixed containers. Built around your market
              needs.
            </p>
          </header>

          <div className="agro-category-grid">
            {productCategories.map((product) => (
              <article key={product.title} className="agro-category-card">
                <div className="agro-category-image">
                  <img src={product.img} alt={product.title} loading="lazy" />
                </div>
                <div className="agro-category-body">
                  <h3>{product.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. MIXED CONTAINERS ---------- */}
      <section className="agro-section">
        <div className="agro-container">
          <div className="agro-split agro-split-reverse">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142050/agro18.webp"
                alt="Mixed containers"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">For Retail Buyers</span>
              <h2 className="agro-h2">Mixed Containers for Retail Buyers</h2>
              <p className="agro-lead">
                We support store owners across the USA, Canada, and Australia
                with curated mixed containers designed around customer demand
                and store formats.
              </p>
              <Link to="/contact" className="agro-btn agro-btn-primary">
                Download Catalogue
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v14M5 12l7 7 7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 5. QUALITY ---------- */}
      <section className="agro-section agro-section-alt">
        <div className="agro-container">
          <div className="agro-split">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142050/agro19.webp"
                alt="Quality control"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">Standards</span>
              <h2 className="agro-h2">Quality You Can Rely On</h2>
              <p className="agro-lead">
                Every batch is sourced, processed, and handled to meet
                international quality and safety standards.
              </p>

              <ul className="agro-checklist">
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Supplier verification and selection
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Grading and sorting at source
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Moisture and quality checks
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Export-compliant packaging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. GLOBAL DELIVERY ---------- */}
      <section className="agro-section">
        <div className="agro-container">
          <div className="agro-split agro-split-reverse">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142050/agro20.webp"
                alt="Global delivery"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">Logistics</span>
              <h2 className="agro-h2">Seamless Global Delivery</h2>
              <p className="agro-lead">
                We manage the complete export process, ensuring timely and
                secure delivery across international markets.
              </p>

              <ul className="agro-checklist">
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Documentation and compliance
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Bulk and containerised shipments
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Port handling and coordination
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Reliable delivery timelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. PRIVATE LABELLING ---------- */}
      <section className="agro-section agro-section-alt">
        <div className="agro-container">
          <div className="agro-split">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142051/agro21.webp"
                alt="Private labelling"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">Private Label</span>
              <h2 className="agro-h2">Need Packaging for Private Labelling?</h2>
              <p className="agro-lead">
                Alongside agro sourcing, we offer flexible packaging solutions
                and private labelling support to help you bring your own
                branded products to market.
              </p>
              <Link to="/services" className="agro-btn agro-btn-primary">
                Explore Packaging Solutions
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 8. WHY US ---------- */}
      <section className="agro-section">
        <div className="agro-container">
          <div className="agro-split agro-split-reverse">
            <div className="agro-split-image">
              <img
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792142051/agro22.webp"
                alt="Shipping containers"
                loading="lazy"
              />
            </div>

            <div className="agro-split-card">
              <span className="agro-eyebrow">Why Us</span>
              <h2 className="agro-h2">Why Work With Us</h2>

              <ul className="agro-checklist">
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Strong sourcing network across India
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Consistent quality across shipments
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Experience in global trade and logistics
                </li>
                <li>
                  <span className="agro-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Transparent and responsive communication
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </section>

      {/* ---------- 9. CTA ---------- */}
      <section className="agro-cta">
        <div className="agro-container">
          <div className="agro-cta-content">
            <h2 className="agro-cta-title">
              Looking Commodities from India?
            </h2>
            <p className="agro-cta-text">
              We help you identify the right products, specifications, and
              supply models for your market.
            </p>
            <Link to="/contact" className="agro-btn agro-btn-primary agro-btn-lg">
              Speak to Our Team
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="20" height="20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agro;