import {
  ArrowUpRight,
  Calendar,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";
import { Button } from "../ui/button";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

const practiceAreas = [
  { name: "Family Law", href: "/services/family-law" },
  { name: "Personal Injury", href: "/services/personal-injury" },
  { name: "Business Law", href: "/services/business-law" },
  { name: "Criminal Law", href: "/services/criminal-law" },
  { name: "Education Law", href: "/services/education-law" },
  { name: "Real Estate Law", href: "/services/real-estate-law" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-background text-foreground">
      <Container>
        <div className="pt-12 md:pt-16 pb-6 md:pb-10 2xl:pt-20 2xl:pb-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
            {/* Brand */}
            <div className="">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-md bg-primary flex items-center justify-center">
                  <Scale className="w-5 h-5 2xl:w-6 2xl:h-6 text-primary-foreground" />
                </div>
                <span
                  className={`font-display text-xl 2xl:text-2xl font-semibold transition-colors text-foreground`}
                >
                  PrimeLaw<span className="text-primary">.</span>
                </span>
              </Link>

              <div className="mt-5 space-y-4">
                <p className="max-w-md text-sm 2xl:text-base leading-7 text-foreground">
                  Expert legal services in Criminal, Civil, Family and Corporate
                  Law. Dedicated to protecting your rights with integrity,
                  strategy, and clear communication.
                </p>

                <div className="flex gap-2 pt-2">
                  <Link to="/contact">
                    <Button size="lg" className="px-5">
                      <Calendar className="w-5 h-5" />
                      Appointment
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
                      WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="">
              <div className="mb-4">
                <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  Navigation
                </p>
                <h4 className="mt-1 font-display text-lg 2xl:text-xl font-semibold">
                  Quick Links
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-1.5 2xl:space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-sm 2xl:text-base text-foreground transition-colors hover:text-primary"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="">
              <div className="mb-4">
                <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  Area of Practice
                </p>
                <h4 className="mt-1 font-display text-lg 2xl:text-xl font-semibold">
                  Practice Areas
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-1.5 2xl:space-y-2">
                {practiceAreas.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="group inline-flex items-center gap-2 text-sm 2xl:text-base text-foreground transition-colors hover:text-primary"
                    >
                      <span>{service.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="">
              <div className="mb-4">
                <p className="text-xs 2xl:text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  Get In Touch
                </p>
                <h4 className="mt-1 font-display text-lg 2xl:text-xl font-semibold">
                  Contact Us
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <a
                      href="tel:+8801XXXXXXXXX"
                      className="text-sm 2xl:text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      +880 1XXX-XXXXXX
                    </a>
                    <p className="mt-1 text-xs 2xl:text-sm text-foreground">
                      Mon - Sat: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <a
                      href="mailto:contact@primelaw.com"
                      className="text-sm 2xl:text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                      contact@primelaw.com
                    </a>
                    <p className="mt-1 text-xs 2xl:text-sm text-foreground">
                      Send your case details anytime
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-sm 2xl:text-basefo text-foreground leading-6">
                    <p className="font-medium text-foreground">
                      123 Court Road
                    </p>
                    <p>Dhaka 1000, Bangladesh</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      {/* Bottom bar */}
      <div className="py-4 md:py-5 xl:py-6 border-t border-border/20 ">
        <div className="flex items-center justify-center">
          <p className="text-xs 2xl:text-sm text-foreground">
            © {new Date().getFullYear()} PrimeLaw Advocates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
