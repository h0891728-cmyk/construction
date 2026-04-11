import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import { IMGS } from '../data/images';

const PROJECTS = [
  { id: 1, title: 'Mumbai–Vadodara Expressway',      cat: 'Highway Infrastructure', client: 'EPC Contractor – National Highways',             loc: 'Gujarat / Maharashtra', status: 'Completed', year: '2021–2022',    color: '#1B4F8A', img: IMGS.h1, val: '₹ 1.2 Cr+', desc: 'Subcontracted installation of safety crash barriers along the Mumbai–Vadodara Expressway corridor under Bharatmala Pariyojana.', scope: ['W-beam crash barrier installation (~15 km)','Delineator posts and reflector installation','End terminal and transition sections','Quality certification per IRC standards'] },
  { id: 2, title: 'CSPTCL Material Supply',            cat: 'Power Transmission',      client: 'Chhattisgarh State Power Transmission Co. Ltd.', loc: 'Chhattisgarh',          status: 'Ongoing',    year: '2022–Present', color: '#7C3AED', img: IMGS.e3, val: '₹ 80 Lac+', desc: 'Ongoing material procurement and technical support services for Chhattisgarh Power Transmission Company Limited.',  scope: ['Supply of HT cables and cable accessories','Transformer components and switchgear','On-site technical support and supervision','Material testing and certification coordination'] },
  { id: 3, title: '33 KV Substation Commissioning',   cat: 'Electrical Engineering', client: 'M.P. Madhya Kshetra Vidyut Vitaran',           loc: 'Jabalpur Region, MP',   status: 'Completed', year: '2020',         color: '#D97706', img: IMGS.e4, val: '₹ 45 Lac',  desc: 'Full turnkey installation and commissioning of a 33/11 KV power substation serving a distribution radius of 4 villages.', scope: ['Complete 33/11 KV substation installation','HT panel and transformer erection','Protection relay configuration and testing','Earthing and lightning protection system'] },
  { id: 4, title: 'Solar Rooftop — Industrial Complex', cat: 'Renewable Energy',       client: 'Private Industrial Client, Jabalpur',           loc: 'Jabalpur, MP',          status: 'Completed', year: '2024',         color: '#16A34A', img: IMGS.s2, val: '₹ 90 Lac',  desc: 'Design and installation of a 200 KW grid-connected solar photovoltaic system — 35% reduction in energy costs achieved.', scope: ['200 KW grid-connected rooftop solar system','Structure design and fabrication','Solar module and inverter installation','Net-metering coordination with DISCOM'] },
  { id: 5, title: 'Commercial Complex — Civil Works',  cat: 'Civil Construction',     client: 'Private Developer, MP',                         loc: 'Jabalpur, MP',          status: 'Ongoing',    year: '2024–Present', color: '#DC2626', img: IMGS.c2, val: '₹ 1.5 Cr',  desc: 'Complete civil construction of a G+3 commercial complex including structural design, RCC framework, and all MEP works.', scope: ['G+3 commercial building construction','Foundation and RCC structural work','Brick masonry and plastering','Electrical internal wiring and finishing'] },
  { id: 6, title: '11 KV Feeder Augmentation',        cat: 'Electrical Works',       client: 'State Power Utility, Chhattisgarh',              loc: 'Raipur Region, CG',     status: 'Completed', year: '2023',         color: '#0891B2', img: IMGS.e6, val: '₹ 55 Lac',  desc: 'Augmentation of an existing 11 KV distribution feeder to improve power supply reliability for 2,000+ consumers.',    scope: ['HT cable laying and termination','New 11 KV feeder bay construction','VCB installation and testing','System energization and commissioning'] },
];

const SC: Record<string, string> = { Completed: '#16A34A', Ongoing: '#D97706' };

type F = 'All' | 'Completed' | 'Ongoing';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<F>('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.status === filter);

  return (
    <>
      <PageHero title="Our Projects" sub="A portfolio of high-stakes electrical, civil, and infrastructure projects delivered across Madhya Pradesh and Chhattisgarh." crumb="Home → Projects" />

      {/* Filter bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem var(--px)', flexWrap: 'wrap' }}>
          {(['All', 'Completed', 'Ongoing'] as F[]).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
              background: filter === f ? '#1B4F8A' : 'transparent',
              color: filter === f ? '#fff' : '#374151',
              border: `1px solid ${filter === f ? '#1B4F8A' : '#D1D5DB'}`,
              transition: 'all 0.2s',
            }}>{f}</button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#6B7280' }}>{shown.length} project{shown.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Grid */}
      <section className="sec" style={{ background: '#F8FAFC' }}>
        <div className="wrap">
          <div className="grid-3">
            {shown.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 70}>
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', overflow: 'hidden', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }} className="proj-item">
                  {/* Image */}
                  <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.55s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }} />
                    <span className="chip" style={{ position: 'absolute', top: 12, left: 12, background: SC[p.status], color: '#fff' }}>{p.status}</span>
                    <span style={{ position: 'absolute', bottom: 12, left: 12, fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.cat}</span>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '1.375rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1117', marginBottom: '0.5rem', lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ color: '#6B7280', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '0.875rem', flex: 1 }}>{p.desc}</p>
                    {/* Meta */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.875rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#9CA3AF' }}>
                        <MapPin size={11} />{p.loc}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#9CA3AF' }}>
                        <Calendar size={11} />{p.year}
                      </div>
                    </div>
                    {/* Scope */}
                    <div style={{ marginBottom: '1rem' }}>
                      {p.scope.slice(0, 3).map(s => (
                        <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.3rem' }}>
                          <CheckCircle size={11} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: '0.75rem', color: '#4B5563' }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.875rem', borderTop: '1px solid #F3F4F6' }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Project Value</div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: p.color }}>{p.val}</div>
                      </div>
                      <button style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 600, color: p.color, background: 'none', border: 'none', cursor: 'pointer' }}>
                        Details <ExternalLink size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EPC banner */}
      <section style={{ background: 'linear-gradient(135deg, #080F1D, #0D2456)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="pat-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F4A623', marginBottom: '0.875rem' }}>Next Phase</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#fff', marginBottom: '1rem' }}>Transitioning to Full EPC Mode</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 500, marginInline: 'auto', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              We are actively building capacity to take on primary EPC contracts — directly managing Engineering, Procurement, and Construction phases for large infrastructure projects.
            </p>
            <Link to="/vision" className="btn btn-blue">Our Vision <ArrowRight size={15} /></Link>
          </AnimatedSection>
        </div>
      </section>
      <style>{`.proj-item:hover{border-color:#1B4F8A!important;box-shadow:0 16px 40px rgba(27,79,138,0.12)!important;transform:translateY(-3px);} .proj-item:hover img{transform:scale(1.06)}`}</style>
    </>
  );
};

export default Projects;
