import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms of Service | Bathwright" },
      { name: "description", content: "The terms governing use of bathwright.us and the estimates it provides, operated by ROFLOOR, LLC of Naples, Florida." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.bathwright.us/terms" }],
  }),
});

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <LegalPage title="Terms of Service" updated="August 24, 2026">
        <p>
          Please read these Terms of Service ("Terms") carefully before using the
          bathwright.us website (the "Service") operated by ROFLOOR, LLC ("us", "we", or
          "our"). Your access to and use of the Service is conditioned on your acceptance
          of and compliance with these Terms. These Terms apply to all visitors and users
          of the Service.
        </p>

        <LegalSection title="1. Services and Estimates">
          <p>
            Our website provides information about our bathroom remodeling services. Any
            estimate, price range, or package price shown on this website — including the
            pricing calculator and any advertised flat-rate package — is preliminary and
            for informational purposes only. All estimates are subject to a final on-site
            inspection and evaluation of the project scope. Advertised package pricing
            assumes standard conditions and may not apply where structural, plumbing, or
            electrical work beyond the stated scope is required. The final price and
            project details will be set out in a formal written contract.
          </p>
        </LegalSection>

        <LegalSection title="2. Contracts and Payment">
          <p>
            All services provided by ROFLOOR, LLC are governed by a legally binding
            contract signed by both the client and an authorized representative of
            ROFLOOR, LLC. Payment terms, project timelines, and specific deliverables are
            defined in that contract. Work does not commence until the contract is signed
            and any required deposit is paid.
          </p>
        </LegalSection>

        <LegalSection title="3. Limitation of Liability for Website Use">
          <p>
            The information contained on this website is for general information purposes only.
            While we endeavour to keep the information up to date and correct, we make no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to the website or the
            information, products, services, or related graphics contained on the website for any purpose.
            Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p>
            In no event will ROFLOOR, LLC be liable for any loss or damage including without limitation,
            indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this website.
          </p>
        </LegalSection>

        <LegalSection title="4. Intellectual Property">
          <p>
            The Service and its original content, features, and functionality are and
            remain the exclusive property of ROFLOOR, LLC and its licensors. Photographs
            of completed work displayed on this website depict projects carried out by
            ROFLOOR, LLC. The content, including text, graphics, and images, is protected
            by copyright and other laws of the United States and foreign countries.
          </p>
        </LegalSection>

        <LegalSection title="5. Governing Law">
          <p>
            These Terms shall be governed and construed in accordance with the laws of the
            State of Florida, United States, without regard to its conflict of law
            provisions.
          </p>
        </LegalSection>

        <LegalSection title="6. Changes">
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms
            at any time. We will try to provide at least 30 days' notice prior to any new
            terms taking effect. What constitutes a material change is determined at our
            sole discretion.
          </p>
        </LegalSection>

        <LegalSection title="Contact Us">
          <p>If you have any questions about these Terms, contact us:</p>
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
