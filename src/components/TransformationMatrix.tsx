'use client';

import React from 'react';

interface TransformationMatrixProps {
  onOpenBooking: () => void;
}

export default function TransformationMatrix({ onOpenBooking }: TransformationMatrixProps) {
  const comparisonItems = [
    {
      domain: 'Strategic Leadership & Vision',
      before: 'Absence of structured financial brainstorming. Relying on gut feel, informal friendly advice, or social media quick-fixes.',
      after: 'Institutional-grade Fractional CFO advisory with forward-looking 3-year strategic planning and cash flow models.',
    },
    {
      domain: 'Cash Flow Visibility',
      before: 'Trapped in unpredictable cash shortages despite showing paper profits. High stress during monthly vendor & salary cycles.',
      after: 'Rolling 13-week rolling cash flow forecasts with daily/weekly liquidity visibility and early warning indicators.',
    },
    {
      domain: 'Cash Leakage & Cost Control',
      before: 'Undetected operational leakage, runaway debtor DSO (70-100+ days), and margin erosion draining bank lines.',
      after: 'Rigorous leak-plugging protocols, debtor collection frameworks, and direct cost-center rationalization.',
    },
    {
      domain: 'Compliance & Tax Architecture',
      before: 'Accountants overwhelmed with retroactive GST/TDS filings, fearing sudden regulatory notices or penalty shocks.',
      after: 'Proactive tax structuring, zero-delay statutory calendar, and institutional compliance reviews.',
    },
    {
      domain: 'Promoter Wealth Integration',
      before: 'Business wealth entangled with personal finances; lack of structured asset allocation and portfolio risk audits.',
      after: 'Clear firewall between enterprise treasury and personal wealth with institutional mutual fund & equity allocation.',
    },
  ];

  return (
    <section id="transformation" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge badge-gold">The Transformation Matrix</div>
          <h2 className="section-title">
            The Difference Between <span style={{ color: '#F87171' }}>Financial Anxiety</span> and{' '}
            <span className="text-gradient">Total Clarity</span>
          </h2>
          <p className="section-subtitle">
            Most ₹5 Cr – ₹50 Cr+ enterprises don&apos;t fail from lack of sales—they falter due to poor financial architecture and unmonitored cash bleed. Here is how Finkasha bridges that chasm.
          </p>
        </div>

        {/* Matrix Comparison Table / Grid */}
        <div
          style={{
            background: 'rgba(11, 18, 34, 0.7)',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            marginBottom: '48px',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
              padding: '20px 28px',
              fontWeight: 700,
              fontSize: '0.92rem',
              letterSpacing: '0.04em',
            }}
            className="matrix-row matrix-header"
          >
            <div style={{ color: '#94A3B8' }}>OPERATIONAL PILLAR</div>
            <div style={{ color: '#F87171', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✕ Traditional Reactive Accounting</span>
            </div>
            <div style={{ color: '#00D09C', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✓ Finkasha Virtual CFO System</span>
            </div>
          </div>

          {/* Body Rows */}
          {comparisonItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                padding: '22px 28px',
                borderBottom:
                  idx === comparisonItems.length - 1 ? 'none' : '1px solid rgba(148, 163, 184, 0.08)',
                fontSize: '0.92rem',
                backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
              }}
              className="matrix-row"
            >
              <div style={{ fontWeight: 600, color: '#E2E8F0', display: 'flex', alignItems: 'center' }}>
                {item.domain}
              </div>
              <div style={{ color: '#94A3B8', paddingRight: '20px', lineHeight: '1.6' }}>
                {item.before}
              </div>
              <div style={{ color: '#F8FAFC', paddingRight: '10px', lineHeight: '1.6', fontWeight: 500 }}>
                {item.after}
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Stories / ICP Proof */}
        <div className="grid-3" style={{ marginTop: '40px' }}>
          {/* Manufacturing Story */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge" style={{ fontSize: '0.72rem' }}>Manufacturing</span>
              <span style={{ color: '#00D09C', fontWeight: 700, fontSize: '0.85rem' }}>₹32 Cr Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: '#fff' }}>
              Auto Component Manufacturer
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '18px' }}>
              Trapped with ₹4.2 Cr in delayed receivables and high overdraft interest. Finkasha instituted a rolling 13-week forecast, renegotiated vendor payment terms, and recovered ₹68L in working capital within 90 days.
            </p>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', fontSize: '0.8rem', color: '#38BDF8' }}>
              Result: 38% reduction in financing costs + 100% on-time supplier cycles
            </div>
          </div>

          {/* Trading & Export Story */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>Trading & Export</span>
              <span style={{ color: '#FBBF24', fontWeight: 700, fontSize: '0.85rem' }}>₹48 Cr Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: '#fff' }}>
              Chemical Import-Exporter
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '18px' }}>
              Rapid turnover growth masked 2.8% unbilled currency & freight leakage. Finkasha installed weekly product-line margin accounting and plugged ₹52L annual margin leakage.
            </p>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', fontSize: '0.8rem', color: '#00D09C' }}>
              Result: Net margin expansion from 6.2% to 8.9%
            </div>
          </div>

          {/* Services & Enterprise Story */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge" style={{ fontSize: '0.72rem' }}>Services & Tech</span>
              <span style={{ color: '#00D09C', fontWeight: 700, fontSize: '0.85rem' }}>₹22 Cr Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: '#fff' }}>
              Enterprise Logistics Provider
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '18px' }}>
              Founder overwhelmed with day-to-day billing approvals, tax queries, and banking limits. Finkasha deployed a full Virtual CFO cockpit, freeing the founder to focus 100% on business development.
            </p>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', fontSize: '0.8rem', color: '#38BDF8' }}>
              Result: 15+ hours/week saved for Founder + ₹1.4 Cr debt refinanced at lower rate
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 208, 156, 0.08), rgba(6, 182, 212, 0.08))',
            border: '1px solid rgba(0, 208, 156, 0.25)',
            borderRadius: '16px',
            padding: '32px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            Ready to Shift from Financial Anxiety to Predictable Growth?
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '20px' }}>
            Reserve a confidential strategic consultation with Finkasha financial leadership today.
          </p>
          <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
            <span>Book Your Strategic Financial Consultation</span>
            <span>⚡</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          :global(.matrix-header) {
            display: none !important;
          }
          :global(.matrix-row) {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 20px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
