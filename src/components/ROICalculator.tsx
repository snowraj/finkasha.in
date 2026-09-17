'use client';

import React from 'react';

interface ROICalculatorProps {
  onOpenBooking: () => void;
}

export default function ROICalculator({ onOpenBooking }: ROICalculatorProps) {
  const comparisonTiers = [
    {
      title: 'Traditional CA / Bookkeeper',
      badge: 'Retrospective Compliance',
      cost: '₹25,000 – ₹50,000 / month',
      focus: 'Past-Focused (Looking in Rearview Mirror)',
      features: [
        'Routine GST, TDS & Income Tax Filings',
        'Bookkeeping & Voucher Verification',
        'Annual Balance Sheet & Compliance Audit',
        '❌ No rolling cash flow forecasting',
        '❌ No cash leakage diagnostics',
        '❌ No strategic board-level participation',
        '❌ No working capital restructuring',
      ],
      highlight: false,
      ctaText: 'Insufficient for ₹20 Cr – ₹50 Cr+ Growth',
    },
    {
      title: 'Finkasha Fractional CFO',
      badge: '⭐ Institutional ROI Champion',
      cost: '₹95,000 – ₹2,50,000 / month',
      focus: 'Forward-Looking (Strategic Growth & Wealth)',
      features: [
        'Weekly & 13-Week Rolling Cash Flow Models',
        'Proactive Cash Leakage Diagnostic & Plugging',
        'Monthly Executive MIS & Gross Margin Audits',
        'Debt Refinancing & Working Capital Optimization',
        'Promoter Net Worth & Treasury Allocation',
        'Direct Synergy with your In-House Accounts & CAs',
        'Immediate Positive ROI within 90 Days',
      ],
      highlight: true,
      ctaText: 'Book Strategy Session',
    },
    {
      title: 'Full-Time In-House Tier-1 CFO',
      badge: 'High Enterprise Overhead',
      cost: '₹60 Lakh – ₹1.2 Crore / year',
      focus: 'High Fixed Cost Burden',
      features: [
        'Full-time physical presence in office',
        'Large corporate compensation + ESOP demands',
        'Lengthy 4-6 month executive hiring cycle',
        'Significant severance & retention risks',
        'Heavy overhead for ₹5 Cr – ₹50 Cr companies',
        'Overqualified for mid-market operational scale',
        'High fixed risk during industry downturns',
      ],
      highlight: false,
      ctaText: 'Overkill for ₹5 Cr – ₹50 Cr Turnover',
    },
  ];

  return (
    <section id="comparison" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge">Economics & Strategic ROI</div>
          <h2 className="section-title">
            The Smart Executive Solution: <br />
            <span style={{ color: '#005BB5' }}>CFO-Level Leadership at 1/5th the Cost</span>
          </h2>
          <p className="section-subtitle">
            Why top ₹5 Cr – ₹50 Cr+ enterprises choose Finkasha Fractional CFO services over expensive full-time hires or basic retrospective accountants.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {comparisonTiers.map((tier, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.highlight
                  ? '2px solid #003366'
                  : '1px solid #E2E8F0',
                backgroundColor: tier.highlight ? '#F0F5FB' : '#ffffff',
                boxShadow: tier.highlight
                  ? '0 12px 36px rgba(0, 51, 102, 0.12)'
                  : '0 4px 16px rgba(0, 0, 0, 0.04)',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#003366',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST RECOMMENDED FOR ₹5-50 CR
                </div>
              )}

              <div>
                <span
                  className="badge"
                  style={{
                    fontSize: '0.72rem',
                    marginBottom: '14px',
                    backgroundColor: tier.highlight ? '#EBF3FA' : '#F1F5F9',
                    borderColor: tier.highlight ? '#BFDBFE' : '#CBD5E1',
                    color: tier.highlight ? '#003366' : '#475569',
                  }}
                >
                  {tier.badge}
                </span>

                <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#003366' }}>
                  {tier.title}
                </h3>

                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: tier.highlight ? '#003366' : '#334155',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {tier.cost}
                </div>

                <div
                  style={{
                    fontSize: '0.84rem',
                    color: tier.highlight ? '#005BB5' : '#64748B',
                    fontWeight: 600,
                    marginBottom: '22px',
                    borderBottom: '1px solid #E2E8F0',
                    paddingBottom: '14px',
                  }}
                >
                  {tier.focus}
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '0.88rem',
                    marginBottom: '32px',
                  }}
                >
                  {tier.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: feat.startsWith('❌') ? '#64748B' : '#0F172A',
                        lineHeight: '1.5',
                      }}
                    >
                      {!feat.startsWith('❌') && (
                        <span style={{ color: '#005BB5', fontWeight: 700 }}>✓</span>
                      )}
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {tier.highlight ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px' }}
                  >
                    <span>Book Strategy Session</span>
                    <span>⚡</span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '14px', fontSize: '0.88rem' }}
                  >
                    Discuss Fit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
