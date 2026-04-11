import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1400));
    setStatus('success');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const info = [
    { Icon: MapPin, color: '#1B4F8A', label: 'Office Address', lines: ['Plot No. 17, Mohit Platino,', 'Pipariya Khurd, Neemkheda Road,', 'Near DPS, Jabalpur, MP 482001'] },
    { Icon: Phone, color: '#16A34A', label: 'Phone Numbers', lines: ['+91 79993 20122', '+91 97975 46927'] },
    { Icon: Mail, color: '#D97706', label: 'Email Address', lines: ['saraswaticonstruction21@gmail.com'] },
    { Icon: Clock, color: '#7C3AED', label: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: By Appointment Only'] },
  ];

  const inp: React.CSSProperties = {
    width: '100%', padding: '0.8rem 1rem', fontSize: '0.875rem',
    fontFamily: 'Inter, sans-serif', border: '1.5px solid #D1D5DB',
    outline: 'none', background: '#fff', color: '#1F2937',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <>
      <PageHero title="Get In Touch" sub="Have a project in mind? Our engineering team is ready to evaluate your requirements and provide a comprehensive consultation." crumb="Home → Contact Us" />

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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Left — Info */}
            <AnimatedSection direction="left">
              <div className="badge">Reach Us</div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#0D1117', marginBottom: '1.5rem' }}>Contact Information</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {info.map(({ Icon, color, label, lines }) => (
                  <div key={label} style={{ background: '#fff', padding: '1rem 1.125rem', display: 'flex', gap: '0.875rem', borderLeft: `3px solid ${color}` }}>
                    <div style={{ width: 36, height: 36, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: '0.3rem' }}>{label}</div>
                      {lines.map(l => (
                        <div key={l} style={{ fontSize: '0.83rem', color: '#374151', fontWeight: 500, lineHeight: 1.6 }}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* MSME card */}
              <div style={{ marginTop: '1.25rem', padding: '1rem 1.125rem', border: '1px solid #E5E7EB', background: '#fff' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: '0.5rem' }}>Official Details</div>
                {[['Status', 'MSME Registered Firm'], ['GSTIN', '23DCGPK1030M1ZV'], ['State', 'Madhya Pradesh']].map(([k, v]) => (
                  <div key={k} style={{ fontSize: '0.8rem', color: '#4B5563', marginBottom: '0.3rem' }}>
                    <span style={{ fontWeight: 600 }}>{k}: </span>{v}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection direction="right">
              <div style={{ background: '#fff', padding: '2.25rem 2rem', borderTop: '3px solid #1B4F8A' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0D1117', marginBottom: '0.4rem' }}>Send Us an Inquiry</h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '1.75rem' }}>Fill out the form and our team will respond within 24 business hours.</p>

                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={onChange} placeholder="John Smith" required style={inp} className="contact-inp" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="john@company.com" required style={inp} className="contact-inp" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" style={inp} className="contact-inp" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>Service Required</label>
                      <select name="service" value={form.service} onChange={onChange} style={inp} className="contact-inp">
                        <option value="">Select a service...</option>
                        <option value="electrical">Electrical Works (Substation)</option>
                        <option value="civil">Civil Construction</option>
                        <option value="highway">Highway Crash Barriers</option>
                        <option value="solar">Solar Installation</option>
                        <option value="commissioning">Electrical Commissioning</option>
                        <option value="supply">Material Supply</option>
                        <option value="other">Other / Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>Project Details *</label>
                    <textarea name="message" value={form.message} onChange={onChange} placeholder="Describe your project requirements, location, timeline..." rows={5} required style={{ ...inp, resize: 'vertical' }} className="contact-inp" />
                  </div>

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#FEF2F2', border: '1px solid #FECACA', fontSize: '0.8rem', color: '#DC2626' }}>
                      <AlertCircle size={14} /> Please fill in all required fields (Name, Email, Message).
                    </div>
                  )}
                  {status === 'success' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#F0FDF4', border: '1px solid #BBF7D0', fontSize: '0.8rem', color: '#16A34A' }}>
                      <CheckCircle size={14} /> Inquiry sent! We'll respond within 24 hours.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading' || status === 'success'}
                    className="btn btn-blue"
                    style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.75 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                    {status === 'loading' ? (
                      <><div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} /> Sending...</>
                    ) : status === 'success' ? (
                      <><CheckCircle size={15} /> Inquiry Sent Successfully</>
                    ) : (
                      <><Send size={15} /> Send Inquiry</>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="sec-sm" style={{ background: '#fff' }}>
        <div className="wrap">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="badge" style={{ justifyContent: 'center' }}>Find Us</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#0D1117' }}>Our Office Location</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div style={{ border: '2px solid #E5E7EB', overflow: 'hidden', height: 400 }}>
              <iframe
                title="Saraswati Construction Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0!2d79.8946!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1b2b2b2b2b3%3A0x0!2sNeemkheda+Road%2C+Jabalpur%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
              <MapPin size={13} style={{ color: '#1B4F8A', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>Plot No. 17, Mohit Platino, Pipariya Khurd, Neemkheda Road, Near DPS, Jabalpur, MP 482001</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call CTA */}
      <section style={{ background: '#1B4F8A', padding: '4rem 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Prefer to call directly?</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#fff', marginBottom: '1.75rem' }}>Speak to Our Engineers</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+917999320122" className="btn btn-white"><Phone size={15} /> +91 79993 20122</a>
              <a href="tel:+919797546927" className="btn btn-ghost"><Phone size={15} /> +91 97975 46927</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`.contact-inp:focus{border-color:#1B4F8A!important;box-shadow:0 0 0 3px rgba(27,79,138,0.1)!important;}`}</style>
    </>
  );
};

export default Contact;
