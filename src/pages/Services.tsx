import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Building2, Sun, Truck, Settings, Shield, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import { IMGS } from '../data/images';

const SVCS = [
  { Icon: Zap,      color: '#2563EB', bg: '#EFF6FF', title: '11/33 KV Substation Installation',    cat: 'Electrical Works',    img: IMGS.e1, short: 'Complete design, supply, installation and commissioning of 11 KV and 33 KV substations for power utilities.',                       scope: ['Site survey and feasibility study','HT/LT panel design and fabrication','Transformer installation and testing','Protection relay configuration','Earthing and lightning protection systems','Load testing and commissioning','SCADA/automation integration'] },
  { Icon: Building2, color: '#7C3AED', bg: '#F5F3FF', title: 'Civil Building Construction',          cat: 'Civil Infrastructure', img: IMGS.c1, short: 'Residential, commercial, and industrial building construction with quality materials and expert architects.',                    scope: ['Foundation design and excavation','RCC framing and structural work','Brick/block masonry construction','Plastering, painting, and finishing','Plumbing and sanitary works','Electrical internal wiring','False ceiling and interior fit-outs'] },
  { Icon: Truck,     color: '#DC2626', bg: '#FEF2F2', title: 'Highway Crash Barrier Installation',   cat: 'Road Infrastructure',  img: IMGS.h1, short: 'W-beam and thrie-beam crash barrier installation for national highways, expressways, flyovers, and urban roads.',                scope: ['Soil investigation and post design','W-beam steel barrier panels supply','Post driving using hydraulic equipment','End terminal and transition zone installation','Delineators and reflectors fitting','Quality inspection per MORTH standards','As-built documentation and handover'] },
  { Icon: Sun,       color: '#D97706', bg: '#FFFBEB', title: 'Solar Panel Installation',              cat: 'Renewable Energy',     img: IMGS.s1, short: 'End-to-end solar PV system design, procurement, installation, and commissioning for residential and commercial.',                 scope: ['Load analysis and system sizing','Rooftop or ground-mount structure design','Solar module supply and installation','Inverter and battery system commissioning','Net-metering and grid synchronization','Annual maintenance contracts','Performance monitoring systems'] },
  { Icon: Settings,  color: '#0891B2', bg: '#ECFEFF', title: 'Electrical Commissioning & Testing',   cat: 'Technical Services',   img: IMGS.e2, short: 'Specialized electrical installation, testing, inspection, and commissioning for industrial and utility clients.',                scope: ['HT/LT cable laying and termination','Switchgear installation and alignment','Bus bar trunking system installation','Relay coordination studies','IR testing, loop testing, HV testing','Power quality analysis','Third-party inspection coordination'] },
  { Icon: Shield,    color: '#16A34A', bg: '#F0FDF4', title: 'Material Supply & Procurement',         cat: 'Supply Chain',         img: IMGS.m1, short: 'Reliable procurement and supply of electrical and civil materials for large EPC contractors and utilities.',                     scope: ['HT/LT cables and accessories','Transformer components and spares','Switchgear panels — HT/LT/MV','CTs, PTs, and metering equipment','Steel crash barrier components','Solar PV panels and inverters','Civil construction materials'] },
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
    <PageHero title="Our Services" sub="A comprehensive suite of electrical, civil, and renewable energy engineering services — delivered with precision and compliance." crumb="Home → Services" />

    <section className="sec" style={{ background: '#F8FAFC' }}>
      <div className="wrap">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" style={{ justifyContent: 'center' }}>What We Do</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '0.75rem' }}>Specialized Engineering Expertise</h2>
          <p style={{ color: '#6B7280', maxWidth: 480, marginInline: 'auto', fontSize: '0.875rem', lineHeight: 1.7 }}>Each service is executed by domain specialists with rigorous quality and safety controls.</p>
        </AnimatedSection>
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
