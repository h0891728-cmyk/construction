import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, ArrowRight, ExternalLink, X, Building2, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import SEO from '../components/SEO';
import { IMGS, CLIENT_LOGOS, SVC_IMGS, SPECIFIC_IMGS } from '../data/images';

const ONGOING_PROJECTS = [
  { id: 101, title: 'Delhi-Mumbai Vadodara Expressway', cat: 'Highway Lighting', client: 'ITC', loc: 'Delhi-Mumbai Corridor', status: 'Ongoing', year: '2025', color: '#1B4F8A', img: IMGS.h1, desc: 'Installation, Testing, and Commissioning (ITC) of Highway Lighting for the Delhi-Mumbai Vadodara Expressway.', scope: ['Highway lighting installation','Electrical substation setup','Cable laying and termination','System testing and commissioning'] },
  { id: 102, title: 'CSPTCL – Clamps & Hardware', cat: 'Material Supply', client: 'CSPTCL', loc: 'Chhattisgarh', status: 'Ongoing', year: '2026', color: '#7C3AED', img: IMGS.e2, desc: 'Supply of high-quality Clamps and Hardware for power transmission infrastructure.', scope: ['Supply of clamps & hardware','Quality certification','Technical support','Logistics management'] },
];

const COMPLETED_PROJECTS = [
  { id: 1, title: '33/11 KV Substation O&M', cat: 'Maintenance', client: 'MPMKVVCL', loc: 'Bhopal, MP', status: 'Completed', year: '2016', color: '#1B4F8A', img: SPECIFIC_IMGS.substation_33_11, desc: 'Operation & Maintenance (O&M) of 33/11 KV Substations for MPMKVVCL, Bhopal.', scope: ['System operation','Regular maintenance','Emergency repairs','Load management'] },
  { id: 2, title: 'NTPC, Narsinghpur', cat: 'Electrical Works', client: 'NTPC', loc: 'Narsinghpur, MP', status: 'Completed', year: '2017', color: '#D97706', img: IMGS.e2, desc: 'Electrical infrastructure and support services for NTPC project site.', scope: ['Electrical installation','Testing & commissioning','Technical supervision','Quality control'] },
  { id: 3, title: 'Residential & Building', cat: 'Civil Works', client: 'West Central Railway', loc: 'WCR Region', status: 'Completed', year: '2018', color: '#16A34A', img: SPECIFIC_IMGS.building, desc: 'Civil construction for Residential & Building projects for officials of West Central Railway.', scope: ['Civil construction','MEP works','Finishing works','Handover'] },
  { id: 4, title: 'EV Plant Electrical O&M', cat: 'Maintenance', client: 'Hira Group', loc: 'Chhattisgarh', status: 'Completed', year: '2021', color: '#7C3AED', img: SPECIFIC_IMGS.ev_plant, desc: 'Electrical operational and maintenance of high-capacity EV manufacturing plant.', scope: ['Electrical system O&M','Power quality monitoring','Fault diagnosis','Preventive maintenance'] },
  { id: 5, title: 'Construction of Overhead Water Tank', cat: 'Civil Infrastructure', client: 'L&T', loc: 'Project Site', status: 'Completed', year: '2022', color: '#DC2626', img: SVC_IMGS.waterTank, desc: 'Construction of specialized overhead water storage tank for L&T infrastructure project.', scope: ['RCC foundation','Tank structure construction','Piping & plumbing','Testing & waterproofing'] },
  { id: 6, title: 'Delhi-Mumbai Expressway', cat: 'Highway Lighting', client: 'ITC', loc: 'Highway Corridors', status: 'Completed', year: '2022', color: '#1B4F8A', img: IMGS.h2, desc: 'Successful Installation, Testing, and Commissioning (ITC) of Highway Lighting.', scope: ['Highway lighting setup','Substation commissioning','Grid integration','Quality handover'] },
  { id: 7, title: 'Rehabilitation of Jawahar Tunnel', cat: 'Substation Installation', client: 'J&K Authorities', loc: 'Jammu & Kashmir', status: 'Completed', year: '2024', color: '#0891B2', img: SPECIFIC_IMGS.tunnel, desc: '11/440 KV Substation Installation for the Rehabilitation of Jawahar Tunnel, Jammu & Kashmir. Modernization and upgradation of the existing electrical system as per current standards.', scope: ['Substation installation','HT/LT panel setup','Cable laying','Commissioning'] },
];

const PROJECTS = [...ONGOING_PROJECTS, ...COMPLETED_PROJECTS];

const SC: Record<string, string> = { Completed: '#16A34A', Ongoing: '#D97706' };

