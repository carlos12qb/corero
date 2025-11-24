import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Investors from './pages/Investors';
import RequestDemo from './pages/RequestDemo';
import Support from './pages/Support';
import { DemoProvider } from './context/DemoContext';
import DemoModal from './components/DemoModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <DemoModal />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
          <Route path="/demo" element={<RequestDemo />} />
        </Routes>
      </main>
      <FooterWrapper />
    </>
  );
};

const FooterWrapper: React.FC = () => {
  const location = useLocation();
  // Hide this simple footer on Demo, Home, Solutions, Services, Partners, Investors and Support (because they have rich footers)
  const fullFooterPages = ['/', '/solutions', '/services', '/partners', '/investors', '/demo', '/support'];
  if (fullFooterPages.includes(location.pathname)) return null;
  
  return (
    <footer className="bg-[#050505] py-10 border-t border-white/10 text-center text-gray-500 text-sm relative">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>
      <p className="relative z-10">&copy; 2024 CORE Platform. All systems operational.</p>
    </footer>
  );
}

const App: React.FC = () => {
  return (
    <DemoProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </DemoProvider>
  );
};

export default App;