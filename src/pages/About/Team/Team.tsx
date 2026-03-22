import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Robert Fox",
    role: "Family Lawyer",
    image: "/images/about/team/1.jpg",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    name: "Jane Cooper",
    role: "Divorce Lawer",
    image: "/images/about/team/2.jpg",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    name: "Jacob Jones",
    role: "Criminal Lawer",
    image: "/images/about/team/3.jpg",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    name: "Jerome Bell",
    role: "Family Lawer",
    image: "/images/about/team/4.jpg",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
];

export function Team() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle subTitle="Our Team" title="Meet Our Expert Lawyers" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow"
            >
              {/* Image */}
              <div className="relative h-[480px] xl:h-[400px] 2xl:h-[420px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90" />

                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-5 transition-all duration-500 ease-out group-hover:-translate-y-6">
                  {/* Name + Role */}
                  <div className="transition-all duration-500">
                    <h3 className="text-white text-[22px] 2xl:text-2xl font-semibold leading-[1.3]">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm 2xl:text-base mt-0.5 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Socials */}
                  <div className="mt-4 flex justify-center gap-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {member.socials.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          className="w-9 h-9 2xl:w-10 2xl:h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Icon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
