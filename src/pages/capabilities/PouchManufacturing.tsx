// pages/capabilities/PouchManufacturing.tsx
import './PouchManufacturing.css';

interface PouchStyle {
  id: number;
  title: string;
  image: string;
}

const pouchStyles: PouchStyle[] = [
  {
    id: 1,
    title: 'Stand Up Pouch',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 2,
    title: 'Side Gazette Pouch',
    image:
      'https://images.unsplash.com/photo-1626202158874-63259679139a?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 3,
    title: '3 Side Seal',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 4,
    title: 'Quad Seal',
    image:
      'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 5,
    title: 'Spout Pouch',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 6,
    title: '3D Pouch',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 7,
    title: 'Profile Pouch',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 8,
    title: 'Reclosable Pouch',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

const PouchManufacturing = () => {
  return (
    <div className="pouch-mfg-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <h1>Pouch Manufacturing</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Intro Block (Image + Description) */}
      <section className="pouch-intro">
        <div className="container">
          <div className="pouch-intro-block">
            <div className="pouch-intro-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="HFFS Pouch Making Machines"
              />
            </div>

            <div className="pouch-intro-card">
              <p>
                Laminated pouches are the optimal choice when it comes to having
                your product stand out from the rest. They are compatible with
                all food and pet food items including solids, liquids,
                granulates, and powders.
              </p>
              <p>
                Our professional sales people gladly assist with selecting the
                structure that best suits your product. Foil, paper, polyester,
                and nylon are among the material layers you may be advised to
                use. Choose from a variety of closures and spouts which will
                make your packaging more friendly to consumers. A high-gloss or
                matte finish will complete the look of your carefully created
                packaging design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pouch Styles Section */}
      <section className="pouch-styles-section">
        <div className="container">
          <div className="pouch-styles-heading">
            <h2 className="outline-text">Net Benefit</h2>
            <h2 className="solid-text">Pouch Styles</h2>
          </div>

          <div className="pouch-styles-grid">
            {pouchStyles.map((style) => (
              <article key={style.id} className="pouch-style-card">
                <div className="pouch-style-image-wrapper">
                  <img src={style.image} alt={style.title} loading="lazy" />
                </div>
                <div className="pouch-style-content">
                  <h3>{style.title}</h3>
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

export default PouchManufacturing;