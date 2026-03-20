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

      <main className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <div className="space-y-12">
              <IntroDetails service={service} />
              <ServiceFaqs faqs={service.faqs} />
            </div>

            <div className="lg:sticky lg:top-24">
              <ServiceSidebar currentSlug={service.slug} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceDetailsPage;
