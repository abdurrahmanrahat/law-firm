import Container from "@/components/Layout/Container";
import { DataNotFound } from "@/components/Shared/Ui/DataNotFound";
import { getServiceBySlug } from "@/lib/actions/service.action";
import { useParams } from "react-router-dom";
import { DetailsPageBanner } from "../../components/Shared/Ui/DetailsPageBanner";
import { IntroDetails } from "./_components/IntroDetails";
import RelatedServices from "./_components/RelatedServices";
import { ServiceFaqs } from "./_components/ServiceFaqs";
import { ServiceSidebar } from "./_components/ServiceSidebar";

const ServiceDetailsPage = () => {
  const { serviceSlug } = useParams();

  const service = getServiceBySlug(serviceSlug as string);

  return (
    <>
      <DetailsPageBanner
        title={service?.title || "Not Found"}
        image={service?.pageBannerImage || "/images/home/hero-bg.jpg"}
        rawPage="Service"
        rawPageHref="/services"
      />

      <Container>
        {service ? (
          <main className="pt-14 md:pt-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
              <div className="space-y-12">
                <IntroDetails service={service} />
                <ServiceFaqs faqs={service.faqs} />
              </div>

              <div className="lg:sticky lg:top-20">
                <ServiceSidebar currentSlug={service.slug} />
              </div>
            </div>
            <RelatedServices />
          </main>
        ) : (
          <DataNotFound
            title="Service Not Found"
            description={`The service you are looking for with the slug ${serviceSlug} may have been removed or does not exist.`}
            buttonText="Browse All services"
            buttonLink="/services"
          />
        )}
      </Container>
    </>
  );
};

export default ServiceDetailsPage;
