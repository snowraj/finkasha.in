'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: '#04070E',
        borderTop: '1px solid rgba(148, 163, 184, 0.12)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Brand & Corporate Overview */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 145, 255, 0.3)',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Finkasha Logo"
                  width={42}
                  height={42}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.06em', color: '#fff' }}>
                  FINKASHA
                </span>
                <div style={{ fontSize: '0.68rem', color: '#00D09C', letterSpacing: '0.08em', fontWeight: 600 }}>
                  FINKASHA SERVICES PRIVATE LIMITED
                </div>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Empowering ₹5 Cr – ₹50 Cr+ middle-market leaders across Manufacturing, Trading, and Services with institutional-grade Fractional CFO leadership, working capital optimization, and founder wealth management.
            </p>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                40+ Transformations
              </span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>
                350+ Portfolios
              </span>
            </div>
          </div>

          {/* Strategic Solutions */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '20px', fontWeight: 700 }}>
              Advisory Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/services#fractional-cfo" style={{ color: '#94A3B8' }} className="footer-link">
                  Fractional / Virtual CFO
                </Link>
              </li>
              <li>
                <Link href="/services#cash-leakage" style={{ color: '#94A3B8' }} className="footer-link">
                  Cash Flow & Working Capital
                </Link>
              </li>
              <li>
                <Link href="/services#paid-consultancy" style={{ color: '#94A3B8' }} className="footer-link">
                  Paid 1-on-1 Consultation
                </Link>
              </li>
              <li>
                <Link href="/services#cfo-ca-advisory" style={{ color: '#94A3B8' }} className="footer-link">
                  Advisory for CFOs & CAs
                </Link>
              </li>
              <li>
                <Link href="/services#investments" style={{ color: '#94A3B8' }} className="footer-link">
                  Securities & Mutual Fund Portfolios
                </Link>
              </li>
              <li>
                <Link href="/services#wealth-management" style={{ color: '#94A3B8' }} className="footer-link">
                  Founder Wealth Preservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Essential Legal & Compliance */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '20px', fontWeight: 700 }}>
              Legal & Compliance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/terms" style={{ color: '#38BDF8', fontWeight: 600 }} className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: '#38BDF8', fontWeight: 600 }} className="footer-link">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms#nda" style={{ color: '#94A3B8' }} className="footer-link">
                  Non-Disclosure (NDA) Protocol
                </Link>
              </li>
              <li>
                <Link href="/terms#refund" style={{ color: '#94A3B8' }} className="footer-link">
                  Consultation Booking Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy#grievance" style={{ color: '#94A3B8' }} className="footer-link">
                  Data Grievance Officer
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Executive Desk */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '20px', fontWeight: 700 }}>
              Direct Executive Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: '#94A3B8' }}>
              <div>
                <div style={{ color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Founder & Director
                </div>
                <div style={{ color: '#fff', fontWeight: 600 }}>Kamlesh Thakur</div>
              </div>

              <div>
                <div style={{ color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Direct Email
                </div>
                <a href="mailto:kamlesh@finkasha.com" style={{ color: '#00D09C', fontWeight: 500 }}>
                  kamlesh@finkasha.com
                </a>
              </div>

              <div>
                <div style={{ color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Direct Telephone / WhatsApp
                </div>
                <a href="tel:+919970208927" style={{ color: '#fff', fontWeight: 500 }}>
                  +91 9970208927
                </a>
              </div>

              <div>
                <div style={{ color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Official Website & Social
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: '#E2E8F0' }}>www.finkasha.in</span>
                  <a
                    href="https://instagram.com/finkasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E1306C', fontWeight: 600, fontSize: '0.82rem' }}
                  >
                    @finkasha
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '8px', width: '100%' }}
              >
                Book Strategy Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            marginBottom: '28px',
            fontSize: '0.78rem',
            color: '#64748B',
            lineHeight: '1.6',
          }}
        >
          <strong style={{ color: '#94A3B8' }}>Regulatory & Advisory Disclaimer:</strong> Finkasha Services Private Limited provides fractional CFO advisory, managerial strategic financial consulting, working capital diagnostics, and wealth allocation planning. Finkasha does not perform statutory audit or issue audit reports required under the Companies Act 2013 or Income Tax Act 1961, which remain the preserve of independent practicing statutory auditors. All corporate consultations, turnover figures, and client disclosures are governed by strict confidentiality and non-disclosure standards.
        </div>

        {/* Copyright and Legal Notice */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Finkasha Services Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/terms" style={{ color: '#94A3B8' }} className="footer-link">
              Terms of Service
            </Link>
            <Link href="/privacy" style={{ color: '#94A3B8' }} className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/terms#nda" style={{ color: '#94A3B8' }} className="footer-link">
              Confidentiality & NDA
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #00d09c !important;
        }
        @media (max-width: 992px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
