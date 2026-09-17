'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('Fractional / Virtual CFO Retainer');

  const handleOpenBooking = (goal: string) => {
    setSelectedGoal(goal);
    setBookingOpen(true);
  };

  const services = [
    {
      id: 'fractional-cfo',
      badge: 'Core Enterprise Offering',
      title: 'Fractional / Virtual CFO Leadership',
      subtitle: 'Board-level strategic financial navigation for ₹5 Cr – ₹50 Cr+ enterprises.',
      description:
        'Get the strategic horsepower of a Fortune-500 level Chief Financial Officer tailored to the operational agility of middle-market enterprises, at a fraction of full-time cost.',
      deliverables: [
        'Rolling 13-week and 3-year cash flow forecasting models',
        'Monthly Executive MIS cockpits with gross margin & EBITDA analysis',
        'Working capital cycle rationalization and debt restructuring advisory',
        'Commercial contract reviews, pricing strategy, and vendor terms optimization',
        'Direct leadership & mentorship for your in-house accounting & finance team',
      ],
      forWhom: 'Founders, Managing Directors, and CEOs in Manufacturing, Trading, and Services.',
    },
    {
      id: 'cash-leakage',
      badge: 'Diagnostic & Remediation',
      title: 'Cash Flow Management & Cash Leakage Audits',
      subtitle: 'Systematically plug hidden operational bleed and unlock trapped liquidity.',
      description:
        'Identify precisely where cash is slipping out of your enterprise—whether through runaway debtor collection cycles (DSO), unmonitored inventory drag, or unnoticed margin slippages.',
      deliverables: [
        'Comprehensive 360° Cash Leakage Diagnostic & forensic ledger review',
        'Debtor aging & collections recovery enforcement framework',
        'Operating expense (OpEx) rationalization and overhead leakage plugging',
        'Bank CC/OD limit optimization and interest cost reduction',
        'Cash conversion cycle (CCC) compression from 90+ days down to under 45 days',
      ],
      forWhom: 'Enterprises feeling constant cash crunches despite strong book sales & paper profits.',
    },
    {
      id: 'paid-consultancy',
      badge: 'High-Impact Executive Advisory',
      title: 'Paid 1-on-1 Strategic Financial Consultations',
      subtitle: 'Direct high-octane diagnostic session for business owners, CFOs, and practicing CAs.',
      description:
        'A dedicated 60-to-90 minute private executive session with senior Finkasha financial leadership to dissect complex financial deadlocks, evaluate capital structuring, or obtain an institutional second opinion.',
      deliverables: [
        'Pre-consultation financial data & operational diagnostic review',
        'Confidential 1-on-1 strategy deep-dive session',
        'Independent second opinion on debt restructuring, expansion, or capex models',
        'Concrete 90-day actionable roadmap with immediate quick-win milestones',
        'Summary executive diagnostic brief & action memo',
      ],
      forWhom: 'Founders, existing corporate CFOs, and practicing Chartered Accountants seeking strategic clarity.',
    },
    {
      id: 'cfo-ca-advisory',
      badge: 'Professional Collaboration',
      title: 'Advisory & Strategic Support for CFOs & CAs',
      subtitle: 'Institutional backup and high-level financial architecture for existing finance teams.',
      description:
        'We collaborate with corporate CFOs and practicing CAs who want to deliver forward-looking financial forecasting, risk modeling, and strategic value to their boards without expanding internal payroll.',
      deliverables: [
        'Advanced financial modeling and forecasting toolkits',
        'Complex scenario analysis (inflation, supply chain shocks, currency volatility)',
        'Strategic second opinions on business expansion, capital structuring, and cost optimization',
        'Assistance in presenting institutional-grade decks to banks, boards, and investors',
      ],
      forWhom: 'Corporate CFOs and Chartered Accountants managing fast-growing mid-market enterprises.',
    },
    {
      id: 'financial-planning',
      badge: 'Intelligence & Reporting',
      title: 'Financial Planning & MIS Reporting',
      subtitle: 'Build real-time decision-making intelligence for your leadership team.',
      description:
        'Equip your management with forward-looking financial dashboards, budgeting frameworks, and granular P&L visibility that drive confident, data-backed decisions at every level.',
      deliverables: [
        'Monthly Executive MIS cockpits with gross margin & EBITDA analysis',
        'Product-wise and segment-wise profitability dashboards',
        'Annual budgeting, quarterly variance analysis & dynamic reforecasting',
        'KPI dashboards, management reporting, and board-ready financial packs',
        'Cost-center accounting setup and overhead allocation frameworks',
      ],
      forWhom: 'Founders, MDs, and finance teams seeking real-time visibility and structured financial reporting.',
    },
    {
      id: 'compliance-advisory',
      badge: 'Compliance & Structuring',
      title: 'Compliance & Business Finance Advisory',
      subtitle: 'Strategic guidance on regulatory compliance, business structuring, and capital decisions.',
      description:
        'Navigate India\'s regulatory landscape with confidence. We provide proactive structuring advice on GST, TDS, working capital limits, and business expansion to minimize risk and maximize efficiency.',
      deliverables: [
        'GST, TDS & statutory compliance structuring and calendar management',
        'Bank CC/OD limit optimization, interest cost reduction advisory',
        'Business expansion, capex feasibility, and scenario analysis',
        'Pricing strategy, vendor terms optimization & cost rationalization',
        'Commercial contract reviews and risk-weighted financial structuring',
      ],
      forWhom: 'Enterprises seeking proactive compliance management and strategic capital structuring guidance.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '60px 0 100px 0' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '32px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#00D09C',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            ← Back to Finkasha Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
            Institutional Financial Architecture
          </div>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            Strategic Advisory Solutions for <br />
            <span className="text-gradient">₹5 Cr – ₹50 Cr+ Enterprises</span>
          </h1>
          <p className="section-subtitle">
            From fractional executive CFO leadership and working capital optimization to financial planning and compliance advisory, discover our institutional suites designed to fuel sustainable growth.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="glass-card"
              style={{
                padding: '40px',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div>
                <span className="badge" style={{ fontSize: '0.75rem', marginBottom: '14px' }}>
                  {srv.badge}
                </span>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '10px', color: '#fff' }}>
                  {srv.title}
                </h2>
                <h3 style={{ fontSize: '1.05rem', color: '#00D09C', fontWeight: 600, marginBottom: '16px' }}>
                  {srv.subtitle}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {srv.description}
                </p>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: '#CBD5E1',
                  }}
                >
                  <strong style={{ color: '#FBBF24' }}>Ideal For: </strong> {srv.forWhom}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(11, 18, 34, 0.85)',
                  border: '1px solid rgba(0, 208, 156, 0.25)',
                  borderRadius: '14px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Key Deliverables & Scope
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                    {srv.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#E2E8F0' }}>
                        <span style={{ color: '#00D09C' }}>✓</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <button
                    onClick={() => handleOpenBooking(srv.title)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Book Consultation for This Service</span>
                    <span>⚡</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialChallenge={selectedGoal}
      />
    </div>
  );
}
