// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agro from "./pages/Agro";
import Product from "./pages/Product";
import Capabilities from "./pages/Capabilities";
import Extrusion from "./pages/capabilities/Extrusion";
import Printing from "./pages/capabilities/Printing";
import Lamination from "./pages/capabilities/Lamination";
import SlittingFinishing from "./pages/capabilities/SlittingFinishing";
import PouchManufacturing from "./pages/capabilities/PouchManufacturing";
import InHouseGravure from "./pages/capabilities/InHouseGravure";
import QualityAssurance from "./pages/capabilities/QualityAssurance";
import ShippingLogistics from "./pages/capabilities/ShippingLogistics";
import Header from "./components/Header";
import Services from "./pages/Services";
import Sustainability from "./pages/Sustainability";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agro" element={<Agro />} />
        <Route path="/products" element={<Product />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/capabilities/extrusion" element={<Extrusion />} />
        <Route path="/capabilities/printing" element={<Printing />} />
        <Route path="/capabilities/lamination" element={<Lamination />} />
        <Route path="/capabilities/slitting-finishing" element={<SlittingFinishing />}/>
        <Route path="/capabilities/pouch-manufacturing" element={<PouchManufacturing />} />
        <Route path="/capabilities/in-house-gravure" element={<InHouseGravure />} />
        <Route path="/capabilities/quality-assurance" element={<QualityAssurance />} />
        <Route path="/capabilities/shipping-logistics" element={<ShippingLogistics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}