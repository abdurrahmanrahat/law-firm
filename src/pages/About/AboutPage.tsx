import PageBanner from "@/components/Shared/Ui/PageBanner";
import LeadAdvocate from "./LeadAdvocate/LeadAdvocate";
import { OurStory } from "./OurStory/OurStory";

const AboutPage = () => {
  return (
    <div>
      <PageBanner
        title="About"
        currentPage="About"
        currentHref="/about"
        image="/images/home/hero-bg.jpg"
      />
      <OurStory />
      <LeadAdvocate />
      AboutPage
    </div>
  );
};

export default AboutPage;
