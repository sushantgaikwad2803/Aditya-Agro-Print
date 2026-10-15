// pages/Product.tsx
import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import { products } from "../data/products";
import type { Product as ProductType } from "../data/products";
import ProductDetail from "../components/ProductDetail";

const Product = () => {
  /* ---------- URL-driven state: /products?product=roll-stock ---------- */
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("product");

  const selectedProduct: ProductType | null =
    products.find((p) => p.id === productId) ?? null;

  const detailRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const previousProductId = useRef<string | null>(null);

  /* ---------- Scroll to detail only when a NEW product opens ---------- */
  useEffect(() => {
    if (selectedProduct && productId !== previousProductId.current) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
    previousProductId.current = productId;
  }, [selectedProduct, productId]);

  const handleSelectProduct = (product: ProductType) => {
    if (product.id === productId) return;
    setSearchParams({ product: product.id });
  };

  const handleClose = () => {
    setSearchParams({});
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const selectedIndex = selectedProduct
    ? products.findIndex((p) => p.id === selectedProduct.id)
    : -1;

  return (
    <div className="packaging-page">
      {/* ---------- 1. HERO ---------- */}
      <section className="pkg-hero">
        <div className="pkg-container">
          <div className="pkg-hero-content">
            <nav className="pkg-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="pkg-breadcrumb-link">
                Home
              </Link>
              <span className="pkg-breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="pkg-breadcrumb-current">Products</span>
            </nav>

            <h1 className="pkg-hero-title">
              Packaging solutions{" "}
              <span className="pkg-text-accent">
                engineered for performance
              </span>
            </h1>

            <p className="pkg-hero-description">
              A comprehensive range of flexible packaging formats designed for
              protection, efficiency, and shelf impact — built around real
              supply-chain constraints, not catalogue theory.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 2. PRODUCTS SECTION ---------- */}
      <section className="pkg-products-section" id="range">
        <div className="pkg-container">
          {/* ---- PRODUCT GRID ---- */}
          <div className="pkg-grid" ref={gridRef}>
            {products.map((product, index) => {
              const isActive = selectedProduct?.id === product.id;
              return (
                <article
                  key={product.id}
                  className={`pkg-card ${isActive ? "is-active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <button
                    type="button"
                    className="pkg-card-btn"
                    onClick={() => handleSelectProduct(product)}
                    aria-label={`View details for ${product.title}`}
                  >
                    <span className="pkg-card-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="pkg-card-image">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        loading="lazy"
                      />
                      <span className="pkg-card-image-glow" aria-hidden="true" />
                    </div>

                    <div className="pkg-card-content">
                      <h3>{product.title}</h3>
                      <p>{product.shortDescription}</p>

                      <span className="pkg-card-cta">
                        <span>View Details</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          {/* ---- DETAIL VIEW (below grid) ---- */}
          {selectedProduct && (
            <div className="pkg-detail-wrapper" ref={detailRef}>
              <div className="pkg-detail-heading">
                <div className="pkg-detail-heading-text">
                  <span className="pkg-detail-eyebrow">
                    <span className="pkg-detail-dot" aria-hidden="true" />
                    Product Details
                  </span>
                  <h2>{selectedProduct.title}</h2>
                  <p className="pkg-detail-sub">
                    {selectedProduct.shortDescription}
                  </p>
                </div>

                <div className="pkg-detail-heading-meta">
                  <span className="pkg-detail-index" aria-hidden="true">
                    {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                    {String(products.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    className="pkg-detail-close"
                    onClick={handleClose}
                    aria-label="Close product details"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    Close
                  </button>
                </div>
              </div>

              <ProductDetail product={selectedProduct} onClose={handleClose} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Product;