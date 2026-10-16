// pages/capabilities/QualityAssurance.tsx
import './QualityAssurance.css';

interface TestItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const tests: TestItem[] = [
  {
    id: 1,
    title: 'Interlayer Adhesion Testing',
    description:
      'To test the adhesion level of layers of the packaging film structure.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147590/Quality1.webp',
  },
  {
    id: 2,
    title: 'Puncture Resistance Testing',
    description:
      'To evaluate how much pressure is needed to puncture the flexible packaging material.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147589/Quality3.webp',
  },
  {
    id: 3,
    title: 'Tensile Testing',
    description:
      'To indicate how much a material can be stretched and how much force is needed to break the material.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147588/Quality4.webp',
  },
  {
    id: 4,
    title: 'Strength Testing',
    description:
      'To analyze how well the package performs and how well it keeps the product enclosed within a given period.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147587/Quality5.webp',
  },
  {
    id: 5,
    title: 'Burst Testing',
    description:
      'To determine the maximum pressure at which a pouch will burst.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147588/Quality6.webp',
  },
  {
    id: 6,
    title: 'Drop Testing',
    description:
      'To determine the height from which the pouch can be dropped without failing.',
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792147587/Quality7.webp',
  },
];

const introParagraphs = [
  'Flexible Packaging are evolving rapidly to keep up with the innovations in the products they protect. With the drive towards new innovative packaging technologies, sustainable packaging, reseal ability, and lightweighting, there are high demands on package quality assurance and quality control (QA/QC). You need QA/QC tools that keep up with the pace of new packaging.',
  'Here at Aditya Agro Print Ltd, our high precision package testing instruments, coupled with our product and applications experts, provide you the packaging system QA/QC you need. Being an industry leader in whole package permeability testing, package integrity and leak detection, headspace gas monitoring and control, we have the up-to-date QA/QC tools to ensure your package systems work.',
];

const QualityAssurance = () => {
  return (
    <div className="quality-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <span className="breadcrumb-eyebrow">Our Capabilities</span>
            <h1>Quality Assurance</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Description) */}
      <section className="quality-intro">
        <div className="container">
          <div className="quality-intro-block">
            <div className="quality-intro-image">
              <span className="quality-badge">On-Site Lab</span>
              <div className="quality-image-frame">
                <img
                  src="https://res.cloudinary.com/aewdi5ja/image/upload/v1792147589/Quality2.webp"
                  alt="Quality Assurance Laboratory"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="quality-intro-card">
              <span className="block-index">01</span>
              <h2>Precision QA/QC You Can Rely On</h2>
              <div className="quality-intro-copy">
                {introParagraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testing Grid Section */}
      <section className="quality-tests-section">
        <div className="container">
          <div className="quality-tests-heading">
            <span className="section-eyebrow">Aditya Agro Print</span>
            <h2 className="section-title">Your Packaging, Reliable</h2>
            <p className="section-subtitle">
              We have an on-site analytical laboratory with the latest testing
              equipment and skillful testers, which ensures that your flexible
              packaging functions properly and has reliable performance.
            </p>
          </div>

          <div className="quality-tests-grid">
            {tests.map((test) => (
              <article key={test.id} className="quality-test-card">
                <div className="quality-test-image-wrapper">
                  <img src={test.image} alt={test.title} loading="lazy" />
                  <span className="quality-test-index">
                    {String(test.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="quality-test-content">
                  <h3>{test.title}</h3>
                  <p>{test.description}</p>
                </div>
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

export default QualityAssurance;