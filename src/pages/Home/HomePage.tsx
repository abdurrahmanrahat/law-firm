import { ContactSection } from "./ContactSection/ContactSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { OurProcess } from "./OurProcess/OurProcess";
import Services from "./Services/Services";
import { StatsSection } from "./StatsSection/StatsSection";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <StatsSection />
      <OurProcess />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
};

export default HomePage;
