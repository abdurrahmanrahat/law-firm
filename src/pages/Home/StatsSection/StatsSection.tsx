import Container from "@/components/Layout/Container";
import { Award, Building2, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "7+", label: "Years of Experience" },
  { icon: Users, value: "200+", label: "Clients Assisted" },
  { icon: Building2, value: "High Court", label: "& District Court Practice" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="py-14 md:py-20">
      <Container className="">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center shadow-cardLightShadow dark:shadow-cardDarkShadow py-8 md:py-12"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-1 md:mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-playfair-display text-2xl md:text-3xl xl:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm 2xl:text-base font-josefin-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
