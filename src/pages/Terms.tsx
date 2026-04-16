import React from 'react';
import { Shield, Scale, FileText, AlertCircle, HardHat, Gavel } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const sections = [
    {
      Icon: FileText,
      title: 'Agreement to Terms',
      content: 'By accessing the website of Saraswati Construction and Enterprise, you agree to comply with and be bound by these terms and conditions. These terms govern our professional relationship and the use of our digital platforms.'
    },
    {
      Icon: HardHat,
      title: 'Engineering Standards',
      content: 'All projects executed by SCAE adhere to the highest IS (Indian Standards) and IEC (International Electrotechnical Commission) guidelines. Our commitment to safety and engineering integrity is non-negotiable.'
    },
    {
      Icon: Shield,
      title: 'Liability & Safety',
      content: 'While we maintain rigorous safety protocols at every site, SCAE is not liable for unauthorized access to project zones. We operate under strict MSME and GST compliance frameworks for all financial and operational dealings.'
    },
    {
      Icon: Scale,
      title: 'Professional Engagement',
      content: 'Quotations and project timelines provided are based on initial site assessments. Final terms are subject to formal contract signatures and standardized EPC bidding procedures.'
    },
    {
      Icon: AlertCircle,
      title: 'Intellectual Property',
      content: 'All design drawings, project photography, and technical documentation showcased on this website are the property of Saraswati Construction and Enterprise and may not be reused without written consent.'
    },
    {
      Icon: Gavel,
      title: 'Dispute Resolution',
      content: 'Any legal matters or disputes arising from our services are subject to the jurisdiction of the courts in Jabalpur, Madhya Pradesh, India.'
    }
  ];

  return (
    <>
      <SEO 
        title="Terms and Conditions" 
        description="Official professional terms, engineering standards, and service guidelines for Saraswati Construction and Enterprise." 
        keywords="Terms of service, engineering standards Jabalpur, construction liability, SCAE official terms"
      />
      <PageHero 
        title={<>Terms & <strong>Conditions</strong></>} 
        sub="The professional framework and engineering standards that guide our commitment to excellence." 
        crumb="Home → Terms" 
      />

      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <AnimatedSection style={{ marginBottom: '3rem' }}>
              <div className="badge">Professional Guidelines</div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#0D1117', marginBottom: '1.25rem' }}>
                Legal & Operational <span style={{ color: '#1B4F8A' }}>Framework</span>
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.8 }}>
                At <strong>Saraswati Construction and Enterprise</strong>, we believe in transparency and professionalism. 
                These terms outline the standards we uphold as an emerging engineering leader in Central India.
              </p>
            </AnimatedSection>

            <div style={{ display: 'grid', gap: '2.5rem' }}>
              {sections.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 80}>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ width: 48, height: 48, background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B4F8A', flexShrink: 0 }}>
                      <s.Icon size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 750, fontSize: '1.1rem', color: '#0D1117', marginBottom: '0.6rem' }}>{s.title}</h3>
                      <p style={{ color: '#4B5563', fontSize: '0.88rem', lineHeight: 1.75 }}>{s.content}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection style={{ marginTop: '4rem', padding: '2rem', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <p style={{ fontSize: '0.82rem', color: '#64748B', fontStyle: 'italic' }}>
                Last updated: April 2026. For specific project contracts or legal inquiries, please contact our administrative head office in Jabalpur.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
