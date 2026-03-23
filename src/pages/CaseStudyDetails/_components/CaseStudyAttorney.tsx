import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAttorneyById } from "@/lib/actions/attorney.action";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyAttorney = ({ attorneyId }: { attorneyId: string }) => {
  const attorney = getAttorneyById(attorneyId);

  if (!attorney) {
    return <div>Attorney not found!</div>;
  }

  return (
    <div className="mt-8 md:mt-12">
      <div className="mb-6">
        <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Legal Counsel
        </p>
        <h3 className=" text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
          Attorney In This Case
        </h3>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-md border border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative h-[380px] md:h-[480px]">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="h-full w-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="p-6 md:p-4 xl:p-8 2xl:p-10 flex flex-col justify-center">
          <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Assigned Attorney
          </p>

          <h4 className=" text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
            {attorney.name}
          </h4>

          {/* <p className="mt-2 text-sm 2xl:text-base text-muted-foreground">
            {attorney.role}
          </p> */}
          <Badge className="mt-2 md:mt-1 xl:mt-2 text-xs 2xl:text-sm">
            {attorney.role}
          </Badge>

          <div className="mt-4 md:mt-2 xl:mt-4">
            <div
              className="font-josefin-sans html-content text-gray-700 dark:text-gray-300 text-justify "
              dangerouslySetInnerHTML={{ __html: attorney.bio }}
            />
          </div>

          <Link to={"#"} className="inline-block mt-2 md:mt-0 xl:mt-2">
            <Button size="lg" className="px-5 2xl:px-6">
              More About
              <ArrowRight className="h-4 w-4 2xl:h-[18px] 2xl:w-[18px]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAttorney;
