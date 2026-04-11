import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Target, Heart, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import { IMGS } from '../data/images';

const About: React.FC = () => {
  const timeline = [
    { year: '2017', t: 'Founded', d: 'Established by Mohan & Narayan Kushwaha in Jabalpur, MP.' },
    { year: '2019', t: 'First Substation', d: 'Successfully commissioned our first 11 KV substation for a government power utility.' },
    { year: '2021', t: 'Highway Projects', d: 'Entered crash barrier segment with the Mumbai–Vadodara Expressway project.' },
    { year: '2022', t: 'CSPTCL Partnership', d: 'Secured subcontracting work for Chhattisgarh Power Transmission Company Ltd.' },
    { year: '2024', t: 'Solar Expansion', d: 'Launched solar installation vertical for residential and industrial clients.' },
    { year: '2025+', t: 'EPC Mode', d: 'Transitioning into full Engineering, Procurement, and Construction contracting.' },
  ];

  const values = [
    { Icon: Target, color: '#1B4F8A', t: 'Precision', d: 'Every measurement, every connection executed with engineering precision.' },
    { Icon: Heart, color: '#DC2626', t: 'Integrity', d: 'Transparent dealings, honest timelines, responsible project stewardship.' },
    { Icon: Award, color: '#D97706', t: 'Excellence', d: 'We hold ourselves to the highest industry standards, every single day.' },
    { Icon: Users, color: '#16A34A', t: 'Teamwork', d: "Skilled workforce united by shared mission: Building India's infrastructure." },
  ];

  const team = [
    { name: 'Mr. Mohan Kushwaha',   role: 'Founder & Director',          exp: 'Electrical Engineering & Project Management', img: IMGS.t1 },
    { name: 'Mr. Narayan Kushwaha', role: 'Co-Founder & Operations Head', exp: 'Civil Infrastructure & On-site Operations',   img: IMGS.t2 },
  ];

  return (
    <>
      <PageHero title="About Saraswati Construction" sub="Our 7-year journey from a specialized subcontractor to an emerging engineering leader — built on trust, expertise, and unwavering commitment to quality." crumb="Home → About Us" />

      {/* Mission */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="left">
              <div className="badge">Our Mission</div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                "We Deliver What We Commit"
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>
                At Saraswati Construction and Enterprise, our founding philosophy has remained constant since 2017:
                absolute commitment to every project we undertake. We approach every task with the same
                discipline and dedication — whether a high-voltage substation or a national expressway safety barrier.
              </p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                As an MSME-registered firm, we bring the agility of a focused specialist combined with the capacity
                to handle large-scale infrastructure contracts with full GST compliance and quality control frameworks.
              </p>
              <div style={{ marginBottom: '1.75rem' }}>
                {[
                  'MSME Registered Firm (Ministry of MSME, Govt. of India)',
                  'GST Number: 23DCGPK1030M1ZV',
                  '7+ Years Active in Electrical & Civil Engineering',
                  'Projects across Madhya Pradesh & Chhattisgarh',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <CheckCircle size={14} style={{ color: '#1B4F8A', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.85rem', color: '#4B5563' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-blue">Work With Us <ArrowRight size={15} /></Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div style={{ position: 'relative' }}>
                <img src={IMGS.e1}
                  alt="SCE team" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', background: 'linear-gradient(transparent, rgba(13,26,64,0.88))' }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontSize: '0.875rem' }}>
                    "Building India's critical infrastructure — one disciplined project at a time."
                  </p>
                </div>
                <div style={{ position: 'absolute', top: -14, right: -14, padding: '0.875rem 1.125rem', background: '#fff', boxShadow: '0 8px 28px rgba(0,0,0,0.12)', borderBottom: '4px solid #F4A623' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.4rem', color: '#1B4F8A' }}>MSME</div>
                  <div style={{ fontSize: '0.7rem', color: '#6B7280' }}>Registered Firm</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="sec" style={{ background: '#F8FAFC' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Our Foundation</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117' }}>Core Values</h2>
          </AnimatedSection>
          <div className="grid-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.t} delay={i * 90}>
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, background: `${v.color}12`, border: `2px solid ${v.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginInline: 'auto', marginBottom: '1.25rem' }}>
                    <v.Icon size={24} style={{ color: v.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1117', marginBottom: '0.5rem' }}>{v.t}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65 }}>{v.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#0D1117' }}>7 Years of Excellence</h2>
          </AnimatedSection>

          <div style={{ maxWidth: 720, marginInline: 'auto', position: 'relative' }}>
            {/* Center line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: '#E5E7EB', transform: 'translateX(-50%)' }} />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 80}>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                  <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                    <div style={{ display: 'inline-block', padding: '0.2rem 0.75rem', background: '#1B4F8A', color: '#fff', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.4rem' }}>{item.year}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0D1117', marginBottom: '0.25rem' }}>{item.t}</div>
                    <div style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65 }}>{item.d}</div>
                  </div>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1B4F8A', border: '3px solid #fff', boxShadow: '0 0 0 2px #1B4F8A', flexShrink: 0, marginTop: 4, zIndex: 1 }} />
                  <div style={{ flex: 1 }} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="sec" style={{ background: '#080F1D' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-gold" style={{ justifyContent: 'center' }}>Leadership</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,3vw,2.25rem)', color: '#fff' }}>The People Behind SCE</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', maxWidth: 600, marginInline: 'auto' }}>
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 140} style={{ textAlign: 'center' }}>
                <div style={{ width: 140, height: 140, marginInline: 'auto', marginBottom: '1.25rem', overflow: 'hidden', position: 'relative' }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)', transition: 'filter 0.4s' }} className="team-img" />
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.3rem' }}>{m.name}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#F4A623', marginBottom: '0.25rem' }}>{m.role}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{m.exp}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`.team-img:hover{filter:grayscale(0)!important;}`}</style>
      </section>
    </>
  );
};

export default About;
