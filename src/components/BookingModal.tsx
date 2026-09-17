'use client';

import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTurnover?: string;
  initialChallenge?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialTurnover = '₹20 Cr - ₹50 Cr',
  initialChallenge = 'Eliminate Cash Leakage & Working Capital Traps',
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    turnover: initialTurnover,
    industry: 'Manufacturing',
    role: 'Founder / Managing Director',
    primaryGoal: initialChallenge,
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !formData.companyName.trim()) {
      alert('Please enter your Company / Enterprise name.');
      return;
    }
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Please provide your name, business email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const storedLeads = JSON.parse(localStorage.getItem('finkasha_consultations') || '[]');
        storedLeads.push({
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('finkasha_consultations', JSON.stringify(storedLeads));
      } catch {
        // fallback
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/919970208927?text=${encodeURIComponent(
    `Hello Finkasha Team, I just requested a Strategic Financial Consultation.\n\nCompany: ${formData.companyName}\nTurnover: ${formData.turnover}\nIndustry: ${formData.industry}\nRole: ${formData.role}\nPrimary Goal: ${formData.primaryGoal}\nName: ${formData.fullName}\nPhone: ${formData.phone}`
  )}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569',
            fontSize: '1.1rem',
            border: '1px solid #CBD5E1',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '22px' }}>
              <div className="badge" style={{ marginBottom: '10px' }}>
                ⭐ High-Clarity Consultation Booking
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: '#003366' }}>
                Book Your Strategic Financial Consultation
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: '1.5' }}>
                Direct confidential strategy session with Finkasha senior financial leadership for enterprises generating ₹5 Cr – ₹50 Cr+ annual turnover.
              </p>
            </div>

            {/* Step Progress Tracker */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '26px' }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div
                    style={{
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: s <= step ? '#003366' : '#E2E8F0',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: s === step ? '#003366' : '#94A3B8',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {s === 1 ? '1. Enterprise' : s === 2 ? '2. Challenge' : '3. Schedule'}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: Enterprise Profile */}
              {step === 1 && (
                <div style={{ animation: 'fadeIn 0.25s ease' }}>
                  <div className="form-group">
                    <label className="form-label">Company / Business Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acme Manufacturing Enterprises Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Annual Revenue / Turnover Bracket *</label>
                    <div className="option-grid">
                      {['₹5 Cr - ₹10 Cr', '₹10 Cr - ₹20 Cr', '₹20 Cr - ₹50 Cr', '₹50 Cr+'].map((tier) => (
                        <div
                          key={tier}
                          className={`option-pill ${formData.turnover === tier ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, turnover: tier })}
                        >
                          {tier}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Industry Domain *</label>
                    <div className="option-grid">
                      {['Manufacturing', 'Trading & Export', 'Services & Tech', 'Other Corporate'].map((ind) => (
                        <div
                          key={ind}
                          className={`option-pill ${formData.industry === ind ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, industry: ind })}
                        >
                          {ind}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Executive Role *</label>
                    <div className="option-grid">
                      {[
                        'Founder / Managing Director',
                        'CEO / COO',
                        'Existing CFO',
                        'Chartered Accountant (CA)',
                      ].map((r) => (
                        <div
                          key={r}
                          className={`option-pill ${formData.role === r ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, role: r })}
                        >
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '14px' }}
                  >
                    <span>Proceed to Objectives</span>
                    <span>→</span>
                  </button>
                </div>
              )}

              {/* STEP 2: Objective Selection */}
              {step === 2 && (
                <div style={{ animation: 'fadeIn 0.25s ease' }}>
                  <div className="form-group">
                    <label className="form-label">Primary Financial Transformation Goal *</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        {
                          id: 'Eliminate Cash Leakage & Working Capital Traps',
                          title: 'Plug Cash Leakages & Working Capital Optimization',
                          desc: 'Identify unseen operational leaks, streamline debtor DSO, and recover locked cash flow.',
                        },
                        {
                          id: 'Fractional / Virtual CFO Retainer',
                          title: 'Virtual CFO Leadership & Growth Strategy',
                          desc: 'Full forward-looking financial forecasting, monthly MIS intelligence, and C-suite strategy.',
                        },
                        {
                          id: 'Paid 1-on-1 Strategic Financial Consultation',
                          title: 'Paid 1-on-1 Strategic Financial Consultation',
                          desc: 'In-depth diagnostic audit & second opinion for Business Owners, CFOs, and practicing CAs.',
                        },
                        {
                          id: 'Founder Wealth & Investment Advisory',
                          title: 'Founder Wealth Management & Securities Portfolio',
                          desc: 'Comprehensive mutual fund, equity portfolio audits, and long-term asset preservation.',
                        },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setFormData({ ...formData, primaryGoal: item.id })}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            border: `1.5px solid ${
                              formData.primaryGoal === item.id ? '#003366' : '#CBD5E1'
                            }`,
                            backgroundColor:
                              formData.primaryGoal === item.id ? '#EBF3FA' : '#ffffff',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            <div
                              style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                border: `2px solid ${formData.primaryGoal === item.id ? '#003366' : '#94A3B8'}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {formData.primaryGoal === item.id && (
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#003366' }} />
                              )}
                            </div>
                            <span style={{ fontWeight: 700, color: '#003366', fontSize: '0.95rem' }}>{item.title}</span>
                          </div>
                          <p style={{ fontSize: '0.84rem', color: '#475569', paddingLeft: '26px' }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary" style={{ flex: 1 }}>
                      ← Back
                    </button>
                    <button type="button" onClick={handleNext} className="btn btn-primary" style={{ flex: 2 }}>
                      <span>Schedule Session</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Confirm */}
              {step === 3 && (
                <div style={{ animation: 'fadeIn 0.25s ease' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Business Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="rajesh@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Direct Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specific Note / Bottleneck (Optional)</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      placeholder="e.g. Unpredictable operating cash flow, debtor delay, debt refinancing..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div
                    style={{
                      background: '#F0F5FB',
                      border: '1px solid #BFDBFE',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      color: '#334155',
                      marginBottom: '20px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🔒</span>
                    <span>
                      <strong>Strict Non-Disclosure Guarantee:</strong> All financial statements, turnover disclosures, and business communications are protected by institutional confidentiality and strict NDAs.
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary" style={{ flex: 1 }}>
                      ← Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ flex: 2 }}>
                      {isSubmitting ? 'Reserving Your Slot...' : 'Confirm Consultation Request ⚡'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div style={{ textAlign: 'center', padding: '20px 0', animation: 'fadeIn 0.3s ease' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#EBF3FA',
                border: '2px solid #003366',
                color: '#003366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                fontSize: '1.8rem',
                fontWeight: 800,
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '8px', color: '#003366' }}>Consultation Request Received</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '460px', margin: '0 auto 20px auto' }}>
              Thank you, <strong>{formData.fullName}</strong>. Our senior financial advisory desk has prioritized your request for <strong>{formData.companyName}</strong>.
            </p>

            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '10px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '22px',
                fontSize: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#64748B' }}>Turnover Bracket:</span>
                <span style={{ color: '#003366', fontWeight: 700 }}>{formData.turnover}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#64748B' }}>Domain:</span>
                <span style={{ color: '#003366', fontWeight: 700 }}>{formData.industry}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Primary Objective:</span>
                <span style={{ color: '#005BB5', fontWeight: 700 }}>{formData.primaryGoal}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', gap: '10px' }}
              >
                <span>Connect Directly on WhatsApp for Faster Slot</span>
                <span>⚡</span>
              </a>
              <button onClick={onClose} className="btn btn-secondary" style={{ width: '100%' }}>
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
