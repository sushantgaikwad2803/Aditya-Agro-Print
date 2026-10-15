// pages/capabilities/InHouseGravure.tsx
import './InHouseGravure.css';

const InHouseGravure = () => {
  return (
    <div className="gravure-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <h1>In-House Gravure Cylinder</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Text Card) */}
      <section className="gravure-intro">
        <div className="container">
          <div className="gravure-intro-block">
            <div className="gravure-intro-image">
              <img
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800"
                alt="In-House Gravure Cylinders"
              />
            </div>

            <div className="gravure-intro-card">
              <p>
                From concept to creation, our rotogravure cylinders ensure your
                designs shine with unparalleled clarity.
              </p>
              <p>
                In house cylinder engraving plant which is modern machinery from
                Daetwyler, Germany ensures precision &amp; quick turnaround.
              </p>
              <p>
                World Class Ohio engraver from USA delivers exceptional details
                &amp; consistency.
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

export default InHouseGravure;