'use client';

import React, { useState } from 'react';

interface CalculatorProps {
  onOpenBookingWithDetails: (turnover: string, challenge: string) => void;
}

export default function CashLeakageCalculator({ onOpenBookingWithDetails }: CalculatorProps) {
  const [turnoverCr, setTurnoverCr] = useState<number>(25);
  const [netMargin, setNetMargin] = useState<number>(8);
  const [dsoDays, setDsoDays] = useState<number>(65);

  // Calculations based on middle-market enterprise dynamics
  const turnoverLakhs = turnoverCr * 100;
  
  // Benchmark DSO is ~40 days in healthy middle-market businesses
  const excessDsoDays = Math.max(0, dsoDays - 40);
  
  // Working capital trapped in excess receivables
  const trappedReceivablesLakhs = (turnoverLakhs / 365) * excessDsoDays;
  
  // Cost of working capital financing (CC / OD limit @ ~10.5% p.a.) + idle cash drag
  const financingCostLeakage = trappedReceivablesLakhs * 0.105;
  
  // Unoptimized operational cash leakage (margin slippage, procurement inefficiencies ~1.5% of turnover)
  const operationalLeakage = turnoverLakhs * 0.015;
  
  // Total estimated annual cash leakage
  const totalLeakageLakhs = Math.round(financingCostLeakage + operationalLeakage);
  
  // Estimated trapped working capital
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
        border: '1px solid rgba(0, 208, 156, 0.3)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 208, 156, 0.12)',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
          ⚡ Interactive Enterprise Financial Diagnostic
        </div>
        <h3 style={{ fontSize: '2rem', marginBottom: '12px' }}>
          Is Hidden Cash Leakage Silently Draining Your Enterprise?
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '680px', margin: '0 auto' }}>
          Middle-market companies generating ₹5 Cr – ₹50 Cr+ often bleed ₹20L to ₹1.5 Cr+ annually through trapped receivables, unoptimized cash conversion cycles, and unmonitored margin leakages.
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Turnover Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 600, color: '#E2E8F0' }}>
                Annual Revenue / Turnover:
              </label>
              <span
                style={{
                  color: '#00D09C',
                  fontSize: '1.15rem',
                  fontWeight: 700,
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
                accentColor: '#00D09C',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
              <span>₹5 Cr (Emerging)</span>
              <span>₹25 Cr (Middle-Market)</span>
              <span>₹50 Cr+ (Established)</span>
            </div>
          </div>

          {/* DSO / Collection Period Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 600, color: '#E2E8F0' }}>
                Average Debtor Collection Cycle (DSO):
              </label>
              <span
                style={{
                  color: dsoDays > 60 ? '#F59E0B' : '#00D09C',
                  fontSize: '1.15rem',
                  fontWeight: 700,
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
                accentColor: dsoDays > 60 ? '#F59E0B' : '#00D09C',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
              <span>30 Days (Ideal)</span>
              <span>60 Days (Typical)</span>
              <span>90+ Days (Severe Trap)</span>
            </div>
          </div>

          {/* Net Profit Margin Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 600, color: '#E2E8F0' }}>
                Estimated Current Net Profit Margin:
              </label>
              <span
                style={{
                  color: '#38BDF8',
                  fontSize: '1.15rem',
                  fontWeight: 700,
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
                accentColor: '#38BDF8',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
              <span>3% (Thin)</span>
              <span>10% (Healthy)</span>
              <span>20%+ (High Margin)</span>
            </div>
          </div>
        </div>

        {/* Results & Action Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(11, 20, 38, 0.95), rgba(7, 12, 24, 0.98))',
            border: '1px solid rgba(0, 208, 156, 0.4)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Estimated Annual Leakage Diagnostic
          </div>

          <div
            style={{
              fontSize: '2.6rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#F87171',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
            }}
          >
            <span>{formatCurrencyLakhs(totalLeakageLakhs)}</span>
            <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500 }}>/ year</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#94A3B8' }}>Trapped Working Capital:</span>
              <strong style={{ color: '#fff' }}>{formatCurrencyLakhs(totalTrappedWorkingCapital)}</strong>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#94A3B8' }}>Financing Cost Drag:</span>
              <strong style={{ color: '#FBBF24' }}>~{formatCurrencyLakhs(Math.round(financingCostLeakage))}/yr</strong>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'rgba(0, 208, 156, 0.08)',
                border: '1px solid rgba(0, 208, 156, 0.2)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ color: '#00D09C', fontWeight: 600 }}>Finkasha Recoverable Profit:</span>
              <strong style={{ color: '#00D09C', fontWeight: 700 }}>
                +{formatCurrencyLakhs(Math.round(totalLeakageLakhs * 0.75))}
              </strong>
            </div>
          </div>

          <button
            onClick={handleClaimAudit}
            className="btn btn-primary"
            style={{ width: '100%', padding: '16px', fontSize: '1rem', fontWeight: 700 }}
          >
            <span>Claim Your Full Diagnostic Audit</span>
            <span>⚡</span>
          </button>

          <div
            style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '0.76rem',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>🔒 Confidential & Protected by Bilateral NDA</span>
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
