import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Finkasha Services Private Limited',
  description:
    'Official Terms of Service and Advisory Agreement for Finkasha Services Private Limited, covering Fractional CFO, paid financial consultancy, enterprise confidentiality, and client engagements.',
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '50px 0 90px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '28px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#005BB5',
              fontSize: '0.92rem',
              fontWeight: 700,
            }}
          >
            ← Back to Finkasha Home
          </Link>
        </div>

        {/* Document Header Card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #D9E4F0',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0, 51, 102, 0.05)',
            marginBottom: '32px',
          }}
        >
          <div className="badge" style={{ marginBottom: '14px' }}>
            Legal Framework & Client Agreement
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '14px', lineHeight: '1.2', color: '#003366' }}>
            Terms & Conditions of Service
          </h1>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>
            <strong>Finkasha Services Private Limited</strong> (Brand: <em>Finkasha</em>)
            <br />
            Financial Management Consultancy
            <br />
            Registered Office: Office 501, A-wing, Mahalaxmi New Castle, Opp. Shri Krishna Lawns, Ayodhya Nagar, Nashik Pune Road, Nashik, Maharashtra 422101
            <br />
            Last Updated: September 2026 | Effective Date: Immediately upon engagement
          </p>
        </div>

        {/* Legal Text Content */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #D9E4F0',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0, 51, 102, 0.05)',
            color: '#334155',
            fontSize: '0.96rem',
            lineHeight: '1.8',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          {/* Section 1 */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              1. Preamble & Acceptance of Terms
            </h2>
            <p>
              These Terms & Conditions (&quot;Agreement&quot;) constitute a legally binding agreement between you
              (whether acting in your individual capacity or as an authorized representative of an enterprise,
              corporation, partnership, or LLP, hereinafter referred to as the &quot;Client&quot;) and{' '}
              <strong>Finkasha Services Private Limited</strong> (hereinafter referred to as &quot;Finkasha&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p style={{ marginTop: '10px' }}>
              By accessing the website <code style={{ color: '#005BB5', fontWeight: 600 }}>www.finkasha.in</code> (or associated domains), booking a strategic financial consultation, signing a Virtual/Fractional CFO statement of work (SOW), or utilizing any advisory deliverables, you irrevocably acknowledge, agree, and accept all terms, conditions, disclaimers, and covenants set forth herein.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              2. Nature of Services & Functioning of the Company
            </h2>
            <p>
              Finkasha operates as an institutional financial intelligence and fractional executive advisory firm. Our primary business operations include:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>Fractional / Virtual CFO Services:</strong> Long-term and retainer-based strategic financial leadership for enterprises generating ₹5 Crore to ₹50 Crore+ (and ₹20 Crore to ₹50 Crore+) annual turnover across Manufacturing, Trading & Export-Import, and Service sectors. Services include cash flow modeling, budgeting, financial analysis & reporting (MIS), working capital optimization, and plugging operational cash leakages.
              </li>
              <li>
                <strong>Paid Strategic Financial Consultations:</strong> Direct 1-on-1 strategic advisory sessions provided to business owners, enterprise founders, practicing Chartered Accountants (CAs), and existing corporate CFOs seeking high-level diagnostic second opinions, restructuring roadmaps, or working capital reviews.
              </li>
              <li>
                <strong>Financial Planning & MIS Reporting:</strong> Monthly Executive MIS cockpits, P&L dashboards, annual budgeting, variance analysis, KPI reporting frameworks, and board-ready financial packs for enterprise leadership.
              </li>
              <li>
                <strong>Compliance & Business Finance Advisory:</strong> Proactive structuring advice on GST, TDS, statutory compliance, bank credit limit optimization, business expansion planning, capex feasibility, and cost rationalization.
              </li>
            </ul>
          </section>

          {/* Section 3: Professional Disclaimer */}
          <section
            style={{
              background: '#FEF3C7',
              borderLeft: '4px solid #D97706',
              padding: '18px 22px',
              borderRadius: '0 8px 8px 0',
              color: '#78350F',
            }}
          >
            <h3 style={{ fontSize: '1.1rem', color: '#92400E', marginBottom: '6px', fontWeight: 700 }}>
              3. Non-Statutory Advisory & Professional Disclaimer
            </h3>
            <p style={{ fontSize: '0.92rem' }}>
              <strong>CRITICAL NOTICE:</strong> Finkasha Services Private Limited provides managerial, strategic, and fractional financial consultancy services. <strong>Finkasha does not perform statutory audit, internal audit required under Section 138 of the Companies Act 2013, tax audit under Section 44AB of the Income Tax Act 1961, or issue statutory CA audit certificates.</strong>
            </p>
            <p style={{ fontSize: '0.92rem', marginTop: '8px' }}>
              The Client maintains an independent relationship with their respective statutory auditors and tax consultants. Finkasha&apos;s fractional CFO leadership acts in synergy with the Client&apos;s existing accounts and auditing teams to ensure forward-looking managerial clarity and governance excellence.
            </p>
          </section>

          {/* Section 4: Non-Disclosure Agreement */}
          <section
            style={{
              background: '#F0F5FB',
              border: '1.5px solid #BFDBFE',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <h2 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '10px' }}>
              4. Confidentiality & Non-Disclosure Agreement (NDA Protocol)
            </h2>
            <p>
              Given the sensitive financial nature of enterprises with ₹5 Cr to ₹50 Cr+ turnover, confidentiality is paramount to our practice:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>Proprietary Enterprise Data:</strong> All financial statements, profit & loss reports, balance sheets, vendor contracts, margin percentages, tax filings, debtor aging lists, and banking records shared by the Client shall be treated as strictly Confidential Information.
              </li>
              <li>
                <strong>Standard of Care:</strong> Finkasha agrees to implement institutional-grade technical, administrative, and physical safeguards to prevent any unauthorized disclosure or leakage of Client financial data.
              </li>
              <li>
                <strong>Non-Use & Exclusivity:</strong> Confidential Information shall be used exclusively for delivering the agreed-upon strategic consulting or Fractional CFO advisory and will never be shared with third parties or competitors.
              </li>
              <li>
                <strong>Execution of Standalone NDAs:</strong> Finkasha stands ready to execute bespoke bilateral Non-Disclosure Agreements (NDAs) prior to receiving proprietary financial ledgers upon Client request.
              </li>
            </ul>
          </section>

          {/* Section 5: Paid Consultations */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              5. Paid Strategic Consultations: Scheduling, Fees & Cancellation
            </h2>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>Consultation Bookings:</strong> Paid 1-on-1 strategic consultation slots reserved by business owners, CFOs, or CAs are confirmed only upon receipt of the agreed advisory fee or formal confirmation from our executive desk.
              </li>
              <li>
                <strong>Rescheduling Policy:</strong> Clients may reschedule a confirmed consultation session without penalty up to 24 hours prior to the scheduled slot by giving written notice to <code style={{ color: '#005BB5' }}>kamlesh@finkasha.com</code> or via our executive WhatsApp line.
              </li>
              <li>
                <strong>Cancellation & Refunds:</strong> Due to the allocation of senior executive time and diagnostic preparation, consultation fees are non-refundable once an advisory diagnostic review has commenced. In exceptional circumstances, credit toward future advisory services may be granted at Finkasha&apos;s sole discretion.
              </li>
              <li>
                <strong>Retainer Engagements:</strong> Fractional CFO monthly retainers are governed by specific Statements of Work (SOW) outlining monthly deliverable schedules, SLA commitments, and payment milestones.
              </li>
            </ul>
          </section>

          {/* Section 6: Client Obligations */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              6. Client Disclosures & Accuracy of Information
            </h2>
            <p>
              The efficacy of financial modeling, cash flow forecasting, and cash leakage identification depends directly upon the veracity and completeness of data supplied by the Client. The Client warrants and represents that all corporate turnover figures, debtor ledgers, operational cost sheets, and financial disclosures provided to Finkasha are authentic, accurate, and non-fraudulent. Finkasha shall not be held liable for advisory recommendations based on inaccurate or falsified financial data provided by the Client.
            </p>
          </section>

          {/* Section 7: Intellectual Property */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              7. Intellectual Property & Advisory Frameworks
            </h2>
            <p>
              All proprietary methodologies, financial models, Excel forecasting templates, cash leakage diagnostic algorithms, and presentation decks developed by Finkasha remain the exclusive intellectual property of Finkasha Services Private Limited. Upon payment in full, the Client is granted a non-exclusive, non-transferable, perpetual license to use the final customized reports and recommendations solely for their internal enterprise operations.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              8. Limitation of Liability & Market Risk
            </h2>
            <p>
              Strategic financial planning and management consultancy involve macroeconomic variables, commercial dynamics, and operational risks beyond human control. Finkasha provides professional managerial guidance based on historical performance and prudent analytical standards. In no event shall Finkasha, its directors, or its consultants be liable for indirect, consequential, punitive, or loss-of-profit damages arising out of commercial decisions executed by the Client. Finkasha&apos;s aggregate liability under any engagement shall be limited to the professional advisory fee received for that specific service.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              9. Governing Law & Dispute Resolution
            </h2>
            <p>
              This Agreement and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of the Republic of India. In the event of any dispute, the parties agree to first seek amicable settlement through mutual executive consultation. If unresolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the competent courts in Nashik / Maharashtra, India.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section
            style={{
              background: '#F8FAFC',
              border: '1px solid #D9E4F0',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', color: '#003366', marginBottom: '10px' }}>
              10. Legal Inquiries & Official Notices
            </h2>
            <p>For any queries regarding these Terms & Conditions or to execute a corporate NDA:</p>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
              <div><strong>Entity:</strong> Finkasha Services Private Limited</div>
              <div><strong>Attn:</strong> Kamlesh Thakur (Founder / Director)</div>
              <div><strong>Office:</strong> Office 501, A-wing, Mahalaxmi New Castle, Opp. Shri Krishna Lawns, Ayodhya Nagar, Nashik Pune Road, Nashik, Maharashtra 422101</div>
              <div><strong>Email:</strong> <a href="mailto:kamlesh@finkasha.com" style={{ color: '#005BB5' }}>kamlesh@finkasha.com</a> / <a href="mailto:contact@finkasha.com" style={{ color: '#005BB5' }}>contact@finkasha.com</a></div>
              <div><strong>Phone:</strong> <a href="tel:+919970208927" style={{ color: '#005BB5' }}>+91 9970208927</a> / <a href="tel:+917477711173" style={{ color: '#005BB5' }}>+91 74777 11173</a></div>
              <div><strong>Website:</strong> <a href="https://www.finkasha.in" style={{ color: '#005BB5' }}>www.finkasha.in</a> / <a href="https://www.finkasha.com" style={{ color: '#005BB5' }}>www.finkasha.com</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
