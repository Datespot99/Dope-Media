import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'

/* ── countdown target: Oct 1 2026, 06:00 AM ── */
const LAUNCH = new Date('2026-10-01T06:00:00')

function calcTime() {
  const diff = Math.max(0, LAUNCH.getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)     / 1_000),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const pad = (n: number) => String(n).padStart(2, '0')
  const prev = useRef(value)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (prev.current !== value) {
      setKey(k => k + 1)
      prev.current = value
    }
  }, [value])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div
        key={key}
        className="flip-digit"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(36px, 7vw, 72px)',
          lineHeight: 1,
          background: '#FFE030',
          color: '#0a0a0a',
          width: 'clamp(72px, 12vw, 110px)',
          height: 'clamp(72px, 12vw, 110px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-0.02em',
        }}
      >
        {pad(value)}
      </div>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa' }}>
        {label}
      </span>
    </div>
  )
}

const SERVICES = [
  { icon: '✦', title: 'Graphic Design',         desc: 'Brand identities, social assets, pitch decks, and print collateral that stop the scroll and stay in memory.' },
  { icon: '◈', title: 'Social Media Mgmt',       desc: 'Full-service content calendars, copy, scheduling, and analytics — so your brand shows up consistently every day.' },
  { icon: '⬡', title: 'AI Tools & Automation',   desc: 'Custom AI workflows that cut your workload in half and amplify your team\'s output without adding headcount.' },
  { icon: '▶', title: 'Courses & Mentorship',    desc: 'Digital marketing courses built for entrepreneurs who want real skills, not theory — learn at your own pace.' },
  { icon: '◎', title: 'Content Strategy',        desc: 'Data-backed content plans that align your message, audience, and growth goals into one unified roadmap.' },
  { icon: '⟡', title: 'Paid Advertising',        desc: 'Meta, TikTok, and Google ad campaigns engineered for ROI — from creative production to conversion tracking.' },
]

const STATS = [
  { value: '500+', label: 'Clients Served' },
  { value: '98%',  label: 'Satisfaction Rate' },
  { value: '3×',   label: 'Avg. Growth' },
  { value: '12+',  label: 'Industries' },
]

const TEAM = [
  {
    name: 'Adarsh VK',
    role: 'Graphic Designer & AI Expert',
    initial: 'A',
    color: '#FFE030',
    text: '#0a0a0a',
    tags: ['Brand Design', 'Midjourney', 'AI Workflows'],
    bio: 'Crafts visual identities that speak before a word is read — and automates the process with AI.',
  },
  {
    name: 'Kiran VK',
    role: 'Prompt Engineer & AI Expert',
    initial: 'K',
    color: '#0a0a0a',
    text: '#FFE030',
    tags: ['ChatGPT', 'LLM Fine-tuning', 'Automation'],
    bio: 'Builds prompts and AI pipelines that turn complex problems into push-button solutions.',
  },
  {
    name: 'Seshi',
    role: 'Social Media Manager',
    initial: 'S',
    color: '#F0F0F0',
    text: '#0a0a0a',
    tags: ['Instagram', 'Content Strategy', 'Analytics'],
    bio: 'Keeps brands consistent, relevant, and growing — one post, reel, and story at a time.',
  },
  {
    name: 'Babu C',
    role: 'Accounts & Management',
    initial: 'B',
    color: '#FFE030',
    text: '#0a0a0a',
    tags: ['Operations', 'Finance', 'Client Relations'],
    bio: 'The backbone of the studio — ensuring every project runs on time, budget, and brief.',
  },
  {
    name: 'Bharath',
    role: 'Web Designer',
    initial: 'Bh',
    color: '#0a0a0a',
    text: '#FFE030',
    tags: ['UI/UX', 'Webflow', 'Conversion Design'],
    bio: 'Designs websites that don\'t just look good — they guide every visitor toward a decision.',
  },
  {
    name: 'Pradeep J',
    role: 'Marketing Expert',
    initial: 'P',
    color: '#F0F0F0',
    text: '#0a0a0a',
    tags: ['Paid Ads', 'SEO', 'Growth Strategy'],
    bio: 'Connects the dots between audience, message, and channel to turn spend into measurable growth.',
  },
]

function TeamSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section style={{ padding: '96px 24px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      {/* decorative grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, rgba(255,224,48,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 56 }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#444', display: 'block', marginBottom: 10 }}>The people behind it</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>
              MEET THE<br /><span style={{ color: '#FFE030' }}>TEAM.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#444', maxWidth: 260, lineHeight: 1.7 }}>
            Six specialists. One obsession — making your brand impossible to ignore.
          </p>
        </div>

        {/* cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="team-grid">
          {TEAM.map((member, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                background: active === i ? '#141414' : '#111',
                border: `1.5px solid ${active === i ? '#FFE030' : '#1e1e1e'}`,
                padding: '28px',
                transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
                transform: active === i ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'default',
              }}
            >
              {/* avatar + name row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                <div style={{
                  width: 52, height: 52, flexShrink: 0,
                  background: member.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                  fontSize: 22, color: member.text,
                  transition: 'transform 0.25s',
                  transform: active === i ? 'rotate(-6deg)' : 'rotate(0deg)',
                }}>
                  {member.initial}
                </div>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: 3 }}>{member.name}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#555', lineHeight: 1.4 }}>{member.role}</p>
                </div>
              </div>

              {/* bio */}
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 18 }}>{member.bio}</p>

              {/* tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {member.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500,
                    letterSpacing: '0.06em', padding: '3px 9px',
                    background: active === i ? 'rgba(255,224,48,0.12)' : '#1a1a1a',
                    color: active === i ? '#FFE030' : '#444',
                    border: `1px solid ${active === i ? 'rgba(255,224,48,0.25)' : '#222'}`,
                    transition: 'all 0.25s',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom strip */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid #1a1a1a', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#444', lineHeight: 1.65, maxWidth: 420 }}>
            We're a lean, focused team that punches well above its weight — and we're growing. Every role here is filled with someone who genuinely cares about results.
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {TEAM.map((m, i) => (
              <div key={i} style={{ width: 32, height: 32, background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, color: m.text }} title={m.name}>
                {m.initial}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [time, setTime] = useState(calcTime)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div style={{ background: '#fff', color: '#0a0a0a', overflowX: 'hidden' }}>

      {/* ────────────────── HERO ────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 24px 80px', overflow: 'hidden' }}>

        {/* dot grid */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* yellow glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: 640, height: 640, borderRadius: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(255,224,48,0.18) 0%, transparent 68%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, width: '100%', margin: '0 auto' }}>

          {/* badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', border: '1px solid #e0e0e0', background: 'rgba(255,255,255,0.85)', marginBottom: 40 }}>
            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#FFE030', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#777' }}>Something big is coming</span>
          </div>

          {/* headline */}
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.88, marginBottom: 32 }}>
            <span style={{ display: 'block', fontSize: 'clamp(72px, 14vw, 152px)', color: '#0a0a0a' }}>DOPE</span>
            <span style={{ display: 'block', fontSize: 'clamp(72px, 14vw, 152px)', WebkitTextStroke: '2.5px #0a0a0a', color: 'transparent' }}>MEDIA</span>
          </h1>

          {/* sub */}
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 300, color: '#666', maxWidth: 520, margin: '0 auto 52px', lineHeight: 1.7 }}>
            A next-generation digital marketing studio — bold creative, smart automation, and real strategy to make your brand impossible to ignore.
          </p>

          {/* ── countdown ── */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 'clamp(8px, 3vw, 28px)', marginBottom: 52 }}>
            <CountdownUnit value={time.days}    label="Days"  />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 5vw, 52px)', color: '#ccc', alignSelf: 'center', marginBottom: 24 }}>:</span>
            <CountdownUnit value={time.hours}   label="Hours" />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 5vw, 52px)', color: '#ccc', alignSelf: 'center', marginBottom: 24 }}>:</span>
            <CountdownUnit value={time.minutes} label="Min"   />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 5vw, 52px)', color: '#ccc', alignSelf: 'center', marginBottom: 24 }}>:</span>
            <CountdownUnit value={time.seconds} label="Sec"   />
          </div>

          {/* ── email form ── */}
          <div style={{ maxWidth: 440, margin: '0 auto' }}>
            {submitted ? (
              <div style={{ padding: '16px 24px', background: '#FFE030', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14 }}>
                <span>✓</span> You're on the list — we'll be in touch!
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{ flex: 1, padding: '14px 16px', border: '1.5px solid #0a0a0a', borderRight: 'none', fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: 'none', background: '#fff', color: '#0a0a0a' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#FFE030')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#0a0a0a')}
                />
                <button
                  type="submit"
                  style={{ padding: '14px 24px', background: '#0a0a0a', color: '#fff', border: '1.5px solid #0a0a0a', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                >
                  Notify Me
                </button>
              </form>
            )}
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#bbb', marginTop: 10 }}>No spam. Just the launch date and early-access deals.</p>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.35 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div className="scroll-line" style={{ width: 1, height: 36, background: '#0a0a0a' }} />
        </div>
      </section>

      {/* ────────────────── STATS ────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center' }} className="stats-grid">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 5vw, 60px)', color: '#FFE030', lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── SERVICES ────────────────── */}
      <section style={{ padding: '96px 24px', background: '#f7f7f5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 56 }}>
            <div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 12 }}>What we offer</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, fontSize: 'clamp(40px, 6vw, 72px)' }}>
                SERVICES<br /><span style={{ color: '#FFE030' }}>THAT HIT.</span>
              </h2>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#666', maxWidth: 280, lineHeight: 1.7 }}>
              Every service is built around one goal — making your brand impossible to ignore.
            </p>
          </div>

          {/* grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#ddd' }} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ background: hovered === i ? '#FFE030' : '#fff', padding: '36px 32px', transition: 'background 0.2s', cursor: 'default' }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 28, display: 'block', marginBottom: 16 }}>{s.icon}</span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, textTransform: 'uppercase', marginBottom: 10, lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.7, color: hovered === i ? '#0a0a0a' : '#666' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── WHY US ────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="why-grid">
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 16 }}>Why us</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 28 }}>
              BUILT FOR<br /><span style={{ color: '#FFE030' }}>BRANDS</span><br />THAT MOVE.
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
              We don't do cookie-cutter. Dope Media blends human talent with AI-powered efficiency — giving you enterprise-level output at startup speed.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#555', lineHeight: 1.75 }}>
              From day one, your brand gets a dedicated team that thinks strategically, executes boldly, and reports transparently.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { title: 'Creative-first', body: 'Every campaign starts with a big idea, not a template.' },
              { title: 'AI-powered',     body: 'We integrate the best AI tools so you scale without bloating headcount.' },
              { title: 'Results-driven', body: "Vanity metrics don't pay bills. We track what moves revenue." },
              { title: 'Always learning',body: 'Our courses keep you ahead of every algorithm shift.' },
            ].map(({ title, body }) => (
              <div key={title}
                style={{ padding: '20px', border: '1.5px solid #ebebeb', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#FFE030'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ebebeb'}
              >
                <div style={{ width: 8, height: 8, background: '#FFE030', marginBottom: 12 }} />
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{title}</h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#888', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── TEAM ────────────────── */}
      <TeamSection />

      {/* ────────────────── STORE CTA ────────────────── */}
      <section style={{ background: '#FFE030', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: 10 }}>Now available</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 0.95, color: '#0a0a0a' }}>
              AI COURSES<br />ARE LIVE.
            </h2>
          </div>
          <Link to="/store"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, padding: '14px 36px', background: '#0a0a0a', color: '#fff', textDecoration: 'none', transition: 'background 0.2s, color 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
          >
            Browse the Store →
          </Link>
        </div>
      </section>

      {/* ────────────────── FINAL CTA ────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.88, fontSize: 'clamp(56px, 10vw, 120px)', marginBottom: 24 }}>
            <span style={{ color: '#FFE030' }}>LET'S</span><br />
            <span style={{ color: '#fff' }}>GO.</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#666', marginBottom: 40, lineHeight: 1.75, maxWidth: 380, margin: '0 auto 40px' }}>
            Join the waitlist today and get early access, founder pricing, and first look at everything we're building.
          </p>
          <a href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'inline-block', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, padding: '14px 40px', background: '#FFE030', color: '#0a0a0a', textDecoration: 'none', transition: 'transform 0.15s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
          >
            Secure Your Spot →
          </a>
        </div>
      </section>

      {/* responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .stats-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid      { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid     { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .team-grid     { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
