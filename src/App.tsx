// App.tsx
import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

/* ============================================================
   LAZY-LOADED ROUTES (Home is eager — it's the landing page)
   ============================================================ */
const Agro = lazy(() => import("./pages/Agro"));
const Product = lazy(() => import("./pages/Product"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const Services = lazy(() => import("./pages/Services"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/NotFound"));

/* Capability sub-pages */
const Extrusion = lazy(() => import("./pages/capabilities/Extrusion"));
const Printing = lazy(() => import("./pages/capabilities/Printing"));
const Lamination = lazy(() => import("./pages/capabilities/Lamination"));
const SlittingFinishing = lazy(
  () => import("./pages/capabilities/SlittingFinishing")
);
const PouchManufacturing = lazy(
  () => import("./pages/capabilities/PouchManufacturing")
);
const InHouseGravure = lazy(
  () => import("./pages/capabilities/InHouseGravure")
);
const QualityAssurance = lazy(
  () => import("./pages/capabilities/QualityAssurance")
);
const ShippingLogistics = lazy(
  () => import("./pages/capabilities/ShippingLogistics")
);

/* ============================================================
   SCROLL TO TOP ON ROUTE CHANGE
   ============================================================ */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump (no smooth animation) so the new page starts at top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

/* ============================================================
   FALLBACK (shown while a lazy chunk loads)
   ============================================================ */
function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "3px solid rgba(169, 0, 145, 0.2)",
          borderTopColor: "#a90091",
          animation: "spin 0.7s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Home — eager */}
            <Route path="/" element={<Home />} />

            {/* Top-level pages */}
            <Route path="/agro" element={<Agro />} />
            <Route path="/products" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Capabilities */}
            <Route path="/capabilities" element={<Capabilities />} />
            <Route
              path="/capabilities/extrusion"
              element={<Extrusion />}
            />
            <Route path="/capabilities/printing" element={<Printing />} />
            <Route
              path="/capabilities/lamination"
              element={<Lamination />}
            />
            <Route
              path="/capabilities/slitting-finishing"
              element={<SlittingFinishing />}
            />
            <Route
              path="/capabilities/pouch-manufacturing"
              element={<PouchManufacturing />}
            />
            <Route
              path="/capabilities/in-house-gravure"
              element={<InHouseGravure />}
            />
            <Route
              path="/capabilities/quality-assurance"
              element={<QualityAssurance />}
            />
            <Route
              path="/capabilities/shipping-logistics"
              element={<ShippingLogistics />}
            />

            
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}