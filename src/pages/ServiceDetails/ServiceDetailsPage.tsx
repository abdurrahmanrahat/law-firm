import Container from "@/components/Layout/Container";
import { getServiceBySlug } from "@/lib/actions/service.action";
import { useParams } from "react-router-dom";
import { DetailsPageBanner } from "./_components/DetailsPageBanner";
import { IntroDetails } from "./_components/IntroDetails";
import { ServiceFaqs } from "./_components/ServiceFaqs";
import { ServiceSidebar } from "./_components/ServiceSidebar";

const ServiceDetailsPage = () => {
  const { serviceSlug } = useParams();

  const service = getServiceBySlug(serviceSlug as string);

  if (!service) {
    return <div>service not found</div>;
  }

  return (
    <>
      <DetailsPageBanner
        title={service.title}
        image={service.pageBannerImage}
      />
      <Container>
        <main className="py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <div className="space-y-12">
              <IntroDetails service={service} />
              <ServiceFaqs faqs={service.faqs} />
            </div>

            <div className="lg:sticky lg:top-20">
              <ServiceSidebar currentSlug={service.slug} />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export default ServiceDetailsPage;
