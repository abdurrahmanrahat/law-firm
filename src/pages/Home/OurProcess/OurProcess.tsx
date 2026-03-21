import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { Gavel, Lightbulb, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "Share your case details with us. We listen carefully to understand your situation and legal needs.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description:
      "We review documents, research precedents, and develop a tailored legal strategy for your case.",
  },
  {
    icon: Gavel,
    step: "03",
    title: "Representation",
    description:
      "We represent you in court or negotiations, fighting for the best possible outcome.",
  },
];

export function OurProcess() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <Container>
        <SectionTitle subTitle="Our Process" title="How We Work" />

        <div className="relative mt-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 xl:gap-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="group relative bg-card h-full rounded-md shadow-cardLightShadow dark:shadow-cardDarkShadow px-8 md:px-2 xl:px-8 py-10 text-center  transition-all duration-300 hover:-translate-y-1">
                  <div className="mx-auto mb-6 md:mb-2 xl:mb-6 flex w-fit items-center justify-center">
                    <div className="relative">
                      <div className="flex h-20 w-20 md:h-14 md:w-14 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 items-center justify-center rounded-md border border-primary/15 bg-primary/10 dark:bg-primary/15">
                        <step.icon className="h-8 w-8 md:h-6 md:w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 text-primary" />
                      </div>

                      <div className="absolute -right-2 -top-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 text-[12px] 2xl:text-sm font-bold  text-primary-foreground shadow-md">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>

                  <div className="mx-auto h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary/40 mt-4 md:mt-2 xl:mt-4" />

                  <p className="mx-auto max-w-[280px] text-sm leading-6.5 md:leading-5 xl:leading-6.5 md:text-[15px] 2xl:text-[17px] text-gray-600 dark:text-gray-400 font-josefin-sans mt-5 md:mt-2 xl:mt-5">
                    {step.description}
                  </p>

                  <span className="absolute right-6 top-6 text-[11px] font-semibold tracking-[0.22em] text-muted-foreground/40">
                    STEP {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
