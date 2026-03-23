import type { TCaseStudy } from "@/types/case.type";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ caseStudy }: { caseStudy: TCaseStudy }) => {
  const displayDate = formatDate(caseStudy.createdAt);

  return (
    <Link to={`/case-studies/${caseStudy.slug}`} className="group rounded-md">
      <article className="relative overflow-hidden rounded-md shadow-cardLightShadow dark:shadow-cardDarkShadow transition-all duration-500 group-hover:-translate-y-1.5">
        <div className="relative h-[460px] 2xl:h-[480px] overflow-hidden">
          <img
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />

          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent dark:from-black/90" />

          <div className="absolute left-0 top-0 z-10 p-5 2xl:p-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs 2xl:text-sm font-medium text-white/90 backdrop-blur-sm capitalize">
              {caseStudy.caseDetails.result}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 2xl:p-6">
            <div className="max-w-[85%]">
              <p className="text-primary text-xs xl:text-sm 2xl:text-base font-medium mb-3">
                {caseStudy.category}
              </p>

              <div className="h-px w-14 bg-white/30 mb-4 transition-all duration-500 group-hover:w-20" />

              <h3 className="text-white text-[28px] leading-[1.15] 2xl:text-[32px] font-semibold">
                {caseStudy.title}
              </h3>

              {displayDate && (
                <p className="mt-3 text-white text-sm 2xl:text-base font-medium">
                  {displayDate}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;
