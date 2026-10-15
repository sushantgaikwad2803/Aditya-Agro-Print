// pages/capabilities/SlittingFinishing.tsx
import './SlittingFinishing.css';

interface SlittingMethod {
  id: number;
  title: string;
  description: string;
}

interface CapabilityItem {
  label: string;
  value: string;
}

const slittingMethods: SlittingMethod[] = [
  {
    id: 1,
    title: 'Shear Slitting',
    description:
      'Precision scissor-action cutting ideal for thin films and clean edges.',
  },
  {
    id: 2,
    title: 'Razor Slitting',
    description:
      'Sharp-blade method suited to delicate materials and coated substrates.',
  },
  {
    id: 3,
    title: 'Crush Slitting',
    description:
      'Pressure-based cutting for heavier gauges and high-speed production.',
  },
];

const capabilities: CapabilityItem[] = [
  { label: 'Materials', value: 'Plain, Printed, Laminated, Barrier Poly, Coated, Metallized' },
  { label: 'Film Thickness', value: '20 mic – 200 mic' },
  { label: 'Paper Range', value: '30 GSM – 200 GSM' },
];

const overviewParagraphs = [
  'But what exactly is slitting? In essence, slitting is the process of cutting a large roll of material into narrower rolls. The operation is completed using specialized slitting equipment that features a range of different slitting methods — namely shear, razor, and crush slitting.',
  'Each type has its unique application and is chosen depending on various material properties, finish requirements, and production efficiency.',
];

const SlittingFinishing = () => {
  return (
    <div className="slitting-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <span className="breadcrumb-eyebrow">Our Capabilities</span>
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
              <span className="slitting-badge">Precision Cutting</span>
              <div className="slitting-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                  alt="Slitting Machine for Flexible Laminate Roll Form"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="slitting-intro-card">
              <span className="block-index">01</span>
              <h2>An Overview of the Slitting Process</h2>
              <div className="slitting-intro-copy">
                {overviewParagraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Slitting Methods Section */}
      <section className="slitting-methods-section">
        <div className="container">
          <div className="slitting-methods-heading">
            <span className="section-eyebrow">Three Techniques</span>
            <h2 className="section-title">Slitting Methods</h2>
            <p className="section-subtitle">
              Each method is selected based on material properties, finish
              requirements, and production efficiency.
            </p>
          </div>

          <div className="slitting-methods-grid">
            {slittingMethods.map((method) => (
              <article key={method.id} className="slitting-method-card">
                <span className="slitting-method-index">
                  {String(method.id).padStart(2, '0')}
                </span>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities Section */}
      <section className="slitting-capabilities-section">
        <div className="container">
          <div className="slitting-capabilities-card">
            <span className="slitting-capabilities-eyebrow">
              Our Capability
            </span>
            <h2 className="slitting-capabilities-title">
              Materials We Can Slit
            </h2>

            <ul className="slitting-capabilities-list">
              {capabilities.map((item, i) => (
                <li key={i} className="slitting-capability-item">
                  <span className="slitting-capability-label">
                    {item.label}
                  </span>
                  <span className="slitting-capability-value">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
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

export default SlittingFinishing;