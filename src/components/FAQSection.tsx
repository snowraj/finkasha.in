'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Will My Business & Financial Information Stay Confidential?',
      a: 'Yes. Your business and financial information is treated as confidential and is used only for the work being discussed with you. An NDA can also be signed before detailed financial information is shared, where required.',
    },
    {
      q: 'How Does Finkasha Work With My Accounting And Finance Department?',
      a: 'Your accounting and finance department continues handling accounting, taxation, compliance and its existing responsibilities. Finkasha works alongside your team to help you understand the numbers, manage cash, plan ahead and use financial information for business decisions.',
    },
    {
      q: 'What Happens In The 1 on 1 Executive Finance Session?',
      a: 'It is a focused 60–90-minute conversation about your business, current financial concerns and the decisions you are trying to make. We help you understand what may need attention and what areas you should look at more closely next. The session is ₹2,000 + GST.',
    },
    {
      q: 'Our Business Is Already Doing Well. Why Do We Need Financial Management Support?',
      a: 'As the business grows, more money gets blocked in customer payments, stock, salaries, suppliers, loans and expansion. Good sales do not always mean enough cash is available when the business needs it. Better financial management helps you understand these areas before they become bigger problems.',
    },
    {
      q: 'Can Finkasha Work With Businesses Anywhere In India?',
      a: 'Yes. We work with businesses across India. Most reviews and discussions can be conducted online, and in-person meetings can be considered where the engagement requires them.',
    },
    {
      q: 'How Soon Will We Start Seeing Useful Changes?',
      a: 'That depends on the issues in your business and how quickly agreed actions are implemented. Some financial gaps can become visible quite early, while improvements in collections, costs, working capital or planning may take longer. We focus on identifying the right issues, setting priorities and reviewing progress — not promising a fixed financial result.',
    },
  ];

  return (
    <section id="faq" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="section-title-wrap">
          <div className="badge">COMMON QUESTIONS</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Simple answers to the questions business owners usually ask before working with Finkasha.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  border: isOpen ? '1.5px solid #005BB5' : '1px solid #D9E4F0',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  boxShadow: isOpen ? '0 6px 20px rgba(0, 51, 102, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                    color: isOpen ? '#003366' : '#0F172A',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#EBF3FA' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#003366' : '#64748B',
                      fontSize: '1.1rem',
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
                      padding: '0 24px 20px 24px',
                      color: '#475569',
                      fontSize: '0.92rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '14px',
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
