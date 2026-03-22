import Container from "@/components/Layout/Container";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BriefcaseBusiness, Play, Scale, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Strategic Legal Guidance",
    description:
      "Practical, results-focused counsel tailored to each client’s needs.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    description:
      "Clear communication, honest expectations, and steady support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Strong Client Advocacy",
    description:
      "Dedicated representation for individuals, families, and businesses.",
  },
];

export function OurStory() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-14 ">
          {/* Media Side */}
          <div className="relative">
            <div className="relative overflow-hidden  rounded-md bg-card shadow-cardLightShadow dark:shadow-cardDarkShadow">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10 dark:from-black/20 dark:to-primary/10" />

              <img
                src="/images/about/lawyer.jpg"
                alt="PrimeLaw legal consultation"
                className="h-[420px] w-full object-cover md:h-[600px] 2xl:h-[650px]"
              />

              <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group relative inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary/25 focus:outline-none cursor-pointer"
                      aria-label="Play introduction video"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/20" />
                      <span className="absolute h-14 w-14 rounded-full bg-primary/25" />
                      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <Play className="h-6 w-6 fill-current" />
                      </span>
                    </button>
                  </DialogTrigger>

                  <DialogContent
                    className="max-w-4xl! bg-background p-0 overflow-hidden"
                    showCloseButton={false}
                  >
                    <DialogTitle className="sr-only">
                      PrimeLaw introduction video
                    </DialogTitle>

                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/YnuQwMp0oxU?autoplay=1"
                        title="PrimeLaw Introduction Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden w-68 rounded-md border border-border/60 bg-background p-5 shadow-cardLightShadow dark:shadow-cardDarkShadow backdrop-blur md:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Since 2017
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground leading-[1.3]">
                Building trust through results
              </h3>
              <p className="mt-2 text-sm leading-5 font-josefin-sans text-muted-foreground">
                A client-first legal practice focused on clear guidance, strong
                advocacy, and practical outcomes.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative">
            <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl xl:text-4xl 2xl:text-[40px]">
              Dedicated legal support with clarity, strategy, and confidence
            </h2>

            <div className="mt-6 max-w-2xl space-y-2.5 text-base 2xl:text-[17px] leading-[1.4] text-muted-foreground font-josefin-sans text-justify">
              <p>
                PrimeLaw Advocates was founded with a simple purpose: to provide
                dependable legal representation that is both effective and
                accessible for individuals, families, and businesses.
              </p>
              <p>
                Over the years, we have built our practice on trust,
                preparation, and a deep commitment to protecting our clients’
                interests in every matter we handle.
              </p>
              <p>
                We believe legal service should feel clear, personal, and
                strategic — not overwhelming. That is why we focus on honest
                communication, tailored advice, and strong advocacy at every
                step.
              </p>
            </div>

            <div className="mt-7 grid gap-2 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-md border border-border/60 bg-card p-4 shadow-cardLightShadow dark:shadow-cardDarkShadow backdrop-blur-sm transition-colors duration-300"
                  >
                    <div className="mb-2 inline-flex h-11 w-11 2xl:h-12 2xl:w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm xl:text-base 2xl:text-lg leading-[1.3] font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm 2xl:text-[15px] leading-6 text-muted-foreground ">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 border-l-2 border-primary/70 pl-5">
              <p className="font-display text-2xl italic text-foreground/90">
                PrimeLaw Advocates
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Professional legal support you can rely on
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
