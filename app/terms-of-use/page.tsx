'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function TermsOfUse() {
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
            href="/documents/terms-of-use.pdf"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Use</h1>
              <p className="text-gray-600">
                Last Updated: <span className="font-medium text-gray-900">08 January 2026</span>
              </p>
            </div>
            <a 
              href="/documents/terms-of-use.pdf" 
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
              These Terms of Use ("Terms") govern the access and use of the website, applications, 
              learning platforms, and services (collectively, the "Platform") operated by SkillSnap 
              Learning ("Company," "we," "our," or "us").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing, browsing, registering, or using our Platform in any manner, you agree to 
              be legally bound by these Terms, along with our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              If you do not agree to these Terms, please discontinue use of the Platform immediately.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-3">
              By creating an account, accessing our Platform, or using our services, you confirm that:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>You are at least 18 years old or have parental/guardian consent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>You have the legal capacity to enter into this agreement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>You will comply with all applicable laws and regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>All information provided by you is accurate and complete</span>
              </li>
            </ul>
          </section>

          {/* 2. User Accounts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              2. User Accounts
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Account Registration</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>You must register an account to access certain features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>You are responsible for maintaining account confidentiality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>You must not share login credentials with third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>You are liable for all activities conducted through your account</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Account Termination</h3>
                <p className="text-gray-700 mb-3">We reserve the right to suspend or terminate accounts if:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Terms of Use are violated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Fraudulent or illegal activities are detected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Payment obligations are not met</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Platform security is compromised</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Use of Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              3. Use of Services
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Permitted Use</h3>
                <p className="text-gray-700 mb-3">You may use the Platform for:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Educational and learning purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Accessing course materials and resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Participating in live classes and assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Communicating with instructors and support staff</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Prohibited Use</h3>
                <p className="text-gray-700 mb-3">You must not:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Copy, distribute, or resell our content without authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Reverse-engineer, decompile, or modify the Platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Engage in hacking, data scraping, or unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Upload malicious software, viruses, or harmful code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Harass, abuse, or threaten other users or staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Misrepresent your identity or affiliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Use the Platform for commercial purposes without consent</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Payment and Subscriptions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              4. Payment and Subscriptions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Fees</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Subscription fees are as per the pricing plan selected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>All fees are in Indian Rupees (INR) unless stated otherwise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Prices are subject to change with prior notice</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Payment Terms</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Payments must be made through authorized payment methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Subscriptions renew automatically unless cancelled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>You are responsible for applicable taxes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.3 Refund Policy</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Refunds are subject to our Refund Policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Cancellations must be made as per stated procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>No refunds for partial usage unless otherwise specified</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 mb-3">
              All content on the Platform, including but not limited to:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Videos, lectures, and course materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Images, graphics, and design elements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Software, code, and algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Trademarks, logos, and branding</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-3">
              ...are the exclusive property of SkillSnap Learning or our licensors and are protected 
              by intellectual property laws.
            </p>
            <p className="text-gray-700 font-semibold">
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          {/* 6. User-Generated Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              6. User-Generated Content
            </h2>
            <p className="text-gray-700 mb-3">
              If you submit content (e.g., comments, assignments, feedback):
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>You retain ownership but grant us a license to use it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>You confirm you have rights to share the content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Content must not violate laws or third-party rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>We reserve the right to remove inappropriate content</span>
              </li>
            </ul>
          </section>

          {/* 7. Privacy and Data Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              7. Privacy and Data Protection
            </h2>
            <p className="text-gray-700">
              Your use of the Platform is also governed by our{' '}
              <Link href="/privacy-policy" className="text-gray-900 font-semibold hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your data.
            </p>
          </section>

          {/* 8. Disclaimers and Limitations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              8. Disclaimers and Limitations of Liability
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">8.1 No Guarantees</h3>
                <p className="text-gray-700 mb-3">
                  While we strive for quality, we do not guarantee:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Specific academic results or outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Uninterrupted or error-free service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Complete accuracy of all content</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">8.2 Limitation of Liability</h3>
                <p className="text-gray-700 mb-3">
                  To the fullest extent permitted by law, SkillSnap Learning shall not be liable for:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Loss of data, revenue, or business opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Damages arising from third-party services or links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Technical failures or service interruptions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              9. Indemnification
            </h2>
            <p className="text-gray-700 mb-3">
              You agree to indemnify and hold harmless SkillSnap Learning, its directors, employees, 
              and affiliates from any claims, damages, or expenses arising from:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Your violation of these Terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Your misuse of the Platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Infringement of third-party rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span>Any illegal or unauthorized activities</span>
              </li>
            </ul>
          </section>

          {/* 10. Modifications to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              10. Modifications to These Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these Terms at any time. Changes will be 
              posted with a revised "Last Updated" date. Continued use of the Platform constitutes 
              acceptance of updated Terms.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes arising from these Terms shall be subject to the exclusive jurisdiction 
              of the courts in New Delhi, India.
            </p>
          </section>

          {/* 12. Severability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              12. Severability
            </h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions or concerns regarding these Terms of Use, please contact:
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
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="font-medium text-gray-900">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}