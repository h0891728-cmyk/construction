import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Cpu, Globe, Layers, Users, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import AnimatedSection, { AnimatedCounter } from '../components/AnimatedSection';
import { PageHero } from './Home';

const Vision: React.FC = () => {
  const roadmap = [
    { phase: 'Phase 1', title: 'Subcontracting Excellence', status: 'Achieved', color: '#16A34A', items: ['MSME registration and GST compliance','7+ years of specialized project execution','Established relationships with major EPC firms','Built a skilled multi-discipline workforce'] },
    { phase: 'Phase 2', title: 'Capability Expansion', status: 'In Progress', color: '#D97706', items: ['Solar energy vertical launch (completed)','Civil construction capacity (ongoing)','Digital project management tools adoption','ISO certification preparation'] },
    { phase: 'Phase 3', title: 'Full EPC Mode', status: 'Target: 2026+', color: '#1B4F8A', items: ['Direct EPC contract bidding for utilities','In-house design and engineering team','Own procurement and supply chain network','Pan-India project delivery capability'] },
  ];

  const tech = [
    { Icon: Cpu, color: '#2563EB', t: 'Digital Engineering', d: 'CAD-based design, BIM modeling, and digital documentation for every project.' },
    { Icon: Globe, color: '#0891B2', t: 'Remote Monitoring', d: 'IoT-based remote monitoring for solar plants and substation health tracking.' },
    { Icon: Layers, color: '#7C3AED', t: 'Quality Management', d: 'ISO-aligned quality management system with digital inspection checklists.' },
    { Icon: Users, color: '#16A34A', t: 'Skilled Workforce', d: 'Continuous training programs and certifications for our engineering team.' },
    { Icon: TrendingUp, color: '#D97706', t: 'Financial Systems', d: 'ERP-based project accounting, billing, and compliance management.' },
    { Icon: Zap, color: '#DC2626', t: 'Safety Technology', d: 'AI-assisted safety monitoring, PPE detection, and incident tracking systems.' },
  ];

  const pillars = [
    { l: 'Engineering Excellence', v: 95 },
    { l: 'Safety Compliance', v: 100 },
    { l: 'On-Time Delivery', v: 92 },
    { l: 'Client Satisfaction', v: 97 },
  ];

  return (
    <>
      <PageHero title="Vision & Strategy" sub="Our roadmap for transforming from a high-performance subcontractor into a full-scale EPC mode engineering company — powered by technology, talent, and tenacity." crumb="Home → Vision" />

      {/* Current Standing */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="left">
              <div className="badge">Where We Stand</div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                From Subcontractor to{' '}
                <span style={{ color: '#1B4F8A' }}>Engineering Leader</span>
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.925rem' }}>
                Today, SCE operates as a high-performance subcontractor — a trusted execution arm for India's largest
                EPC contractors and government power utilities. Our 7+ year track record demonstrates consistent delivery
                of complex projects on time and within budget.
              </p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                This foundation has given us invaluable insights into the full EPC lifecycle. We are now leveraging
                these insights to build internal capacity required to become a primary EPC contractor.
              </p>
              {/* Progress bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                {pillars.map(p => (
                  <div key={p.l}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#374151' }}>{p.l}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4F8A' }}>{p.v}%</span>
                    </div>
                    <div style={{ height: 6, background: '#F3F4F6', overflow: 'hidden' }}>
                      <div style={{ width: `${p.v}%`, height: '100%', background: 'linear-gradient(90deg, #1B4F8A, #F4A623)', transition: 'width 1.2s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { v: 7, s: '+', l: 'Years Active', c: '#1B4F8A' },
                  { v: 50, s: '+', l: 'Projects Done', c: '#D97706' },
                  { v: 15, s: '+', l: 'Major Clients', c: '#7C3AED' },
                  { v: 5, s: ' Cr+', l: 'Revenue', c: '#16A34A' },
                ].map((st, i) => (
                  <AnimatedSection key={st.l} delay={i * 80}>
                    <div style={{ padding: '1.5rem', borderLeft: `4px solid ${st.c}`, background: `${st.c}08`, height: '100%' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2.2rem', color: st.c, lineHeight: 1 }}>
                        <AnimatedCounter end={st.v} suffix={st.s} />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '0.4rem', fontWeight: 500 }}>{st.l}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="sec" style={{ background: '#F8FAFC' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Our Roadmap</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117' }}>The Path to Full EPC</h2>
          </AnimatedSection>
          <div className="grid-3">
            {roadmap.map((r, i) => (
              <AnimatedSection key={r.phase} delay={i * 110}>
                <div style={{ background: '#fff', borderTop: `4px solid ${r.color}`, padding: '1.75rem', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: r.color }}>{r.phase}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', background: `${r.color}12`, color: r.color }}>{r.status}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1117', marginBottom: '1rem' }}>{r.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {r.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle size={12} style={{ color: r.color, flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: '0.8rem', color: '#4B5563', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Tech & Innovation</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '0.75rem' }}>Technological Adoption</h2>
            <p style={{ color: '#6B7280', maxWidth: 420, marginInline: 'auto', fontSize: '0.875rem', lineHeight: 1.7 }}>Embracing modern tools and techniques to deliver smarter, safer, and faster projects.</p>
          </AnimatedSection>
          <div className="grid-3">
            {tech.map((t, i) => (
              <AnimatedSection key={t.t} delay={i * 70}>
                <div className="card" style={{ padding: '1.75rem' }}>
                  <div style={{ width: 44, height: 44, background: `${t.color}12`, border: `1px solid ${t.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <t.Icon size={20} style={{ color: t.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0D1117', marginBottom: '0.4rem' }}>{t.t}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65 }}>{t.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0D3260, #1B4F8A)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="pat-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bbl" style={{ width: 50 + i * 30, height: 50 + i * 30, bottom: `${8 + i * 16}%`, right: `${4 + i * 14}%`, background: 'rgba(255,255,255,0.06)', animationDuration: `${4 + i}s` }} />
        ))}
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection>
            <Target size={40} style={{ color: '#F4A623', marginInline: 'auto', display: 'block', marginBottom: '1.25rem' }} />
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.75rem)', color: '#fff', marginBottom: '1rem' }}>Our 2026 Goal</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, marginInline: 'auto', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              To be recognized as a leading EPC contractor in Central India, directly executing high-value electrical
              and civil infrastructure contracts for government utilities, private developers, and renewable energy companies.
            </p>
            <Link to="/contact" className="btn btn-gold">Partner With Us <ArrowRight size={15} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Vision;
