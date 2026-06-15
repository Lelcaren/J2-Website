import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import AdvisoryPage from './pages/AdvisoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';

// Scroll to TOP of page on every navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/j2approach" element={<LegalPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-are" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
