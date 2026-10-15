// pages/capabilities/Printing.tsx
import './Printing.css';

interface PrintingBlock {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imagePosition: 'left' | 'right';
}

const blocks: PrintingBlock[] = [
  {
    id: 'rotogravure',
    title: 'Rotogravure',
    paragraphs: [
      'Rotogravure printing remains the industry’s premier choice for high-quality, large volume printing. A significant portion of our work utilizes rotogravure technology, favoured for its excellent print detail, scale, and reproducibility. With extensive industry experience across diverse client sectors, we’ve refined rotogravure techniques to achieve outstanding print results across a wide range of products including pouches, bags, roll stock, films, and lamination. Rotogravure-printed products instantly convey sophistication and luxury.',
    ],
    image:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    imagePosition: 'right',
  },
  {
    id: 'flexography',
    title: 'Flexography',
    paragraphs: [
      'Flexography delivers cost-effective packaging prints for moderate to high-volume runs. This versatile technology adapts to both Pantone and CMYK colour systems, enabling high-definition printing on various packaging materials. We utilize automated plate mounting to ensure precision and reproducibility, eliminating the challenges of manual plate mounting. Our innovative approach maximizes flexography’s potential, delivering high-quality prints at affordable prices.',
    ],
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    imagePosition: 'left',
  },
  {
    id: 'digital',
    title: 'Digital',
    paragraphs: [
      'Digital printing provides the perfect solution for low to moderate-volume, high-definition print jobs. We offer digitally printed flexible packaging in exceptional definition. For short runs, digital printing delivers fast turnaround to meet timely packaging needs without compromising quality. Our digital printing press enables high-quality packaging prints with lower minimum order requirements.',
      'With our innovations and technical capacity across all three methods, we guarantee exceptional quality regardless of which printing method you choose. Your decision comes down to your specific requirements.',
    ],
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    imagePosition: 'right',
  },
];

const Printing = () => {
  return (
    <div className="printing-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <h1>Printing</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Capabilities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Detail Blocks */}
      <section className="printing-content">
        <div className="container">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`printing-block ${
                block.imagePosition === 'right' ? 'reverse' : ''
              }`}
            >
              <div className="printing-image-wrapper">
                <img src={block.image} alt={block.title} loading="lazy" />
              </div>

              <div className="printing-info-card">
                <h2>{block.title}</h2>
                {block.paragraphs.map((para, i) => (
                  <p key={i} className="printing-description">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
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

export default Printing;