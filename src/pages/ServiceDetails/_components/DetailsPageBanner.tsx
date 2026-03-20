type DetailsPageBannerProps = {
  title: string;
  image: string;
};

export function DetailsPageBanner({ title, image }: DetailsPageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[280px] bg-cover bg-center bg-no-repeat sm:min-h-[320px] lg:min-h-[360px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-slate-950/65 dark:bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 mx-auto h-[3px] w-20 rounded-full bg-amber-400" />

        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-200/95">
              <span>Home</span>
              <span>•</span>
              <span>Practice</span>
              <span>•</span>
              <span className="text-white">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
