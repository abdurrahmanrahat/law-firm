import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-[600px] xs:h-[650px] xl:h-screen flex items-center pt-18 pb-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/hero-bg.jpg"
          alt="Law office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <Container className="">
        <div className="relative max-w-[600px] xl:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white/80 text-sm font-medium">
              Trusted Legal Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.05] mb-2">
            Professional Legal Support{" "}
            <span className="text-primary">You Can Rely On</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-200 xl:text-base 2xl:text-lg leading-relaxed mb-6 max-w-2xl">
            Expert legal services in Criminal, Civil, Family & Corporate Law.
            Dedicated to protecting your rights with integrity and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link to="/contact">
              <Button size="lg" className="px-5">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
            </Link>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white px-5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Small note */}
          <p className="text-gray-300 text-sm xl:text-base 2xl:text-lg">
            Consultation available online & in-person
          </p>
        </div>
      </Container>
    </section>
  );
}
