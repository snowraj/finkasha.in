'use client';

import React from 'react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge">CASE STUDIES</div>
          <h2 className="section-title">Real Business Problems. Clearer Financial Decisions.</h2>
          <p className="section-subtitle">
            See how Finkasha works with manufacturing, trading and service businesses to understand where money is blocked, improve financial visibility and support better business decisions.
          </p>
        </div>

        <div className="grid-3">
          {/* Manufacturing Story */}
          <div className="glass-card" style={{ padding: '30px', borderTop: '4px solid #003366' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <span className="badge" style={{ fontSize: '0.72rem' }}>MANUFACTURING</span>
              <span style={{ color: '#003366', fontWeight: 700, fontSize: '0.85rem' }}>₹32 Cr Annual Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#003366' }}>
              Auto Component Manufacturer
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '18px' }}>
              ₹4.2 Cr was stuck in delayed customer payments, while overdraft interest was increasing. Finkasha helped improve cash planning, collections and supplier payment timing.
            </p>
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px', fontSize: '0.82rem', color: '#005BB5', fontWeight: 600 }}>
              Outcome: Lower financing cost and better supplier payment planning.
            </div>
          </div>

          {/* Trading & Export Story */}
          <div className="glass-card" style={{ padding: '30px', borderTop: '4px solid #003366' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <span className="badge" style={{ fontSize: '0.72rem' }}>TRADING & EXPORT</span>
              <span style={{ color: '#003366', fontWeight: 700, fontSize: '0.85rem' }}>₹48 Cr Annual Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#003366' }}>
              Chemical Import–Export Business
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '18px' }}>
              Fast growth was hiding losses in freight, currency movement and product margins. Finkasha helped the business track margins more clearly and identify where money was being lost.
            </p>
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px', fontSize: '0.82rem', color: '#005BB5', fontWeight: 600 }}>
              Outcome: Better margin visibility and stronger control over costs.
            </div>
          </div>

          {/* Services & Enterprise Story */}
          <div className="glass-card" style={{ padding: '30px', borderTop: '4px solid #003366' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <span className="badge" style={{ fontSize: '0.72rem' }}>SERVICES</span>
              <span style={{ color: '#003366', fontWeight: 700, fontSize: '0.85rem' }}>₹22 Cr Annual Turnover</span>
            </div>
            <h4 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#003366' }}>
              Logistics Services Business
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '18px' }}>
              The founder was spending too much time on billing, banking and finance follow-ups. Finkasha helped organise the financial review process so the founder could focus more on running and growing the business.
            </p>
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px', fontSize: '0.82rem', color: '#005BB5', fontWeight: 600 }}>
              Outcome: Less time spent on finance follow-ups and better visibility over borrowing.
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div
          style={{
            marginTop: '44px',
            textAlign: 'center',
            background: '#ffffff',
            border: '2px solid #BFDBFE',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 6px 24px rgba(0, 51, 102, 0.06)',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#003366' }}>
            Facing Something Similar In Your Business?
          </h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '20px' }}>
            Let’s understand what is happening with your cash, numbers and business decisions.
          </p>
          <button onClick={onOpenBooking} className="btn btn-primary btn-lg" style={{ maxWidth: '100%', whiteSpace: 'normal' }}>
            Explore 1 on 1 Executive Finance Session →
          </button>
        </div>
      </div>
    </section>
  );
}
