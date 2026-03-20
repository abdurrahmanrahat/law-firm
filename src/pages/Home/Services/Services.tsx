import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <Container>
      <div className="my-14 md:my-20">
        <SectionTitle subTitle="Area Of Practice" title="How Can We Help You" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
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
    </Container>
  );
};

export default Services;
