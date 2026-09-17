'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CashLeakageCalculator from '@/components/CashLeakageCalculator';
import TransformationMatrix from '@/components/TransformationMatrix';
import ROICalculator from '@/components/ROICalculator';
import FAQSection from '@/components/FAQSection';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTurnover, setBookingTurnover] = useState('₹20 Cr - ₹50 Cr');
  const [bookingChallenge, setBookingChallenge] = useState('Eliminate Cash Leakage & Working Capital Traps');

  const openBooking = (
    turnover = '₹20 Cr - ₹50 Cr',
    challenge = 'Eliminate Cash Leakage & Working Capital Traps'
  ) => {
    setBookingTurnover(turnover);
    setBookingChallenge(challenge);
    setBookingOpen(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        style={{
          padding: '90px 0 80px 0',
          position: 'relative',
          background: 'radial-gradient(ellipse at 50% 10%, rgba(0, 124, 232, 0.12), rgba(0, 208, 156, 0.06) 40%, transparent 70%)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Executive Trust Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div className="badge badge-gold">
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
              <span>Fractional CFO & Advisory for ₹5 Cr – ₹50 Cr+ Enterprises</span>
            </div>
          </div>

          {/* Core Problem-Agitate Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5.2vw, 4.1rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: '1020px',
              margin: '0 auto 24px auto',
              letterSpacing: '-0.025em',
            }}
          >
            Stop Guessing Your Finances.{' '}
            <br />
            <span className="text-gradient">Eliminate Cash Leakage</span> & Scale with Total Clarity.
          </h1>

          {/* Subheadline directly integrating the TFC UVP */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#94A3B8',
              maxWidth: '820px',
              margin: '0 auto 36px auto',
              lineHeight: 1.65,
            }}
          >
            Finkasha empowers middle-market founders, existing CFOs, and CAs across Manufacturing, Trading, and Services with institutional-grade <strong style={{ color: '#F8FAFC' }}>Fractional CFO leadership</strong>, working capital optimization, and founder wealth management.
          </p>

          {/* Dual Action CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '50px',
            }}
          >
            <button
              onClick={() => openBooking()}
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.05rem', padding: '18px 36px' }}
            >
              <span>Book Your Strategic Financial Consultation</span>
              <span style={{ fontSize: '1.2rem' }}>⚡</span>
            </button>

            <a
              href="#diagnostic"
              className="btn btn-secondary btn-lg"
              style={{ fontSize: '1.02rem', padding: '18px 32px' }}
            >
              <span>Run Cash Leakage Diagnostic</span>
              <span>↓</span>
            </a>
          </div>

          {/* Track Record & Proof Points Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              maxWidth: '960px',
              margin: '0 auto',
              background: 'rgba(11, 18, 34, 0.75)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              borderRadius: '20px',
              padding: '28px 24px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            }}
            className="stats-strip"
          >
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00D09C', fontFamily: 'var(--font-heading)' }}>
                40+
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Corporate Transformations
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-heading)' }}>
                350+
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Portfolios Managed
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FBBF24', fontFamily: 'var(--font-heading)' }}>
                ₹500 Cr+
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Advised Client Volume
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#A78BFA', fontFamily: 'var(--font-heading)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                NDA Protected Secrecy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY & INDUSTRY STRIP */}
      <section
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          backgroundColor: 'rgba(5, 9, 17, 0.8)',
          padding: '24px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Trusted Financial Navigation Across:
          </span>
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
            <span>🏭 Manufacturing (₹5 - ₹50 Cr)</span>
            <span>🚢 Trading & Export-Import</span>
            <span>💼 Corporate & Enterprise Services</span>
            <span>📊 In-House CFOs & CAs</span>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS & THE HIDDEN TRAPS (PAS Framework) */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge badge-gold">The Hidden Reality</div>
            <h2 className="section-title">
              Why Most ₹20 Cr – ₹50 Cr+ Founders <br />
              <span style={{ color: '#F87171' }}>Struggle with Cash Flow Despite Growing Sales</span>
            </h2>
            <p className="section-subtitle">
              Growing your revenue from ₹5 Cr to ₹50 Cr is an incredible achievement. But what got you here won&apos;t get you to ₹100 Cr. Are these financial blind spots quietly draining your momentum?
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: '💸',
                title: 'Trapped Working Capital & Cash Leakage',
                desc: 'Sales are booming on paper, but bank accounts stay dry. Debtor collection cycles (DSO) stretch past 70+ days while suppliers demand immediate payments, sparking recurring liquidity panic.',
              },
              {
                icon: '📄',
                title: 'Confusing, Rearview Financial Reports',
                desc: 'Relying solely on historical tax filings and basic ledger balances. You cannot see real-time product-line gross margins or project cash flow requirements 60 days ahead.',
              },
              {
                icon: '💬',
                title: 'Casual Advice Replacing True Intelligence',
                desc: 'Hesitant to trust external firms, many founders depend on friendly, informal advice or social media tips. This creates temporary band-aids that trigger bigger compliance risks.',
              },
              {
                icon: '⚖️',
                title: 'Rising Regulatory & Compliance Anxiety',
                desc: 'Constant dread of sudden GST reconciliations, bank scrutiny, or delayed compliance penalties that could jeopardize years of reputational and corporate sweat equity.',
              },
              {
                icon: '🛑',
                title: 'Absence of Strategic Financial Architecture',
                desc: 'Without a dedicated Chief Financial Officer sitting with you to brainstorm expansions, capital costs, and debt lines, major decisions are made on pure gut feel.',
              },
              {
                icon: '🛡️',
                title: 'Unprotected Founder Wealth',
                desc: 'Company cash flows and promoter personal wealth remain dangerously entangled. Personal assets remain exposed to enterprise volatility and credit liabilities.',
              },
            ].map((card, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#fff' }}>{card.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.65' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* PAS Solution Hook */}
          <div
            style={{
              marginTop: '48px',
              padding: '24px 32px',
              borderRadius: '16px',
              background: 'linear-gradient(90deg, rgba(0, 208, 156, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
              border: '1px solid rgba(0, 208, 156, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>
                Plug Cash Leakages & Build Predictable Liquidity
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                Finkasha acts as your financial co-pilot, giving you institutional visibility into every rupee.
              </p>
            </div>
            <button onClick={() => openBooking()} className="btn btn-primary">
              Schedule Diagnostic Session ⚡
            </button>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CASH LEAKAGE & WORKING CAPITAL AUDIT TOOL */}
      <section className="section" style={{ backgroundColor: 'rgba(6, 11, 20, 0.6)' }}>
        <div className="container">
          <CashLeakageCalculator
            onOpenBookingWithDetails={(turnover, challenge) => openBooking(turnover, challenge)}
          />
        </div>
      </section>

      {/* 5. THE THREE CORE OFFERINGS + PAID CONSULTANCY */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge badge-gold">High-Impact Solutions</div>
            <h2 className="section-title">Institutional Financial Architecture</h2>
            <p className="section-subtitle">
              Tailored specifically for businesses generating ₹5 Cr to ₹50 Cr+ turnover, plus direct strategic advisory for in-house CFOs and Chartered Accountants.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '32px' }}>
            {/* Offering 1: Virtual CFO */}
            <div
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 208, 156, 0.35)',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px' }}>Pillar 01</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#fff' }}>
                  Virtual / Fractional CFO
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Institutional financial navigation without the ₹1 Crore executive payroll overhead.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#00D09C' }}>✓</span>
                    <span>13-Week rolling cash flow forecasting models</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#00D09C' }}>✓</span>
                    <span>Plugging operational & vendor cash leakages</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#00D09C' }}>✓</span>
                    <span>Monthly Executive MIS & gross margin dashboards</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#00D09C' }}>✓</span>
                    <span>Working capital (DSO/CCC) compression & debt strategy</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Virtual / Fractional CFO Retainer')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Discuss Fractional CFO
              </button>
            </div>

            {/* Offering 2: Investments */}
            <div
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="badge badge-gold" style={{ marginBottom: '14px' }}>Pillar 02</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#fff' }}>
                  Strategic Investment Advisory
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Institutional capital allocation for corporate reserves and long-term promoter growth.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#38BDF8' }}>✓</span>
                    <span>Comprehensive Mutual Fund & Equity Portfolios</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#38BDF8' }}>✓</span>
                    <span>Corporate treasury & liquidity yield maximization</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#38BDF8' }}>✓</span>
                    <span>In-depth portfolio risk & capital volatility audits</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#38BDF8' }}>✓</span>
                    <span>Tax-efficient capital gains structuring</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Strategic Investment Advisory')}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Explore Investment Advisory
              </button>
            </div>

            {/* Offering 3: Wealth Management */}
            <div
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px', borderColor: '#A78BFA', color: '#C4B5FD', background: 'rgba(167, 139, 250, 0.1)' }}>
                  Pillar 03
                </div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#fff' }}>
                  Founder Wealth Management
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Safeguarding and compounding promoter family net worth across generations.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#A78BFA' }}>✓</span>
                    <span>Holistic promoter net worth analysis & mapping</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#A78BFA' }}>✓</span>
                    <span>Multi-asset class allocation & capital preservation</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#A78BFA' }}>✓</span>
                    <span>Commercial risk firewalls protecting family assets</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#A78BFA' }}>✓</span>
                    <span>Long-term estate planning & succession governance</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Founder Wealth Management')}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Explore Wealth Management
              </button>
            </div>
          </div>

          {/* Offering 4: Dedicated Highlight for Paid Consultancy (Founders, CFOs, CAs) */}
          <div
            className="glass-card"
            style={{
              padding: '36px 40px',
              border: '2px solid rgba(245, 158, 11, 0.35)',
              background: 'linear-gradient(135deg, rgba(20, 29, 50, 0.95), rgba(12, 18, 34, 0.98))',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
                ⭐ Executive Advisory Service
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '10px', color: '#fff' }}>
                Paid 1-on-1 Strategic Financial Consultation
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Designed specifically for <strong>Business Owners</strong>, <strong>in-house corporate CFOs</strong>, and <strong>practicing Chartered Accountants (CAs)</strong> who need an institutional-grade second opinion, cash leakage audit review, or complex debt structuring roadmap.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <span>✓ 60-90 Min Intensive Private Session</span>
                <span>✓ Direct with Senior Advisory Leadership</span>
                <span>✓ Actionable 90-Day Roadmap</span>
                <span>✓ Strict NDA Protected</span>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#FBBF24', fontWeight: 600, marginBottom: '8px' }}>
                LIMITED MONTHLY CONSULTATION SLOTS
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Paid 1-on-1 Strategic Financial Consultation')}
                className="btn btn-gold btn-lg"
                style={{ width: '100%', padding: '16px 28px' }}
              >
                <span>Reserve Your Consultation Slot</span>
                <span>⚡</span>
              </button>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '8px' }}>
                Includes pre-session diagnostic review
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE VS AFTER TRANSFORMATION MATRIX */}
      <TransformationMatrix onOpenBooking={() => openBooking()} />

      {/* 7. ROI & ECONOMICS: FRACTIONAL CFO VS CA VS FULL-TIME */}
      <ROICalculator onOpenBooking={() => openBooking()} />

      {/* 8. FOUNDER & PHILOSOPHY: "LEARN ONCE, BENEFIT FOREVER" */}
      <section className="section" style={{ backgroundColor: 'rgba(5, 9, 17, 0.7)' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '48px 44px',
              border: '1px solid rgba(0, 208, 156, 0.25)',
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Image / Graphic / Identity */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 20px auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid rgba(0, 208, 156, 0.4)',
                  boxShadow: '0 15px 40px rgba(0, 208, 156, 0.2)',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Finkasha Financial Advisory"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>
                Kamlesh Thakur
              </h3>
              <div style={{ color: '#00D09C', fontSize: '0.88rem', fontWeight: 600 }}>
                Founder & Director, Finkasha Services Private Limited
              </div>
              <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>
                kamlesh@finkasha.com | +91 9970208927
              </div>
            </div>

            {/* Philosophy Copy from Document */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
                Institutional Philosophy
              </div>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '16px', lineHeight: '1.3' }}>
                &ldquo;Learn Once, Benefit Forever.&rdquo;
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.98rem', lineHeight: '1.75', marginBottom: '18px' }}>
                We believe the biggest tragedy in Indian business is when ambitious founders build a ₹20 Cr to ₹50 Cr enterprise through sheer grit, only to see their margins vanish into cash leakage and chaotic working capital traps.
              </p>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '24px' }}>
                Traditional accounting only records history. At Finkasha, our mission is educative and strategic: we empower you with the forward-looking financial architecture, cash forecasting disciplines, and institutional governance required to build an enduring, profitable corporate powerhouse.
              </p>

              <div style={{ display: 'flex', gap: '14px' }}>
                <button onClick={() => openBooking()} className="btn btn-primary">
                  Book a Consultation with Kamlesh ⚡
                </button>
                <Link href="/services" className="btn btn-secondary">
                  Explore Advisory Scope →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ & OBJECTION HANDLING */}
      <FAQSection />

      {/* 10. FINAL CONVERSION BANNER */}
      <section
        style={{
          padding: '80px 0 100px 0',
          position: 'relative',
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 208, 156, 0.12), transparent 70%)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            High-Converting Enterprise Advisory
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              maxWidth: '850px',
              margin: '0 auto 20px auto',
              lineHeight: '1.2',
            }}
          >
            Ready to Unlock Total Financial Clarity & Plug Cash Leakages?
          </h2>
          <p
            style={{
              color: '#94A3B8',
              fontSize: '1.1rem',
              maxWidth: '650px',
              margin: '0 auto 36px auto',
              lineHeight: '1.6',
            }}
          >
            Schedule your confidential strategic session with Finkasha today. Protected by institutional non-disclosure standards.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openBooking()}
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.1rem', padding: '20px 42px' }}
            >
              <span>Book Your Financial Consultation</span>
              <span>⚡</span>
            </button>
            <a
              href="https://wa.me/919970208927?text=Hello%20Finkasha,%20I%20would%20like%20to%20inquire%20about%20Fractional%20CFO%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ fontSize: '1.05rem', padding: '20px 32px' }}
            >
              <span>WhatsApp Direct Line</span>
              <span>💬</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING MODAL */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTurnover={bookingTurnover}
        initialChallenge={bookingChallenge}
      />

      <style jsx>{`
        @media (max-width: 800px) {
          :global(.stats-strip) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
