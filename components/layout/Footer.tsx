import Link from "next/link";
import { InstagramLogo, LinkedinLogo, PinterestLogo } from "@phosphor-icons/react/dist/ssr";
import { footerLinks, navLinks, siteConfig, socialLinks } from "@/constants/site";
import { Container } from "@/components/ui/Container";

const socialIcons = {
  Instagram: InstagramLogo,
  LinkedIn: LinkedinLogo,
  Pinterest: PinterestLogo,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-charcoal py-16 text-warm-white/70">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif-display text-2xl text-warm-white">{siteConfig.shortName}</p>
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed">{siteConfig.address}</p>
            <p className="mt-4 text-sm">{siteConfig.email}</p>
          </div>

          <FooterColumn title="Quick Links" links={footerLinks.quick} />
          <FooterColumn title="Projects" links={navLinks.slice(0, 2)} />

          <div>
            <p className="text-sm font-medium text-warm-white">Follow</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/15 transition-colors hover:border-champagne hover:text-champagne"
                  >
                    <Icon size={17} weight="light" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-warm-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-warm-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-medium text-warm-white">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-warm-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
