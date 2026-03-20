import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { services } from "@/dara/services";
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
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
