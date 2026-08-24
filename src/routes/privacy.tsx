import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Bathwright" },
      { name: "description", content: "How Bathwright, operated by ROFLOOR, LLC, collects and uses personal information submitted through bathwright.us." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.bathwright.us/privacy" }],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <LegalPage title="Privacy Policy" updated="August 24, 2026">
        <p>
          ROFLOOR, LLC ("us", "we", or "our") operates the bathwright.us website
          (the "Service"). This page informs you of our policies regarding the
          collection, use, and disclosure of personal data when you use our
          Service and the choices you have associated with that data.
        </p>

        <LegalSection title="Information Collection and Use">
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <h3>Personal Data</h3>
          <p>
            While using our Service, especially when requesting a quote or
            contacting us, we may ask you to provide certain personally
            identifiable information that can be used to contact or identify you
            ("Personal Data"). This may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Details about the bathroom or property you want remodeled</li>
          </ul>
        </LegalSection>

        <LegalSection title="Use of Data">
          <p>ROFLOOR, LLC uses the collected data for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To provide you with quotes and information about our services</li>
            <li>To communicate with you regarding your inquiries and projects</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
          </ul>
          <p>
            We are committed to protecting your privacy. We do not sell, trade, or
            otherwise transfer your personally identifiable information to outside
            parties. The data you provide is used solely to prepare quotes,
            communicate with you about our services, and fulfil our contractual
            obligations.
          </p>
        </LegalSection>

        <LegalSection title="Security of Data">
          <p>
            The security of your data is important to us, but no method of
            transmission over the Internet or method of electronic storage is 100%
            secure. While we strive to use commercially acceptable means to protect
            your Personal Data, we cannot guarantee its absolute security.
          </p>
        </LegalSection>

        <LegalSection title="Changes to This Privacy Policy">
          <p>
            We may update our Privacy Policy from time to time. We will notify you
            of any changes by posting the new Privacy Policy on this page. You are
            advised to review this page periodically. Changes are effective when
            posted.
          </p>
        </LegalSection>

        <LegalSection title="Contact Us">
          <p>If you have any questions about this Privacy Policy, contact us:</p>
          <ul>
            <li>By email: <a href="mailto:contact@rofloor.us">contact@rofloor.us</a></li>
            <li>By phone: <a href="tel:+12394511643">(239) 451-1643</a> or <a href="tel:+12392076443">(239) 207-6443</a></li>
            <li>By mail: ROFLOOR, LLC, 5042 Napoli Dr, Naples, FL 34103</li>
          </ul>
        </LegalSection>
      </LegalPage>
      <Footer />
    </div>
  );
}
