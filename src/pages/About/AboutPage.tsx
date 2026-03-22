import PageBanner from "@/components/Shared/Ui/PageBanner";
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
      AboutPage
    </div>
  );
};

export default AboutPage;
