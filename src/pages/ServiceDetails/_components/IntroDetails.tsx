import type { ServiceItem } from "@/types/service.type";

export function IntroDetails({ service }: { service: ServiceItem }) {
  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <img
          src={service.image}
          alt={service.title}
          className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {service.title}
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
          {service.shortDescription}
        </p>
      </div>

      <div
        className="prose prose-zinc max-w-none prose-headings:mt-10 prose-headings:font-semibold prose-headings:text-zinc-900 prose-p:leading-8 prose-li:leading-8 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {service.contentImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <img
              src={img}
              alt={`${service.title} content image ${index + 1}`}
              className="h-[240px] w-full object-cover sm:h-[260px]"
            />
          </div>
        ))}
      </div>

      <div className="text-base leading-8 text-zinc-600 dark:text-zinc-300">
        <p>
          We combine careful preparation, responsive communication, and a
          results-focused legal strategy so that clients understand both the
          process and the path forward.
        </p>
      </div>
    </section>
  );
}
