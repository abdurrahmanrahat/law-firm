import PageBanner from "@/components/Shared/Ui/PageBanner";
import { ContactSection } from "../Home/ContactSection/ContactSection";
import TestimonialsSection from "../Home/TestimonialsSection/TestimonialsSection";
import Schedule from "./Schedule";

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        currentPage="Contact"
        currentHref="/contact"
        image="/images/home/hero-bg.jpg"
      />
      <Schedule />
      <ContactSection />
      <TestimonialsSection />
    </div>
  );
};

export default ContactPage;
