import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#080F1D', fontFamily: 'var(--font-primary)' }}>
      {/* Main footer body */}
      <div className="wrap" style={{ padding: '4rem var(--px) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr', gap: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 32, height: 32, background: '#0D3260', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.65rem', flexShrink: 0 }}><strong>SCAE</strong></div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.85rem', color: '#fff', lineHeight: 1.1 }}><strong>Saraswati Construction</strong></div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.85rem', color: '#F4A623', lineHeight: 1.1 }}><strong>& Enterprise</strong></div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              MSME registered firm delivering excellence in Electrical & Civil Engineering since 2016.
              Building India's infrastructure with commitment, quality, and safety.
            </p>
            {/* Social placeholders */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {['WB', 'LI', 'TW'].map(s => (
                <a key={s} href="#" style={{ width: 34, height: 34, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }} className="soc-btn">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { l: 'Home', p: '/' }, { l: 'About Us', p: '/about' }, { l: 'Our Services', p: '/services' },
                { l: 'Projects', p: '/projects' }, { l: 'Gallery', p: '/gallery' }, { l: 'Vision', p: '/vision' }, { l: 'Contact Us', p: '/contact' }, { l: 'Terms & Conditions', p: '/terms' },
              ].map(n => (
                <li key={n.p} style={{ marginBottom: '0.5rem' }}>
                  <Link to={n.p} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }} className="foot-link">
                    <ArrowRight size={11} />{n.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Clients */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Major Clients</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { n: 'CSPTCL', l: 'https://cspc.co.in/cspc/HomeCSPTCL.aspx' },
                { n: 'Indian Railways', l: 'https://www.indianrail.gov.in/enquiry/TBIS/TrainBetweenImportantStations.html?locale=en' },
                { n: 'MPPTCL (MP Transco)', l: 'https://mptransco.in/' },
                { n: 'MP Public Works Dept.', l: 'https://mppwd.gov.in/' },
                { n: 'DRS Techno', l: '/contact' }
              ].map(c => (
                <li key={c.n} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <ArrowRight size={11} style={{ color: '#F4A623', flexShrink: 0, marginTop: '0.2rem' }} />
                  <a 
                    href={c.l} 
                    target={c.l.startsWith('http') ? '_blank' : '_self'} 
                    rel="noreferrer" 
                    style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.color = '#fff'}
                    onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {c.n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={14} style={{ color: '#F4A623', flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>Plot No. 17, Mohit Platino, Pipariya Khurd, Neemkheda Road, Near DPS, Jabalpur, MP 482001</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Phone size={13} style={{ color: '#F4A623', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <a href="tel:+917999320122" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>+91 79993 20122</a>
                  <a href="tel:+919797546927" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>+91 97975 46927</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={13} style={{ color: '#F4A623', flexShrink: 0 }} />
                <a href="mailto:saraswaticonstruction21@gmail.com" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', wordBreak: 'break-all' }}>saraswaticonstruction21@gmail.com</a>
              </div>
            </div>

            {/* GST */}
            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.25rem' }}>GST Number</div>
              <div style={{ fontSize: '0.78rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>23DCGPK1030M1ZV</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.25)' }}>
        <div className="wrap" style={{ padding: '1rem var(--px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {year} <strong>Saraswati Construction and Enterprise</strong>. All Rights Reserved.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            Committed to Quality · Safety · Excellence
          </span>
        </div>
      </div>

      <style>{`
        .soc-btn:hover{border-color:rgba(255,255,255,0.3)!important;color:#fff!important;}
        .foot-link:hover{color:#fff!important;}
        @media(max-width:768px){.wrap>div{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:480px){.wrap>div{grid-template-columns:1fr!important;}}
      `}</style>
    </footer>
  );
};

export default Footer;
