import Container from "@/components/Layout/Container";
import { Link } from "react-router-dom";

type TDetailsPageBannerProps = {
  title: string;
  image: string;
  rawPage: string;
  rawPageHref: string;
};

export function DetailsPageBanner({
  title,
  image,
  rawPage,
  rawPageHref,
}: TDetailsPageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[320px] md:h-[400px] lg:h-[420px] 2xl:h-[520px]">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/65 dark:bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 mx-auto h-[3px] w-20 rounded-full bg-primary" />

        <Container>
          <div className="relative flex items-center h-[320px] md:h-[400px] lg:h-[420px] 2xl:h-[520px] pt-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl font-semibold tracking-tight text-white">
                {title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm xl:text-base 2xl:text-lg text-gray-200">
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-300"
                >
                  Home
                </Link>
                <span>•</span>
                <Link
                  to={rawPageHref}
                  className="hover:text-primary transition-all duration-300"
                >
                  {rawPage}
                </Link>
                <span>•</span>
                <span className="text-primary font-medium">{title}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
