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
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.2fr)',
            gap: '36px',
            marginBottom: '50px',
          }}
          className="footer-grid"
        >
          {/* Brand & Corporate Overview */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }} aria-label="Finkasha home">
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #BFDBFE',
                  flexShrink: 0,
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
            </Link>

            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Finkasha helps ₹5 Cr–₹50 Cr manufacturing, trading and service businesses understand their numbers, manage cash and make better business decisions.
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

          {/* Services & Resources */}
          <nav aria-label="Footer services and resources">
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', fontWeight: 700 }}>
              Services & Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/#virtual-cfo" style={{ color: '#CBD5E1' }} className="footer-link">
                  Virtual CFO & Financial Management
                </Link>
              </li>
              <li>
                <Link href="/#financial-analysis" style={{ color: '#CBD5E1' }} className="footer-link">
                  Financial Analysis, Dashboards & Planning
                </Link>
              </li>
              <li>
                <Link href="/#growth-planning" style={{ color: '#CBD5E1' }} className="footer-link">
                  Business Growth & Expansion Planning
                </Link>
              </li>
              <li>
                <Link href="/#executive-finance-session" style={{ color: '#CBD5E1' }} className="footer-link">
                  1 on 1 Executive Finance Session
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" style={{ color: '#CBD5E1' }} className="footer-link">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#faq" style={{ color: '#CBD5E1' }} className="footer-link">
                  Common Questions
                </Link>
              </li>
            </ul>
          </nav>

          {/* Policies & Terms */}
          <nav aria-label="Footer policies and terms">
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', fontWeight: 700 }}>
              Policies & Terms
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link href="/terms" style={{ color: '#93C5FD', fontWeight: 600 }} className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: '#93C5FD', fontWeight: 600 }} className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms#nda" style={{ color: '#CBD5E1' }} className="footer-link">
                  Confidentiality & NDA
                </Link>
              </li>
              <li>
                <Link href="/terms#refund" style={{ color: '#CBD5E1' }} className="footer-link">
                  Session Booking Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy#grievance" style={{ color: '#CBD5E1' }} className="footer-link">
                  Data Grievance Officer
                </Link>
              </li>
            </ul>
          </nav>

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
                  <a href="tel:+917477711173" style={{ color: '#93C5FD', fontWeight: 600 }}>+91 74777 11173</a> / <a href="tel:+919684704101" style={{ color: '#93C5FD', fontWeight: 600 }}>+91 96847 04101</a>
                </div>
              </div>

              <div>
                <strong style={{ color: '#fff' }}>Official Emails:</strong>
                <div>
                  <a href="mailto:office@finkasha.com" style={{ color: '#93C5FD' }}>office@finkasha.com</a>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', whiteSpace: 'normal', padding: '12px 16px', fontSize: '0.9rem', fontWeight: 700, borderColor: '#BFDBFE', color: '#003366', backgroundColor: '#FFFFFF', marginTop: '4px' }}
                >
                  Book 1 on 1 Executive Finance Session →
                </button>
                <p style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, textAlign: 'center', marginTop: '10px' }}>
                  ₹2,000 + GST
                </p>
                <p style={{ color: '#CBD5E1', fontSize: '0.82rem', textAlign: 'center', marginTop: '4px' }}>
                  60–90 minutes · Confidential discussion
                </p>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 20px' }}>
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
