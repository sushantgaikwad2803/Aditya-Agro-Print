// pages/Home.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faUsers,
  faGlobe,
  faCalendarCheck,
  faCertificate,
  faCog,
  faClock,
  faBullseye,
  faShieldAlt,
  faRecycle,
  faSeedling,
  faLeaf,
  faScrewdriverWrench,
  faClipboardList,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./Home.css";

/* ============================================================
   TYPES
   ============================================================ */
type HeroSlide = {
  title: string;
  description: string;
  image: string;
};

type Stat = { icon: IconDefinition; value: string; label: string };
type Product = { title: string; description: string; image: string; link: string };
type Feature = { icon: IconDefinition; title: string; description: string; tag: string };
type Industry = { label: string; description: string; image: string };
type Sustainability = { icon: IconDefinition; title: string };

/* ============================================================
   DATA
   ============================================================ */
const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Flexible Packaging for a Bolder, Greener Tomorrow",
    description:
      "We engineer packaging solutions that reduce waste, enhance shelf appeal, and keep your supply chain moving — backed by three decades of expertise.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139867/original-95185f79701af7148bbe55afc20eb587.webp",
  },
  {
    title: "Engineered Films. Proven Performance.",
    description:
      "From monolayer to 9-layer co-extruded structures, our films deliver barrier protection, seal integrity, and machine performance at scale.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139868/Industrial_Web-Handling_Machinery_Showcase.png",
  },
  {
    title: "Sustainable Packaging, Delivered.",
    description:
      "Recyclable, biodegradable, and compostable formats designed around your product, your market, and your circularity goals.",
    image:
      "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139924/Custom-Eco-Friendly-Packaging-Solutions-1024x683.webp",
  },
];

const STATS: Stat[] = [
  { icon: faTrophy, value: "15+ Years", label: "Industry Expertise" },
  { icon: faUsers, value: "100+ Years", label: "Combined Leadership Experience" },
  { icon: faGlobe, value: "50+ Countries", label: "Global Reach" },
  { icon: faCalendarCheck, value: "~15 Days", label: "Typical Lead Time" },
  { icon: faCertificate, value: "ISO | BRC | FDA", label: "Certified" },
];

