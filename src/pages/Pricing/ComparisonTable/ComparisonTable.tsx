import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";

type PlanValue = boolean | string;

type ComparisonRow = {
  feature: string;
  basic: PlanValue;
  standard: PlanValue;
  premium: PlanValue;
};

const comparisonFeatures: ComparisonRow[] = [
  {
    feature: "Initial Consultation",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Document Drafting",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Court Appearances",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Regular Updates",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Direct Communication",
    basic: "Email only",
    standard: "Phone & Email",
    premium: "Priority access",
  },
  {
    feature: "Follow-up Support",
    basic: "1 week",
    standard: "1 month",
    premium: "Ongoing",
  },
];

const plans = [
  { key: "basic", label: "Basic", featured: false },
  { key: "standard", label: "Standard", featured: true },
  { key: "premium", label: "Premium", featured: false },
] as const;

function RenderCell({
  value,
  featured = false,
}: {
  value: PlanValue;
  featured?: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-6 w-6 2xl:h-7 2xl:w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" strokeWidth={2.5} />
        </span>
      </span>
    ) : (
      <span className="text-muted-foreground/60 text-sm 2xl:text-base">—</span>
    );
  }

  return (
    <span
      className={`text-xs 2xl:text-sm font-medium ${
        featured ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {value}
    </span>
  );
}

const ComparisonTable = () => {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            subTitle="Compare Plans"
            title="See what's included in each service tier"
          />

          <div className="mt-12 overflow-hidden rounded-md border border-border/60 shadow-cardLightShadow dark:shadow-cardDarkShadow">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/60 bg-card hover:bg-card">
                    <TableHead className="h-14 2xl:h-16 min-w-[220px] px-5 2xl:px-6 text-left text-sm 2xl:text-base font-semibold text-foreground">
                      Feature
                    </TableHead>

                    {plans.map((plan) => (
                      <TableHead
                        key={plan.key}
                        className={`h-14 2xl:h-16 px-4 2xl:px-6 text-center text-sm 2xl:text-base font-semibold text-foreground ${
                          plan?.featured ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1">
                          <span>{plan.label}</span>
                          {plan?.featured && (
                            <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] 2xl:text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                              Popular
                            </span>
                          )}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {comparisonFeatures.map((row, index) => (
                    <TableRow key={index} className="border-border/60">
                      <TableCell className="px-5 2xl:px-6 py-4 2xl:py-5 text-sm 2xl:text-base font-medium text-foreground">
                        {row.feature}
                      </TableCell>

                      <TableCell className="px-4 2xl:px-6 py-4 2xl:py-5 text-center">
                        <RenderCell value={row.basic} />
                      </TableCell>

                      <TableCell className="bg-primary/5 px-4 2xl:px-6 py-4 2xl:py-5 text-center">
                        <RenderCell value={row.standard} featured />
                      </TableCell>

                      <TableCell className="px-4 2xl:px-6 py-4 2xl:py-5 text-center">
                        <RenderCell value={row.premium} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTable;
