import { HeroSection } from "./HeroSection/HeroSection";
import Services from "./Services/Services";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <h2 className="text-primary">Hello</h2>
      <div className="min-h-screen">hi</div>
    </div>
  );
};

export default HomePage;
