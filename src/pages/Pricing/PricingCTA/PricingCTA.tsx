import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCTA = () => {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-md border border-border/60 shadow-cardLightShadow dark:shadow-cardDarkShadow">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/home/hero-bg.jpg"
                alt="Pricing consultation background"
                className="h-full w-full object-cover"
              />

              {/* <div className="absolute inset-0 bg-black/60" /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/55 to-black/65" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-14 text-center md:px-10 md:py-16 xl:px-16 xl:py-20">
              <p className="text-primary text-xs 2xl:text-sm font-semibold tracking-[0.24em] uppercase">
                Transparent Pricing
              </p>

              <h2 className="mt-1 md:mt-3 text-2xl md:text-3xl 2xl:text-4xl font-bold text-white leading-[1.2]">
                Get a Tailored Fee Estimate
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-sm 2xl:text-base leading-5 md:leading-6 text-white/70 font-josefin-sans">
                Tell us about your case and we will provide a clear,
                personalized fee estimate based on the nature, complexity, and
                urgency of your legal matter.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="h-11 2xl:h-12 px-5 2xl:px-6">
                    <Phone className="w-5 h-5 2xl:w-[18px] 2xl:h-[18px]" />
                    Book Fee Discussion Call
                  </Button>
                </Link>

                <Link to="/pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-11 2xl:h-12 px-5 2xl:px-6 border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    View Pricing Details
                    <ArrowRight className="w-5 h-5 2xl:w-[18px] 2xl:h-[18px]" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingCTA;
