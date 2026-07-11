import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoHero } from "@/components/hero/VideoHero";
import { About } from "@/components/sections/About";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { AmenitiesGrid } from "@/components/sections/AmenitiesGrid";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <VideoHero />
        <About />
        <FeaturedProject />
        <AmenitiesGrid />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
