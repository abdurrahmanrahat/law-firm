import { Link } from "react-router-dom";

type TPageBannerProps = {
  title: string;
  currentPage: string; // label of current page
  currentHref: string; // href of current page
  image: string;
  className?: string;
};

const PageBanner = ({
  title,
  currentPage,
  currentHref,
  image,
  className,
}: TPageBannerProps) => {
  return (
    <section
      className={`relative w-full h-[320px] md:h-[400px] lg:h-[440px] 2xl:h-[540px] overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="px-8 md:px-12 2xl:px-16 py-4 md:py-5 2xl:py-6 border-2 border-white/70 text-white backdrop-blur-[2px] rounded-sm mt-16 md:mt-18">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold tracking-wide uppercase">
            {title}
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 text-sm xl:text-base 2xl:text-lg tracking-wide">
            <Link
              to="/"
              className="text-white hover:text-primary capitalize transition-all duration-300"
            >
              Home
            </Link>
            <span className="mx-2 text-white/90">/</span>
            <Link
              to={currentHref}
              className="text-primary font-medium capitalize"
            >
              {currentPage}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
