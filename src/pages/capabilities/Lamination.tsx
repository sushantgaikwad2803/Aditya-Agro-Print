// pages/capabilities/Lamination.tsx
import './Lamination.css';

interface LaminationType {
  id: number;
  label: string;
}

const laminationTypesLeft: LaminationType[] = [
  { id: 1, label: 'PET / LLDPE' },
  { id: 2, label: 'BOPP / Heat Seal BOPP' },
  { id: 3, label: 'BOPP / CPP' },
  { id: 4, label: 'NYLON / LLDPE' },
  { id: 5, label: 'PVDC-PET / LLDPE' },
  { id: 6, label: 'PET / MET-PET / LLDPE' },
  { id: 7, label: 'BOPP / MET-CP' },
  { id: 8, label: 'PET / EVOH-PE' },
];

const laminationTypesRight: LaminationType[] = [
  { id: 9, label: 'PET / AL-FOIL / LLDPE' },
  { id: 10, label: 'PET / AL-FOIL / NY / RCPP' },
  { id: 11, label: 'HB-PET / NY / RCPP' },
  { id: 12, label: 'NYLON / PE 7-LAYER CO-EXTRUDE' },
  { id: 13, label: 'EVOH / PE 7-LAYER CO-EXTRUDE' },
  { id: 14, label: 'THERMAL FORMING FILM NYLON / PE 7-LAYER CO-EXTRUDE' },
  {
    id: 15,
    label:
      'HIGH BARRIER THERMAL FORMING FILM NYLON / PE 7-9 LAYER COEXTRUDE',
  },
];

const Lamination = () => {
  return (
    <div className="lamination-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <span className="breadcrumb-eyebrow">Our Capabilities</span>
            <h1>Lamination</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Description) */}
      <section className="lamination-intro">
        <div className="container">
          <div className="lamination-intro-block">
            <div className="lamination-intro-image">
              <span className="lamination-badge">Adhesive &amp; Extrusion</span>
              <div className="lamination-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                  alt="Solventless Lamination Machine"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lamination-intro-card">
              <span className="block-index">01</span>
              <h2>Lamination Types</h2>
              <p>
                Aditya Agro Print utilizes all material types to fulfil
                comprehensive packaging needs. Materials are available as
                unprinted film or with excellent print graphics, and can be
                laminated to any other material type. We employ adhesive or
                extrusion lamination to combine properties of different
                substrates, maximizing graphics appeal, shelf-life
                requirements, or machine performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lamination Types List */}
      <section className="lamination-list-section">
        <div className="container">
          <div className="lamination-list-heading">
            <h3>Available Combinations</h3>
            <span className="lamination-count">
              {laminationTypesLeft.length + laminationTypesRight.length}{' '}
              Structures
            </span>
          </div>

          <div className="lamination-list-grid">
            {/* Left Column */}
            <ul className="lamination-list">
              {laminationTypesLeft.map((item) => (
                <li key={item.id} className="lamination-list-item">
                  <span className="lamination-label">{item.label}</span>
                  <span className="lamination-plus" aria-hidden="true">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="12"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586L7.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="lamination-list">
              {laminationTypesRight.map((item) => (
                <li key={item.id} className="lamination-list-item">
                  <span className="lamination-label">{item.label}</span>
                  <span className="lamination-plus" aria-hidden="true">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="12"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586L7.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
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
          <button className="cta-btn">
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

export default Lamination;