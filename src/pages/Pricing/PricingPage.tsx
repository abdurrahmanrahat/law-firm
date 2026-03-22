import PageBanner from "@/components/Shared/Ui/PageBanner";
import ComparisonTable from "./ComparisonTable/ComparisonTable";
import PricingPlans from "./PricingPlans/PricingPlans";

const PricingPage = () => {
  return (
    <div>
      <PageBanner
        title="Service Fees"
        currentPage="Pricing"
        currentHref="/pricing"
        image="/images/home/hero-bg.jpg"
      />
      <PricingPlans />
      <ComparisonTable />
    </div>
  );
};

export default PricingPage;
