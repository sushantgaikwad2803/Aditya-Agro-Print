// pages/capabilities/SlittingFinishing.tsx
import './SlittingFinishing.css';

const SlittingFinishing = () => {
  return (
    <div className="slitting-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <h1>Slitting &amp; Finishing</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Overview) */}
      <section className="slitting-intro">
        <div className="container">
          <div className="slitting-intro-block">
            <div className="slitting-intro-image">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="Slitting Machine for Flexible Laminate Roll Form"
              />
            </div>

            <div className="slitting-intro-card">
              <h3 className="slitting-overview-title">
                An Overview of the Slitting Process in Flexible Packaging
              </h3>

              <p className="slitting-paragraph">
                But what exactly is slitting? In essence, slitting is the
                process of cutting a large roll of material into narrower rolls.
                The operation is completed using specialized slitting equipment
                that features a range of different slitting methods—namely
                shear, razor, and crush slitting.
              </p>

              <p className="slitting-paragraph">
                Each type has its unique application and is chosen depending on
                various material properties, finish requirements, and production
                efficiency.
              </p>

              <p className="slitting-paragraph slitting-highlight">
                Netbenefit has the ability to slit Plain, printed, laminated,
                Barrier Poly films, coated, or metalized (20 mic – 200 mic)
                |Capability to handle paper &amp; coated paper ranging from 30
                GSM to 200 GSM |
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

export default SlittingFinishing;