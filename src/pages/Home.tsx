// pages/Home.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.jpeg";

/* ============================================================
   TYPES
   ============================================================ */

type HeroSlide = {
  title: string;
  description: string;
  image: string;
};

type Stat = { icon: string; value: string; label: string };
type Product = { title: string; description: string; image: string; link: string };
type Feature = { icon: string; title: string; description: string; tag: string };
type Industry = { label: string; description: string; image: string };
type Sustainability = { icon: string; title: string };

/* ============================================================
   DATA
   ============================================================ */

const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Flexible Packaging for a Bolder, Greener Tomorrow",
    description:
      "We engineer packaging solutions that reduce waste, enhance shelf appeal, and keep your supply chain moving — backed by three decades of expertise.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format",
  },
  {
    title: "Engineered Films. Proven Performance.",
    description:
      "From monolayer to 9-layer co-extruded structures, our films deliver barrier protection, seal integrity, and machine performance at scale.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format",
  },
  {
    title: "Sustainable Packaging, Delivered.",
    description:
      "Recyclable, biodegradable, and compostable formats designed around your product, your market, and your circularity goals.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&auto=format",
  },
];

const STATS: Stat[] = [
  { icon: "🏆", value: "15+ Years", label: "Industry Expertise" },
  { icon: "👥", value: "100+ Years", label: "Combined Leadership Experience" },
  { icon: "🌍", value: "50+ Countries", label: "Global Reach" },
  { icon: "📅", value: "~15 Days", label: "Typical Lead Time" },
  { icon: "✅", value: "ISO | BRC | FDA", label: "Certified" },
];

