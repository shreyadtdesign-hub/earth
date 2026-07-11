import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/site";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <Container as="main" className="py-32">
      <h1 className="font-serif-display text-4xl">Privacy Policy</h1>
      <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink/70">
        This page will outline how {siteConfig.name} collects, uses, and protects information shared through this
        website. Final legal copy to be provided by counsel before launch.
      </p>
    </Container>
  );
}
