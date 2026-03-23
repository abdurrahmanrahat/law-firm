import Container from "@/components/Layout/Container";
import PageBanner from "@/components/Shared/Ui/PageBanner";
import { caseStudies } from "@/data/cases";
import type { TCaseStudy } from "@/types/case.type";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesPage = () => {
  return (
    <div>
      <PageBanner
        title="Case Studies"
        currentPage="Cases"
        currentHref="/case-studies"
        image="/images/home/hero-bg.jpg"
      />

      <Container>
        <div className="max-w-[1180px] mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 my-14 md:my-20">
            {caseStudies.map((caseStudy: TCaseStudy) => (
              <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesPage;
