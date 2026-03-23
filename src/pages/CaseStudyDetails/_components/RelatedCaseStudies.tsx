import { caseStudies } from "@/data/cases";
import CaseStudyCard from "@/pages/CaseStudies/CaseStudyCard";
import type { TCaseStudy } from "@/types/case.type";

const RelatedCaseStudies = () => {
  return (
    <div className="my-14 md:my-20">
      <div className="mb-6">
        <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Case Studies
        </p>
        <h3 className=" text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
          Related Case Studies
        </h3>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
        {caseStudies.slice(0, 3).map((caseStudy: TCaseStudy) => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCaseStudies;
