// components/ProductDetail.tsx
import type { Product } from "../data/products";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { detail } = product;

  return (
    <div className="pkg-detail-view">
      {/* --- LAYOUT 3: SPLIT SECTIONS (Wicket/Vacuum) --- */}
      {detail.splitSections ? (
        <div className="pkg-split-container">
          {detail.splitSections.map((section, index) => (
            <div
              key={index}
              className={`pkg-split-block ${section.reverse ? "reverse" : ""}`}
            >
              <div className="pkg-split-index" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="pkg-split-index-line" />
              </div>

              <div className="pkg-split-image">
                <img src={section.image} alt={section.title} loading="lazy" />
                <span className="pkg-split-image-accent" aria-hidden="true" />
              </div>

              <div className="pkg-split-card">
                <h3>{section.title}</h3>
                <p className="pkg-split-description">{section.description}</p>

                <div className="pkg-quick-specs">
                  {section.specs.map((spec, i) => (
                    <div key={i} className="pkg-quick-spec">
                      {spec}
                    </div>
                  ))}
                </div>

                {section.extraParagraphs?.map((para, i) => (
                  <p key={i} className="pkg-split-extra">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- LAYOUT 1 & 2: STANDARD LAYOUT --- */
        <>
          {/* Top Section: Image + Info Card */}
          <div className="pkg-detail-top">
            <div className="pkg-detail-image">
              <img
                src={detail.image}
                alt={product.title}
                loading="lazy"
              />
              <span className="pkg-detail-image-accent" aria-hidden="true" />
            </div>

            <div className="pkg-detail-card">
              <span className="pkg-detail-card-eyebrow">Overview</span>
              <p className="pkg-detail-description">{detail.description}</p>

              {detail.quickSpecs && (
                <div className="pkg-quick-specs">
                  {detail.quickSpecs.map((spec, index) => (
                    <div key={index} className="pkg-quick-spec">
                      {spec}
                    </div>
                  ))}
                </div>
              )}

              {detail.inlineParagraph && (
                <p className="pkg-detail-inline-paragraph">
                  {detail.inlineParagraph}
                </p>
              )}
            </div>
          </div>

          {/* Format Grid Section (For Pouches) */}
          {detail.formatGrid && (
            <div className="pkg-format-section">
              <div className="pkg-section-head">
                <span className="pkg-section-eyebrow">Formats</span>
                <h3 className="pkg-section-title">
                  Available configurations
                </h3>
              </div>

              <div className="pkg-format-grid">
                {detail.formatGrid.map((format, index) => (
                  <div key={index} className="pkg-format-card">
                    <span className="pkg-format-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="pkg-format-image">
                      <img
                        src={format.image}
                        alt={format.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="pkg-format-content">
                      <h4>{format.title}</h4>
                      <p>{format.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials / Bottom sections */}
          {(detail.materialsTitle || detail.bottomSections) && (
            <div className="pkg-detail-bottom">
              {detail.materialsTitle && (
                <>
                  <div className="pkg-section-head">
                    <span className="pkg-section-eyebrow">Materials</span>
                    <h3 className="pkg-section-title">
                      {detail.materialsTitle}
                    </h3>
                  </div>

                  {detail.materialsDescription && (
                    <p className="pkg-section-desc">
                      {detail.materialsDescription}
                    </p>
                  )}

                  {detail.materialsTable && (
                    <div className="pkg-materials-table">
                      {detail.materialsTable.map((item, index) => (
                        <div key={index} className="pkg-material-item">
                          <span className="pkg-material-dot" aria-hidden="true" />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {detail.bottomSections && (
                <div className="pkg-detail-sections">
                  {detail.bottomSections.map((section, index) => (
                    <div key={index} className="pkg-detail-section-item">
                      <span className="pkg-detail-section-num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="pkg-detail-section-body">
                        <h4>{section.title}</h4>
                        <p>{section.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetail;