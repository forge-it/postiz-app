import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Terms of Service - Postiz',
  description: 'Terms of service for Postiz social media scheduling tool',
};

export default function TermsOfServicePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navigation Header */}
        <div className="mb-6">
          <nav className="flex items-center space-x-4 text-sm">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              ← Back to Postiz
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Policy
            </a>
          </nav>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to the Postiz website (the "Site"). By accessing or using
              the Site, you agree to comply with and be bound by the following
              terms and conditions ("Terms of Service").
            </p>

            <h2>1. Newsletter Subscription</h2>
            <p>
              You may subscribe to our newsletter to receive updates about our
              products and promotions. By subscribing to our newsletter, you
              agree to receive marketing communications from us via email. You
              can unsubscribe from our newsletter at any time by clicking the
              "unsubscribe" link in the email.
            </p>

            <h2>2. Payment</h2>
            <p>
              If you purchase a subscription to our course, you agree to pay the
              applicable fees as indicated during the checkout process. All
              payments are final and non-refundable, unless otherwise specified
              by law. We may use a third-party payment processor to process your
              payment, and your payment information will be subject to the
              processor's privacy policy.
            </p>

            <h2>3. Use of Cookies</h2>
            <p>
              We use cookies and similar technologies to track your usage of the
              Site and for marketing purposes. By using the Site, you consent to
              the use of cookies in accordance with our Privacy Policy.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on the Site, including but not limited to text,
              graphics, logos, images, videos, and course content, is the
              property of Postiz or its licensors and is protected by
              intellectual property laws. You may not reproduce, modify,
              distribute, or otherwise use any content on the Site without our
              prior written consent.
            </p>

            <h2>5. Disclaimer</h2>
            <p>
              The information and content on the Site, including the course
              content, are provided for informational purposes only and are not
              intended as professional advice. We make no representations or
              warranties of any kind, express or implied, about the accuracy,
              reliability, completeness, or suitability of the information and
              content on the Site. You use the Site and the course content at
              your own risk.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Postiz be liable for any indirect, incidental,
              special, or consequential damages arising out of or in connection
              with your use of the Site, the course content, or your
              subscription to the newsletter, whether based on contract, tort,
              negligence, strict liability, or otherwise. Our total liability to
              you for any claim arising out of or in connection with the Site,
              the course content, or your subscription to the newsletter shall
              not exceed the total amount paid by you for the course
              subscription.
            </p>

            <h2>7. Changes to the Terms of Service</h2>
            <p>
              We may update or modify these Terms of Service from time to time,
              and any changes will be effective upon posting on the Site. Your
              continued use of the Site after any such changes constitutes your
              acceptance of the revised Terms of Service.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Postiz, its affiliates,
              officers, directors, employees, agents, and licensors from and
              against any claims, liabilities, damages, losses, and expenses,
              including without limitation reasonable attorney's fees, arising
              out of or in connection with your use of the Site, the course
              content, or your subscription to the newsletter, your violation of
              these Terms of Service, or your violation of any rights of another
              party.
            </p>

            <h2>9. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the jurisdiction where Postiz is
              headquartered without giving effect to any principles of conflicts
              of law. You agree to submit to the exclusive jurisdiction of the
              courts in that jurisdiction for any disputes arising out of or in
              connection with these Terms of Service or your use of the Site.
            </p>

            <h2>10. Entire Agreement</h2>
            <p>
              These Terms of Service constitute the entire agreement between you
              and Postiz regarding your use of the Site, the course content, and
              your subscription to the newsletter and supersede all prior and
              contemporaneous agreements and understandings, whether oral or
              written, relating to the same subject matter.
            </p>

            <h2>11. Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid,
              illegal, or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>

            <h2>12. Waiver</h2>
            <p>
              The failure of Postiz to enforce any right or provision of these
              Terms of Service shall not constitute a waiver of that right or
              provision.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms of
              Service, please contact us at forge.itc@gmail.com
            </p>

            <h2>14. Third Party Terms</h2>
            <p>
              Our primary purpose for using information is to publish your
              content on social networks you've authenticated with.
              <br />
              We may allow you to link your account on Postiz with an account on
              a third-party social network platform, such as YouTube,
              <br />
              and to transfer your information to and from the applicable
              third-party platform.
              <br />
              Once you connect your content to a social media platform, its use
              will be governed by its terms.
              <br />
              For example, if you choose to connect your YouTube account to the
              Services,
              <br />
              This connection uses YouTube's API services, and the YouTube Terms
              of Service located at{' '}
              <a
                href="https://www.youtube.com/t/terms"
                className="text-blue-600 hover:underline"
              >
                https://www.youtube.com/t/terms
              </a>{' '}
              will apply to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
