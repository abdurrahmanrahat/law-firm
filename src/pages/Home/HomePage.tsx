import { ContactSection } from "./ContactSection/ContactSection";
import FAQs from "./FAQs/FAQs";
import { HeroSection } from "./HeroSection/HeroSection";
import { OurProcess } from "./OurProcess/OurProcess";
import Services from "./Services/Services";
import { StatsSection } from "./StatsSection/StatsSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <StatsSection />
      <OurProcess />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <FAQs />
    </div>
  );
};

export default HomePage;
