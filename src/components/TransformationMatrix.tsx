'use client';

import React from 'react';

export default function TransformationMatrix() {
  const comparisonItems = [
    {
      domain: 'Business Decisions',
      before: 'Decisions often depend on instinct and incomplete information.',
      after: 'Decisions are reviewed along with their financial impact.',
    },
    {
      domain: 'Cash Flow',
      before: "You know today's bank balance, but not what may be needed next.",
      after: 'See expected collections, payments and upcoming cash requirements.',
    },
    {
      domain: 'Blocked Cash',
      before: 'Money may remain stuck in customers, stock or operations.',
      after: 'Regularly identify where cash is blocked or being used inefficiently.',
    },
    {
      domain: 'Business Performance',
      before: 'Reports mainly tell you what already happened.',
      after: 'Dashboards and analysis show what is changing and what needs attention.',
    },
    {
      domain: 'Future Planning',
      before: 'Growth decisions may be made without knowing the full cash requirement.',
      after: 'Budgets, forecasts and financial models help you plan before committing money.',
    },
  ];

  return (
    <section id="transformation" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge badge-gold">THE DIFFERENCE CLEAR FINANCIAL MANAGEMENT CAN MAKE</div>
          <h2 className="section-title">
            From <span style={{ color: '#DC2626' }}>Financial Confusion</span> To{' '}
            <span style={{ color: '#003366' }}>Better Business Decisions</span>
          </h2>
          <p className="section-subtitle">
            As a business grows, managing cash, costs, collections and future plans becomes more difficult. Finkasha helps bring these numbers together so management can understand what needs attention and plan the next move with more clarity.
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #D9E4F0',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 51, 102, 0.07)',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
              background: '#002B54',
              color: '#ffffff',
              padding: '18px 28px',
              fontWeight: 700,
              fontSize: '0.92rem',
              letterSpacing: '0.04em',
            }}
            className="matrix-row matrix-header"
          >
            <div style={{ color: '#93C5FD' }}>Area</div>
            <div style={{ color: '#6EE7B7', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>With Finkasha</span>
            </div>
            <div style={{ color: '#FCA5A5', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Without Structured Financial Management</span>
            </div>
          </div>

          {/* Body Rows */}
          {comparisonItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                padding: '20px 28px',
                borderBottom:
                  idx === comparisonItems.length - 1 ? 'none' : '1px solid #E2E8F0',
                fontSize: '0.92rem',
                backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F0F5FB',
              }}
              className="matrix-row"
            >
              <div style={{ fontWeight: 700, color: '#003366', display: 'flex', alignItems: 'center' }}>
                {item.domain}
              </div>
              <div style={{ color: '#0F172A', paddingRight: '20px', lineHeight: '1.6', fontWeight: 600 }}>
                {item.after}
              </div>
              <div style={{ color: '#64748B', paddingRight: '10px', lineHeight: '1.6' }}>
                {item.before}
              </div>
            </div>
          ))}
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
            padding: 18px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
