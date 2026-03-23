import { services } from "@/data/services";
import { ServiceCard } from "@/pages/Home/Services/ServiceCard";
import type { TService } from "@/types/service.type";

const RelatedServices = () => {
  return (
    <div className="my-14 md:my-20">
      <div className="mb-6">
        <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Services
        </p>
        <h3 className=" text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
          Related Services
        </h3>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
        {services.slice(0, 3).map((service: TService) => (
          <ServiceCard
            key={service.id}
            slug={service.slug}
            title={service.title}
            shortDescription={service.shortDescription}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
