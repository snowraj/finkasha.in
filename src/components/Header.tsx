'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

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
          className={`container ${styles.utilityInner}`}
        >
          <div className={styles.utilityIdentity}>
            <span>🏢 <strong>Finkasha Services Private Limited</strong></span>
            <span className={styles.utilitySeparator} style={{ color: '#93C5FD' }}>|</span>
            <span className={styles.utilityAdvisory} style={{ color: '#93C5FD', fontWeight: 600 }}>Financial Management & CFO Advisory</span>
          </div>

          <div className={styles.utilityContacts}>
            <a href="tel:+917477711173" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>📞 +91 74777 11173</span>
            </a>
            <span className={styles.utilitySeparator} style={{ color: '#64748B' }}>|</span>
            <a href="tel:+919684704101" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>+91 96847 04101</span>
            </a>
            <span className={styles.utilitySeparator} style={{ color: '#64748B' }}>|</span>
            <a href="mailto:office@finkasha.com" style={{ color: '#E2E8F0' }}>
              ✉️ office@finkasha.com
            </a>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header
        className={styles.header}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#ffffff',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 51, 102, 0.1)' : '0 2px 10px rgba(0, 51, 102, 0.05)',
          borderBottom: '1px solid #E2E8F0',
          transition: 'all 0.3s ease',
        }}
      >
        <div className={`container ${styles.mainInner}`}>
          {/* Brand Logo with finkasha.com typography & official logo */}
          <Link href="/" className={styles.brand}>
            <div
              className={styles.brandLogo}
              style={{
                position: 'relative',
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
            <div className={styles.brandCopy}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  className={styles.brandName}
                  style={{
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
              <div className={styles.brandTagline} style={{ color: '#64748B', letterSpacing: '0.04em', fontWeight: 600 }}>
                VIRTUAL CFO & FINANCIAL MANAGEMENT
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <Link href="/#services" style={{ fontSize: '0.92rem', fontWeight: 600 }} className={styles.navLink}>
              Services
            </Link>
            <Link href="/#diagnostic" style={{ fontSize: '0.92rem', fontWeight: 600 }} className={styles.navLink}>
              Financial Health Check
            </Link>
            <Link href="/#case-studies" style={{ fontSize: '0.92rem', fontWeight: 600 }} className={styles.navLink}>
              Case Studies
            </Link>
            <Link href="/#transformation" style={{ fontSize: '0.92rem', fontWeight: 600 }} className={styles.navLink}>
              Financial Confusion
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className={styles.actions}>
            <button
              onClick={onOpenBooking}
              className={`btn btn-primary btn-sm ${styles.bookingButton}`}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: '#93C5FD' }}></span>
              <span>Explore 1 on 1 Executive Finance Session</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileToggle}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
          <nav id="mobile-navigation" className={styles.mobileMenu} aria-label="Mobile navigation">
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
              Financial Health Check
            </Link>
            <Link
              href="/#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Case Studies
            </Link>
            <Link
              href="/#transformation"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#003366', fontSize: '1rem', fontWeight: 600 }}
            >
              Financial Confusion
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Explore 1 on 1 Executive Finance Session
            </button>
          </nav>
        )}

      </header>
    </>
  );
}
