import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router'
import { QRCodeSVG } from 'qrcode.react'
import { COURSES, SOCIAL_PACKS, DESIGN_PACKS, AI_TOOL_PACKS, WEB_PACKS } from '../data/products'
import type { Course, Pack } from '../data/products'

const RAZORPAY_LINK = 'https://rzp.io/rzp/itzr0Xqm'
const UPI_ID        = 'paytm.s36oa7e@pty'
const MERCHANT_NAME = 'Dope Media'

type PayMethod = 'razorpay' | 'qr' | 'upi'

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

function upiLink(amount: number, note: string) {
  return `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`
}

/* ────────────────────────────────────────────────
   Payment method panels
──────────────────────────────────────────────── */
function RazorpayPanel() {
  return (
    <div style={{ padding: '28px', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#3395FF"/>
          <path d="M12 28L20 8l8 20H12z" fill="#fff" fillOpacity="0.9"/>
          <path d="M16 22h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>Pay via Razorpay</h4>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 24 }}>
        Secure payment via Razorpay. Accepts UPI, debit/credit cards, net banking, and wallets.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 28 }}>
        {['UPI', 'Visa', 'Mastercard', 'Net Banking', 'Wallets'].map(m => (
          <span key={m} style={{ padding: '4px 10px', border: '1px solid #e8e8e8', fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#888' }}>{m}</span>
        ))}
      </div>
      <a
        href={RAZORPAY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', padding: '13px 40px', background: '#3395FF', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.88'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
      >
        Open Razorpay →
      </a>
    </div>
  )
}

function QRPanel({ amount, note }: { amount: number; note: string }) {
  const link = upiLink(amount, note)
  const [copied, setCopied] = useState(false)

  function copyUPI() {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ padding: '28px', textAlign: 'center' }}>
      <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 6 }}>Scan to Pay</h4>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#666', marginBottom: 24, lineHeight: 1.65 }}>
        Open any UPI app (GPay, PhonePe, Paytm) and scan this QR code to pay.
      </p>

      {/* QR */}
      <div style={{ display: 'inline-block', padding: 16, border: '2px solid #FFE030', background: '#fff', marginBottom: 20 }}>
        <QRCodeSVG
          value={link}
          size={200}
          bgColor="#ffffff"
          fgColor="#0a0a0a"
          level="M"
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#aaa', marginBottom: 6 }}>Amount to pay</p>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36, color: '#FFE030' }}>{fmt(amount)}</p>
      </div>

      <div style={{ background: '#f7f7f5', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#aaa', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>UPI ID</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>{UPI_ID}</p>
        </div>
        <button
          onClick={copyUPI}
          style={{ padding: '7px 14px', border: '1.5px solid #e8e8e8', background: copied ? '#FFE030' : '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500, cursor: 'pointer', flexShrink: 0, transition: 'background 0.2s' }}
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#bbb' }}>After payment, screenshot and share proof to confirm your order.</p>
    </div>
  )
}

function UPIPanel({ amount, note }: { amount: number; note: string }) {
  const [copied, setCopied] = useState(false)

  function copyID() {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ padding: '28px', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#FFF8E0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>
        💳
      </div>
      <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>Pay via UPI ID</h4>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 28 }}>
        Open your preferred UPI app, go to "Pay by UPI ID", enter the ID below, and pay {fmt(amount)}.
      </p>

      {/* UPI ID display */}
      <div style={{ background: '#0a0a0a', padding: '20px 24px', marginBottom: 24 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Send payment to</p>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 28, color: '#FFE030', letterSpacing: '0.02em', marginBottom: 4 }}>{UPI_ID}</p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#555' }}>{MERCHANT_NAME}</p>
      </div>

      {/* amount */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#aaa', marginBottom: 4 }}>Amount</p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 32 }}>{fmt(amount)}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#aaa', marginBottom: 4 }}>Note / Remark</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#555', maxWidth: 200 }}>{note}</p>
        </div>
      </div>

      <button
        onClick={copyID}
        style={{ padding: '12px 32px', border: '1.5px solid #0a0a0a', background: copied ? '#FFE030' : '#fff', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
      >
        {copied ? '✓ UPI ID Copied!' : 'Copy UPI ID'}
      </button>

      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#bbb', marginTop: 16 }}>After payment, share a screenshot to confirm your order.</p>
    </div>
  )
}

/* ────────────────────────────────────────────────
   MAIN CHECKOUT
──────────────────────────────────────────────── */
export default function Checkout() {
  const location = useLocation()
  const state = location.state as { kind?: 'course' | 'pack'; item?: Course | Pack } | undefined

  /* figure out what was passed */
  const allPacks = [...SOCIAL_PACKS, ...DESIGN_PACKS, ...AI_TOOL_PACKS, ...WEB_PACKS]
  const initCourse = state?.kind === 'course' ? (state.item as Course) : COURSES[0]
  const initPack   = state?.kind === 'pack'   ? (state.item as Pack)   : null

  const [selType,     setSelType]     = useState<'course' | 'pack'>(state?.kind ?? 'course')
  const [selCourseId, setSelCourseId] = useState(initCourse.id)
  const [selPackId,   setSelPackId]   = useState<string | null>(initPack?.id ?? null)
  const [payMethod,   setPayMethod]   = useState<PayMethod>('razorpay')
  const [name,        setName]        = useState('')
  const [email,       setEmail]       = useState('')
  const [phone,       setPhone]       = useState('')
  const [agreed,      setAgreed]      = useState(false)
  const [errors,      setErrors]      = useState<Record<string, string>>({})
  const [step,        setStep]        = useState<1 | 2>(1)

  const selectedCourse = COURSES.find(c => c.id === selCourseId) ?? COURSES[0]
  const selectedPack   = allPacks.find(p => p.id === selPackId) ?? null
  const currentItem    = selType === 'course' ? selectedCourse : selectedPack
  const amount         = currentItem?.price ?? 0
  const itemName       = selType === 'course' ? (currentItem as Course)?.title : (currentItem as Pack)?.name
  const noteStr        = `${MERCHANT_NAME} - ${itemName ?? ''}`

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim())                         e.name  = 'Full name is required'
    if (!/\S+@\S+\.\S+/.test(email))          e.email = 'Valid email is required'
    if (phone.replace(/\D/g, '').length < 10) e.phone = 'Valid 10-digit phone required'
    if (!agreed)                              e.terms = 'Please accept the terms to continue'
    if (selType === 'pack' && !selPackId)     e.item  = 'Please select a service pack'
    return e
  }

  function handleContinue() {
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setStep(2)
  }

  const inputStyle = (hasErr: boolean): React.CSSProperties => ({
    width: '100%', padding: '12px 16px',
    border: `1.5px solid ${hasErr ? '#ef4444' : '#e8e8e8'}`,
    fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#0a0a0a',
    background: '#fff', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  })

  const METHOD_OPTS: { id: PayMethod; label: string; icon: string }[] = [
    { id: 'razorpay', label: 'Razorpay',  icon: '💳' },
    { id: 'qr',       label: 'QR Code',   icon: '📱' },
    { id: 'upi',      label: 'UPI ID',    icon: '⚡' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f5', paddingTop: 88, paddingBottom: 64 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#bbb' }}>
          <Link to="/"      style={{ color: '#bbb', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#0a0a0a'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='#bbb'}>Home</Link>
          <span>/</span>
          <Link to="/store" style={{ color: '#bbb', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#0a0a0a'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='#bbb'}>Store</Link>
          <span>/</span>
          <span style={{ color: '#0a0a0a' }}>{step === 1 ? 'Your Details' : 'Payment'}</span>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          {[{ n: 1, label: 'Your Details' }, { n: 2, label: 'Payment' }].map(({ n, label }) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: step >= n ? '#FFE030' : '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 14, color: step >= n ? '#0a0a0a' : '#bbb', transition: 'background 0.3s' }}>{n}</div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: step === n ? 600 : 400, color: step === n ? '#0a0a0a' : '#bbb' }}>{label}</span>
              {n < 2 && <span style={{ color: '#ddd', marginLeft: 4 }}>›</span>}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, alignItems: 'start' }} className="checkout-grid">

          {/* ── LEFT PANEL ── */}
          <div>
            {step === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Product selector */}
                <div style={{ background: '#fff', border: '1.5px solid #e8e8e8', padding: '26px' }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 20, marginBottom: 18 }}>Select Product</h2>

                  {/* Type toggle */}
                  <div style={{ display: 'flex', gap: 0, marginBottom: 20, border: '1.5px solid #e8e8e8' }}>
                    {(['course', 'pack'] as const).map(t => (
                      <button key={t} onClick={() => setSelType(t)}
                        style={{ flex: 1, padding: '10px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer', background: selType === t ? '#FFE030' : '#fff', color: selType === t ? '#0a0a0a' : '#888', transition: 'all 0.2s' }}>
                        {t === 'course' ? 'AI Courses' : 'Service Packs'}
                      </button>
                    ))}
                  </div>

                  {selType === 'course' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {COURSES.map(c => (
                        <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', border: `1.5px solid ${selCourseId === c.id ? '#FFE030' : '#e8e8e8'}`, background: selCourseId === c.id ? '#fffbe6' : '#fff', cursor: 'pointer', transition: 'all 0.15s' }}>
                          <input type="radio" name="course" value={c.id} checked={selCourseId === c.id} onChange={() => setSelCourseId(c.id)} style={{ accentColor: '#FFE030', width: 15, height: 15, flexShrink: 0 }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: '#0a0a0a', marginBottom: 1 }}>{c.title}</p>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#aaa' }}>{c.duration} · {c.lessons} lessons</p>
                          </div>
                          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, flexShrink: 0 }}>{fmt(c.price)}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {allPacks.map(p => (
                        <label key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', border: `1.5px solid ${selPackId === p.id ? '#FFE030' : '#e8e8e8'}`, background: selPackId === p.id ? '#fffbe6' : '#fff', cursor: 'pointer', transition: 'all 0.15s' }}>
                          <input type="radio" name="pack" value={p.id} checked={selPackId === p.id} onChange={() => setSelPackId(p.id)} style={{ accentColor: '#FFE030', width: 15, height: 15, flexShrink: 0 }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: '#0a0a0a', marginBottom: 1 }}>{p.name}</p>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#aaa' }}>{p.category}</p>
                          </div>
                          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, flexShrink: 0 }}>{fmt(p.price)}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {errors.item && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#ef4444', marginTop: 8 }}>{errors.item}</p>}
                </div>

                {/* Contact info */}
                <div style={{ background: '#fff', border: '1.5px solid #e8e8e8', padding: '26px' }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 20, marginBottom: 18 }}>Your Details</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[
                      { key: 'name',  label: 'Full Name',      type: 'text',  val: name,  setter: setName,  ph: 'Arjun Sharma' },
                      { key: 'email', label: 'Email Address',  type: 'email', val: email, setter: setEmail, ph: 'arjun@email.com' },
                      { key: 'phone', label: 'Phone Number',   type: 'tel',   val: phone, setter: setPhone, ph: '+91 98765 43210' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', display: 'block', marginBottom: 5 }}>{f.label}</label>
                        <input
                          type={f.type}
                          value={f.val}
                          onChange={e => { f.setter(e.target.value); setErrors(p => ({ ...p, [f.key]: '' })) }}
                          placeholder={f.ph}
                          style={inputStyle(!!errors[f.key])}
                          onFocus={e => { if (!errors[f.key]) (e.target as HTMLElement).style.borderColor = '#FFE030' }}
                          onBlur={e => { if (!errors[f.key]) (e.target as HTMLElement).style.borderColor = '#e8e8e8' }}
                        />
                        {errors[f.key] && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#ef4444', marginTop: 3 }}>{errors[f.key]}</p>}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* ── STEP 2: PAYMENT ── */
              <div style={{ background: '#fff', border: '1.5px solid #e8e8e8' }}>
                <div style={{ background: '#0a0a0a', padding: '20px 24px' }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 20, color: '#fff' }}>Choose Payment Method</h2>
                </div>

                {/* method tabs */}
                <div style={{ display: 'flex', borderBottom: '1.5px solid #e8e8e8' }}>
                  {METHOD_OPTS.map(m => (
                    <button key={m.id} onClick={() => setPayMethod(m.id)}
                      style={{ flex: 1, padding: '14px 8px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, border: 'none', borderBottom: payMethod === m.id ? '2.5px solid #FFE030' : '2.5px solid transparent', background: payMethod === m.id ? '#fffbe6' : '#fff', color: payMethod === m.id ? '#0a0a0a' : '#888', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      <span>{m.icon}</span> {m.label}
                    </button>
                  ))}
                </div>

                {payMethod === 'razorpay' && <RazorpayPanel />}
                {payMethod === 'qr'       && <QRPanel  amount={amount} note={noteStr} />}
                {payMethod === 'upi'      && <UPIPanel amount={amount} note={noteStr} />}

                <div style={{ padding: '0 28px 24px' }}>
                  <button
                    onClick={() => setStep(1)}
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#888', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                  >
                    ← Back to details
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ── ORDER SUMMARY (sticky) ── */}
          <div style={{ position: 'sticky', top: 88, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', border: '1.5px solid #e8e8e8', overflow: 'hidden' }}>
              <div style={{ background: '#0a0a0a', padding: '18px 22px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 19, color: '#fff' }}>Order Summary</h3>
              </div>
              <div style={{ padding: '20px 22px' }}>
                {currentItem ? (
                  <>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#0a0a0a', marginBottom: 3 }}>{itemName}</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#aaa', marginBottom: 14 }}>
                      {selType === 'course'
                        ? `${(currentItem as Course).duration} · ${(currentItem as Course).lessons} lessons`
                        : (currentItem as Pack).category}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
                      {(selType === 'course'
                        ? (currentItem as Course).specs.slice(0, 3)
                        : (currentItem as Pack).includes.slice(0, 3)
                      ).map((s, i) => (
                        <span key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, padding: '3px 7px', background: '#f5f5f5', color: '#666' }}>{s}</span>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 14, marginBottom: 18 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#555', marginBottom: 6 }}>
                        <span>Price</span><span>{fmt(amount)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#22c55e' }}>
                        <span>GST</span><span>Included</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: 14 }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14 }}>Total</span>
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 30 }}>{fmt(amount)}</span>
                    </div>
                  </>
                ) : (
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#aaa', textAlign: 'center', padding: '16px 0' }}>Select a product to see summary</p>
                )}
              </div>
            </div>

            {step === 1 && (
              <div style={{ background: '#fff', border: '1.5px solid #e8e8e8', padding: '20px 22px' }}>
                {/* terms */}
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 6 }}>
                  <input type="checkbox" checked={agreed} onChange={e => { setAgreed(e.target.checked); setErrors(p => ({ ...p, terms: '' })) }} style={{ accentColor: '#FFE030', width: 15, height: 15, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                    I agree to the <span style={{ textDecoration: 'underline', color: '#0a0a0a', cursor: 'pointer' }}>Terms & Conditions</span> and <span style={{ textDecoration: 'underline', color: '#0a0a0a', cursor: 'pointer' }}>Refund Policy</span>.
                  </span>
                </label>
                {errors.terms && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#ef4444', marginBottom: 10 }}>{errors.terms}</p>}

                <button
                  onClick={handleContinue}
                  style={{ width: '100%', marginTop: 14, padding: '13px', background: '#0a0a0a', color: '#fff', border: 'none', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s, color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFE030'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                >
                  Continue to Payment →
                </button>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
                  {['🔒 Secure', '⚡ Instant Access', '💳 UPI / Cards'].map(t => (
                    <span key={t} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#bbb' }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
