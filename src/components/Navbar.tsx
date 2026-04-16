import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const NAV = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Vision', path: '/vision' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, [loc.pathname]);

  const toggle = () => {
    setOpen(p => {
      document.body.style.overflow = !p ? 'hidden' : '';
      return !p;
    });
  };

  const active = (path: string) =>
    path === '/' ? loc.pathname === '/' : loc.pathname === path;

  return (
    <>
      {/* Top bar — desktop only */}
      <div style={{
        background: '#0D3260', padding: '0.45rem 0',
        display: 'none',
      }} className="topbar-row">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
            MSME Registered &nbsp;|&nbsp; GST: 23DCGPK1030M1ZV
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="tel:+917999320122" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={11} /> +91 79993 20122
            </a>
            <a href="mailto:saraswaticonstruction21@gmail.com" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              saraswaticonstruction21@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="navbar" style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: 40, height: 40, background: '#1B4F8A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontFamily: 'Outfit, sans-serif',
              fontWeight: 900, fontSize: '0.75rem', flexShrink: 0,
            }}><strong>SCAE</strong></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.82rem', color: '#0D1117', lineHeight: 1.1 }}>
                <strong>Saraswati Construction</strong>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.82rem', color: '#1B4F8A', lineHeight: 1.1 }}>
                <strong>& Enterprise</strong>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desk-nav">
            {NAV.map(n => (
              <Link key={n.path} to={n.path} style={{
                padding: '0.5rem 0.9rem',
                fontSize: '0.84rem',
                fontWeight: 500,
                color: active(n.path) ? '#1B4F8A' : '#374151',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s',
                borderBottom: active(n.path) ? '2px solid #1B4F8A' : '2px solid transparent',
              }}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link to="/contact" className="btn btn-blue" style={{ padding: '0.55rem 1.25rem', fontSize: '0.8rem' }}
              >
              Get In Touch <ChevronRight size={14} />
            </Link>
            <button
              onClick={toggle}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.4rem', display: 'none', color: '#1F2937',
              }}
              className="ham-btn"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {/* Close */}
        <button onClick={toggle} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.08)', border: 'none',
          width: 40, height: 40, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        }}>
          <X size={22} />
        </button>

        {/* Logo in overlay */}
        <div style={{ position: 'absolute', top: 18, left: 20, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.65rem' }}><strong>SCAE</strong></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 900, lineHeight: 1.1 }}><strong>Saraswati Construction</strong></span>
            <span style={{ color: '#F4A623', fontSize: '0.75rem', fontWeight: 900, lineHeight: 1.1 }}><strong>& Enterprise</strong></span>
          </div>
        </div>

        {/* Bubbles */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bbl" style={{
            width: 60 + i * 30, height: 60 + i * 30,
            bottom: `${8 + i * 14}%`, left: `${4 + i * 20}%`,
            background: 'rgba(255,255,255,0.06)',
            animationDuration: `${4 + i}s`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}

        {/* Nav links */}
        <nav style={{ width: '100%', maxWidth: 360, padding: '0 2rem' }}>
          {NAV.map((n, i) => (
            <Link key={n.path} to={n.path}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                color: active(n.path) ? '#F4A623' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600, fontSize: '1.15rem',
                transition: 'color 0.2s',
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {n.label}
              <ChevronRight size={16} style={{ color: active(n.path) ? '#F4A623' : 'rgba(255,255,255,0.3)' }} />
            </Link>
          ))}
        </nav>

        {/* Bottom contacts */}
        <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center' }}>
          <a href="tel:+917999320122" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none', marginBottom: 4 }}>
            +91 79993 20122
          </a>
          <a href="mailto:saraswaticonstruction21@gmail.com" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textDecoration: 'none' }}>
            saraswaticonstruction21@gmail.com
          </a>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) { .desk-nav { display: none !important; } .ham-btn { display: flex !important; } }
        @media (min-width: 1025px) { .topbar-row { display: block !important; } }
      `}</style>
    </>
  );
};

export default Navbar;