const Modal: React.FC<{ p: typeof PROJECTS[0]; onHide: () => void }> = ({ p, onHide }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'rgba(7, 14, 26, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }} onClick={onHide}>
    <AnimatedSection style={{ width: '100%', maxWidth: 720, background: '#fff', position: 'relative', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
      <button onClick={onHide} style={{ position: 'absolute', top: 12, right: 12, background: '#fff', border: '1px solid #E5E7EB', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}>
        <X size={18} />
      </button>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.4fr) 1fr', minHeight: 480 }}>
        {/* Left Col - Visual */}
        <div style={{ position: 'relative', background: '#080F1D' }}>
          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #080F1D 0%, transparent 80%)` }} />
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
            <span className="chip" style={{ background: SC[p.status], color: '#fff', marginBottom: '0.75rem' }}>{p.status}</span>
            <h4 style={{ color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.3 }}>{p.title}</h4>
          </div>
        </div>
        
        {/* Right Col - Info */}
        <div style={{ padding: '2.5rem', overflowY: 'auto', maxHeight: '85vh' }}>
          <div className="badge" style={{ marginBottom: '1.25rem' }}>Project Details</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Building2 size={16} style={{ color: '#1B4F8A', marginTop: 3 }} />
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 2 }}>Client</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1F2937' }}>{p.client}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ color: '#1B4F8A', marginTop: 3 }} />
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 2 }}>Location</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1F2937' }}>{p.loc}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Calendar size={16} style={{ color: '#1B4F8A', marginTop: 3 }} />
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 2 }}>Year</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1F2937' }}>{p.year}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Briefcase size={16} style={{ color: '#1B4F8A', marginTop: 3 }} />
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 2 }}>Category</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1F2937' }}>{p.cat}</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.75rem' }}>Project Overview</h5>
            <p style={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.65 }}>{p.desc}</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.875rem' }}>Full Scope of Work</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {p.scope.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 0.875rem', background: '#F8FAFC', border: '1px solid #EDF2F7' }}>
                  <CheckCircle size={14} style={{ color: p.color }} />
                  <span style={{ fontSize: '0.78rem', color: '#4B5563', fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.875rem' }}>Project Timeline & Milestones</h5>
            <div style={{ position: 'relative', paddingLeft: '1.25rem', borderLeft: '2px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { t: 'Project Initiation', d: `Engagement and planning started in ${p.year}.` },
                { t: 'Operational Execution', d: 'Resource mobilization and on-site engineering works.' },
                { t: 'Final Inspection & QC', d: 'Rigorous testing as per IS/IEC standards.' },
                { t: p.status === 'Completed' ? 'Handover' : 'Current Status', d: p.status === 'Completed' ? 'Successful commissioning and final handover to client.' : 'Final phase execution and system commissioning in progress.' },
              ].map((m, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -25, top: 4, width: 8, height: 8, borderRadius: '50%', background: i === 3 && p.status === 'Ongoing' ? '#F4A623' : p.color, border: '2px solid #fff', boxShadow: '0 0 0 2px #E5E7EB' }} />
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1F2937', marginBottom: 2 }}>{m.t}</div>
                  <div style={{ fontSize: '0.7rem', color: '#6B7280', lineHeight: 1.4 }}>{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

type F = 'All' | 'Completed' | 'Ongoing';

const getClientLogo = (client: string) => {
  const c = client.toLowerCase();
  if (c.includes('csptcl')) return CLIENT_LOGOS.csptcl;
  if (c.includes('railway') || c.includes('wcr')) return CLIENT_LOGOS.railway;
  if (c.includes('mpptcl')) return CLIENT_LOGOS.mpptcl;
  if (c.includes('mppwd')) return CLIENT_LOGOS.mppwd;
  return null;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<F>('All');
  const [sel, setSel] = useState<number | null>(null);
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.status === filter);
  const active = PROJECTS.find(p => p.id === sel);

  return (
    <>
      <SEO 
        title="Projects - Infrastructure Portfolio" 
        description="Explore our portfolio of completed and ongoing infrastructure projects, including expressways, electrical substations, and EV plant O&M." 
        keywords="Infrastructure Projects, Delhi-Mumbai Expressway, Substation O&M, Jawahar Tunnel Rehabilitation"
      />
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
                    <span className="chip" style={{ position: 'absolute', top: 12, left: 12, background: SC[p.status], color: '#fff', zIndex: 2 }}>{p.status}</span>
                    <span style={{ position: 'absolute', bottom: 12, left: 12, fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', zIndex: 2 }}>{p.cat}</span>
                    {getClientLogo(p.client) && (
                      <div style={{ position: 'absolute', top: 0, right: 16, background: '#fff', padding: '0.35rem 0.5rem 0.5rem', borderRadius: '0 0 6px 6px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 2 }}>
                        <img src={getClientLogo(p.client)!} alt={p.client} style={{ height: 24, width: 'auto', objectFit: 'contain', display: 'block' }} />
                      </div>
                    )}
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
                    {/* Footer - Modified to open popup */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: '0.875rem', borderTop: '1px solid #F3F4F6' }}>
                      <button 
                        onClick={() => setSel(p.id)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 600, color: p.color, background: 'none', border: 'none', cursor: 'pointer' }}>
                        View Timeline <ExternalLink size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {active && <Modal p={active} onHide={() => setSel(null)} />}

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
