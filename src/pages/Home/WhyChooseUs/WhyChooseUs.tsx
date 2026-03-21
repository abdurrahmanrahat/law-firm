import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { Eye, MessageSquare, Trophy, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "Client-Centered Approach",
    description:
      "Your needs come first. We tailor our legal strategies to your unique situation and goals.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain complex legal matters in simple terms, keeping you informed every step of the way.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "No hidden fees or surprises. We provide clear timelines, costs, and expectations upfront.",
  },
  {
    icon: Trophy,
    title: "Results-Driven",
    description:
      "Our track record speaks for itself. We fight relentlessly to achieve the best outcomes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-20 bg-card">
      <Container>
        <SectionTitle
          subTitle="Why Choose Us"
          title="Your Trusted Legal Partner"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center shadow-cardLightShadow dark:shadow-cardDarkShadow px-8 py-12 rounded-md"
            >
              <div className="w-14 2xl:w-16 h-14 2xl:h-16 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-2">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-lg 2xl:text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm 2xl:text-base leading-relaxed font-josefin-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
