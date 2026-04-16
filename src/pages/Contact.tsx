import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Shield, Award, ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const info = [
    { Icon: MapPin, color: '#1B4F8A', label: 'Office Address', lines: ['Plot No. 17, Mohit Platino,', 'Pipariya Khurd, Neemkheda Road,', 'Near DPS, Jabalpur, MP 482001'] },
    { Icon: Phone, color: '#16A34A', label: 'Phone Numbers', lines: ['+91 79993 20122', '+91 97975 46927'] },
    { Icon: Mail, color: '#D97706', label: 'Email Address', lines: ['saraswaticonstruction21@gmail.com'] },
    { Icon: Clock, color: '#7C3AED', label: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: By Appointment Only'] },
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Technical Support & Inquiries" 
        description="Get in touch with Saraswati Construction and Enterprise for project consultation, electrical maintenance, and civil engineering inquiries in Jabalpur." 
        keywords="Contact SCE, engineering support Jabalpur, reach Saraswati Construction"
      />
      <PageHero title="Get In Touch" sub="Skip the forms. Reach our engineering team directly for immediate consultation and project evaluation." crumb="Home → Contact Us" />

      {/* Quick contact info bar */}
      <div style={{ background: '#F8FAFC', borderBottom: '1px solid #E5E7EB' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '1.25rem var(--px)' }}>
          {[
            { href: 'tel:+917999320122', label: '+91 79993 20122' },
            { href: 'mailto:saraswaticonstruction21@gmail.com', label: 'saraswaticonstruction21@gmail.com' },
          ].map(({ href, label }) => (
            <a key={label} href={href} style={{ fontSize: '0.82rem', color: '#1B4F8A', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: '#6B7280' }}>GSTIN: 23DCGPK1030M1ZV</span>
        </div>
      </div>

      <section className="sec" style={{ background: '#F8FAFC' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '3rem', alignItems: 'start' }}>

            {/* Left — Detail Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <AnimatedSection direction="left">
                <div className="badge">Contact Details</div>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#0D1117', marginBottom: '1.5rem' }}>Direct Reach</h2>
              </AnimatedSection>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {info.map(({ Icon, color, label, lines }, i) => (
                  <AnimatedSection key={label} delay={i * 80}>
                    <div style={{ background: '#fff', padding: '1.5rem', display: 'flex', gap: '1rem', border: '1px solid #E5E7EB' }}>
                      <div style={{ width: 42, height: 42, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: '0.4rem' }}>{label}</div>
                        {lines.map(l => (
                          <div key={l} style={{ fontSize: '0.875rem', color: '#374151', fontWeight: 600, lineHeight: 1.6 }}>{l}</div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Compliance card */}
              <AnimatedSection delay={400}>
                <div style={{ padding: '1.5rem', border: '1px solid #E5E7EB', background: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <Shield size={18} style={{ color: '#1B4F8A' }} />
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0D1117' }}>Compliance & Licensing</span>
                  </div>
                  {[
                    ['Status', 'MSME Registered Firm'],
                    ['GSTIN', '23DCGPK1030M1ZV'],
                    ['State码', '23 (Madhya Pradesh)']
                  ].map(([k, v]) => (
                    <div key={k} style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 500 }}>{k}</span>
                      <span style={{ fontWeight: 700, color: '#374151' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <AnimatedSection direction="right">
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, background: 'linear-gradient(135deg, transparent, rgba(22, 163, 74, 0.05))', borderRadius: '0 0 0 100%' }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="badge" style={{ background: '#DCFCE7', color: '#166534', border: 'none' }}>Quick Response</div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.75rem', color: '#0D1117', margin: '1rem 0 0.5rem' }}>Inquiry via WhatsApp</h3>
                    <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: 440 }}>
                      Connect with our engineering head directly for immediate project discussions, quotations, and technical feasibility checks.
                    </p>
                    
                    <a href="https://wa.me/917999320122" target="_blank" rel="noreferrer" className="btn btn-blue" style={{ background: '#16A34A', border: 'none', padding: '1rem 2rem', fontSize: '1rem' }}>
                      <MessageSquare size={20} /> Chat on WhatsApp <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <AnimatedSection delay={100}>
                  <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '2rem' }}>
                    <Award size={24} style={{ color: '#F4A623', marginBottom: '1.25rem' }} />
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0D1117', marginBottom: '0.5rem' }}>Technical Lead</h4>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '1.25rem' }}>Speak to our Senior Civil Engineer for structural and infrastructure projects.</p>
                    <a href="tel:+7999320122" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B4F8A', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                      Call Mohan K. <ArrowRight size={14} />
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '2rem' }}>
                    <Shield size={24} style={{ color: '#1B4F8A', marginBottom: '1.25rem' }} />
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0D1117', marginBottom: '0.5rem' }}>Electrical Lead</h4>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '1.25rem' }}>Direct consultation for substation, cabling, and LT/HT electrical works.</p>
                    <a href="tel:+9797546927" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B4F8A', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                      Call Narayan K. <ArrowRight size={14} />
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={300}>
                <div style={{ background: '#0D1117', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.35rem' }}>Email Official Inquiry</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>Response time: within 24 business hours</p>
                  </div>
                  <a href="mailto:saraswaticonstruction21@gmail.com" className="btn btn-white" style={{ background: '#F4A623', border: 'none', color: '#000' }}>
                    <Mail size={16} /> Send Email
                  </a>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="sec-sm" style={{ background: '#fff' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Visit Us</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem,4vw,2.25rem)', color: '#0D1117' }}>Head Office Location</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div style={{ border: '1px solid #E5E7EB', overflow: 'hidden', height: 450, position: 'relative' }}>
              <iframe
                title="<strong>Saraswati Construction</strong> Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0!2d79.8946!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1b2b2b2b2b3%3A0x0!2sNeemkheda+Road%2C+Jabalpur%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, background: '#fff', padding: '1rem 1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #1B4F8A' }}>
                <MapPin size={20} style={{ color: '#1B4F8A' }} />
                <span style={{ fontSize: '0.875rem', color: '#111827', fontWeight: 600 }}>Plot No. 17, Mohit Platino, Neemkheda Road, Near DPS, Jabalpur, MP</span>
                <a href="https://goo.gl/maps" target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', color: '#1B4F8A', fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;

