import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CurtainIntro from './components/CurtainIntro';
import Home from './pages/Home';
import Puppies from './pages/Puppies';
import PuppyDetail from './pages/PuppyDetail';
import HappyFamilies from './pages/HappyFamilies';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const ROUTE_TITLES = {
  '/': 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  '/puppies': 'Available puppies | TeddyPups U.A.E.',
  '/happy-families': 'Happy families | TeddyPups U.A.E.',
  '/how-it-works': 'How it works | TeddyPups U.A.E.',
  '/faq': 'Questions & answers | TeddyPups U.A.E.',
  '/contact': 'Visit & contact | TeddyPups U.A.E.',
  '/visit': 'Visit & contact | TeddyPups U.A.E.'
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Dynamic page-specific document title matching reference website
    const path = location.pathname;
    if (ROUTE_TITLES[path]) {
      document.title = ROUTE_TITLES[path];
    } else if (path.startsWith('/puppies/')) {
      document.title = 'Available puppies | TeddyPups U.A.E.';
    } else {
      document.title = 'TeddyPups U.A.E. — Premium teacup puppies in Dubai';
    }
  }, [location.pathname]);

  return (
    <>
      <CurtainIntro />
      <Header />
      <main id="main" tabIndex="-1" className="relative pt-[var(--header-h)] outline-none" style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/puppies/:id" element={<PuppyDetail />} />
          <Route path="/happy-families" element={<HappyFamilies />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visit" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
