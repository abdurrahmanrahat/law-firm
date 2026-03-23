import Container from "@/components/Layout/Container";
import { DataNotFound } from "@/components/Shared/Ui/DataNotFound";
import { getCaseStudyBySlug } from "@/lib/actions/case.action";
import { useParams } from "react-router-dom";
import { DetailsPageBanner } from "../../components/Shared/Ui/DetailsPageBanner";
import CaseStudyAttorney from "./_components/CaseStudyAttorney";
import CaseStudyDescription from "./_components/CaseStudyDescription";
import HeroDetails from "./_components/HeroDetails";
import RelatedCaseStudies from "./_components/RelatedCaseStudies";

const CaseStudyDetailsPage = () => {
  const { slug } = useParams();

  const caseStudy = getCaseStudyBySlug(slug as string);

  return (
    <>
      <DetailsPageBanner
        title={caseStudy?.title || "Not Found"}
        image={"/images/home/hero-bg.jpg"}
        rawPage="Case Studies"
        rawPageHref="/case-studies"
      />

      <Container>
        {caseStudy ? (
          <main className="pt-14 md:pt-20">
            <HeroDetails caseStudy={caseStudy} />
            <CaseStudyDescription caseStudy={caseStudy} />
            <CaseStudyAttorney attorneyId={caseStudy.caseDetails.attorneyId} />
            <RelatedCaseStudies />
          </main>
        ) : (
          <DataNotFound
            title="Case Study Not Found"
            description={`The case study you are looking for with the slug ${slug} may have been removed or does not exist.`}
            buttonText="Browse Case Studies"
            buttonLink="/case-studies"
          />
        )}
      </Container>
    </>
  );
};

export default CaseStudyDetailsPage;
