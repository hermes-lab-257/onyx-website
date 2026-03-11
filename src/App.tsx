import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import WorkProject from './pages/WorkProject';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkProject />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
