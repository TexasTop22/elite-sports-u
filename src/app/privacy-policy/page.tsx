import React from "react";

export const metadata = {
  title: "Privacy Policy | Elite Sports University",
  description:
    "Privacy Policy for Elite Sports University covering data collection, SMS communications, and user rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: October 15, 2026
        </p>

        {/* INTRO */}
        <section className="mb-10">
          <p className="mb-4">
            Elite Sports University (&quot;Elite Sports University&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) respects your privacy and is committed to protecting the
            personal information you share with us. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website, register for programs, or
            communicate with us via SMS or other channels.
          </p>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number</li>
            <li>Account and registration information</li>
            <li>Program enrollment and attendance data</li>
            <li>Payment and billing-related records (processed securely)</li>
            <li>Communications sent to or received from us</li>
            <li>Messaging preferences and SMS opt-in and opt-out records</li>
          </ul>
        </section>

        {/* HOW WE USE INFORMATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage programs and services</li>
            <li>To send class schedules, reminders, and updates</li>
            <li>To respond to inquiries and provide customer support</li>
            <li>To manage accounts, billing, and attendance</li>
            <li>To improve our services and user experience</li>
            <li>To send marketing messages where you have opted in</li>
          </ul>
        </section>

        {/* SMS COMMUNICATIONS */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">
    SMS Communications
  </h2>
  <p className="mb-4">
    Elite Sports University uses mobile phone numbers to respond to
    inquiries and provide requested service communications, including
    class reminders, schedule updates, appointment follow-ups, and
    account notifications.
  </p>
  <p className="mb-4">
    If you separately opt in to marketing texts, we may also send
    promotional offers, program announcements, and event information.
    Consent to marketing texts is not a condition of purchase.
  </p>
  <p className="mb-4">
    Message frequency varies. Message and data rates may apply.
  </p>
  <p className="mb-4 font-semibold">
    We will not share your mobile information or opt-in consent with
    third parties or affiliates for their marketing or promotional
    purposes. Text messaging originator opt-in data and consent will
    not be sold, rented, or shared for those purposes.
  </p>
  <p className="mb-4">
    We may provide messaging information to service providers solely
    as necessary to operate and deliver our messaging program on our
    behalf. They may not use this information for their own marketing.
    These restrictions also apply to the service-provider sharing
    described below.
  </p>
  <p className="mb-2">
    To stop texts from a sending number, reply <strong>STOP</strong> to
    that number. For assistance, reply <strong>HELP</strong> or contact
    us using the information below.
  </p>
</section>

        {/* DATA SHARING */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We do not sell or rent personal information. We may share
            information only with trusted service providers who assist in
            operating our website, conducting our business, or servicing
            users—provided they agree to keep this information confidential.
          </p>
          <p>
            We may also disclose information when required by law or to protect
            our rights, safety, or property.
          </p>
        </section>

        {/* DATA SECURITY */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Data Security
          </h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information. However, no
            method of transmission over the Internet or electronic storage is
            100% secure.
          </p>
        </section>

        {/* YOUR RIGHTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Your Rights and Choices
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access or update your personal information</li>
            <li>Request deletion of your data, where permitted</li>
            <li>Opt out of marketing or SMS communications</li>
          </ul>
        </section>

        {/* CHANGES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page with a revised effective date.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, contact us at:
          </p>
          <p className="mt-2">
            <strong>Elite Sports University</strong>
            <br />
            Email: elitesportsuniversity@gmail.com
          </p>
        </section>
      </section>
    </main>
  );
}
