import PageBanner from "@/components/Shared/Ui/PageBanner";
import { services } from "@/data/services";
import { ServiceCard } from "../Home/Services/ServiceCard";

const ServicesPage = () => {
  return (
    <div>
      <PageBanner
        title="Area Of Practice"
        currentPage="Services"
        currentHref="/services"
        image="/images/home/hero-bg.jpg"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-14 md:my-20">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            slug={item.slug}
            title={item.title}
            shortDescription={item.shortDescription}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