const PRODUCTS: Product[] = [
  { title: "Pouches", description: "Functional, high-impact consumer packaging", image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&auto=format", link: "/products" },
  { title: "Roll Stock", description: "Engineered for high-speed FFS applications", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&auto=format", link: "/products" },
  { title: "High-Barrier Films", description: "Advanced protection for extended shelf life", image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&auto=format", link: "/products" },
  { title: "Thermoforming Films", description: "High-strength forming solutions", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&auto=format", link: "/products" },
  { title: "Specialty Films", description: "UHT and Shrink Packaging Solutions", image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&auto=format", link: "/products" },
  { title: "BOPP Poly Woven Bags", description: "Custom films tailored for diverse food packaging", image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&auto=format", link: "/products" },
  { title: "Wicket Bag", description: "Custom bags for fast, efficient packaging", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&auto=format", link: "/products" },
  { title: "Laminated Films", description: "Premium multi-layer structures for superior protection", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=400&auto=format", link: "/products" },
];

const WHY_CHOOSE: Feature[] = [
  { icon: "⚙️", title: "Deep Technical Expertise", description: "Decades of hands-on packaging experience delivering high-performance solutions.", tag: "Expertise" },
  { icon: "⏱️", title: "Reliable Turnaround", description: "Efficient processes ensuring consistent and on-time delivery every time.", tag: "Efficiency" },
  { icon: "🎯", title: "Customised Solutions", description: "Packaging structures engineered to meet specific product and market needs.", tag: "Tailored" },
  { icon: "🛡️", title: "Certified & Compliant", description: "Fully aligned with global quality, safety, and regulatory standards.", tag: "Quality" },
];

const INDUSTRIES: Industry[] = [
  { label: "Meat & Cheese", description: "Vacuum & modified atmosphere packaging for freshness", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&auto=format" },
  { label: "Dairy", description: "Sealed, shelf-stable packaging that preserves taste", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format" },
  { label: "Snacks & Confectionery", description: "High-barrier films for crunch, aroma & long shelf life", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format" },
  { label: "Bakery", description: "Moisture-controlled packaging for extended softness", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format" },
  { label: "Tea & Coffee", description: "Aroma-lock & flavour-preserving packaging solutions", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&auto=format" },
  { label: "Beverages & Drinks", description: "Leak-proof, high-strength films for liquid packaging", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&auto=format" },
  { label: "Sanitary", description: "Hygienic, safe & contamination-free packaging", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format" },
  { label: "Household", description: "Durable, easy-tear packaging for everyday essentials", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&auto=format" },
  { label: "Pet Food & Pet Care", description: "Freshness-sealed, odour-lock packaging for pet products", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format" },
  { label: "Medical & Pharma", description: "Sterile, tamper-evident & compliant medical packaging", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format" },
];

const SUSTAINABILITY: Sustainability[] = [
  { icon: "♻️", title: "Recyclable" },
  { icon: "🌱", title: "Biodegradable" },
  { icon: "🌿", title: "Compostable" },
];

/* ============================================================
   SHARED UI
   ============================================================ */

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ============================================================
   CAROUSEL HOOK
   ============================================================ */

function useCarousel(length: number, interval = 6000) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + length) % length),
    [length]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [isPaused, next, interval]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return { index, isPaused, setIsPaused, prev, next, goTo };
}

/* ============================================================
   PAGE
   ============================================================ */

export default function Home() {
  const { index, isPaused, setIsPaused, prev, next, goTo } = useCarousel(
    HERO_SLIDES.length
  );
  const current = HERO_SLIDES[index];

  const dots = useMemo(
    () =>
      HERO_SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={`Go to slide ${i + 1}`}
          className={`hero-dot ${i === index ? "active" : ""}`}
          onClick={() => goTo(i)}
        />
      )),
    [index, goTo]
  );

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="hero"
        id="home"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Hero highlights"
      >
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-content">
          {/* LEFT: CONTENT */}
          <div className={`hero-text ${isPaused ? "" : "is-animating"}`}>
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Flexible Packaging Solutions
            </span>

            <h1>{current.title}</h1>
            <p>{current.description}</p>

            <div className="hero-actions">
              <Link to="/contact" className="hero-btn">
                Speak to Our Experts
                <ArrowIcon />
              </Link>
              <Link to="/products" className="hero-btn ghost">
                Explore Products
              </Link>
            </div>

            <div className="hero-controls">
              <button
                type="button"
                className="hero-arrow"
                onClick={prev}
                aria-label="Previous slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="hero-dots" role="tablist" aria-label="Hero slides">
                {dots}
              </div>

              <button
                type="button"
                className="hero-arrow"
                onClick={next}
                aria-label="Next slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: GALLERY */}
          <div className="hero-gallery">
            <div className="hero-gallery-track" aria-live="polite">
              {HERO_SLIDES.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`hero-gallery-slide ${i === index ? "active" : ""}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${HERO_SLIDES.length}`}
                  aria-hidden={i !== index}
                >
                  <img src={slide.image} alt="" loading={i === 0 ? "eager" : "lazy"} />
                </div>
              ))}
            </div>

            <div className="hero-gallery-accent" aria-hidden="true" />

            <div className="hero-logo-badge">
              <img src={logo} alt="Aditya Agro Print logo" />
            </div>

            <div className="hero-gallery-counter" aria-hidden="true">
              <span className="current">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="divider">/</span>
              <span className="total">
                {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="stats-bar" aria-label="Company statistics">
        <div className="container">
          <div className="stats-bar-grid">
            {STATS.map((item) => (
              <div key={item.label} className="stats-bar-item">
                <div className="icon" aria-hidden="true">{item.icon}</div>
                <div className="value">{item.value}</div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-header">
            <h2>Your Trusted Partner</h2>
          </div>

          <div className="about-content">
            <div className="about-box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10"
                alt="Team member"
                className="person-image"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <p>
                Aditya Agro Print Ind is a flexible packaging solutions partner
                combining deep technical expertise with global sourcing
                capabilities. We design and deliver packaging that optimises
                performance, enhances shelf presence, and meets evolving
                regulatory and sustainability standards.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <span className="icon" aria-hidden="true">⚙️</span>
                  <span>Technical Expertise</span>
                </div>
                <div className="about-feature">
                  <span className="icon" aria-hidden="true">🌐</span>
                  <span>Global Execution</span>
                </div>
                <div className="about-feature">
                  <span className="icon" aria-hidden="true">📋</span>
                  <span>Application-Focused Solutions</span>
                </div>
              </div>

              <Link to="/about" className="about-more-btn">
                Learn More About Us
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products-section" id="products">
        <div className="container">
          <div className="products-header">
            <h2>Innovative Packaging</h2>
            <p className="section-subtitle">
              We provide versatile and reliable flexible packaging solutions
              designed to protect products, maintain quality, and meet the
              evolving needs of businesses across industries.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <Link key={p.title} to={p.link} className="product-card">
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.title} className="product-img" loading="lazy" />
                </div>
                <div className="product-footer">
                  <h3>{p.title}</h3>
                  <span className="product-tag">{p.description}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="products-cta">
            <Link to="/products" className="section-btn">
              View All Products
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <h2>Why Partner With Us</h2>
          </div>
          <div className="why-grid">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon-wrap">
                  <span className="icon" aria-hidden="true">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="why-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="capabilities-section" id="capabilities">
        <div className="container">
          <div className="capabilities-content">
            <div className="capabilities-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format"
                alt="Manufacturing capabilities"
                loading="lazy"
              />
              <div className="capabilities-image-accent" aria-hidden="true" />
            </div>

            <div className="capabilities-text">
              <h2>Potential</h2>
              <p>
                Aditya Agro Print provides comprehensive packaging solutions
                using cutting-edge materials and technology. Whether you need
                unprinted film or stunning printed graphics with advanced
                lamination, our state-of-the-art infrastructure delivers
                excellence.
              </p>

              <div className="capabilities-actions">
                <Link to="/capabilities" className="section-btn">
                  Explore All Capabilities
                  <ArrowIcon />
                </Link>
                <Link to="/services" className="section-btn ghost">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="industries-header">
            <h2>Industries We Empower</h2>
            <p>
              We support a broad range of sectors with smart procurement and
              packaging supply chain solutions, helping businesses optimize
              costs, improve efficiency, and scale operations.
            </p>
          </div>

          <div className="industries-grid">
            {INDUSTRIES.map((item) => (
              <Link to="/industries" key={item.label} className="industry-card">
                <div className="industry-img-wrap">
                  <img src={item.image} alt={item.label} loading="lazy" />
                </div>
                <div className="industry-body">
                  <h3 className="industry-label">{item.label}</h3>
                  <p className="industry-description">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUSTAINABILITY ================= */}
      <section className="sustainability-section" id="sustainability">
        <div className="container">
          <div className="sustainability-header">
            <h2>Eco-Friendly Solutions</h2>
            <p>
              Focus on recyclable, reduced material, and next-gen sustainable
              packaging formats.
            </p>
          </div>

          <div className="sustainability-grid">
            {SUSTAINABILITY.map((item) => (
              <div key={item.title} className="sustainability-card">
                <div className="icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-inner">
            <h2>Let's Build Your Packaging Solution</h2>
            <p>
              Work with a team that understands materials, markets, and
              performance.
            </p>
            <Link to="/contact" className="cta-btn1">
              Get In Touch
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}