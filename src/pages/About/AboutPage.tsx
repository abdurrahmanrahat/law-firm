import PageBanner from "@/components/Shared/Ui/PageBanner";

const AboutPage = () => {
  return (
    <div>
      <PageBanner
        title="About"
        currentPage="About"
        currentHref="/about"
        image="/images/home/hero-bg.jpg"
      />
      AboutPage
    </div>
  );
};

export default AboutPage;
