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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 xl:gap-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="group relative bg-card h-full rounded-md shadow-cardLightShadow dark:shadow-cardDarkShadow p-8 py-10 text-center  transition-all duration-300 hover:-translate-y-1">
                  {/* <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}

                  <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                    <div className="relative">
                      <div className="flex h-20 w-20 2xl:h-24 2xl:w-24 items-center justify-center rounded-md border border-primary/15 bg-primary/10 dark:bg-primary/15">
                        <step.icon className="h-8 w-8 2xl:h-10 2xl:w-10 text-primary" />
                      </div>

                      <div className="absolute -right-2 -top-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 text-[12px] 2xl:text-sm font-bold  text-primary-foreground shadow-md">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>

                  <div className="mx-auto mt-4 h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary/40" />

                  <p className="mx-auto mt-5 max-w-[280px] text-sm leading-6.5 md:text-[15px] 2xl:text-[17px] text-gray-600 dark:text-gray-400 font-josefin-sans">
                    {step.description}
                  </p>

                  <span className="absolute right-6 top-6 text-[11px] font-semibold tracking-[0.22em] text-muted-foreground/40">
                    STEP
                  </span>
                </div>

                {/* desktop arrow */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute left-full top-[92px] z-10 hidden -translate-x-1/2 lg:block">
                    <img
                      src={
                        index === 0
                          ? "/images/others/line1.png"
                          : "/images/others/line2.png"
                      }
                      alt=""
                      className="w-28 xl:w-36 opacity-90 dark:opacity-80"
                    />
                  </div>
                )}

                {/* mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="mt-5 flex justify-center lg:hidden">
                    <img
                      src={
                        index === 0
                          ? "/images/shapes/arrow1.png"
                          : "/images/shapes/arrow2.png"
                      }
                      alt=""
                      className="w-28 rotate-90 opacity-70"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
