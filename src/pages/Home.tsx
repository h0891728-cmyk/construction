import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Award, Clock, ArrowRight, CheckCircle, Star, Zap, Building2, Truck, Sun } from 'lucide-react';
import AnimatedSection, { AnimatedCounter } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { IMGS, CLIENT_LOGOS, SVC_IMGS, SPECIFIC_IMGS } from '../data/images';

/* ── Reusable page hero ── */
export const PageHero: React.FC<{ title: React.ReactNode; sub: string; crumb: string }> = ({ title, sub, crumb }) => (
  <section style={{
    background: 'linear-gradient(135deg, #070E1A 0%, #0D2456 55%, #1B4F8A 100%)',
    padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3.5rem, 6vw, 5rem)',
    position: 'relative', overflow: 'hidden',
  }}>
    <div className="pat-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
    <div className="pat-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
    {[...Array(3)].map((_, i) => (
      <div key={i} className="bbl" style={{
        width: 80 + i * 40, height: 80 + i * 40,
        bottom: `${15 + i * 18}%`, left: `${4 + i * 22}%`,
        background: 'rgba(255,255,255,0.05)',
        animationDuration: `${5 + i}s`,
      }} />
    ))}
    <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,166,35,0.85)', marginBottom: '0.75rem' }}>
        {crumb}
      </div>
      <h1 style={{
        fontFamily: 'Outfit, sans-serif', fontWeight: 900,
        fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff',
        marginBottom: '1rem', lineHeight: 1.15,
        animation: 'slideLeft 0.65s ease both',
      }}>{title}</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, fontSize: '0.9rem', lineHeight: 1.7 }}>{sub}</p>
    </div>
  </section>
);

/* ── HERO ── */
const Hero: React.FC = () => {
  const words = ['Electrical', 'Civil', 'Solar', 'Infrastructure'];
  const [wi, setWi] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setShow(false);
      setTimeout(() => { setWi(i => (i + 1) % words.length); setShow(true); }, 380);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #070E1A 0%, #0D2456 55%, #1B4F8A 100%)',
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="pat-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div className="pat-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Bubbles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bbl" style={{
          width: 50 + i * 28, height: 50 + i * 28,
          bottom: `${6 + i * 12}%`, left: `${3 + i * 14}%`,
          background: i % 2 === 0 ? 'rgba(42,106,181,0.18)' : 'rgba(244,166,35,0.1)',
          animationDuration: `${5 + i * 1.2}s`,
          animationDelay: `${i * 0.6}s`,
        }} />
      ))}

      {/* Right image */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
        display: 'none',
      }} className="hero-img-panel">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #070E1A 0%, transparent 45%)', zIndex: 1 }} />
        <img src="https://lh3.googleusercontent.com/d/1UKzPXbWxQaZTCnXeiZfM_m2Ug44I1VDN"
          alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2, padding: 'clamp(5rem,10vw,7rem) var(--px)' }}>
        <div style={{ maxWidth: 640 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(244,166,35,0.1)', border: '1px solid rgba(244,166,35,0.25)',
            padding: '0.4rem 1rem', marginBottom: '2rem',
            animation: 'popIn 0.5s ease',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F4A623', animation: 'spin 2s linear infinite', display: 'inline-block' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#F4A623', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              MSME Registered · Est. 2025
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem',
            animation: 'slideLeft 0.7s ease 0.1s both',
          }}>
            Delivering <br />Excellence in<br />
            <span style={{
              color: '#F4A623',
              display: 'inline-block',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(10px)',
            }}>{words[wi]}</span>
            <br />Engineering
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.9rem,1.5vw,1.05rem)',
            lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: 500,
            animation: 'slideLeft 0.7s ease 0.25s both',
          }}>
            <strong>Saraswati Construction and Enterprise</strong> — 10+ years of individual professional expertise in high-stakes
            electrical substations, expressway infrastructure, and renewable energy projects across India.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '3rem', animation: 'slideLeft 0.7s ease 0.4s both' }}>
            <Link to="/contact" className="btn btn-gold">Start Your Project <ChevronRight size={16} /></Link>
            <Link to="/projects" className="btn btn-ghost">View Projects</Link>
          </div>

          {/* Trust pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', animation: 'slideLeft 0.7s ease 0.55s both' }}>
            {[{ Icon: Shield, l: 'Safety First' }, { Icon: Award, l: 'Quality Assured' }, { Icon: Clock, l: 'On-Time Delivery' }].map(({ Icon, l }) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon size={14} style={{ color: '#F4A623' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', fontWeight: 500 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, rgba(7,14,26,0.4))', pointerEvents: 'none' }} />

      <style>{`@media(min-width:1200px){.hero-img-panel{display:block!important;}}`}</style>
    </section>
  );
};

/* ── STATS BAR ── */
const Stats: React.FC = () => (
  <section style={{ background: '#1B4F8A' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { n: 10, s: '+', l: 'Years Experience' },
          { n: 7, s: '+', l: 'Projects Done' },
          { n: 5, s: '', l: 'Major Clients' },
          { n: 100, s: '%', l: 'Commitment Rate' },
        ].map((st, i) => (
          <AnimatedSection key={st.l} delay={i * 80}
            style={{ background: '#1B4F8A', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,2.75rem)', color: '#fff', lineHeight: 1 }}>
              <AnimatedCounter end={st.n} suffix={st.s} />
            </div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 500 }}>{st.l}</div>
          </AnimatedSection>
        ))}
      </div>
    </div>
    <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
  </section>
);

