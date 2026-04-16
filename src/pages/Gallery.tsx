import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { PageHero } from './Home';
import SEO from '../components/SEO';
import { IMGS } from '../data/images';

type Album = 'All' | 'Electrical' | 'Highway' | 'Civil' | 'Solar' | 'Team' | 'Equipment';

const ALBUMS: Album[] = ['All', 'Electrical', 'Highway', 'Civil', 'Solar', 'Team', 'Equipment'];

const AC: Record<Album, string> = {
  All: '#1B4F8A', Electrical: '#2563EB', Highway: '#DC2626',
  Civil: '#7C3AED', Solar: '#D97706', Team: '#16A34A', Equipment: '#0891B2',
};

const GALLERY: { src: string; cap: string; album: Album; h: number }[] = [
  // Electrical — 6 images
  { src: IMGS.e1, cap: 'Substation Installation',           album: 'Electrical', h: 240 },
  { src: IMGS.e2, cap: 'HT Panel Setup',                    album: 'Electrical', h: 200 },
  { src: IMGS.e3, cap: 'Cable Termination Work',            album: 'Electrical', h: 270 },
  { src: IMGS.e4, cap: '33 KV Substation — Commissioning', album: 'Electrical', h: 220 },
  { src: IMGS.e5, cap: 'Switchgear Installation',           album: 'Electrical', h: 250 },
  { src: IMGS.e6, cap: '11 KV Feeder Bay',                  album: 'Electrical', h: 200 },

  // Highway — 5 images
  { src: IMGS.h1, cap: 'W-Beam Crash Barrier — Expressway', album: 'Highway', h: 250 },
  { src: IMGS.h2, cap: 'Barrier Post Driving',              album: 'Highway', h: 220 },
  { src: IMGS.h3, cap: 'End Terminal Installation',         album: 'Highway', h: 200 },
  { src: IMGS.h4, cap: 'Highway Safety Works',              album: 'Highway', h: 260 },
  { src: IMGS.h5, cap: 'Delineator Post Setup',             album: 'Highway', h: 230 },

  // Civil — 4 images
  { src: IMGS.c1, cap: 'Civil Foundation Work',             album: 'Civil', h: 240 },
  { src: IMGS.c2, cap: 'RCC Framework Construction',        album: 'Civil', h: 200 },
  { src: IMGS.c3, cap: 'Commercial Complex Progress',       album: 'Civil', h: 270 },
  { src: IMGS.c4, cap: 'Building Structural Work',          album: 'Civil', h: 220 },

  // Solar — 4 images
  { src: IMGS.s1, cap: 'Solar Rooftop — 200 KW System',     album: 'Solar', h: 250 },
  { src: IMGS.s2, cap: 'Solar Panel Installation',          album: 'Solar', h: 200 },
  { src: IMGS.s3, cap: 'Inverter & Panel Setup',            album: 'Solar', h: 230 },
  { src: IMGS.s4, cap: 'Grid-Tied Solar System',            album: 'Solar', h: 260 },

  // Team — 4 images
  { src: IMGS.t1, cap: 'Site Management Team',              album: 'Team', h: 240 },
  { src: IMGS.t2, cap: 'Engineers on Site',                 album: 'Team', h: 200 },
  { src: IMGS.t3, cap: 'Project Review Meeting',            album: 'Team', h: 260 },
  { src: IMGS.t4, cap: 'Safety Briefing — Field Team',      album: 'Team', h: 220 },

  // Equipment — 4 images
  { src: IMGS.m1, cap: 'Heavy Equipment — Site',            album: 'Equipment', h: 240 },
  { src: IMGS.m2, cap: 'Hydraulic Post Driving Rig',        album: 'Equipment', h: 200 },
  { src: IMGS.m3, cap: 'Crane Operations',                  album: 'Equipment', h: 265 },
  { src: IMGS.m4, cap: 'Construction Machinery',            album: 'Equipment', h: 220 },

  // Additional Site Photos — 6 images
  { src: IMGS.a1, cap: 'Project Site — Aerial View',        album: 'Electrical', h: 250 },
  { src: IMGS.a2, cap: 'Testing and Commissioning',         album: 'Electrical', h: 210 },
  { src: IMGS.a3, cap: 'Highway Stretch — Completed',       album: 'Highway', h: 240 },
  { src: IMGS.a4, cap: 'Civil Finishing Works',             album: 'Civil', h: 200 },
  { src: IMGS.a5, cap: 'Solar Array — Commissioned',        album: 'Solar', h: 255 },
  { src: IMGS.a6, cap: 'Milestone Handover Ceremony',       album: 'Team', h: 230 },
];

const Gallery: React.FC = () => {
  const [active, setActive] = useState<Album>('All');
  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null);

  const shown = active === 'All' ? GALLERY : GALLERY.filter(g => g.album === active);

  return (
    <>
      <SEO 
        title="Gallery - Project Visuals" 
        description="A visual showcase of our engineering capabilities, featuring site photos from substations, highways, and solar installations." 
        keywords="Construction Gallery, Engineering Photography, Project Site Photos Jabalpur"
      />
      <PageHero title="Project Gallery" sub="Visual evidence of our engineering capabilities — from substation commissioning to expressway installations and solar projects." crumb="Home → Gallery" />

      {/* Filter */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div className="wrap" style={{ display: 'flex', gap: '0.6rem', padding: '1.25rem var(--px)', flexWrap: 'wrap', alignItems: 'center' }}>
          {ALBUMS.map(a => (
            <button key={a} onClick={() => setActive(a)} style={{
              padding: '0.45rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
              background: active === a ? AC[a] : 'transparent',
              color: active === a ? '#fff' : '#374151',
              border: `1px solid ${active === a ? AC[a] : '#D1D5DB'}`,
              transition: 'all 0.2s',
            }}>{a}</button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: '#9CA3AF' }}>{shown.length} Photos</span>
        </div>
      </div>

      {/* Masonry */}
      <section className="sec" style={{ background: '#F8FAFC' }}>
        <div className="wrap">
          <div style={{ columns: '1', columnGap: '1rem' }} className="masonry-grid">
            {shown.map((img, i) => (
              <AnimatedSection key={img.src + i} delay={i * 40} style={{ breakInside: 'avoid', marginBottom: '1rem', display: 'block' }}>
                <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: '#E5E7EB' }}
                  className="gal-item"
                  onClick={() => setLb({ src: img.src, cap: img.cap })}>
                  <img src={img.src} alt={img.cap}
                    style={{ width: '100%', height: img.h, objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  {/* Hover overlay */}
                  <div className="gal-overlay" style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)',
                    opacity: 0, transition: 'opacity 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0.875rem',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <span className="chip" style={{ background: AC[img.album], color: '#fff', marginBottom: '0.35rem', display: 'inline-block' }}>{img.album}</span>
                        <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{img.cap}</div>
                      </div>
                      <div style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '0.5rem' }}>
                        <ZoomIn size={16} style={{ color: '#fff' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lb && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button onClick={() => setLb(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)', border: 'none', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <X size={22} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%' }}>
            <img src={lb.src} alt={lb.cap}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', marginTop: '0.875rem', fontSize: '0.875rem' }}>{lb.cap}</p>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:480px){.masonry-grid{columns:2!important;}}
        @media(min-width:768px){.masonry-grid{columns:3!important;}}
        @media(min-width:1100px){.masonry-grid{columns:4!important;}}
        .gal-item:hover img{transform:scale(1.06);}
        .gal-item:hover .gal-overlay{opacity:1!important;}
      `}</style>
    </>
  );
};

export default Gallery;
