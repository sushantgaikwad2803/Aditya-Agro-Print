// pages/capabilities/ShippingLogistics.tsx
import './ShippingLogistics.css';

const ShippingLogistics = () => {
  return (
    <div className="shipping-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
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
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800"
                alt="Warehouse and Shipping Operations"
              />
            </div>

            <div className="shipping-intro-card">
              <p>
                We handle all international and domestic logistics for every
                order, regardless of size. We ensure your packaging travels from
                the manufacturing plant to your location safely and
                cost-effectively. Nothing disrupts business like running out of
                packaging when you need to sell products, so we maintain the
                highest delivery timeliness standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="capabilities-cta">
        <div className="container">
          <div className="cta-heading-wrapper">
            <h2 className="outline-text">Contact Now</h2>
            <h2 className="solid-text">
              Looking for Reliable Packaging Solutions?
            </h2>
          </div>
          <p className="cta-text">
            From film production to pouch manufacturing, we provide complete
            end-to-end packaging services under one roof.
          </p>
          <button className="cta-btn">
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cta-arrow"
              viewBox="0 0 20 20"
              fill="currentColor"
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