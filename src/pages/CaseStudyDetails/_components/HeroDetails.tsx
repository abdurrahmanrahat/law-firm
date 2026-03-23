import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAttorneyById } from "@/lib/actions/attorney.action";
import type { TCaseStudy } from "@/types/case.type";
import { formatDate } from "@/utils/date";
import { CalendarDays, Scale, TimerReset, UserRound } from "lucide-react";

function ResultBadge({
  result,
}: {
  result: TCaseStudy["caseDetails"]["result"];
}) {
  const styles: Record<TCaseStudy["caseDetails"]["result"], string> = {
    won: "bg-primary/12 text-primary border-primary/30",
    settled:
      "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    ongoing: "bg-sky-500/12 text-sky-600 dark:text-sky-400 border-sky-500/30",
    dismissed:
      "bg-rose-500/12 text-rose-600 dark:text-rose-400 border-rose-500/30",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs 2xl:text-sm font-semibold ${styles[result]} capitalize`}
    >
      {result}
    </span>
  );
}

function DetailsItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/70 p-4">
      <div className="mt-0.5 inline-flex h-10 w-10 2xl:h-11 2xl:w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-4 w-4 2xl:h-5 2xl:w-5" />
      </div>
      <div>
        <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.18em] text-primary">
          {label}
        </p>
        <p className="mt-1 text-sm 2xl:text-base font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

const HeroDetails = ({ caseStudy }: { caseStudy: TCaseStudy }) => {
  const attorney = getAttorneyById(caseStudy.caseDetails.attorneyId);

  const caseInfo = [
    {
      icon: UserRound,
      label: "Client",
      value: caseStudy.caseDetails.client,
    },
    {
      icon: Scale,
      label: "Case Type",
      value: caseStudy.caseDetails.caseType,
    },
    {
      icon: CalendarDays,
      label: "Case Start",
      value: formatDate(caseStudy.caseDetails.caseStart),
    },
    {
      icon: TimerReset,
      label: "Execution Time",
      value: `${caseStudy.caseDetails.executionTimeInMonths} Months`,
    },
  ];

  return (
    <div className="max-w-[600px] xl:max-w-5xl 2xl:max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
        {/* Case Details */}
        <Card className="border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
          <CardHeader className="mb-1">
            <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Case Details
            </p>
            <CardTitle className="text-2xl 2xl:text-3xl font-bold text-foreground">
              Matter Overview
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
            {caseInfo.map((item) => (
              <DetailsItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}

            <div className="rounded-md border border-border/50 bg-background/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Result
                  </p>
                  <p className="mt-1 text-sm 2xl:text-base font-medium text-foreground">
                    Final Resolution
                  </p>
                </div>
                <ResultBadge result={caseStudy.caseDetails.result} />
              </div>
            </div>

            <div className="rounded-md border border-border/50 bg-background/70 p-4">
              <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Attorney
              </p>
              <p className="mt-1 text-sm 2xl:text-base font-medium text-foreground">
                {attorney?.name}
              </p>
            </div>
          </CardContent>
        </Card>
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-md border border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
          <div className="relative h-[460px] md:h-full overflow-hidden">
            <img
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-5 2xl:p-6">
              <p className="text-primary text-xs 2xl:text-sm font-medium uppercase tracking-[0.16em]">
                {caseStudy.category}
              </p>
              <h2 className="mt-2 text-xl md:text-2xl 2xl:text-3xl font-semibold text-white leading-[1.25]">
                {caseStudy.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
