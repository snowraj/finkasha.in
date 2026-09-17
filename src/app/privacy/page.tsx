import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Finkasha Services Private Limited',
  description:
    'Comprehensive Privacy Policy and Enterprise Data Protection Charter for Finkasha Services Private Limited, complying with the DPDP Act 2023 and Indian data protection regulations.',
};

export default function PrivacyPage() {
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
            Data Protection & DPDP Act 2023 Compliance
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '14px', lineHeight: '1.2', color: '#003366' }}>
            Privacy Policy & Enterprise Data Charter
          </h1>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>
            <strong>Finkasha Services Private Limited</strong> (Brand: <em>Finkasha</em>)
            <br />
            AMFI Registered Mutual Fund Distributor: <strong>ARN-336498</strong>
            <br />
            Office 501, A-wing, Mahalaxmi New Castle, Opp. Shri Krishna Lawns, Ayodhya Nagar, Nashik Pune Road, Nashik, Maharashtra 422101
            <br />
            Last Updated: September 2026 | Effective Date: Immediately upon visiting or engaging
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
              1. Introduction & Commitment to Data Privacy
            </h2>
            <p>
              At <strong>Finkasha Services Private Limited</strong> (&quot;Finkasha&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we recognize that the financial information of high-growth enterprises (₹5 Cr to ₹50 Cr+ turnover) and their C-suite executives, Chartered Accountants, and promoters constitutes the lifeblood of their competitive advantage. We are committed to maintaining uncompromising standards of data privacy, confidentiality, and integrity.
            </p>
            <p style={{ marginTop: '10px' }}>
              This Privacy Policy explains how Finkasha collects, uses, processes, safeguards, and disposes of personal and corporate data in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and applicable Indian financial regulatory standards.
            </p>
          </section>

          {/* Section 2: Categories of Data */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              2. Categories of Information We Collect
            </h2>
            <p>
              Depending upon whether you visit our digital platform, submit our interactive Cash Leakage Diagnostic tool, schedule a paid consultation, or engage our Fractional CFO advisory retainers, we collect:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '16px 20px',
                  borderRadius: '10px',
                }}
              >
                <strong style={{ color: '#003366' }}>A. Corporate & Financial Profile Data:</strong>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '4px' }}>
                  Enterprise name, annual revenue/turnover bracket (₹5 Cr – ₹50 Cr+), industry sector (Manufacturing, Trading, Services), debtor aging metrics, working capital cycles, operating margins, and specific financial challenges submitted via diagnostic forms.
                </p>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '16px 20px',
                  borderRadius: '10px',
                }}
              >
                <strong style={{ color: '#003366' }}>B. C-Suite & Contact Information:</strong>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '4px' }}>
                  Full name, corporate email address, mobile/WhatsApp telephone number, executive designation (Founder, Managing Director, CEO, CFO, Chartered Accountant), and business location.
                </p>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '16px 20px',
                  borderRadius: '10px',
                }}
              >
                <strong style={{ color: '#003366' }}>C. Deep Advisory Financial Records (Under NDA):</strong>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '4px' }}>
                  For paid consultations and Virtual CFO retainers: Profit & Loss statements, balance sheets, trial balances, banking credit facilities, mutual fund and equity investment holdings, and tax audit records provided under formal engagement agreements.
                </p>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '16px 20px',
                  borderRadius: '10px',
                }}
              >
                <strong style={{ color: '#003366' }}>D. Digital Diagnostics & Analytics:</strong>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '4px' }}>
                  IP addresses, browser types, session duration, referral URLs, and interactions on our web platform collected to optimize speed and user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Legal Basis & Purpose */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              3. Purpose & Legal Basis for Data Processing
            </h2>
            <p>
              Finkasha processes personal and corporate financial data solely for legitimate, explicit, and pre-determined professional purposes:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Scheduling, coordinating, and delivering paid strategic financial consultations.</li>
              <li>Performing quantitative cash leakage diagnostics and working capital optimization analyses.</li>
              <li>Executing Fractional CFO retainers, cash flow forecasting, and monthly MIS dashboard generation.</li>
              <li>Structuring customized mutual fund, securities, and wealth preservation portfolios for promoters.</li>
              <li>Fulfilling legal obligations under Indian tax, corporate, and digital data protection statutes.</li>
            </ul>
          </section>

          {/* Section 4: Security Safeguards */}
          <section
            style={{
              background: '#F0F5FB',
              border: '1.5px solid #BFDBFE',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <h2 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '10px' }}>
              4. Security Standards & Safeguarding Protocols
            </h2>
            <p>
              We implement comprehensive technical and organizational measures to ensure your enterprise financial data is insulated against unauthorized access, loss, or leakage:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>Data Encryption:</strong> All data transmitted through our web portal is encrypted in transit utilizing modern Transport Layer Security (TLS 1.3 / HTTPS).
              </li>
              <li>
                <strong>Role-Based Access Controls:</strong> Client financial records are restricted exclusively to senior advisory personnel assigned directly to your engagement.
              </li>
              <li>
                <strong>Zero Data Monetization:</strong> We do NOT sell, rent, monetize, or trade your enterprise financial information, contact records, or consultation notes to any third-party marketing networks.
              </li>
              <li>
                <strong>Mutual Non-Disclosure:</strong> Our advisory team is bound by strict confidentiality and non-disclosure obligations enforceable under Indian law.
              </li>
            </ul>
          </section>

          {/* Section 5: Data Retention & Destruction */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              5. Data Retention & Secure Disposal
            </h2>
            <p>
              Finkasha retains corporate and personal information only for as long as necessary to fulfill the purposes for which it was collected, or to comply with statutory accounting and legal limitation requirements under Indian law. Upon expiration or formal termination of an advisory contract, and upon written request by the Client, all proprietary financial worksheets, raw data files, and diagnostic records shall be securely purged and destroyed from our active repositories.
            </p>
          </section>

          {/* Section 6: Client Rights under DPDP Act */}
          <section>
            <h2 style={{ fontSize: '1.35rem', color: '#003366', marginBottom: '10px' }}>
              6. Your Rights as a Data Principal (DPDP Act 2023)
            </h2>
            <p>
              In accordance with the provisions of the Digital Personal Data Protection Act, 2023, you have the following rights regarding your personal data:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Right to Access:</strong> The right to obtain a summary of your personal data processed by Finkasha.</li>
              <li><strong>Right to Correction & Completion:</strong> The right to correct inaccurate data or update outdated enterprise contact details.</li>
              <li><strong>Right to Erasure:</strong> The right to request deletion of personal information where processing is no longer required by law.</li>
              <li><strong>Right of Grievance Redressal:</strong> The right to readily register a grievance with our designated Data Protection & Grievance Officer.</li>
            </ul>
          </section>

          {/* Section 7: Grievance Redressal Officer */}
          <section
            id="grievance"
            style={{
              background: '#F8FAFC',
              border: '1px solid #D9E4F0',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', color: '#003366', marginBottom: '10px' }}>
              7. Data Protection Grievance Redressal Officer
            </h2>
            <p style={{ marginBottom: '12px' }}>
              As mandated by the Information Technology Act 2000 and DPDP Act 2023, the details of our designated Grievance Officer are set forth below:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
              <div><strong>Grievance Officer:</strong> Kamlesh Thakur (Founder & Director)</div>
              <div><strong>Entity:</strong> Finkasha Services Private Limited</div>
              <div><strong>Address:</strong> Office 501, A-wing, Mahalaxmi New Castle, Opp. Shri Krishna Lawns, Ayodhya Nagar, Nashik Pune Road, Nashik, Maharashtra 422101</div>
              <div><strong>Email:</strong> <a href="mailto:kamlesh@finkasha.com" style={{ color: '#005BB5' }}>kamlesh@finkasha.com</a> / <a href="mailto:contact@finkasha.com" style={{ color: '#005BB5' }}>contact@finkasha.com</a></div>
              <div><strong>Phone:</strong> <a href="tel:+919970208927" style={{ color: '#005BB5' }}>+91 9970208927</a> / <a href="tel:+917477711173" style={{ color: '#005BB5' }}>+91 74777 11173</a></div>
              <div><strong>Response Window:</strong> We acknowledge data grievances within 48 hours and resolve within statutory timelines.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
