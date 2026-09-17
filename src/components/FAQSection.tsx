'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you protect the confidentiality of our sensitive financial statements and turnover data?',
      a: 'We operate under strict institutional confidentiality standards. Before accessing any sensitive financial models, balance sheets, or ledger records, Finkasha signs a legally binding Non-Disclosure Agreement (NDA). Your proprietary financial information is stored under bank-grade encryption protocols and is never disclosed to competitors, vendors, or external parties.',
    },
    {
      q: 'How is a Fractional / Virtual CFO different from our current practicing Chartered Accountant (CA)?',
      a: 'Your practicing CA focuses primarily on historical statutory compliance—filing GST, TDS, and preparing tax returns looking in the rearview mirror. Finkasha’s Fractional CFO functions as your forward-looking financial navigator: establishing rolling cash flow forecasts, plugging operational leakages, optimizing working capital, negotiating debt lines, and providing C-suite strategic clarity. We work in complete harmony with your existing accounts team and external CAs.',
    },
    {
      q: 'What does the Paid 1-on-1 Strategic Financial Consultation entail?',
      a: 'The Paid Consultation is an intensive, confidential 60-to-90-minute strategic deep-dive for Business Owners, corporate CFOs, and practicing CAs. Prior to the session, we review your high-level financial metrics. During the session, we identify specific working capital bottlenecks, diagnostic leakages, margin slippages, and deliver a concrete 90-day action roadmap.',
    },
    {
      q: 'Our business is already generating ₹20 Cr – ₹50 Cr+ turnover. Why do we need this now?',
      a: 'At ₹20 Cr to ₹50 Cr+ turnover, operational complexity multiplies. A minor 2% cash leakage or a 20-day extension in debtor collection (DSO) can trap ₹50 Lakhs to ₹1.5 Crores in non-productive working capital, causing cash flow panic despite apparent paper profits. Finkasha transforms this hidden fragility into predictable, bankable liquidity.',
    },
    {
      q: 'Do you work with enterprises outside of Maharashtra or across India?',
      a: 'Yes. While Finkasha Services Private Limited is based in Maharashtra, our Fractional CFO and strategic financial advisory models operate seamlessly across India. We conduct executive reviews through secure encrypted video suites and on-site executive quarterly strategy sessions for manufacturing and trading clients.',
    },
    {
      q: 'How soon can we expect tangible financial results or positive ROI?',
      a: 'In over 40+ corporate transformations, cash leakages and working capital traps are typically identified within the first 30 days of the diagnostic phase. Tangible liquidity improvements—such as shortened collection cycles, cost rationalization, and bank line savings—routinely pay for the entire advisory engagement within 90 days.',
    },
  ];

  return (
    <section id="faq" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="section-title-wrap">
          <div className="badge badge-gold">Clarity & Assurance</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Finkasha&apos;s Fractional CFO advisory, paid consultations, and institutional data governance.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  border: isOpen
                    ? '1px solid rgba(0, 208, 156, 0.4)'
                    : '1px solid rgba(148, 163, 184, 0.12)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.02rem',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: isOpen ? '#00D09C' : '#F8FAFC' }}>{faq.q}</span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(0, 208, 156, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#00D09C' : '#94A3B8',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 26px 22px 26px',
                      color: '#94A3B8',
                      fontSize: '0.92rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