/* ── ABOUT TEASER ── */
const AboutTeaser: React.FC = () => (
  <section className="sec" style={{ background: '#fff' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <AnimatedSection direction="left">
          <div style={{ position: 'relative' }}>
            <img src={SPECIFIC_IMGS.tunnel}
              alt="Electrical substation" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
            {/* Stat overlay */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: '#fff', padding: '1.25rem 1.5rem',
              boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              borderLeft: '4px solid #1B4F8A',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#1B4F8A' }}>10+</div>
              <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: 2 }}>Years of Experience</div>
              <div style={{ display: 'flex', gap: 2, marginTop: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F4A623" strokeWidth={0} />)}
              </div>
            </div>
            {/* Blue corner accent */}
            <div style={{ position: 'absolute', top: -12, left: -12, width: 56, height: 56, border: '2px solid #1B4F8A', background: 'rgba(27,79,138,0.08)' }} />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="badge">Who We Are</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            An Emerging Engineering Leader Built on{' '}
            <span style={{ color: '#1B4F8A' }}>Trust & Precision</span>
          </h2>
          <p style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Founded by Mr. Mohan Kushwaha and Mr. Narayan Kushwaha, <strong>Saraswati Construction and
            Enterprise</strong> has been actively operating for one year, providing reliable and efficient 
            engineering solutions since 2016.
          </p>
          <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
            Our philosophy: <em style={{ color: '#1B4F8A' }}>"We deliver what we commit."</em>{' '}
            Every project is executed with the highest standards of safety and engineering integrity.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.75rem' }}>
            {['MSME Registered Firm', 'GST Compliant', 'Safety Certified', 'EPC Mode Ready'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={14} style={{ color: '#1B4F8A', flexShrink: 0 }} />
                <span style={{ fontSize: '0.83rem', color: '#374151', fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn btn-blue">Our Story <ArrowRight size={15} /></Link>
        </AnimatedSection>
      </div>
    </div>
    <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
  </section>
);

/* ── CSPTCL HIGHLIGHT ── */
const ClientHighlight: React.FC = () => (
  <section className="sec" style={{ background: '#F0F4F8', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, transparent, rgba(27, 79, 138, 0.03))' }} />
    <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '4rem', alignItems: 'center' }}>
        <AnimatedSection direction="left">
          <div style={{ padding: '2.5rem', background: '#fff', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '1rem', border: '1px dashed #CBD5E1', pointerEvents: 'none' }} />
            <img src={CLIENT_LOGOS.csptcl} alt="CSPTCL Logo" style={{ maxWidth: '100%', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }} />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="badge" style={{ color: '#1B4F8A' }}>Major Project Highlight</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Supporting Chhattisgarh's <br />
            <span style={{ color: '#1B4F8A' }}>Energy Infrastructure</span>
          </h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1B4F8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Client</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1F2937' }}>Chhattisgarh State Power Transmission Co. Ltd. (CSPTCL)</div>
          </div>
          <p style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            As a trusted execution partner, we are directly contributing to the state's transmission efficiency through 
            high-quality material procurement and engineering support.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { t: 'Project', v: 'Clamps & Hardware Supply' },
              { t: 'Region', v: 'Chhattisgarh State' },
              { t: 'Status', v: 'Ongoing Contract' },
              { t: 'Type', v: 'Operational Utility Support' },
            ].map(d => (
              <div key={d.t} style={{ padding: '1rem', background: '#fff', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{d.t}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 750, color: '#1E293B' }}>{d.v}</div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="btn btn-blue">Explore Details <ArrowRight size={15} /></Link>
        </AnimatedSection>
      </div>
    </div>
    <style>{`@media(max-width:992px){.client-grid{grid-template-columns:1fr!important; gap:3rem!important;}}`}</style>
  </section>
);

/* ── SERVICES SNAPSHOT ── */
const SVCS = [
  { Icon: Zap, color: '#2563EB', bg: '#EFF6FF', title: 'Transformer Installation', tag: 'Electrical', desc: 'Complete installation and commissioning of high-capacity transformers with rigorous safety protocols.', img: SVC_IMGS.transformer },
  { Icon: Building2, color: '#7C3AED', bg: '#F5F3FF', title: 'Water Tank Construction', tag: 'Civil', desc: 'Specialized construction of overhead and ground-level water storage tanks for municipal use.', img: SVC_IMGS.waterTank },
  { Icon: Truck, color: '#DC2626', bg: '#FEF2F2', title: 'Highway Crash Barriers', tag: 'Infrastructure', desc: 'W-beam safety crash barrier installation for national highways and expressways.', img: SVC_IMGS.crashBarrier },
  { Icon: Sun, color: '#D97706', bg: '#FFFBEB', title: 'Solar Plate Installation', tag: 'Renewable', desc: 'End-to-end solar PV system design, procurement, installation, and commissioning.', img: SVC_IMGS.solar },
];

const ServicesSnap: React.FC = () => (
  <section className="sec" style={{ background: '#F8FAFC' }}>
    <div className="wrap">
      <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="badge" style={{ justifyContent: 'center' }}>Our Expertise</div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117' }}>
          Specialized Engineering Services
        </h2>
        <p style={{ color: '#6B7280', marginTop: '0.75rem', maxWidth: 480, marginInline: 'auto', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Backed by over a decade of individual professional experience in Electrical and Civil Engineering.
        </p>
      </AnimatedSection>

      <div className="grid-4">
        {SVCS.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 90}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #0D1117CC, transparent)` }} />
                <div className="chip" style={{ position: 'absolute', bottom: 12, left: 12, background: s.color, color: '#fff' }}>{s.tag}</div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <div style={{ width: 42, height: 42, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: `1px solid ${s.color}25` }}>
                  <s.Icon size={20} style={{ color: s.color }} />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0D1117', marginBottom: '0.5rem', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.8rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link to="/services" className="btn btn-blue">All Services <ArrowRight size={15} /></Link>
      </AnimatedSection>
    </div>
  </section>
);

/* ── PROJECTS TEASER ── */
const PROJS = [
  { title: 'Delhi-Mumbai Vadodara Expressway', cat: 'Highway Lighting', tag: 'Ongoing', color: '#1B4F8A', img: IMGS.h1 },
  { title: 'CSPTCL – Clamps & Hardware', cat: 'Material Supply', tag: 'Ongoing', color: '#7C3AED', img: IMGS.e2 },
  { title: 'Rehabilitation of Jawahar Tunnel', cat: 'Substation Installation', tag: 'Completed', color: '#0891B2', img: SPECIFIC_IMGS.tunnel },
];

const ProjectsTeaser: React.FC = () => (
  <section className="sec" style={{ background: '#080F1D' }}>
    <div className="wrap">
      <AnimatedSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-gold">Portfolio</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#fff' }}>Featured Projects</h2>
        </div>
        <Link to="/projects" className="btn btn-ghost" style={{ fontSize: '0.82rem' }}>All Projects <ArrowRight size={14} /></Link>
      </AnimatedSection>

      <div className="grid-3">
        {PROJS.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 110}>
            <div style={{ position: 'relative', height: 280, overflow: 'hidden', cursor: 'pointer' }}
              className="proj-card">
              <img src={p.img} alt={p.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span className="chip" style={{ background: p.color, color: '#fff' }}>{p.tag}</span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem' }}>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{p.cat}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{p.title}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
    <style>{`.proj-card:hover img{transform:scale(1.07)}`}</style>
  </section>
);

/* ── WHY US ── */
const Why: React.FC = () => {
  const items = [
    { Icon: Shield, color: '#1B4F8A', t: 'Safety Compliance', d: 'Strict adherence to IS, IEC, and BIS safety standards on every project site.' },
    { Icon: Award, color: '#D97706', t: 'Quality Materials', d: 'Only premium-grade materials from certified vendors for lasting infrastructure.' },
    { Icon: Clock, color: '#16A34A', t: 'Timely Execution', d: 'Project milestones tracked rigorously — no delays, no excuses.' },
    { Icon: Zap, color: '#7C3AED', t: 'Expert Workforce', d: 'Highly trained engineers and technicians with proven project histories.' },
  ];

  return (
    <section className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <AnimatedSection direction="left">
            <div className="badge">Our Edge</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '1rem', lineHeight: 1.2 }}>
              Why Choose <br /><span style={{ color: '#1B4F8A' }}><strong>Saraswati Construction?</strong></span>
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              We combine technical mastery, compliance-first operations, and genuine commitment to our clients' success.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {items.map((r, i) => (
                <AnimatedSection key={r.t} delay={i * 70}>
                  <div style={{ padding: '1.125rem', border: '1px solid #E5E7EB', transition: 'all 0.25s' }} className="why-card">
                    <div style={{ width: 38, height: 38, background: `${r.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                      <r.Icon size={18} style={{ color: r.color }} />
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#0D1117', marginBottom: '0.35rem' }}>{r.t}</div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.6 }}>{r.d}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {[
                SVC_IMGS.transformer,
                SVC_IMGS.crashBarrier,
                IMGS.t1,
                SVC_IMGS.solar,
              ].map((src, i) => (
                <img key={i} src={src} alt="" style={{ width: '100%', height: 190, objectFit: 'cover', marginTop: i % 2 !== 0 ? '1.5rem' : 0 }} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`.why-card:hover{border-color:#1B4F8A;box-shadow:0 8px 24px rgba(27,79,138,0.12);}`}</style>
    </section>
  );
};

/* ── MAJOR CLIENTS ── */
const Clients: React.FC = () => {
  const clients = [
    { name: 'CSPTCL', desc: 'Chhattisgarh State Power Transmission Co. Ltd.', logo: CLIENT_LOGOS.csptcl, url: 'https://cspc.co.in/cspc/HomeCSPTCL.aspx' },
    { name: 'Indian Railways', desc: 'WCR / IRBA', logo: CLIENT_LOGOS.railway, url: 'https://www.indianrail.gov.in/enquiry/TBIS/TrainBetweenImportantStations.html?locale=en' },
    { name: 'MPPTCL', desc: 'M.P. Power Transmission Co. Ltd.', logo: CLIENT_LOGOS.mpptcl, url: 'https://mptransco.in/' },
    { name: 'MPPWD', desc: 'M.P. Public Works Department', logo: CLIENT_LOGOS.mppwd, url: 'https://mppwd.gov.in/' },
    { name: 'DRS Techno', desc: 'Industrial Engineering Partner', logo: CLIENT_LOGOS.drstechno, url: '/contact' },
  ];

  // Double the list for seamless marquee
  const items = [...clients, ...clients];

  return (
    <section className="sec" style={{ background: '#fff', borderTop: '1px solid #F1F5F9', overflow: 'hidden' }}>
      <div className="wrap">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge" style={{ justifyContent: 'center' }}>Trusted By</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#0D1117' }}>Major Clients & Partners</h2>
        </AnimatedSection>

        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          {/* Edge Fades */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, #fff, transparent)', zIndex: 10 }}></div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, #fff, transparent)', zIndex: 10 }}></div>

          <div className="client-marquee" style={{ display: 'flex', gap: '2rem', width: 'max-content', animation: 'scrollMarquee 35s linear infinite' }}>
            {items.map((c, i) => (
              <a 
                key={i} 
                href={c.url}
                target={c.url.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                style={{ 
                  width: 260,
                  minHeight: 200,
                  padding: '2rem', 
                  background: '#fff', 
                  border: '1px solid #E5E7EB',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  flexShrink: 0,
                  textDecoration: 'none'
                }} className="client-card">
                <div style={{ height: 60, marginBottom: '1.25rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={c.logo} alt={c.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ 
                  fontFamily: 'Outfit, sans-serif', 
                  fontWeight: 900, 
                  fontSize: '1rem', 
                  color: '#0D1117',
                  marginBottom: '0.4rem' 
                }}>
                  {c.name}
                </div>
                <div style={{ 
                  fontSize: '0.72rem', 
                  color: '#6B7280',
                  lineHeight: 1.5,
                  fontWeight: 500,
                  maxWidth: 180
                }}>
                  {c.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .client-marquee:hover { animation-play-state: paused; }
        .client-card:hover { border-color: #1B4F8A; box-shadow: 0 12px 30px rgba(0,0,0,0.06); transform: translateY(-5px); }
      `}</style>
    </section>
  );
};

/* ── CTA BANNER ── */
const CTA: React.FC = () => (
  <section style={{ background: '#1B4F8A', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
    <div className="pat-grid" style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}></div>
    <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <AnimatedSection>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1.25rem' }}>
          Partner with a Reliable <br />Engineering Team
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, marginInline: 'auto', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          From Concept to Commissioning — Saraswati Construction and Enterprise delivers on every promise.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-gold">Discuss Your Project <ArrowRight size={15} /></Link>
          <Link to="/services" className="btn btn-ghost">Explore Services</Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <SEO 
      title="Home - Engineering Excellence" 
      description="Saraswati Construction and Enterprise delivers expert electrical substation, highway infrastructure, and renewable energy solutions in Central India." 
      keywords="Electrical Substation, Highway Infrastructure, Solar Installation, EPC Construction, Jabalpur Engineering"
    />
    <Hero />
    <Stats />
    <AboutTeaser />
    <ClientHighlight />
    <ServicesSnap />
    <ProjectsTeaser />
    <Why />
    <Clients />
    <CTA />
  </>
);

export default Home;
