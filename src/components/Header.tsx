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
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(7, 11, 20, 0.92)' : 'rgba(7, 11, 20, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0, 208, 156, 0.2)' : 'rgba(255, 255, 255, 0.06)'}`,
        transition: 'all 0.3s ease',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 0 15px rgba(0, 124, 232, 0.3)',
              border: '1px solid rgba(0, 145, 255, 0.3)',
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt="Finkasha Logo"
              width={42}
              height={42}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.06em', color: '#fff' }}>
                FINKASHA
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(0, 124, 232, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(0, 124, 232, 0.3)',
                }}
              >
                .IN
              </span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94A3B8', letterSpacing: '0.08em', fontWeight: 500 }}>
              FRACTIONAL CFO & FINANCIAL ADVISORY
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <Link href="/#services" style={{ fontSize: '0.92rem', color: '#94A3B8', fontWeight: 500 }} className="nav-link">
            Services
          </Link>
          <Link href="/#diagnostic" style={{ fontSize: '0.92rem', color: '#94A3B8', fontWeight: 500 }} className="nav-link">
            Cash Leakage Diagnostic
          </Link>
          <Link href="/#transformation" style={{ fontSize: '0.92rem', color: '#94A3B8', fontWeight: 500 }} className="nav-link">
            Case Studies
          </Link>
          <Link href="/#comparison" style={{ fontSize: '0.92rem', color: '#94A3B8', fontWeight: 500 }} className="nav-link">
            Virtual CFO vs CA
          </Link>
          <Link href="/#faq" style={{ fontSize: '0.92rem', color: '#94A3B8', fontWeight: 500 }} className="nav-link">
            FAQ
          </Link>
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="tel:+919970208927"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              color: '#E2E8F0',
              padding: '8px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            className="phone-quick-link"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D09C" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 9970208927</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn btn-primary btn-sm"
            style={{ position: 'relative' }}
          >
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              color: '#fff',
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
            backgroundColor: '#0A0F1D',
            borderBottom: '1px solid rgba(0, 208, 156, 0.2)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#E2E8F0', fontSize: '1rem', fontWeight: 500 }}
          >
            Services
          </Link>
          <Link
            href="/#diagnostic"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#E2E8F0', fontSize: '1rem', fontWeight: 500 }}
          >
            Cash Leakage Diagnostic
          </Link>
          <Link
            href="/#transformation"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#E2E8F0', fontSize: '1rem', fontWeight: 500 }}
          >
            Case Studies
          </Link>
          <Link
            href="/#comparison"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#E2E8F0', fontSize: '1rem', fontWeight: 500 }}
          >
            Virtual CFO vs CA
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#E2E8F0', fontSize: '1rem', fontWeight: 500 }}
          >
            FAQ
          </Link>
          <div style={{ display: 'flex', gap: '10px', paddingTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Book Strategic Consultation
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link:hover {
          color: #00d09c !important;
        }
        @media (max-width: 900px) {
          :global(.desktop-nav), :global(.phone-quick-link) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
