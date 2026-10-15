import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Terms of Service | Elite Sports University",
  description: "Elite Sports University mobile messaging terms of service.",
};

export default function MobileTermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold">
          Mobile Terms of Service
        </h1>
        <p className="mb-2 text-xl font-semibold">
          Elite Sports University
        </p>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: October 15, 2026
        </p>

        <div className="space-y-6 leading-7">
          <p>
            The Elite Sports University mobile message service (the
            &quot;Service&quot;) is operated by Elite Sports U LLC
            (&quot;Elite Sports University&quot;, &quot;we&quot;, or
            &quot;us&quot;). Your use of the Service constitutes your
            agreement to these terms and conditions (&quot;Mobile
            Terms&quot;). We may modify or cancel the Service or any of
            its features without notice. To the extent permitted by
            applicable law, we may modify these Mobile Terms. Your
            continued use of the Service following the effective date
            of changes constitutes your acceptance of those changes.
          </p>

          <p>
            By consenting to Elite Sports University&apos;s SMS/text
            messaging service, you agree to receive recurring messages
            from and on behalf of Elite Sports University through your
            wireless provider at the mobile number you provided.
            Messages may be sent using an automatic telephone dialing
            system or other technology.
          </p>

          <p>
            Service-related messages may include class reminders,
            schedule updates, appointment follow-ups, order updates,
            and account alerts. If you separately consent to marketing
            texts, promotional messages may include program
            announcements, event information, specials, and other
            marketing offers.
          </p>

          <p>
            Participation is voluntary. You do not have to sign up for
            marketing texts to make a purchase, and your consent to
            marketing texts is not a condition of purchase.
          </p>

          <p>
            We do not charge for the Service. Message frequency varies.
            Message and data rates may apply. You are responsible for
            charges imposed by your wireless provider. Check your
            mobile plan and contact your provider for details.
          </p>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Opting out
            </h2>
            <p>
              To unsubscribe, reply <strong>STOP</strong> to the number
              from which you received our messages, or use the
              unsubscribe link where available. You may receive a
              one-time confirmation of your opt-out. No further
              messages will be sent through that program unless you
              subscribe again or initiate a new conversation.
            </p>
            <p className="mt-4">
              If you subscribe to multiple Elite Sports University
              messaging programs, you may need to opt out separately
              from each program by following its instructions, except
              where applicable law requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Help and support
            </h2>
            <p>
              Reply <strong>HELP</strong> to the number from which you
              received our messages, or email{" "}
              <a
                href="mailto:elitesportsuniversity@gmail.com"
                className="break-words text-blue-700 underline"
              >
                elitesportsuniversity@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Sending numbers and your mobile number
            </h2>
            <p>
              We may change the telephone number or short code used
              for the Service and will notify you of those changes.
              Messages sent to a previously used number may not be
              received. If you need assistance, contact us using the
              support email above.
            </p>
            <p className="mt-4">
              You agree to provide a valid mobile number. If your
              number changes, notify us and subscribe using your new
              number if you wish to continue receiving messages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Delivery and availability
            </h2>
            <p>
              Wireless carriers are not liable for delayed or
              undelivered messages. To the extent permitted by
              applicable law, Elite Sports University is not liable
              for failed, delayed, or misdirected delivery, errors in
              messages, or actions taken in reliance on the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Privacy
            </h2>
            <p>
              We respect your privacy. For information about how we
              collect and use personal information, including mobile
              information and messaging consent, please read our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-700 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}