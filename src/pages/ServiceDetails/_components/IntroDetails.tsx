import type { TService } from "@/types/service.type";

export function IntroDetails({ service }: { service: TService }) {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-md border border-border shadow-cardLightShadow dark:shadow-cardDarkShadow">
        <img
          src={service.image}
          alt={service.title}
          className="h-[220px] w-full object-cover sm:h-[360px] lg:h-[480px]"
        />
      </div>

      <div>
        <h2 className="text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {service.title}
        </h2>

        <p className="mt-2 max-w-3xl text-base 2xl:text-lg font-josefin-sans text-gray-700 dark:text-gray-300">
          {service.shortDescription}
        </p>
      </div>

      <div
        className="font-josefin-sans html-content text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {service.contentImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src={img}
              alt={`${service.title} content image ${index + 1}`}
              className="h-[220px] w-full object-cover md:h-[260px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
