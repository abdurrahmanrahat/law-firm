import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TCaseStudy } from "@/types/case.type";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md border border-border/60 bg-background px-3 py-2 shadow-cardLightShadow dark:shadow-cardDarkShadow">
      <p className="text-xs 2xl:text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-xs 2xl:text-sm text-primary">
        Progress: {payload[0].value}
      </p>
    </div>
  );
}

const CaseStudyDescription = ({ caseStudy }: { caseStudy: TCaseStudy }) => {
  //   const chartColors = caseStudy.chartData.map((_, index) =>
  //     index === caseStudy.chartData.length - 1
  //       ? "hsl(var(--primary))"
  //       : "hsl(var(--muted-foreground) / 0.25)",
  //   );

  return (
    <div>
      <div className="mt-8 md:mt-12">
        <div className="mb-5">
          <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
            Summary Of The Case Study
          </h3>
        </div>

        <div
          className="font-josefin-sans html-content text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: caseStudy.description }}
        />
      </div>

      {/* Challenge / Solution / Result */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Challenge */}
        <Card className="border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
          <CardHeader className="">
            <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Challenge
            </p>
            <CardTitle className="text-2xl 2xl:text-3xl font-bold text-foreground leading-[1.25]">
              Challenge Of Case
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div
              className="font-josefin-sans html-content text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: caseStudy.challengeOfCase }}
            />
          </CardContent>
        </Card>

        {/* Approach */}
        <Card className="border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
          <CardHeader className="">
            <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Solution
            </p>
            <CardTitle className="text-2xl 2xl:text-3xl font-bold text-foreground leading-[1.25]">
              Our Approach And Solution
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div
              className="font-josefin-sans html-content text-gray-700 dark:text-gray-300 text-justify"
              dangerouslySetInnerHTML={{ __html: caseStudy.approachToSolution }}
            />
          </CardContent>
        </Card>

        {/* Result Chart */}
        <Card className="border-border/60 bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
          <CardHeader className="pb-3">
            <p className="text-xs 2xl:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Final Result
            </p>
            <CardTitle className="text-2xl 2xl:text-3xl font-bold text-foreground leading-[1.25]">
              Progress Overview
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[280px] 2xl:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={caseStudy.chartData}
                  barCategoryGap={18}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="hsl(var(--border))"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--muted-foreground)",
                      fontSize: 12,
                    }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--muted-foreground)",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={42}>
                    {caseStudy.chartData.map((_, index) => (
                      <Cell key={index} fill="#CFA117" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudyDescription;
