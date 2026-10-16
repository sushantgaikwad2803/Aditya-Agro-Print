// pages/capabilities/Extrusion.tsx
import './Extrusion.css';

interface ExtrusionBlock {
  id: string;
  title: string;
  description?: string;
  subheading?: string;
  applicationsTitle: string;
  applications: string[];
  image: string;
  imagePosition: 'left' | 'right';
  badge?: string;
}

const blocks: ExtrusionBlock[] = [
  {
    id: 'monolayer',
    title: 'Film Extrusion, Monolayer Blown Film',
    badge: 'Monolayer',
    description:
      'We offer a diverse range of customized Monolayer Blown Film tailored to your specific requirements, including LD, LLD, HM, and HDPE options.',
    applicationsTitle: 'Film Applications',
    applications: [
      'Garbage Bags',
      'Carry Bags',
      'Shopping Bags',
      'Liner Bags',
      'Construction Film',
      'T-Shirt Bags',
      'Agriculture Film',
      'General Purpose Film',
      'Surface Printing Film',
      'Lamination Film',
      'LD Shrink Film',
      'Stretch Hood Film',
    ],
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792146233/Extrusion.webp',
    imagePosition: 'left',
  },
  {
    id: '3-layer',
    title: 'Coextrusion – 3 Layer Film',
    badge: '3 Layer',
    subheading: 'What are Coextruded Multilayer Films?',
    description:
      'Coextruded multi-layer films are produced through advanced compound moulding techniques. Multiple extruders simultaneously extrude thermoplastic resins, passing them through a single die to build precise layers of melted resin on both the inside and outside of the film.',
    applicationsTitle: 'Film Applications',
    applications: [
      'Shrink Film',
      'Food Packaging Film',
      'Mulch Film',
      'Surface Protection Film',
      'Agriculture Film',
      'Vegetable Packing Film',
      'Lamination Film',
      'Stretch Hood Film',
      'Stretch Film',
    ],
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792146232/Extrusion1.webp',
    imagePosition: 'right',
  },
  {
    id: '5-layer',
    title: 'Coextrusion – 5 Layer Films',
    badge: '5 Layer',
    description:
      '5-layer films provide enhanced options and flexibility compared to 3-layer alternatives. These advanced films eliminate the need for secondary adhesive lamination steps with simple structures, streamlining production and reducing costs.',
    applicationsTitle: 'Film Applications',
    applications: [
      'Cereal Liner',
      'Lidding & Tube Stock',
      'Meat Packaging',
      'Medical Devices',
      'Frozen Food Packaging',
      'Vegetable Packing Film',
      'Lamination Film',
      'Stretch Hood Film',
      'Stretch Film',
    ],
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792146232/Extrusion2.webp',
    imagePosition: 'left',
  },
  {
    id: '7-layer',
    title: 'High Barrier Co-Extruded Film',
    badge: '7 Layer',
    description:
      '7-layer co-ex blown film lines address the majority of industry packaging development requirements. With improved barrier and strength properties, applications include films for long shelf-life packaging of edible oils, UHT milk, liquid and solid container liners, and technical applications. These versatile lines also produce films for lidding, frozen food packaging, meat packaging, and vacuum packaging.',
    applicationsTitle: 'Vacuum Food Packaging Applications',
    applications: [
      'Rice & Meat Products',
      'Dried Fish & Aquatic Products',
      'Salami',
      'Roast Duck, Chicken & Pork',
      'Frozen Food & Ham',
      'Cooked Meat Products',
      'Pickles & Bean Paste',
      'Seasonings',
      'Cured Meat Products',
      'Sausages',
    ],
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792146232/Extrusion3.webp',
    imagePosition: 'right',
  },
  {
    id: '9-layer',
    title: 'Coextrusion – 9 Layer Films',
    badge: '9 Layer',
    description:
      '9-layer rigid, high-barrier structures utilize cost and performance-optimized PE resins. The thickness of nylon layers controls modulus. Similar to 7-layer structures, the skin layers can be split into two layers to optimize cost and performance for specific applications, particularly thermoform-fill-seal processes.',
    applicationsTitle: 'Applications',
    applications: [
      'Fresh Meat',
      'Sausage',
      'Seafood',
      'Cheese',
      'Sauce',
      'Snacks',
    ],
    image:
      'https://res.cloudinary.com/aewdi5ja/image/upload/v1792146232/Extrusion4.webp',
    imagePosition: 'left',
  },
];

const Extrusion = () => {
  return (
    <div className="extrusion-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <span className="breadcrumb-eyebrow">Our Capabilities</span>
            <h1>Extrusion</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Detail Blocks */}
      <section className="extrusion-content">
        <div className="container">
          {blocks.map((block, index) => (
            <article
              key={block.id}
              className={`extrusion-block ${
                block.imagePosition === 'right' ? 'reverse' : ''
              }`}
            >
              <div className="extrusion-image-wrapper">
                {block.badge && (
                  <span className="extrusion-badge">{block.badge}</span>
                )}
                <div className="extrusion-image-frame">
                  <img src={block.image} alt={block.title} loading="lazy" />
                </div>
              </div>

              <div className="extrusion-info-card">
                <span className="block-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h2>{block.title}</h2>

                {block.subheading && (
                  <h4 className="extrusion-subheading">
                    {block.subheading}
                  </h4>
                )}

                {block.description && (
                  <p className="extrusion-description">{block.description}</p>
                )}

                <div className="applications-section">
                  <h4 className="applications-title">
                    {block.applicationsTitle}
                  </h4>
                  <ul className="applications-grid">
                    {block.applications.map((app, i) => (
                      <li key={i} className="application-item">
                        <span className="app-arrow" aria-hidden="true">
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
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CTA Section */}
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

export default Extrusion;