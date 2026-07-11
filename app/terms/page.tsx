import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/site";

export const metadata = {
  title: `Terms | ${siteConfig.name}`,
};

export default function TermsPage() {
  return (
    <Container as="main" className="py-32">
      <h1 className="font-serif-display text-4xl">Terms of Use</h1>
      <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink/70">
        This page will outline the terms governing use of the {siteConfig.name} website. Final legal copy to be
        provided by counsel before launch.
      </p>
    </Container>
  );
}
