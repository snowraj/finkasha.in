'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar matching finkasha.com */}
      <div
        style={{
          backgroundColor: '#002244',
          color: '#E2E8F0',
          fontSize: '0.78rem',
          padding: '7px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>🏢 <strong>Finkasha Services Private Limited</strong></span>
            <span style={{ color: '#93C5FD' }}>|</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Financial Management Consultancy</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="tel:+919970208927" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>📞 +91 9970208927</span>
            </a>
            <span style={{ color: '#64748B' }}>|</span>
            <a href="mailto:kamlesh@finkasha.com" style={{ color: '#E2E8F0' }}>
              ✉️ kamlesh@finkasha.com
            </a>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#ffffff',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 51, 102, 0.1)' : '0 2px 10px rgba(0, 51, 102, 0.05)',
          borderBottom: '1px solid #E2E8F0',
          transition: 'all 0.3s ease',
          padding: '14px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo with finkasha.com typography & official logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                position: 'relative',
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 51, 102, 0.15)',
              }}
            >
              <Image
                src="/logo.png"
                alt="Finkasha Logo"
                width={46}
                height={46}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#003366',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  FINKASHA
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: '#EBF3FA',
                    color: '#005BB5',
                    border: '1px solid #BFDBFE',
                  }}
                >
                  .IN
                </span>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748B', letterSpacing: '0.04em', fontWeight: 600 }}>
                FRACTIONAL CFO & FINANCIAL ADVISORY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }} className="desktop-nav">
            <Link href="/#services" style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }} className="nav-link">
              Services
            </Link>
            <Link href="/#diagnostic" style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }} className="nav-link">
              Cash Leakage Diagnostic
            </Link>
            <Link href="/#transformation" style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }} className="nav-link">
              Case Studies
            </Link>
            <Link href="/#comparison" style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }} className="nav-link">
              Virtual CFO vs CA
            </Link>
            <Link href="/#faq" style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }} className="nav-link">
              FAQ
            </Link>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary btn-sm"
              style={{ padding: '10px 22px' }}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: '#93C5FD' }}></span>
              <span>Book a Free Consultation</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                padding: '8px',
                color: '#003366',
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #E2E8F0',
              borderBottom: '1px solid #003366',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Services
            </Link>
            <Link
              href="/#diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Cash Leakage Diagnostic
            </Link>
            <Link
              href="/#transformation"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Case Studies
            </Link>
            <Link
              href="/#comparison"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Virtual CFO vs CA
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              FAQ
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Book a Free Consultation
            </button>
          </div>
        )}

        <style jsx>{`
          .nav-link:hover {
            color: #005bb5 !important;
          }
          @media (max-width: 900px) {
            :global(.desktop-nav) {
              display: none !important;
            }
            :global(.mobile-toggle) {
              display: block !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}
