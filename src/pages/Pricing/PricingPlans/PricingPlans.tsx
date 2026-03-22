import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Consultation",
    price: "$2,000",
    priceNote: "Starting from",
    description: "Initial case assessment and legal opinion",
    features: [
      "30-45 minute session",
      "Case review & analysis",
      "Legal opinion & advice",
      "In-person or online",
      "Legal notice drafting",
      "Follow-up Q&A (email)",
    ],
    highlighted: false,
    cta: "Book Consultation",
  },
  {
    name: "Case Preparation",
    price: "$5,000",
    priceNote: "Starting from",
    description: "Legal document drafting and preparation",
    features: [
      "Legal notice drafting",
      "Petition preparation",
      "Contract review",
      "Document verification",
      "2 rounds of revisions",
      "Digital & physical copies",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Full Representation",
    price: "Custom",
    priceNote: "Based on case",
    description: "Complete legal representation in court",
    features: [
      "All court appearances",
      "Case strategy development",
      "Document preparation",
      "Regular progress updates",
      "Direct communication",
      "Post-case advisory",
    ],
    highlighted: false,
    cta: "Discuss Your Case",
  },
];

const PricingPlans = () => {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-5xl 2xl:max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-md border border-border/60 bg-card p-6 py-8 shadow-cardLightShadow dark:shadow-cardDarkShadow transition-all duration-500 hover:-translate-y-1 ${
                  plan.highlighted ? "border-primary bg-primary/5" : ""
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs 2xl:text-sm font-semibold rounded-full shadow">
                    Most Popular
                  </span>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <p className="text-xs 2xl:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">
                    {plan.name}
                  </p>

                  <div className="mb-2">
                    <span className="font-display text-3xl md:text-[32px] 2xl:text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-xs 2xl:text-sm text-muted-foreground">
                    {plan.priceNote}
                  </p>

                  <p className="mt-3 text-sm 2xl:text-base text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 2xl:w-5 2xl:h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm 2xl:text-base text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/contact" className="block">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    className={`w-full ${
                      plan.highlighted
                        ? ""
                        : "border-border hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;
