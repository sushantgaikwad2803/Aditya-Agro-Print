// pages/capabilities/ShippingLogistics.tsx
import './ShippingLogistics.css';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Global Coverage',
    description:
      'International and domestic logistics handled for every order, regardless of size.',
  },
  {
    id: 2,
    title: 'Safe Transit',
    description:
      'Your packaging travels from the manufacturing plant to your location safely and cost-effectively.',
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    description:
      'We maintain the highest delivery timeliness standards so your business never runs out of packaging.',
  },
];

const ShippingLogistics = () => {
  return (
    <div className="shipping-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <span className="breadcrumb-eyebrow">Our Capabilities</span>
            <h1>Shipping &amp; Logistics</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Text Card) */}
      <section className="shipping-intro">
        <div className="container">
          <div className="shipping-intro-block">
            <div className="shipping-intro-image">
              <span className="shipping-badge">End-to-End</span>
              <div className="shipping-image-frame">
                <img
                  src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792147862/11.avif"
                  alt="Warehouse and Shipping Operations"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="shipping-intro-card">
              <span className="block-index">01</span>
              <h2>Reliable Delivery, Every Order</h2>
              <p className="shipping-intro-copy">
                We handle all international and domestic logistics for every
                order, regardless of size. We ensure your packaging travels
                from the manufacturing plant to your location safely and
                cost-effectively. Nothing disrupts business like running out of
                packaging when you need to sell products, so we maintain the
                highest delivery timeliness standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="shipping-features-section">
        <div className="container">
          <div className="shipping-features-heading">
            <span className="section-eyebrow">What We Deliver</span>
            <h2 className="section-title">Logistics You Can Count On</h2>
            <p className="section-subtitle">
              From the plant floor to your facility — a seamless, dependable
              shipping experience built on speed, safety, and consistency.
            </p>
          </div>

          <div className="shipping-features-grid">
            {features.map((feature) => (
              <article key={feature.id} className="shipping-feature-card">
                <span className="shipping-feature-index">
                  {String(feature.id).padStart(2, '0')}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="capabilities-cta">
        <div className="container">
          <div className="cta-heading-wrapper">
            <span className="cta-eyebrow">Let's Work Together</span>
            <h2 className="solid-text">
              Looking for Reliable Packaging Solutions?
            </h2>
          </div>
          <p className="cta-text">
            From film production to pouch manufacturing, we provide complete
            end-to-end packaging services under one roof.
          </p>
          <button className="cta-btn1">
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cta-arrow"
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
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShippingLogistics;