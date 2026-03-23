import { caseStudies } from "@/data/cases";
import CaseStudyCard from "@/pages/CaseStudies/CaseStudyCard";
import type { TCaseStudy } from "@/types/case.type";

const RelatedCaseStudies = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 my-14 md:my-20">
      {caseStudies.slice(0, 3).map((caseStudy: TCaseStudy) => (
        <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
      ))}
    </div>
  );
};

export default RelatedCaseStudies;