const PRODUCTS: Product[] = [
  { title: "Pouches", description: "Functional, high-impact consumer packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139870/PureNest_Natural_Foods_Collection.png", link: "/products" },
  { title: "Roll Stock", description: "Engineered for high-speed FFS applications", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139853/VitaBloom_Packaging_Film_Collection.png", link: "/products" },
  { title: "High-Barrier Films", description: "Advanced protection for extended shelf life", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139935/Barrier_Film_Packaging_Showcase.png", link: "/products" },
  { title: "Thermoforming Films", description: "High-strength forming solutions", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139883/Premium_DairyEdge_Cheddar_Cheese_Display.png", link: "/products" },
  { title: "Specialty Films", description: "UHT and Shrink Packaging Solutions", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139872/Shrink-Wrapped_Packaging_Product_Display.png", link: "/products" },
  { title: "BOPP Poly Woven Bags", description: "Custom films tailored for diverse food packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139927/Colorful_BOPP_Woven_Sack_Display.png", link: "/products" },
  { title: "Wicket Bag", description: "Custom bags for fast, efficient packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139927/FreshBake_Sliced_Bread_Loaf.png", link: "/products" },
];

const WHY_CHOOSE: Feature[] = [
  { icon: faCog, title: "Deep Technical Expertise", description: "Decades of hands-on packaging experience delivering high-performance solutions.", tag: "Expertise" },
  { icon: faClock, title: "Reliable Turnaround", description: "Efficient processes ensuring consistent and on-time delivery every time.", tag: "Efficiency" },
  { icon: faBullseye, title: "Customised Solutions", description: "Packaging structures engineered to meet specific product and market needs.", tag: "Tailored" },
  { icon: faShieldAlt, title: "Certified & Compliant", description: "Fully aligned with global quality, safety, and regulatory standards.", tag: "Quality" },
];

const INDUSTRIES: Industry[] = [
  { label: "Meat & Cheese", description: "Vacuum & modified atmosphere packaging for freshness", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139883/Premium_DairyEdge_Cheddar_Cheese_Display.png" },
  { label: "Dairy", description: "Sealed, shelf-stable packaging that preserves taste", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792143442/dairy-product.webp" },
  { label: "Snacks & Confectionery", description: "High-barrier films for crunch, aroma & long shelf life", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139925/Crispella_Snack_Trio_Still_Life.png" },
  { label: "Bakery", description: "Moisture-controlled packaging for extended softness", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139926/Fresh_Bread_Packaging_Showcase.png" },
  { label: "Tea & Coffee", description: "Aroma-lock & flavour-preserving packaging solutions", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139871/Premium_Tea_and_Coffee_Packaging.png" },
  { label: "Beverages & Drinks", description: "Leak-proof, high-strength films for liquid packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139925/Fresh_Beverage_Pouches_with_Fruit_Splash.png" },
  { label: "Sanitary", description: "Hygienic, safe & contamination-free packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139927/Fresh_Feminine_Hygiene_Product_Showcase.png" },
  { label: "Household", description: "Durable, easy-tear packaging for everyday essentials", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139925/Complete_Household_Cleaning_Essentials_Collection.png" },
  { label: "Pet Food & Pet Care", description: "Freshness-sealed, odour-lock packaging for pet products", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139870/Premium_Complete_Balanced_Dog_Food.png" },
  { label: "Medical & Pharma", description: "Sterile, tamper-evident & compliant medical packaging", image: "https://res.cloudinary.com/aewdi5ja/image/upload/v1792139869/Paracetamol_Tablets_Packaging_Infographic.png" },
];

const SUSTAINABILITY: Sustainability[] = [
  { icon: faRecycle, title: "Recyclable" },
  { icon: faSeedling, title: "Biodegradable" },
  { icon: faLeaf, title: "Compostable" },
];

/* ============================================================
   SHARED UI
   ============================================================ */
function ArrowIcon() {
  return <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />;
}

/* ============================================================
   CAROUSEL HOOK (with touch swipe support)
   ============================================================ */
function useCarousel(length: number, interval = 5000) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  /* ---------- Touch swipe handlers ---------- */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setIsPaused(false);
      return;
    }
    const delta = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 50;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return {
    index,
    isPaused,
    setIsPaused,
    prev,
    next,
    goTo,
    touchHandlers: { onTouchStart, onTouchMove, onTouchEnd },
  };
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Home() {
  const { index, isPaused, setIsPaused, prev, next, goTo, touchHandlers } =
    useCarousel(HERO_SLIDES.length);
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
        {...touchHandlers}
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
                <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
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
                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
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
                  <img
                    src={slide.image}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="hero-gallery-accent" aria-hidden="true" />

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
                <div className="icon" aria-hidden="true">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
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
                decoding="async"
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
                  <span className="icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                  </span>
                  <span>Technical Expertise</span>
                </div>
                <div className="about-feature">
                  <span className="icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <span>Global Execution</span>
                </div>
                <div className="about-feature">
                  <span className="icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </span>
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
                  <img
                    src={p.image}
                    alt={p.title}
                    className="product-img"
                    loading="lazy"
                    decoding="async"
                  />
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
            <h2>The Value We Bring</h2>
          </div>
          <div className="why-grid">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon-wrap">
                  <span className="icon" aria-hidden="true">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
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
                src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792139928/Heliostar_S_Industrial_Printing_Line.png"
                alt="Manufacturing capabilities"
                loading="lazy"
                decoding="async"
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
              <div key={item.label} className="industry-card">
                <div className="industry-img-wrap">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="industry-body">
                  <h3 className="industry-label">{item.label}</h3>
                  <p className="industry-description">{item.description}</p>
                </div>
              </div>
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
                <div className="icon" aria-hidden="true">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
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