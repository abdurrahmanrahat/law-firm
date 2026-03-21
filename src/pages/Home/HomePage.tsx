import { HeroSection } from "./HeroSection/HeroSection";
import Services from "./Services/Services";
import { StatsSection } from "./StatsSection/StatsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <StatsSection />
      <h2 className="text-primary">Hello</h2>
      <div className="min-h-screen">hi</div>
    </div>
  );
};

export default HomePage;
