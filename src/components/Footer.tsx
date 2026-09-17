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
        backgroundColor: '#002244',
        color: '#F8FAFC',
        borderTop: '3px solid #005BB5',
        paddingTop: '70px',
        paddingBottom: '36px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '36px',
            marginBottom: '50px',
          }}
          className="footer-grid"
        >
          {/* Brand & Corporate Overview */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #BFDBFE',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Finkasha Logo"
                  width={44}
                  height={44}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.04em', color: '#fff' }}>
                  FINKASHA
                </span>
                <div style={{ fontSize: '0.68rem', color: '#93C5FD', letterSpacing: '0.06em', fontWeight: 600 }}>
                  FINKASHA SERVICES PRIVATE LIMITED
                </div>
              </div>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Empowering ₹5 Cr – ₹50 Cr+ enterprises and founders across Manufacturing, Trading, and Services with Fractional CFO leadership, working capital optimization, and institutional financial management consultancy.
            </p>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', color: '#93C5FD', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                40+ Corporate Transformations
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', color: '#93C5FD', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                350+ Enterprises Served
              </span>
            </div>
          </div>

          {/* Strategic Solutions */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', fontWeight: 700 }}>
              Advisory Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/services#fractional-cfo" style={{ color: '#CBD5E1' }} className="footer-link">
                  Fractional / Virtual CFO
                </Link>
              </li>
              <li>
                <Link href="/services#cash-leakage" style={{ color: '#CBD5E1' }} className="footer-link">
                  Cash Flow & Working Capital
                </Link>
              </li>
              <li>
                <Link href="/services#paid-consultancy" style={{ color: '#CBD5E1' }} className="footer-link">
                  Paid 1-on-1 Consultation
                </Link>
              </li>
              <li>
                <Link href="/services#cfo-ca-advisory" style={{ color: '#CBD5E1' }} className="footer-link">
                  Advisory for CFOs & CAs
                </Link>
              </li>
              <li>
                <Link href="/services#financial-planning" style={{ color: '#CBD5E1' }} className="footer-link">
                  Financial Planning & MIS
                </Link>
              </li>
              <li>
                <Link href="/services#compliance-advisory" style={{ color: '#CBD5E1' }} className="footer-link">
                  Compliance & Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', fontWeight: 700 }}>
              Legal & Compliance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/terms" style={{ color: '#93C5FD', fontWeight: 600 }} className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: '#93C5FD', fontWeight: 600 }} className="footer-link">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms#nda" style={{ color: '#CBD5E1' }} className="footer-link">
                  Non-Disclosure (NDA) Protocol
                </Link>
              </li>
              <li>
                <Link href="/terms#refund" style={{ color: '#CBD5E1' }} className="footer-link">
                  Consultation Booking Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy#grievance" style={{ color: '#CBD5E1' }} className="footer-link">
                  Data Grievance Officer
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Address & Executive Desk (Matching finkasha.com) */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', fontWeight: 700 }}>
              Registered Office & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div>
                <strong style={{ color: '#fff' }}>Address:</strong>
                <p style={{ marginTop: '2px', color: '#CBD5E1' }}>
                  Office 501, A-wing, Mahalaxmi New Castle, Opp. Shri Krishna Lawns, Ayodhya Nagar, Nashik Pune Road, Nashik, Maharashtra, India 422101 (Next to Westside)
                </p>
              </div>

              <div>
                <strong style={{ color: '#fff' }}>Contact Numbers:</strong>
                <div>
                  <a href="tel:+919970208927" style={{ color: '#93C5FD', fontWeight: 600 }}>+91 9970208927</a> / <a href="tel:+917477711173" style={{ color: '#93C5FD', fontWeight: 600 }}>+91 74777 11173</a>
                </div>
              </div>

              <div>
                <strong style={{ color: '#fff' }}>Official Emails:</strong>
                <div>
                  <a href="mailto:kamlesh@finkasha.com" style={{ color: '#93C5FD' }}>kamlesh@finkasha.com</a> / <a href="mailto:contact@finkasha.com" style={{ color: '#93C5FD' }}>contact@finkasha.com</a>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', borderColor: '#BFDBFE', color: '#003366', backgroundColor: '#FFFFFF', marginTop: '4px' }}
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '20px',
            marginBottom: '20px',
            fontSize: '0.78rem',
            color: '#94A3B8',
            lineHeight: '1.6',
          }}
        >
          <strong style={{ color: '#CBD5E1' }}>Regulatory & Advisory Disclaimer:</strong> Finkasha Services Private Limited provides fractional CFO advisory, managerial strategic financial consulting, working capital diagnostics, financial planning, and compliance advisory services. Finkasha does not perform statutory audit or issue audit certificates required under the Companies Act 2013 or Income Tax Act 1961, which remain the responsibility of independent statutory auditors. All corporate consultations, turnover figures, and client disclosures are governed by strict confidentiality and non-disclosure standards.
        </div>

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#94A3B8',
          }}
        >
          <div>
            © {new Date().getFullYear()} Finkasha Services Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/terms" style={{ color: '#CBD5E1' }} className="footer-link">
              Terms of Service
            </Link>
            <Link href="/privacy" style={{ color: '#CBD5E1' }} className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/terms#nda" style={{ color: '#CBD5E1' }} className="footer-link">
              Confidentiality & NDA
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #93c5fd !important;
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
