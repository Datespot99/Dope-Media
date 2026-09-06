import { useState } from 'react'
import { Link } from 'react-router'
import { COURSES, SOCIAL_PACKS, DESIGN_PACKS, AI_TOOL_PACKS, WEB_PACKS } from '../data/products'
import type { Course, Pack } from '../data/products'

// Re-export so any cached import from this path still resolves
export type { Course, Pack }
export { COURSES, SOCIAL_PACKS, DESIGN_PACKS, AI_TOOL_PACKS, WEB_PACKS }

type CartItem =
  | { kind: 'course'; item: Course }
  | { kind: 'pack';   item: Pack }

/* ── helpers ── */
function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

function TagBadge({ label }: { label: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    Bestseller: { bg: '#FFE030', color: '#0a0a0a' },
    Hot:        { bg: '#FF5C35', color: '#fff'    },
    New:        { bg: '#00C896', color: '#fff'    },
    Popular:    { bg: '#7B61FF', color: '#fff'    },
    Advanced:   { bg: '#0a0a0a', color: '#FFE030' },
    Premium:    { bg: '#0a0a0a', color: '#FFE030' },
    'Best Value':{ bg: '#FFE030', color: '#0a0a0a'},
  }
  const c = map[label] ?? { bg: '#eee', color: '#333' }
  return (
    <span style={{ padding: '3px 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", background: c.bg, color: c.color, flexShrink: 0 }}>
      {label}
    </span>
  )
}

/* ── Course card ── */
function CourseCard({ course, onDetails }: { course: Course; onDetails: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: '#fff', border: `1.5px solid ${hov ? '#FFE030' : '#e8e8e8'}`, display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s', boxShadow: hov ? '0 4px 20px rgba(255,224,48,0.15)' : 'none' }}
    >
      <div style={{ background: '#0a0a0a', padding: '22px 22px 18px', position: 'relative' }}>
        {course.tag && <div style={{ position: 'absolute', top: 12, right: 12 }}><TagBadge label={course.tag} /></div>}
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 20, color: '#fff', lineHeight: 1.1, marginBottom: 3, paddingRight: 56 }}>{course.title}</h3>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#555' }}>{course.subtitle}</p>
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '9px 22px', borderBottom: '1px solid #f0f0f0', fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#999' }}>
        <span>⏱ {course.duration}</span><span>📚 {course.lessons} lessons</span><span>🎯 {course.level}</span>
      </div>
      <div style={{ padding: '18px 22px', flex: 1 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#555', lineHeight: 1.65, marginBottom: 14 }}>{course.description}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {course.benefits.slice(0, 3).map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 7, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#444' }}>
              <span style={{ color: '#FFE030', fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', gap: 10 }}>
        <div>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 28 }}>{fmt(course.price)}</span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#bbb', marginLeft: 4 }}>one-time</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onDetails} style={{ padding: '7px 11px', border: '1.5px solid #e8e8e8', background: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 12, cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#FFE030'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#e8e8e8'}>Details</button>
          <Link to="/checkout" state={{ kind: 'course', item: course }}
            style={{ padding: '7px 14px', background: '#0a0a0a', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ── Pack card ── */
function PackCard({ pack }: { pack: Pack }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: '#fff', border: `1.5px solid ${hov ? '#FFE030' : '#e8e8e8'}`, display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s', boxShadow: hov ? '0 4px 20px rgba(255,224,48,0.15)' : 'none' }}
    >
      <div style={{ background: '#0a0a0a', padding: '22px 22px 18px', position: 'relative' }}>
        {pack.tag && <div style={{ position: 'absolute', top: 12, right: 12 }}><TagBadge label={pack.tag} /></div>}
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 20, color: '#fff', lineHeight: 1.1, marginBottom: 3, paddingRight: 56 }}>{pack.name}</h3>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 28, color: '#FFE030' }}>{fmt(pack.price)}</p>
      </div>
      <div style={{ padding: '18px 22px', flex: 1 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#555', lineHeight: 1.65, marginBottom: 14 }}>{pack.description}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 12 }}>
          {pack.includes.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 7, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#444' }}>
              <span style={{ color: '#FFE030', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#aaa' }}>Ideal for:</span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#0a0a0a', fontWeight: 500 }}>{pack.idealFor}</span>
        </div>
      </div>
      <div style={{ padding: '14px 22px', borderTop: '1px solid #f0f0f0' }}>
        <Link to="/checkout" state={{ kind: 'pack', item: pack }}
          style={{ display: 'block', textAlign: 'center', padding: '11px', background: '#0a0a0a', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
          Get Started — {fmt(pack.price)}
        </Link>
      </div>
    </div>
  )
}

/* ── Section wrapper ── */
function Section({ id, label, heading, accent, bg, children }: { id: string; label: string; heading: string; accent: string; bg: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ padding: '80px 24px', background: bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 36 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 8 }}>{label}</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1 }}>
            {heading} <span style={{ color: accent }}>—</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

/* ── Course detail modal ── */
function CourseModal({ course, onClose }: { course: Course; onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(4px)' }} onClick={onClose}>
      <div style={{ background: '#fff', maxWidth: 640, width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }} onClick={e => e.stopPropagation()}>
        <div style={{ background: '#0a0a0a', padding: '26px 28px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 26, color: '#fff', lineHeight: 1.1, marginBottom: 3 }}>{course.title}</h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#555' }}>{course.subtitle}</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', fontSize: 18, cursor: 'pointer', padding: 0, lineHeight: 1, flexShrink: 0 }}>✕</button>
        </div>
        <div style={{ padding: '26px 28px' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#555', lineHeight: 1.75, marginBottom: 24 }}>{course.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }} className="modal-cols">
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: 'uppercase', fontSize: 15, marginBottom: 12 }}>What's Included</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {course.specs.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: 7, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#444' }}>
                    <span style={{ width: 5, height: 5, background: '#FFE030', borderRadius: '50%', flexShrink: 0, marginTop: 5 }} />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: 'uppercase', fontSize: 15, marginBottom: 12 }}>Benefits</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {course.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 7, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#444' }}>
                    <span style={{ color: '#FFE030', fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #ebebeb', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36 }}>{fmt(course.price)}</span>
            <Link to="/checkout" state={{ kind: 'course', item: course }} onClick={onClose}
              style={{ padding: '11px 28px', background: '#0a0a0a', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── MAIN ─────────────────────────── */
export default function Store() {
  const [modal, setModal] = useState<Course | null>(null)
  const [activeTab, setActiveTab] = useState<string>('courses')

  const tabs = [
    { id: 'courses', label: 'AI Courses' },
    { id: 'smm',     label: 'Social Media' },
    { id: 'design',  label: 'Graphic Design' },
    { id: 'ai',      label: 'AI Automations' },
    { id: 'web',     label: 'Website Design' },
  ]

  function scrollTo(id: string) {
    setActiveTab(id)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div style={{ background: '#fff', color: '#0a0a0a', paddingTop: 64 }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ background: '#0a0a0a', padding: '72px 24px 64px', textAlign: 'center' }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#444', display: 'block', marginBottom: 14 }}>Dope Media Store</span>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.88, fontSize: 'clamp(48px, 8vw, 96px)', color: '#fff', marginBottom: 14 }}>
          LEVEL UP YOUR<br /><span style={{ color: '#FFE030' }}>GAME.</span>
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#555', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Courses, services, and tools built to grow your brand faster.
        </p>

        {/* Tab nav */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => scrollTo(t.id)}
              style={{ padding: '9px 20px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s', borderColor: activeTab === t.id ? '#FFE030' : '#333', background: activeTab === t.id ? '#FFE030' : 'transparent', color: activeTab === t.id ? '#0a0a0a' : '#888' }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── AI COURSES ── */}
      <Section id="courses" label="Courses · ₹999 each" heading="AI COURSES" accent="#FFE030" bg="#f7f7f5">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="cards-grid">
          {COURSES.map(c => <CourseCard key={c.id} course={c} onDetails={() => setModal(c)} />)}
        </div>
      </Section>

      {/* ── SOCIAL MEDIA ── */}
      <Section id="smm" label="Service Packs · ₹4,999 – ₹24,999/mo" heading="SOCIAL MEDIA MANAGEMENT" accent="#FFE030" bg="#fff">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="cards-grid-4">
          {SOCIAL_PACKS.map(p => <PackCard key={p.id} pack={p} />)}
        </div>
      </Section>

      {/* ── GRAPHIC DESIGN ── */}
      <Section id="design" label="Design Packages · ₹4,999 – ₹9,999" heading="GRAPHIC DESIGN" accent="#FFE030" bg="#f7f7f5">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="cards-grid">
          {DESIGN_PACKS.map(p => <PackCard key={p.id} pack={p} />)}
        </div>
      </Section>

      {/* ── AI TOOLS ── */}
      <Section id="ai" label="Automation Packages · ₹10,000 – ₹50,000" heading="AI TOOLS & AUTOMATIONS" accent="#FFE030" bg="#fff">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="cards-grid">
          {AI_TOOL_PACKS.map(p => <PackCard key={p.id} pack={p} />)}
        </div>
      </Section>

      {/* ── WEBSITE DESIGN ── */}
      <Section id="web" label="Web Packages · ₹2,999 – ₹9,999" heading="WEBSITE DESIGN" accent="#FFE030" bg="#f7f7f5">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="cards-grid">
          {WEB_PACKS.map(p => <PackCard key={p.id} pack={p} />)}
        </div>
      </Section>

      {/* Modal */}
      {modal && <CourseModal course={modal} onClose={() => setModal(null)} />}

      <style>{`
        @media (max-width: 1000px) {
          .cards-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .cards-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .modal-cols   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .cards-grid      { grid-template-columns: 1fr !important; }
          .cards-grid-4    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
