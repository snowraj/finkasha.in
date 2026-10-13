'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';
import styles from './page.module.css';

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('Fractional / Virtual CFO Retainer');

  const handleOpenBooking = (goal: string) => {
    setSelectedGoal(goal);
    setBookingOpen(true);
  };

  const services = [
    {
      id: 'paid-consultancy',
      badge: '1 ON 1 EXECUTIVE FINANCE SESSION',
      title: '1 on 1 Executive Finance Session',
      subtitle: 'A focused conversation about your business finances and the decisions you are trying to make.',
      description:
        'In this 45-minute session, we understand your current financial concerns, where money may be blocked, what needs attention and what you should look at before making your next important business decision.',
      deliverablesHeading: 'WHAT WE DISCUSS',
      deliverables: [
        {
          title: 'Your Current Financial Concerns',
          description: 'Understand the main money-related issues you are dealing with today.',
        },
        {
          title: 'Cash & Working Capital',
          description: 'Discuss where money may be blocked, stuck or running low.',
        },
        {
          title: 'Important Business Decisions',
          description: 'Discuss expansion, borrowing, machinery, hiring or other decisions you are considering.',
        },
        {
          title: 'Areas That Need Attention',
          description: 'Identify which financial areas deserve a closer look first.',
        },
        {
          title: 'What To Look At Next',
          description: 'Leave with a clearer understanding of the numbers, questions and priorities you should focus on.',
        },
      ],
      forWhom: 'Business owners, promoters and directors of ₹5 Cr–₹50 Cr manufacturing, trading and service businesses.',
      price: '₹2,000 + GST',
      cta: {
        label: 'Book 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
    {
      id: 'fractional-cfo',
      badge: 'CORE FINANCIAL MANAGEMENT SERVICE',
      title: 'Virtual CFO & Financial Management',
      subtitle: 'Ongoing financial review and decision support for ₹5 Cr–₹50 Cr businesses.',
      description:
        'We help you understand where your cash is going, what needs attention, and what financial decisions should be planned ahead.',
      deliverablesHeading: 'WHAT WE HELP YOU MANAGE',
      deliverables: [
        {
          title: 'Cash Flow Management',
          description: 'Understand expected money coming in, payments going out and periods when cash may be low.',
        },
        {
          title: 'Working Capital Review',
          description: 'Identify money blocked, stuck or tied up in customer payments, stock and day-to-day operations.',
        },
        {
          title: 'Collections & Payment Planning',
          description: 'Improve the way customer collections, supplier payments and upcoming commitments are managed.',
        },
        {
          title: 'Borrowing & Debt Review',
          description: 'Understand existing loans, CC/OD utilisation, repayment commitments and future borrowing requirements.',
        },
        {
          title: 'Cost & Margin Review',
          description: 'Identify where costs are increasing and how they may be affecting business profitability.',
        },
        {
          title: 'Monthly Management Review',
          description: 'Regularly review what changed, why it changed, what needs attention and what action should come next.',
        },
      ],
      forWhom: 'Business owners, promoters and directors in manufacturing, trading and service businesses.',
      cta: {
        label: 'Explore 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
    {
      id: 'cash-leakage',
      badge: 'CASH FLOW & WORKING CAPITAL REVIEW',
      title: 'Cash Flow & Blocked Cash Review',
      subtitle: 'Understand where cash is getting blocked, why cash is running low, and what needs attention first.',
      description:
        'We review customer collections, stock, supplier payments, operating expenses and borrowing to understand where money may be stuck, held up or being used inefficiently.',
      deliverablesHeading: 'WHAT WE REVIEW',
      deliverables: [
        {
          title: 'Cash Flow Review',
          description: 'Understand where money is coming in, where it is going and where it may be getting blocked.',
        },
        {
          title: 'Customer Collection Review',
          description: 'Identify delayed receivables, ageing customers and areas where collections need more attention.',
        },
        {
          title: 'Expense Review',
          description: 'Identify rising costs, unnecessary expenses and areas that may be affecting profitability.',
        },
        {
          title: 'Borrowing & Interest Review',
          description: 'Understand CC/OD usage, repayment commitments and the cost of borrowed funds.',
        },
        {
          title: 'Working Capital Cycle Review',
          description: 'Understand how long money remains tied up between buying, selling and collecting from customers.',
        },
        {
          title: 'Stock & Supplier Review',
          description: 'Identify cash blocked in excess stock, slow-moving inventory or poorly timed supplier payments.',
        },
      ],
      forWhom: 'Businesses with good sales but low cash, delayed customer payments, excess stock, rising borrowing or unclear working-capital movement.',
      cta: {
        label: 'Explore 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
    {
      id: 'cfo-ca-advisory',
      badge: 'SUPPORT FOR CFOs & CAs',
      preserveBadgeCase: true,
      title: 'Financial Analysis & Decision Support for CFOs & CAs',
      subtitle: 'Additional financial analysis, modelling and planning support for existing finance teams.',
      description:
        'We work alongside CFOs, Chartered Accountants and finance teams who need additional support with forecasting, financial modelling, business analysis and important management decisions.',
      deliverablesHeading: 'HOW WE CAN SUPPORT YOUR TEAM',
      deliverables: [
        {
          title: 'Financial Modelling',
          description: 'Build models to understand future sales, costs, cash requirements and business decisions.',
        },
        {
          title: 'Scenario Analysis',
          description: 'Compare different situations and understand how changes in costs, sales, currency or operations may affect the business.',
        },
        {
          title: 'Decision Review',
          description: 'Provide an additional financial view on expansion, borrowing, CapEx, pricing or cost decisions.',
        },
        {
          title: 'Forecasting & Budgeting',
          description: 'Support annual budgets, rolling forecasts and budget-vs-actual reviews.',
        },
        {
          title: 'Dashboard & MIS Support',
          description: 'Help structure financial dashboards and management reports around the numbers that matter.',
        },
        {
          title: 'Management & Funding Presentations',
          description: 'Help organise financial information for management, banks, lenders or other stakeholders.',
        },
      ],
      forWhom: 'CFOs, Chartered Accountants and finance teams working with growing ₹5 Cr–₹50 Cr businesses.',
      cta: {
        label: 'Explore 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
    {
      id: 'financial-planning',
      badge: 'ANALYSIS, DASHBOARDS & PLANNING',
      title: 'Financial Analysis, Dashboards & Planning',
      subtitle: 'Turn your business numbers into clear reports, future plans and better decisions.',
      description:
        'We help you understand what is happening in the business today, plan what may happen next, and test important financial decisions before committing money.',
      deliverablesHeading: 'WHAT WE HELP YOU ANALYSE & PLAN',
      deliverables: [
        {
          title: 'Management Dashboards',
          description: 'See sales, margins, cash, receivables, expenses and important business numbers in one place.',
        },
        {
          title: 'Business & Profitability Analysis',
          description: 'Understand which products, customers, branches or business areas are performing well.',
        },
        {
          title: 'Budgeting',
          description: 'Plan income, expenses and cash requirements before the year or quarter begins.',
        },
        {
          title: 'Forecasting',
          description: 'Estimate what sales, costs and cash requirements may look like in the coming months.',
        },
        {
          title: 'Financial Modelling',
          description: 'Test decisions such as expansion, machinery, hiring, borrowing or pricing changes before committing money.',
        },
        {
          title: 'Budget vs Actual Review',
          description: 'Compare what you planned with what actually happened and understand the reasons for the difference.',
        },
      ],
      forWhom: 'Business owners, promoters, directors and finance teams who want clearer reports, better planning and stronger financial visibility.',
      cta: {
        label: 'Explore 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
    {
      id: 'compliance-advisory',
      badge: 'BUSINESS FINANCE CONSULTATION',
      title: 'Business Finance & Growth Consultation',
      subtitle: 'Financial guidance for important business, funding and growth decisions.',
      description:
        'We help business owners think through expansion, borrowing, pricing, costs and other major financial decisions before committing money.',
      deliverablesHeading: 'WHAT WE CAN DISCUSS',
      deliverables: [
        {
          title: 'Business Expansion Review',
          description: 'Understand the likely cash requirement and financial impact of growth plans.',
        },
        {
          title: 'Funding & Borrowing Review',
          description: 'Discuss internal funds, loans, CC/OD and other funding options from a business-finance perspective.',
        },
        {
          title: 'CapEx & Investment Review',
          description: 'Review machinery, capacity, branch, warehouse or other major business investments before committing money.',
        },
        {
          title: 'Cost & Pricing Review',
          description: 'Understand how pricing, margins and major cost changes may affect the business.',
        },
        {
          title: 'Scenario Analysis',
          description: 'Compare different financial options and understand what each could mean for cash, costs and profitability.',
        },
        {
          title: 'Growth Decision Support',
          description: 'Get an independent financial view before taking a major business decision.',
        },
      ],
      forWhom: 'Business owners, promoters and directors who want a financial view before making an important business decision.',
      cta: {
        label: 'Explore 1 on 1 Executive Finance Session',
        icon: '→',
        bookingGoal: 'Paid 1-on-1 Strategic Financial Consultation',
      },
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '60px 0 100px 0' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '32px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#005BB5',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            ← Back to Finkasha Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
            FINANCIAL SERVICES FOR GROWING BUSINESSES
          </div>
          <h1 className={`section-title ${styles.pageTitle}`}>
            Financial Management &amp; Growth Support For{' '}
            <span className="text-gradient">₹5 Cr–₹50 Cr Businesses</span>
          </h1>
          <p className="section-subtitle">
            From managing cash and understanding your numbers to budgeting, forecasting and planning business growth, Finkasha helps you make important financial decisions with more clarity and control.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {services.map((srv, index) => (
            <div
              key={srv.id}
              id={srv.id}
              className={`glass-card ${styles.serviceCard}`}
              style={{
                border: '1px solid rgba(148, 163, 184, 0.15)',
              }}
            >
              <div>
                <span className="badge" style={{ fontSize: '0.75rem', marginBottom: '14px', textTransform: srv.preserveBadgeCase ? 'none' : 'uppercase' }}>
                  {srv.badge}
                </span>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '10px', color: '#003366' }}>
                  {index > 0 && <>Service {index}: </>}
                  {srv.title}
                </h2>
                <h3 style={{ fontSize: '1.05rem', color: '#005BB5', fontWeight: 600, marginBottom: '16px' }}>
                  {srv.subtitle}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {srv.description}
                </p>

                <div
                  style={{
                    background: '#F0F5FB',
                    border: '1px solid #D9E4F0',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: '#334155',
                  }}
                >
                  <strong style={{ color: '#003366' }}>Ideal For: </strong> {srv.forWhom}
                </div>
              </div>

              <div
                className={styles.scopeCard}
                style={{
                  background: '#002B54',
                  border: '1px solid rgba(147, 197, 253, 0.25)',
                  borderRadius: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {srv.deliverablesHeading ?? 'Key Deliverables & Scope'}
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                    {srv.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#E2E8F0' }}>
                        <span style={{ color: '#93C5FD' }}>✓</span>
                        {typeof del === 'string' ? (
                          <span>{del}</span>
                        ) : (
                          <span className={styles.serviceArea}>
                            <strong>{del.title}</strong>
                            {del.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '28px' }}>
                  {srv.price && <p className={styles.sessionPrice}>{srv.price}</p>}
                  <button
                    onClick={() => handleOpenBooking(srv.cta?.bookingGoal ?? srv.title)}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    <span>{srv.cta?.label ?? 'Book Consultation for This Service'}</span>
                    <span>{srv.cta?.icon ?? '⚡'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        key={selectedGoal}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialChallenge={selectedGoal}
      />
    </div>
  );
}
