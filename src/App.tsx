import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed', inset: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexDirection: 'column', gap: '1.5rem',
        background: 'linear-gradient(135deg, #070E1A 0%, #0D2456 55%, #1B4F8A 100%)',
        zIndex: 9999,
      }}>
        {/* Spinning ring */}
        <div style={{ position: 'relative', width: 72, height: 72 }}>
          <div style={{
            position: 'absolute', inset: 0,
            border: '3px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            border: '3px solid transparent',
            borderTopColor: '#F4A623',
            borderRadius: '50%',
            animation: 'spin 0.9s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: 'Outfit, sans-serif',
            fontWeight: 900, fontSize: '1rem',
          }}>SCE</div>
        </div>
        <div style={{
          color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}>
          Building Excellence
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
