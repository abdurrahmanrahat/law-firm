import { Link } from "react-router-dom";

type TServiceCardProps = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
};

export function ServiceCard({
  slug,
  title,
  shortDescription,
  icon,
}: TServiceCardProps) {
  return (
    <Link to={`/services/${slug}`}>
      <article className="group relative overflow-hidden bg-card px-6 py-10 text-center shadow-cardLightShadow dark:shadow-cardDarkShadow transition-all duration-500 hover:-translate-y-1 rounded-sm">
        <div className="mx-auto mb-4 flex flex-col items-center">
          <div className="relative flex h-[110px] w-[110px] items-center justify-center">
            {/* circle border */}
            <div className="absolute inset-0 rounded-full border border-primary/30" />

            {/* orbit line + moving bullet */}
            <div className="absolute inset-0 rounded-full">
              <div className="orbit-dot absolute inset-0">
                <span className="absolute left-1/2 top-0 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              </div>
            </div>

            {/* image */}
            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center">
              <img
                src={icon}
                alt={title}
                width={64}
                height={64}
                className="h-16 w-16 object-contain opacity-90 dark:opacity-95"
              />
            </div>
          </div>

          <h3 className="mt-5 text-[22px] font-semibold tracking-[0.2px] text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>

        <p className="mx-auto max-w-[280px] xl:text-[17px] text-gray-600 dark:text-gray-400 font-josefin-sans">
          {shortDescription}
        </p>
      </article>
    </Link>
  );
}
