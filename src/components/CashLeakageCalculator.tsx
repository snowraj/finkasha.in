'use client';

import React, { useState } from 'react';

interface CalculatorProps {
  onOpenBookingWithDetails: (turnover: string, challenge: string) => void;
}

export default function CashLeakageCalculator({ onOpenBookingWithDetails }: CalculatorProps) {
  const [turnoverCr, setTurnoverCr] = useState<number>(25);
  const [netMargin, setNetMargin] = useState<number>(8);
  const [dsoDays, setDsoDays] = useState<number>(65);

  const turnoverLakhs = turnoverCr * 100;
  const excessDsoDays = Math.max(0, dsoDays - 40);
  const trappedReceivablesLakhs = (turnoverLakhs / 365) * excessDsoDays;
  const financingCostLeakage = trappedReceivablesLakhs * 0.105;
  const operationalLeakage = turnoverLakhs * 0.015;
  const totalLeakageLakhs = Math.round(financingCostLeakage + operationalLeakage);
  const totalTrappedWorkingCapital = Math.round(trappedReceivablesLakhs);

  const formatCurrencyLakhs = (lakhs: number) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `₹${lakhs} Lakhs`;
  };

  const handleClaimAudit = () => {
    onOpenBookingWithDetails(
      turnoverCr >= 50 ? '₹50 Cr+' : turnoverCr >= 20 ? '₹20 Cr - ₹50 Cr' : '₹10 Cr - ₹20 Cr',
      `Audit Cash Leakage (Est. ${formatCurrencyLakhs(totalLeakageLakhs)}/yr)`
    );
  };

  return (
    <div
      id="diagnostic"
      className="glass-card"
      style={{
        padding: '48px 40px',
        backgroundColor: '#ffffff',
        border: '2px solid #BFDBFE',
        boxShadow: '0 10px 35px rgba(0, 51, 102, 0.08)',
        borderRadius: '16px',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge" style={{ marginBottom: '12px' }}>
          ⚡ Interactive Enterprise Financial Diagnostic
        </div>
        <h3 style={{ fontSize: '2.1rem', marginBottom: '12px', color: '#003366' }}>
          Is Hidden Cash Leakage Silently Draining Your Enterprise?
        </h3>
        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '680px', margin: '0 auto' }}>
          Enterprises generating ₹5 Cr – ₹50 Cr+ often lock ₹25 Lakhs to ₹1.5 Crores in unnecessary working capital drag, debtor delays, and unmonitored margin bleed. Run your quick diagnostic below:
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
        className="calc-grid"
      >
        {/* Sliders Input Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          {/* Turnover Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#003366' }}>
                Annual Turnover / Revenue:
              </label>
              <span
                style={{
                  color: '#005BB5',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                ₹{turnoverCr} Crores
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              value={turnoverCr}
              onChange={(e) => setTurnoverCr(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                accentColor: '#003366',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              <span>₹5 Cr (Emerging)</span>
              <span>₹25 Cr (Middle-Market)</span>
              <span>₹50 Cr+ (Established)</span>
            </div>
          </div>

          {/* DSO / Collection Period Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#003366' }}>
                Average Debtor Collection Cycle (DSO):
              </label>
              <span
                style={{
                  color: dsoDays > 60 ? '#D97706' : '#005BB5',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {dsoDays} Days
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="120"
              step="5"
              value={dsoDays}
              onChange={(e) => setDsoDays(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                accentColor: dsoDays > 60 ? '#D97706' : '#003366',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              <span>30 Days (Ideal)</span>
              <span>60 Days (Typical)</span>
              <span>90+ Days (Severe Trap)</span>
            </div>
          </div>

          {/* Net Profit Margin Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#003366' }}>
                Estimated Current Net Profit Margin:
              </label>
              <span
                style={{
                  color: '#005BB5',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {netMargin}%
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={netMargin}
              onChange={(e) => setNetMargin(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                accentColor: '#003366',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              <span>3% (Thin)</span>
              <span>10% (Healthy)</span>
              <span>20%+ (High Margin)</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #002B54 0%, #001F3D 100%)',
            borderRadius: '14px',
            padding: '32px',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 51, 102, 0.2)',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '6px' }}>
            Estimated Annual Leakage Diagnostic
          </div>

          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#FCA5A5',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
            }}
          >
            <span>{formatCurrencyLakhs(totalLeakageLakhs)}</span>
            <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500 }}>/ year</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#CBD5E1' }}>Trapped Working Capital:</span>
              <strong style={{ color: '#fff' }}>{formatCurrencyLakhs(totalTrappedWorkingCapital)}</strong>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#CBD5E1' }}>Financing Cost Drag:</span>
              <strong style={{ color: '#FCD34D' }}>~{formatCurrencyLakhs(Math.round(financingCostLeakage))}/yr</strong>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(0, 124, 232, 0.25)',
                border: '1px solid rgba(147, 197, 253, 0.3)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#93C5FD', fontWeight: 600 }}>Finkasha Recoverable Profit:</span>
              <strong style={{ color: '#6EE7B7', fontWeight: 700 }}>
                +{formatCurrencyLakhs(Math.round(totalLeakageLakhs * 0.75))}
              </strong>
            </div>
          </div>

          <button
            onClick={handleClaimAudit}
            className="btn btn-secondary"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '0.98rem',
              fontWeight: 700,
              backgroundColor: '#FFFFFF',
              color: '#003366',
              border: 'none',
            }}
          >
            <span>Claim Your Full Diagnostic Audit</span>
            <span>⚡</span>
          </button>

          <div
            style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '0.75rem',
              color: '#94A3B8',
            }}
          >
            🔒 Protected by Bilateral Non-Disclosure Agreement (NDA)
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          :global(.calc-grid) {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          :global(#diagnostic) {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
