import type { ServiceItem } from "@/types/service.type";

export function IntroDetails({ service }: { service: ServiceItem }) {
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
        className="font-josefin-sans html-content text-gray-700 dark:text-gray-300 "
        dangerouslySetInnerHTML={{ __html: service.description }}
      />
      {/*    max-w-none    prose-p:leading-8 prose-li:leading-8 dark:prose-invert */}

      <div className="grid gap-5 sm:grid-cols-2">
        {service.contentImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src={img}
              alt={`${service.title} content image ${index + 1}`}
              className="h-[240px] w-full object-cover sm:h-[260px]"
            />
          </div>
        ))}
      </div>

      <div className="text-base leading-8 text-gray-600 dark:text-gray-300">
        <p>
          We combine careful preparation, responsive communication, and a
          results-focused legal strategy so that clients understand both the
          process and the path forward.
        </p>
      </div>
    </section>
  );
}
