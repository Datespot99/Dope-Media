import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router'

export default function Root() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const solidNav = scrolled || !isHome

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: solidNav ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: solidNav ? '1px solid #E8E8E8' : 'none',
        backdropFilter: solidNav ? 'blur(12px)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 900, letterSpacing: '-0.02em', color: '#0a0a0a', textDecoration: 'none' }}>
            DOPE<span style={{ color: '#FFE030' }}>.</span>MEDIA
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            <Link to="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: location.pathname === '/' ? '#0a0a0a' : '#888', textDecoration: 'none', transition: 'color 0.15s' }}>
              Home
            </Link>
            <Link to="/store" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: location.pathname === '/store' ? '#0a0a0a' : '#888', textDecoration: 'none', transition: 'color 0.15s' }}>
              Store
            </Link>
            <Link to="/store" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, padding: '10px 20px', background: '#0a0a0a', color: '#fff', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
              Get Notified
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#0a0a0a', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#0a0a0a', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#0a0a0a', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #E8E8E8', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 500, color: '#0a0a0a', textDecoration: 'none' }}>Home</Link>
            <Link to="/store" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 500, color: '#0a0a0a', textDecoration: 'none' }}>Store</Link>
          </div>
        )}
      </nav>

      <Outlet />

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid #E8E8E8', background: '#fff', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 900, color: '#0a0a0a' }}>
            DOPE<span style={{ color: '#FFE030' }}>.</span>MEDIA
          </span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#bbb' }}>© 2026 Dope Media. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Instagram', 'TikTok', 'LinkedIn'].map(s => (
              <span key={s} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#bbb', cursor: 'pointer', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#0a0a0a'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#bbb'}
              >{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
