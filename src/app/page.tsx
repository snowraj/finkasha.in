'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CashLeakageCalculator from '@/components/CashLeakageCalculator';
import TransformationMatrix from '@/components/TransformationMatrix';
import CaseStudies from '@/components/CaseStudies';

import FAQSection from '@/components/FAQSection';
import BookingModal from '@/components/BookingModal';
import styles from './page.module.css';

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
        className={styles.hero}
        style={{
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
              <span>Financial Management & CFO Support for ₹5 Cr–₹50 Cr Businesses</span>
            </div>
          </div>

          {/* Core Tagline matching finkasha.com */}
          <div className={styles.heroTagline} style={{ fontWeight: 700, color: '#005BB5', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            UNDERSTAND YOUR CASH. GROW WITH CLARITY.
          </div>

          {/* Problem-Agitate Headline */}
          <h1
            className={styles.heroTitle}
            style={{
              fontWeight: 800,
              lineHeight: 1.18,
              maxWidth: '1000px',
              margin: '0 auto 22px auto',
              letterSpacing: '-0.025em',
              color: '#003366',
            }}
          >
            Know Where Your Cash Is Going.{' '}
            <br className={styles.heroBreak} />
            <span style={{ color: '#005BB5' }}>Make Better Decisions.</span> Grow With More Control.
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
            Finkasha helps manufacturing, trading and service businesses understand their numbers, manage cash better, plan ahead and make important business decisions with more confidence.
          </p>

          {/* Dual Action CTAs */}
          <div
            className={styles.heroActions}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={() => openBooking()}
              className="btn btn-primary btn-lg"
            >
              <span>Book 1 on 1 Executive Finance Session</span>
              <span style={{ fontSize: '1.1rem' }}>⚡</span>
            </button>

            <a
              href="#diagnostic"
              className="btn btn-secondary btn-lg"
            >
              <span>Check Your Business Financial Health</span>
              <span>↓</span>
            </a>
          </div>

          {/* Track Record & Proof Points Banner */}
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              background: '#ffffff',
              border: '1.5px solid #D9E4F0',
              borderRadius: '16px',
              padding: '24px 20px',
              boxShadow: '0 8px 30px rgba(0, 51, 102, 0.08)',
            }}
            className={styles.statsStrip}
          >
            <div>
              <div className={styles.statsValue} style={{ fontWeight: 800, color: '#003366', fontFamily: 'var(--font-heading)' }}>
                40+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Organisations
              </div>
            </div>
            <div>
              <div className={styles.statsValue} style={{ fontWeight: 800, color: '#005BB5', fontFamily: 'var(--font-heading)' }}>
                350+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Individual Business Owners
              </div>
            </div>
            <div>
              <div className={styles.statsValue} style={{ fontWeight: 800, color: '#007ACC', fontFamily: 'var(--font-heading)' }}>
                ₹500 Cr+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Turnover Analysed
              </div>
            </div>
            <div>
              <div className={styles.statsValue} style={{ fontWeight: 800, color: '#059669', fontFamily: 'var(--font-heading)' }}>
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
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.84rem', color: '#003366', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            BUSINESSES WE WORK WITH
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: '24px', fontSize: '1rem', color: '#334155', fontWeight: 600 }}>
            <span>Manufacturing</span>
            <span style={{ color: '#94A3B8' }}>•</span>
            <span>Trading & Distribution</span>
            <span style={{ color: '#94A3B8' }}>•</span>
            <span>B2B Services</span>
            <span style={{ color: '#94A3B8' }}>•</span>
            <span>Business Owners & Finance Teams</span>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS & THE HIDDEN TRAPS (PAS Framework) */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge badge-gold">WHY CASH STILL FEELS TIGHT</div>
            <h2 className="section-title">
              Why ₹5 Cr–₹50 Cr Businesses Are Always Short Of Cash <br />
              <span style={{ color: '#DC2626' }}>Even When Sales Are Growing</span>
            </h2>
            <p className="section-subtitle">
              As your business grows, more cash gets blocked in stocks, customer payments, salaries, suppliers and expansion. Sales may be increasing, but if cash is not planned properly, the business faces same problem every month.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: '💸',
                title: 'Sales Are Growing, But Cash Is Still Low',
                desc: 'Money may be blocked in customer payments, stock or day-to-day expenses. Sales look healthy, but there may still not be enough cash available at the end of the month.',
              },
              {
                icon: '📄',
                title: 'You Have Reports. But Do They Help You Decide?',
                desc: 'Your accounts tell you what has already happened. But you also need to know what is changing, what needs attention and what may happen next.',
              },
              {
                icon: '💬',
                title: 'Too Many Opinions. Not Enough Clear Answers.',
                desc: 'Different people may give different advice. What you really need is a clear view of your own numbers before deciding what to do.',
              },
              {
                icon: '⚖️',
                title: 'Financial Gaps Keep Creating Unnecessary Stress',
                desc: 'Missed reconciliations, delayed payments, unclear records or unexpected dues can turn into bigger problems if they are not spotted early.',
              },
              {
                icon: '🛑',
                title: 'Big Decisions Are Still Based On Gut Feel',
                desc: 'Hiring more people, buying machinery, taking a loan or opening a new location are big decisions. You should know what they will do to your cash before you commit.',
              },
              {
                icon: '🛡️',
                title: 'You Want To Grow. But How Much Can The Business Afford?',
                desc: 'Expansion needs money before it starts giving money back. You need to know how much cash will be required, where it will come from and whether too much money will get blocked in the process.',
              },
            ].map((card, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '30px', border: '1px solid #D9E4F0', textAlign: 'center' }}>
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
              padding: '32px 24px',
              borderRadius: '12px',
              background: '#F0F5FB',
              border: '1.5px solid #BFDBFE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '20px',
            }}
          >
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#003366', marginBottom: '4px' }}>
                Know What Is Blocking Your Cash
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                Finkasha helps you understand where your money is blocked, what needs attention and what to plan for before making your next big business decision.
              </p>
            </div>
            <button onClick={() => openBooking()} className="btn btn-primary">
              Book 1 on 1 Executive Finance Session →
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
            <div className="badge">HOW FINKASHA HELPS</div>
            <h2 className="section-title">Better Control Of Your Business Finances</h2>
            <p className="section-subtitle">
              For ₹5 Cr–₹50 Cr manufacturing, trading and service businesses that want clearer numbers, better cash control and more confidence while making important business decisions.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '32px' }}>
            {/* Offering 1: Virtual CFO */}
            <div
              id="virtual-cfo"
              className={`glass-card ${styles.serviceCard}`}
              style={{
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
                  Virtual CFO & Financial Management
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Ongoing financial review and guidance to help you understand where your cash is going, what needs attention and what decisions should be planned ahead.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Cash Flow Management</strong> — understand expected money coming in, payments going out and periods when cash may be low.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Working Capital Review</strong> — identify money blocked, stuck or tied up in customer payments, stock and day-to-day operations.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Collections & Payment Planning</strong> — improve the way customer collections, supplier payments and upcoming commitments are managed.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Borrowing & Debt Review</strong> — understand existing loans, CC/OD utilisation, repayment commitments and future borrowing requirements.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Cost & Margin Review</strong> — identify where costs are increasing and how they may be affecting the profitability of the business.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Monthly Management Review</strong> — regularly discuss what changed, why it changed, what needs attention and what action should come next.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Virtual / Fractional CFO Retainer')}
                className="btn btn-primary"
                style={{ width: '100%', whiteSpace: 'normal' }}
              >
                Explore Virtual CFO & Financial Management →
              </button>
            </div>

            {/* Offering 2: Financial Planning & MIS */}
            <div
              id="financial-analysis"
              className={`glass-card ${styles.serviceCard}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #D9E4F0',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px' }}>Pillar 02</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  Financial Analysis, Dashboards & Planning
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Turn your business numbers into clear reports, future plans and better decisions.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Management Dashboards</strong> — see sales, margins, cash, receivables, expenses and key business numbers in one place.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Business & Profitability Analysis</strong> — understand which products, customers, branches or business areas are performing well.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Budgeting</strong> — plan income, expenses and cash requirements before the year or quarter begins.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Forecasting</strong> — estimate what sales, costs and cash requirements may look like in the coming months.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Financial Modelling</strong> — test important business decisions such as expansion, machinery, hiring, borrowing or pricing changes before committing money.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Budget vs Actual Review</strong> — compare what you planned with what actually happened and understand the reason for the difference.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Financial Planning & MIS Advisory')}
                className="btn btn-secondary"
                style={{ width: '100%', whiteSpace: 'normal' }}
              >
                Explore Financial Analysis & Planning →
              </button>
            </div>

            {/* Offering 3: Compliance & Strategic Advisory */}
            <div
              id="growth-planning"
              className={`glass-card ${styles.serviceCard}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #D9E4F0',
              }}
            >
              <div>
                <div className="badge" style={{ marginBottom: '14px' }}>Pillar 03</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  Business Growth & Expansion Planning
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Understand how much money your next stage of growth may need, where that money can come from and how expansion may affect the rest of the business.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#0F172A', marginBottom: '28px' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Expansion Planning</strong> — estimate the money required for a new branch, factory, machinery, warehouse, capacity increase or other major growth plan.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Funding Planning</strong> — understand how much can come from internal cash, loans, CC/OD or other business funding sources.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Working Capital Impact</strong> — estimate how much additional money may get blocked in stock, customer payments and day-to-day operations as the business grows.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>CapEx & Investment Review</strong> — understand the financial impact of buying machinery, increasing capacity or making other major business investments.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Break-Even & Scenario Analysis</strong> — understand what sales, margins and cash flow may be required for the expansion to support itself.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                    <span><strong>Growth Decision Review</strong> — compare different options before committing money and understand how each may affect cash, costs and profitability.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Compliance & Business Finance Advisory')}
                className="btn btn-secondary"
                style={{ width: '100%', whiteSpace: 'normal' }}
              >
                Explore Business Growth & Expansion Planning →
              </button>
            </div>
          </div>

          {/* Offering 4: Dedicated Highlight for Paid Consultancy */}
          <div
            id="executive-finance-session"
            className={`glass-card ${styles.sessionCard}`}
            style={{
              border: '2px solid #005BB5',
              background: '#F0F5FB',
            }}
          >
            <div>
              <div className="badge" style={{ marginBottom: '10px', backgroundColor: '#003366', color: '#fff', borderColor: '#003366' }}>
                1 ON 1 EXECUTIVE FINANCE SESSION
              </div>
              <h3 className={styles.sessionTitle} style={{ marginBottom: '10px', color: '#003366' }}>
                Talk Through The Financial Decisions That Matter To Your Business
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                A focused 60–90-minute discussion to understand your current financial concerns, where cash may be blocked, and what deserves your attention before making the next important business decision.
              </p>
              <div className={styles.sessionBenefits} style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 600 }}>
                <span>✓ 60–90-Minute 1 on 1 Session</span>
                <span>✓ Clear Financial Areas To Focus On Next</span>
                <span>✓ Confidential Discussion</span>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#003366', fontWeight: 700, marginBottom: '8px' }}>
                START WITH A 1 ON 1 DISCUSSION
              </div>
              <button
                onClick={() => openBooking('₹20 Cr - ₹50 Cr', 'Paid 1-on-1 Strategic Financial Consultation')}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', padding: '16px 28px', whiteSpace: 'normal' }}
              >
                Book 1 on 1 Executive Finance Session →
              </button>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#003366', marginTop: '16px' }}>
                ₹2,000 + GST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES SECTION (Directly from finkasha.com) */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge">WHAT YOU CAN EXPECT FROM US</div>
            <h2 className="section-title">
              Why Business Owners Choose To Work With Finkasha
            </h2>
            <p className="section-subtitle">
              We believe good financial advice should be clear, practical and easy to understand. Here is what you can expect when you work with us.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                title: 'Clear & Honest Communication',
                desc: 'We explain things clearly, tell you what we see, and avoid hiding behind complicated financial language.',
                icon: '💬',
              },
              {
                title: 'Your Business Comes First',
                desc: 'We first understand your business, your concerns and your goals before suggesting what needs to be done.',
                icon: '🤝',
              },
              {
                title: 'We Work With Your Existing Team',
                desc: 'Your accountant, CA and finance team continue doing their work. We work alongside them to help management understand and use the numbers better.',
                icon: '🌐',
              },
              {
                title: 'Quality In Every Review',
                desc: 'We take the time to review the numbers properly, ask the right questions and give you information that is useful for decision-making.',
                icon: '⭐',
              },
              {
                title: 'We Take Ownership Of Our Work',
                desc: 'If we raise an issue or recommend something, we explain why it matters and continue reviewing it with you.',
                icon: '🛡️',
              },
              {
                title: 'We Help You Understand, Not Just Advise',
                desc: 'Our goal is to help you understand your own business numbers better, so you can make more informed decisions even beyond our meetings.',
                icon: '📚',
              },
            ].map((val, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px', border: '1px solid #D9E4F0', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: '#003366', marginBottom: '8px' }}>{val.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEFORE VS AFTER TRANSFORMATION MATRIX */}
      <TransformationMatrix />

      {/* 8. CASE STUDIES */}
      <CaseStudies onOpenBooking={() => openBooking()} />

      {/* 9. FOUNDER & PHILOSOPHY: "LEARN ONCE, BENEFIT FOREVER" */}
      <section className="section" style={{ backgroundColor: '#F0F5FB', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div
            className={`glass-card ${styles.approachCard}`}
            style={{
              border: '2px solid #BFDBFE',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Image / Graphic / Identity */}
            <div style={{ textAlign: 'center' }}>
              <div
                className={styles.approachLogo}
                style={{
                  position: 'relative',
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

            </div>

            {/* Philosophy Copy */}
            <div>
              <div className="badge" style={{ marginBottom: '14px' }}>
                OUR APPROACH
              </div>
              <h2 className={styles.approachTitle} style={{ marginBottom: '16px', lineHeight: '1.3', color: '#003366' }}>
                &ldquo;Learn Once, Benefit Forever.&rdquo;
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.75', marginBottom: '18px' }}>
                Business owners work hard to grow their companies. But as the business gets bigger, money can get blocked in customer payments, stock, rising costs and day-to-day operations.
              </p>
              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '18px' }}>
                Finkasha helps you go beyond simply looking at past numbers. We help you understand what the numbers mean, what needs attention, and what you should plan for next.
              </p>
              <p style={{ color: '#003366', fontSize: '0.95rem', fontWeight: 600, lineHeight: '1.75', marginBottom: '24px' }}>
                Our goal is simple: help business owners understand their finances better so they can make better decisions with greater clarity and confidence.
              </p>

              <div className={styles.approachActions} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => openBooking()} className="btn btn-primary" style={{ maxWidth: '100%', whiteSpace: 'normal' }}>
                  Explore 1 on 1 Executive Finance Session →
                </button>
                <Link href="/services" className="btn btn-secondary" style={{ maxWidth: '100%', whiteSpace: 'normal' }}>
                  Explore Finkasha Services →
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
        className={styles.finalBanner}
        style={{
          position: 'relative',
          backgroundColor: '#002B54',
          color: '#ffffff',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge" style={{ marginBottom: '16px', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#93C5FD', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            READY TO TALK?
          </div>
          <h2
            className={styles.finalTitle}
            style={{
              maxWidth: '850px',
              margin: '0 auto 18px auto',
              lineHeight: '1.2',
              color: '#ffffff',
            }}
          >
            Let’s Understand What Is Happening With Your Cash And Numbers.
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
            Talk through your current financial concerns, where money may be blocked, and what deserves your attention before the next important business decision.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openBooking()}
              className="btn btn-secondary btn-lg"
              style={{ maxWidth: '100%', whiteSpace: 'normal', backgroundColor: '#ffffff', color: '#003366', border: 'none', fontWeight: 800 }}
            >
              Book 1 on 1 Executive Finance Session →
            </button>
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

    </div>
  );
}
