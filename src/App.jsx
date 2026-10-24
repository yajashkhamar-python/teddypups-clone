import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CurtainIntro from './components/CurtainIntro';
import Home from './pages/Home';
import Puppies from './pages/Puppies';
import PuppyDetail from './pages/PuppyDetail';
import HappyFamilies from './pages/HappyFamilies';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <CurtainIntro />
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/puppies/:id" element={<PuppyDetail />} />
          <Route path="/happy-families" element={<HappyFamilies />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
