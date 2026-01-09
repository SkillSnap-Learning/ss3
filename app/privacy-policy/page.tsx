'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/skillsnaplogotransparent.png" 
              alt="SkillSnap Logo" 
              width={300}
              height={150}
              className="h-[150px] w-auto object-contain mt-4"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
            <Link href="/students" className="hover:text-orange-600 transition-colors">Student's Corner</Link>
            <Link href="/parents" className="hover:text-orange-600 transition-colors">Parent's Corner</Link>
            <Link href="/#contact-form" className="hover:text-orange-600 transition-colors">Contact Us</Link>
          </div>
          <a 
            href="/documents/privacy-policy.pdf"
            download
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:scale-105 shadow-lg shadow-blue-200 flex items-center gap-2"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 pt-32">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
              <p className="text-gray-600">
                Last Updated: <span className="font-medium text-gray-900">08 January 2026</span>
              </p>
            </div>
            <a 
              href="/documents/privacy-policy.pdf" 
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors shrink-0"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8 lg:p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy is issued in accordance with the Information Technology Act, 2000, 
              and the Information Technology (Reasonable Security Practices and Procedures and Sensitive 
              Personal Data or Information) Rules, 2011.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At SkillSnap Learning Pvt Ltd ("Company," "we," "our," or "us"), we are committed to 
              protecting the privacy and security of your personal information. This Privacy Policy 
              explains how we collect, use, store, and safeguard your data when you access or use our 
              website, applications, and services (collectively, the "Platform").
            </p>
          </div>

          {/* 1. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                <p className="text-gray-700 mb-3">We may collect the following personal information:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Name, age, and contact details (email, phone number)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Student's class, school name, and educational background</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Parent/guardian information (name, contact details)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Payment and billing information</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1.2 Usage Data</h3>
                <p className="text-gray-700 mb-3">We automatically collect:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Device information (IP address, browser type, operating system)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Learning activity and progress data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Platform interaction data (pages visited, features used)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-3">We use your information to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Provide and improve our educational services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Personalize learning experiences using AI-powered systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Process payments and manage subscriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Communicate updates, progress reports, and support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Ensure platform security and prevent fraud</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Comply with legal obligations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Conduct research and analytics to enhance our services</span>
              </li>
            </ul>
          </section>

          {/* 3. Data Sharing and Disclosure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-3">We do not sell your personal data. We may share information with:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Service Providers:</span> Third-party vendors for payment processing, hosting, and analytics
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Legal Compliance:</span> When required by law or to protect rights and safety
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Business Transfers:</span> In case of merger, acquisition, or asset sale
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <div>
                  <span className="font-semibold text-gray-900">With Consent:</span> When you explicitly authorize data sharing
                </div>
              </li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-3">
              We implement industry-standard security measures including:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Encryption of sensitive data (SSL/TLS protocols)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Secure access controls and authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Regular security audits and monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Employee confidentiality agreements</span>
              </li>
            </ul>
            <p className="text-gray-700">
              However, no system is completely secure. We encourage you to use strong passwords 
              and safeguard your login credentials.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              5. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain your personal information only as long as necessary to fulfill the purposes 
              outlined in this policy or as required by law. Upon request, we will delete or anonymize 
              your data, subject to legal and operational requirements.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              6. Your Rights
            </h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Access, update, or correct your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Request deletion of your data (subject to legal obligations)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Withdraw consent for data processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Lodge a complaint with relevant authorities</span>
              </li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:support@skillsnap.com" className="text-gray-900 font-medium hover:underline">
                support@skillsnap.com
              </a>
            </p>
          </section>

          {/* 7. Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700">
              We use cookies to enhance user experience, analyze platform usage, and provide 
              personalized content. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are intended for students aged 6-18. We collect personal information 
              from children only with verifiable parental consent. Parents have the right to 
              review, update, or delete their child's information at any time.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              9. Third-Party Links
            </h2>
            <p className="text-gray-700">
              Our Platform may contain links to external websites. We are not responsible for 
              the privacy practices of third-party sites. We recommend reviewing their privacy 
              policies before providing any personal information.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be posted on 
              this page with a revised "Last Updated" date. Continued use of the Platform after 
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold text-gray-900">SkillSnap Learning Pvt Ltd</p>
              <p>
                Email:{' '}
                <a href="mailto:support@skillsnaplearning.com" className="text-gray-900 hover:underline font-medium">
                  support@skillsnaplearning.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+919311933961" className="text-gray-900 hover:underline font-medium">
                  +91 9311933961
                </a>
              </p>
              <p>Address: Gurgaon, Haryana</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
            <p>&copy; 2026 Skillsnap Learning Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="font-medium text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-gray-900 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}