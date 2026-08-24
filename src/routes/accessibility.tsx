import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
  head: () => ({
    meta: [
      { title: "Accessibility Statement | Bathwright" },
      { name: "description", content: "Bathwright's commitment to WCAG 2.1 Level AA accessibility and how to report a barrier." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.bathwright.us/accessibility" }],
  }),
});

function Accessibility() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <LegalPage title="Accessibility Statement" updated="August 24, 2026">
        <p>
          ROFLOOR, LLC is committed to ensuring digital accessibility for people with
          disabilities. We are continually improving the user experience for everyone and
          applying the relevant accessibility standards.
        </p>

        <LegalSection title="Conformance Status">
          <p>
            The Web Content Accessibility Guidelines (WCAG) define requirements for
            designers and developers to improve accessibility for people with disabilities.
            They define three levels of conformance: Level A, Level AA, and Level AAA. We
            are actively working to be conformant with WCAG 2.1 Level AA. While we strive
            to adhere to accepted guidelines and standards, it is not always possible to do
            so in all areas of the website.
          </p>
        </LegalSection>

        <LegalSection title="Feedback">
          <p>
            We welcome your feedback on the accessibility of this website. If you encounter
            an accessibility barrier or have difficulty accessing any part of it, please
            let us know. We try to respond within 5 business days.
          </p>
          <ul>
            <li>By email: <a href="mailto:contact@rofloor.us">contact@rofloor.us</a></li>
            <li>By phone: <a href="tel:+12394511643">(239) 451-1643</a> or <a href="tel:+12392076443">(239) 207-6443</a></li>
            <li>By mail: ROFLOOR, LLC, 5042 Napoli Dr, Naples, FL 34103</li>
          </ul>
        </LegalSection>

        <LegalSection title="Technical Specifications">
          <p>
            Accessibility of this website relies on the following technologies to work with
            your browser and any assistive technologies installed:
          </p>
          <ul>
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </LegalSection>

        <LegalSection title="Ongoing Effort">
          <p>
            We view accessibility as an ongoing effort and continually seek out solutions
            that bring all areas of the site to the same level of accessibility.
          </p>
        </LegalSection>
      </LegalPage>
      <Footer />
    </div>
  );
}
