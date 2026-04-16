import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Building2, Sun, Truck, Settings, Shield, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import SEO from '../components/SEO';
import { IMGS, SVC_IMGS } from '../data/images';

const SVCS = [
  { Icon: Zap, color: '#2563EB', bg: '#EFF6FF', title: 'Transformer Installation', cat: 'Electrical Works', img: SVC_IMGS.transformer, short: 'Complete installation, testing, and commissioning of high-capacity transformers for industrial and utility power grids.', scope: ['HT/LT panel design and fabrication', 'Transformer erection and oil filtration', 'Protection relay configuration', 'Earthing and lightning protection', 'Load testing and commissioning'] },
  { Icon: Building2, color: '#7C3AED', bg: '#F5F3FF', title: 'Water Tank Construction', cat: 'Civil Infrastructure', img: SVC_IMGS.waterTank, short: 'Specialized construction of overhead and ground-level water storage tanks for residential and municipal projects.', scope: ['RCC foundation and structural design', 'Leakage-proof structural work', 'Plastering and internal finishing', 'Piping and pump installation', 'Quality testing and water-proofing'] },
  { Icon: Truck, color: '#DC2626', bg: '#FEF2F2', title: 'Highway Crash Barrier Installation', cat: 'Road Infrastructure', img: SVC_IMGS.crashBarrier, short: 'W-beam and thrie-beam crash barrier installation for national highways, expressways, flyovers, and urban roads.', scope: ['Soil investigation and post design', 'W-beam steel barrier panels supply', 'Post driving using hydraulic equipment', 'End terminal and transition zone installation', 'Delineators and reflectors fitting'] },
  { Icon: Sun, color: '#D97706', bg: '#FFFBEB', title: 'Solar Plate Installation', cat: 'Renewable Energy', img: SVC_IMGS.solar, short: 'Professional design and installation of solar PV modules across residential, commercial, and industrial sites.', scope: ['Load analysis and system sizing', 'Solar plate mounting structure design', 'Inverter and battery system commissioning', 'Net-metering coordination', 'Annual maintenance contracts'] },
  { Icon: Settings, color: '#0891B2', bg: '#ECFEFF', title: 'Cable / Wiring Solutions', cat: 'Technical Services', img: SVC_IMGS.cabling, short: 'Expert HT/LT cable laying, termination, and internal wiring solutions for complex industrial and infrastructure projects.', scope: ['HT/LT cable laying and termination', 'Cable tray installation', 'Bus bar trunking systems', 'Internal and external electrical wiring', 'Safety inspection and testing'] },
  { Icon: Shield, color: '#16A34A', bg: '#F0FDF4', title: 'Material Supply & Procurement', cat: 'Supply Chain', img: IMGS.e2, short: 'Authorized supply of high-grade electrical and civil materials to major EPC contractors and government utilities.', scope: ['HT/LT cables and accessories', 'Transformer components and spares', 'Switchgear panels — HT/LT', 'CTs, PTs, and metering equipment', 'Civil construction materials'] },
];

const Card: React.FC<{ s: typeof SVCS[0]; i: number }> = ({ s, i }) => {
  const [exp, setExp] = useState(false);
  return (
    <AnimatedSection delay={i * 75}>
      <div style={{ background: '#fff', border: '1px solid #E5E7EB', overflow: 'hidden', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}>
        {/* Image */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
          <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.55s' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${s.color}CC, transparent)` }} />
          <span className="chip" style={{ position: 'absolute', top: 12, left: 12, background: s.color, color: '#fff' }}>{s.cat}</span>
          <div style={{ position: 'absolute', bottom: 12, left: 12, width: 38, height: 38, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <s.Icon size={18} style={{ color: s.color }} />
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: '1.375rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1117', marginBottom: '0.625rem', lineHeight: 1.3 }}>{s.title}</h3>
          <p style={{ color: '#6B7280', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{s.short}</p>
          <button onClick={() => setExp(e => !e)} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: s.color, background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', padding: 0, marginBottom: exp ? '0.875rem' : 0, transition: 'opacity 0.2s' }}>
            {exp ? 'Hide Details' : 'Scope of Work'} {exp ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
          {exp && (
            <ul style={{ marginTop: 0 }}>
              {s.scope.map(d => (
                <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <CheckCircle size={12} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.78rem', color: '#4B5563' }}>{d}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => (
  <>
    <SEO 
      title="Services - Electrical & Civil Expertise" 
      description="Comprehensive engineering services including transformer installation, water tank construction, solar plate setup, and highway safety solutions." 
      keywords="Transformer Installation, Civil Construction Jabalpur, Solar Panel Supply, Highway Crash Barriers"
    />
    <PageHero title="Our Services" sub="A comprehensive suite of electrical, civil, and renewable energy engineering services — delivered with precision and compliance." crumb="Home → Services" />

    <section className="sec" style={{ background: '#F8FAFC' }}>
      <div className="wrap">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" style={{ justifyContent: 'center' }}>What We Do</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '0.75rem' }}>Specialized Engineering Expertise</h2>
          <p style={{ color: '#6B7280', maxWidth: 480, marginInline: 'auto', fontSize: '0.875rem', lineHeight: 1.7 }}>
            Providing reliable and efficient engineering solutions with a focus on safety and precision.
          </p>
        </AnimatedSection>
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '2.5rem', marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0D1117', marginBottom: '1.5rem', textAlign: 'center' }}>Core Service Offerings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              'RCC foundation of HM (High Mast) & Street Light pole',
              'Chemical Earthing',
              'Canopy light installation (Underpass)',
              'Metal bracket pole installation on bridges',
              'Solar installation',
              'Cable tray installation',
              'HT/LT Panel installation',
              'HT/LT Cable laying & termination',
              'Jet fan installation & commissioning',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#F8FAFC', border: '1px solid #EDF2F7' }}>
                <CheckCircle size={14} style={{ color: '#1B4F8A', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: '#4B5563', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-3">
          {SVCS.map((s, i) => <Card key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117' }}>Our Project Process</h2>
        </AnimatedSection>
        <div className="grid-4">
          {[
            { n: '01', t: 'Site Assessment', d: 'Detailed survey, feasibility study, and requirements gathering at the project site.' },
            { n: '02', t: 'Design & Planning', d: 'Engineering drawings, BOQ preparation, and detailed project planning.' },
            { n: '03', t: 'Execution', d: 'On-site construction and installation by certified technicians with quality checks.' },
            { n: '04', t: 'Commissioning', d: 'Full testing, inspection, handover documentation, and client sign-off.' },
          ].map((p, i) => (
            <AnimatedSection key={p.n} delay={i * 90}>
              <div style={{ padding: '2rem 1.5rem', borderTop: '3px solid #1B4F8A', background: '#F8FAFC', height: '100%' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '3.5rem', color: '#1B4F8A', opacity: 0.1, lineHeight: 1, marginBottom: '0.75rem' }}>{p.n}</div>
                <div style={{ width: '2rem', height: 2, background: '#1B4F8A', marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0D1117', marginBottom: '0.5rem' }}>{p.t}</h4>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65 }}>{p.d}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: '#1B4F8A', padding: '4rem 0' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#fff', marginBottom: '0.875rem' }}>Ready to Discuss Your Project?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.75rem', fontSize: '0.875rem' }}>Our engineers are ready to evaluate your requirements and provide a comprehensive proposal.</p>
        <Link to="/contact" className="btn btn-white">Request a Quote <ArrowRight size={15} /></Link>
      </div>
    </section>
  </>
);

export default Services;
