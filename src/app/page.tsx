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
    <div style={{ backgroundColor: '#ffffff', color: '#0F172A' }}>
      {/* 1. HERO SECTION (Blue & White corporate theme matching finkasha.com) */}
      <section
        style={{
          padding: '80px 0 70px 0',
          position: 'relative',
          background: 'linear-gradient(180deg, #F0F5FB 0%, #FFFFFF 100%)',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Executive Trust Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div className="badge">
              <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: '#005BB5' }}></span>
              <span>Fractional CFO & Advisory for ₹5 Cr – ₹50 Cr+ Enterprises</span>
            </div>
          </div>

          {/* Core Tagline matching finkasha.com */}
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#005BB5', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Making Your Money Grow
          </div>

          {/* Problem-Agitate Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.9rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              maxWidth: '1000px',
              margin: '0 auto 22px auto',
              letterSpacing: '-0.025em',
              color: '#003366',
            }}
          >
            Stop Guessing Your Finances.{' '}
            <br />
            <span style={{ color: '#005BB5' }}>Eliminate Cash Leakage</span> & Scale with Total Clarity.
          </h1>

          {/* Subheadline directly integrating the TFC UVP */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#475569',
              maxWidth: '820px',
              margin: '0 auto 34px auto',
              lineHeight: 1.65,
            }}
          >
            Finkasha empowers middle-market founders, existing CFOs, and CAs across Manufacturing, Trading, and Services with institutional-grade <strong style={{ color: '#003366' }}>Fractional CFO leadership</strong>, working capital optimization, and predictable profitability architecture.
          </p>

          {/* Dual Action CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={() => openBooking()}
              className="btn btn-primary btn-lg"
            >
              <span>Book a Free Financial Clarity Session</span>
              <span style={{ fontSize: '1.1rem' }}>⚡</span>
            </button>

            <a
              href="#diagnostic"
              className="btn btn-secondary btn-lg"
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
              background: '#ffffff',
              border: '1.5px solid #D9E4F0',
              borderRadius: '16px',
              padding: '24px 20px',
              boxShadow: '0 8px 30px rgba(0, 51, 102, 0.08)',
            }}
            className="stats-strip"
          >
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#003366', fontFamily: 'var(--font-heading)' }}>
                40+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Corporate Transformations
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#005BB5', fontFamily: 'var(--font-heading)' }}>
                350+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Client Enterprises Served
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#007ACC', fontFamily: 'var(--font-heading)' }}>
                ₹500 Cr+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Advised Volume
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-heading)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                NDA Protected Secrecy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY & INDUSTRY STRIP */}
      <section
        style={{
          borderBottom: '1px solid #E2E8F0',
          backgroundColor: '#F8FAFC',
          padding: '20px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.84rem', color: '#003366', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Trusted Financial Navigation Across:
          </span>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
            <span>🏭 Manufacturing (₹5 - ₹50 Cr+)</span>
            <span>🚢 Trading & Export-Import</span>
            <span>💼 Corporate & Enterprise Services</span>
            <span>📊 In-House CFOs & CAs</span>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS & THE HIDDEN TRAPS (PAS Framework) */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge badge-gold">The Hidden Reality</div>
            <h2 className="section-title">
              Why Most ₹20 Cr – ₹50 Cr+ Founders <br />
              <span style={{ color: '#DC2626' }}>Struggle with Cash Flow Despite Growing Sales</span>
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
                title: 'No Forward-Looking Financial Strategy',
                desc: 'Without a dedicated CFO driving expansion planning, capital cost analysis, and scenario modelling, major business decisions are made purely on gut feel with no quantified downside.',
              },
            ].map((card, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '30px', border: '1px solid #D9E4F0' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#003366' }}>{card.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Callout */}
          <div
            style={{
              marginTop: '44px',
              padding: '24px 32px',
              borderRadius: '12px',
              background: '#F0F5FB',
              border: '1.5px solid #BFDBFE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.2rem', color: '#003366', marginBottom: '4px' }}>
                Plug Cash Leakages & Build Predictable Liquidity
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem' }}>
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
      <section className="section" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <CashLeakageCalculator
            onOpenBookingWithDetails={(turnover, challenge) => openBooking(turnover, challenge)}
          />
        </div>
      </section>

      {/* 5. THE THREE CORE OFFERINGS + PAID CONSULTANCY */}
      <section id="services" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge">High-Impact Solutions</div>
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
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '2px solid #003366',
                backgroundColor: '#F0F5FB',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px', backgroundColor: '#003366', color: '#fff', borderColor: '#003366' }}>
                  Pillar 01
                </div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  Virtual / Fractional CFO
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Institutional financial navigation without the ₹1 Crore executive payroll overhead.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>13-Week rolling cash flow forecasting models</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Plugging operational & vendor cash leakages</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Monthly Executive MIS & gross margin dashboards</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
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

            {/* Offering 2: Financial Planning & MIS */}
            <div
              className="glass-card"
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #D9E4F0',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px' }}>Pillar 02</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  Financial Planning & MIS
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Build real-time decision-making intelligence for your leadership team.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Monthly Executive MIS & gross margin dashboards</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Product-wise & segment-wise P&L visibility</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Annual budgeting, variance analysis & reforecasting</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>KPI dashboards & management reporting frameworks</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Financial Planning & MIS Advisory')}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Explore Financial Planning
              </button>
            </div>

            {/* Offering 3: Compliance & Strategic Advisory */}
            <div
              className="glass-card"
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #D9E4F0',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px' }}>Pillar 03</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  Compliance & Business Finance Advisory
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Strategic guidance on regulatory compliance, business structuring, and capital decisions.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>GST, TDS & statutory compliance structuring</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Bank CC/OD limit optimization & debt strategy</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Business expansion & capex feasibility analysis</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span>Cost rationalization & pricing strategy advisory</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Compliance & Business Finance Advisory')}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Explore Business Advisory
              </button>
            </div>
          </div>

          {/* Offering 4: Dedicated Highlight for Paid Consultancy */}
          <div
            className="glass-card"
            style={{
              padding: '36px 40px',
              border: '2px solid #005BB5',
              background: '#F0F5FB',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="badge" style={{ marginBottom: '10px', backgroundColor: '#003366', color: '#fff', borderColor: '#003366' }}>
                ⭐ Executive Advisory Service
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '10px', color: '#003366' }}>
                Paid 1-on-1 Strategic Financial Consultation
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Designed specifically for <strong>Business Owners</strong>, <strong>in-house corporate CFOs</strong>, and <strong>practicing Chartered Accountants (CAs)</strong> who need an institutional-grade second opinion, cash leakage audit review, or complex debt structuring roadmap.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#0F172A', fontWeight: 600 }}>
                <span>✓ 60-90 Min Intensive Private Session</span>
                <span>✓ Direct with Senior Advisory Leadership</span>
                <span>✓ Actionable 90-Day Roadmap</span>
                <span>✓ Strict NDA Protected</span>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#003366', fontWeight: 700, marginBottom: '8px' }}>
                LIMITED MONTHLY CONSULTATION SLOTS
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Paid 1-on-1 Strategic Financial Consultation')}
                className="btn btn-primary btn-lg"
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

      {/* 6. CORE VALUES SECTION (Directly from finkasha.com) */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge">Our Foundation</div>
            <h2 className="section-title">
              Why Choose Finkasha — <br />
              The Foundation of Everything We Do
            </h2>
            <p className="section-subtitle">
              At Finkasha, our core values are the cornerstone of our advisory practice, ensuring unmatched transparency, client empathy, and institutional excellence.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                title: 'Truthful Communication',
                desc: 'We communicate openly and honestly, building enduring trust through total transparency at every step.',
                icon: '💬',
              },
              {
                title: 'Client-First with Compassion',
                desc: 'We listen with empathy and tailor solutions that truly reflect each enterprise and promoter’s unique journey.',
                icon: '🤝',
              },
              {
                title: 'Success Through Collaboration',
                desc: 'We believe the best outcomes come from working together with our clients, in-house finance teams, and partners.',
                icon: '🌐',
              },
              {
                title: 'Excellence in Service',
                desc: 'We strive for exceptional analytical quality, institutional standards, and continuous improvement in everything we deliver.',
                icon: '⭐',
              },
              {
                title: 'Accountability in Action',
                desc: 'We take full ownership of our strategic recommendations, staying true to our commitments and measurable ROI.',
                icon: '🛡️',
              },
              {
                title: 'Educative Leadership',
                desc: 'Our mission is to help you “Learn once, benefit forever”—building enduring financial competence across your leadership.',
                icon: '📚',
              },
            ].map((val, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px', border: '1px solid #D9E4F0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: '#003366', marginBottom: '8px' }}>{val.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEFORE VS AFTER TRANSFORMATION MATRIX */}
      <TransformationMatrix onOpenBooking={() => openBooking()} />

      {/* 8. ROI & ECONOMICS: FRACTIONAL CFO VS CA VS FULL-TIME */}
      <ROICalculator onOpenBooking={() => openBooking()} />

      {/* 9. FOUNDER & PHILOSOPHY: "LEARN ONCE, BENEFIT FOREVER" */}
      <section className="section" style={{ backgroundColor: '#F0F5FB', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '48px 44px',
              border: '2px solid #BFDBFE',
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: '48px',
              alignItems: 'center',
              backgroundColor: '#ffffff',
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
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid #003366',
                  boxShadow: '0 8px 30px rgba(0, 51, 102, 0.15)',
                  backgroundColor: '#ffffff',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Finkasha Financial Advisory"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#003366', marginBottom: '4px' }}>
                Kamlesh Thakur
              </h3>
              <div style={{ color: '#005BB5', fontSize: '0.88rem', fontWeight: 700 }}>
                Founder & Director, Finkasha Services Private Limited
              </div>
              <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>
                kamlesh@finkasha.com | +91 9970208927
              </div>
            </div>

            {/* Philosophy Copy */}
            <div>
              <div className="badge" style={{ marginBottom: '14px' }}>
                Institutional Philosophy
              </div>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '16px', lineHeight: '1.3', color: '#003366' }}>
                &ldquo;Learn Once, Benefit Forever.&rdquo;
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.75', marginBottom: '18px' }}>
                We believe the biggest tragedy in Indian business is when ambitious founders build a ₹20 Cr to ₹50 Cr enterprise through sheer grit, only to see their margins vanish into cash leakage and chaotic working capital traps.
              </p>
              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '24px' }}>
                Traditional accounting only records history. At Finkasha, our mission is educative and strategic: we empower you with the forward-looking financial architecture, cash forecasting disciplines, and institutional governance required to build an enduring, profitable corporate powerhouse.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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

      {/* 10. FAQ & OBJECTION HANDLING */}
      <FAQSection />

      {/* 11. FINAL CONVERSION BANNER */}
      <section
        style={{
          padding: '75px 0 90px 0',
          position: 'relative',
          backgroundColor: '#002B54',
          color: '#ffffff',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge" style={{ marginBottom: '16px', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#93C5FD', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            High-Converting Enterprise Advisory
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              maxWidth: '850px',
              margin: '0 auto 18px auto',
              lineHeight: '1.2',
              color: '#ffffff',
            }}
          >
            Ready to Unlock Total Financial Clarity & Plug Cash Leakages?
          </h2>
          <p
            style={{
              color: '#CBD5E1',
              fontSize: '1.1rem',
              maxWidth: '650px',
              margin: '0 auto 34px auto',
              lineHeight: '1.6',
            }}
          >
            Schedule your confidential strategic session with Finkasha today. Protected by institutional non-disclosure standards.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openBooking()}
              className="btn btn-secondary btn-lg"
              style={{ backgroundColor: '#ffffff', color: '#003366', border: 'none', fontWeight: 800 }}
            >
              <span>Book Your Financial Consultation</span>
              <span>⚡</span>
            </button>
            <a
              href="https://wa.me/919970208927?text=Hello%20Finkasha,%20I%20would%20like%20to%20inquire%20about%20Fractional%20CFO%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: '#ffffff', backgroundColor: 'transparent' }}
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
