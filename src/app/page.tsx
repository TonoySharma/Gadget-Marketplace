import Banner from "@/components/Banner";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import TechFAQ from "@/components/TechFAQ";
import TechShowcase from "@/components/TechShowcase";
import Testimonials from "@/components/Testimonial";
import TradeInBanner from "@/components/TradeInBanner";

export default function Home() {
  return (
    <div >
      <Banner />
      <Marquee />
      <Testimonials />
      <FeatureGrid />
      <TechFAQ />
      <TradeInBanner></TradeInBanner>
      <TechShowcase></TechShowcase>
      <Footer />
    </div>
  );
}
