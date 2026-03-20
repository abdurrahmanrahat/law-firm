import { ArrowRight, PhoneCall, Scale } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="flex flex-col md:flex-row md:justify-between lg:flex-col md:gap-6 xl:gap-0 space-y-8">
      <div className="md:w-6/12 xl:w-full overflow-hidden rounded-md border border-border/70 shadow-cardLightShadow dark:shadow-cardDarkShadow">
        <div className="border-b border-border/70 bg-background px-5 py-7">
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-md bg-primary flex items-center justify-center">
              <Scale className="w-5 h-5 2xl:w-6 2xl:h-6 text-primary-foreground" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Legal Services
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Practice Areas
              </h3>
            </div>
          </div>
        </div>

        <div className="p-4">
          <nav className="space-y-2">
            {services.map((item, index) => {
              const active = item.slug === currentSlug;

              return (
                <Link
                  key={item.id}
                  to={`/services/${item.slug}`}
                  className={cn(
                    "group relative flex items-center justify-between overflow-hidden rounded-xl border px-4 py-4 transition-all duration-300",
                    active
                      ? "border-primary/30 bg-background shadow-sm "
                      : "border-border bg-transparent hover:border-primary/30 hover:bg-background",
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 rounded-r-full transition-all duration-300",
                      active
                        ? "bg-primary/90"
                        : "bg-gray-600 dark:bg-gray-500 group-hover:bg-primary/90",
                    )}
                  />

                  <div className="flex items-center gap-3 pl-1">
                    <span
                      className={cn(
                        "h-2 w-2 shrink-0 rounded-full transition-all duration-300",
                        active
                          ? "bg-primary/90 shadow-cardLightShadow dark:shadow-cardDarkShadow"
                          : "bg-gray-600 dark:bg-gray-500 group-hover:bg-primary/90",
                      )}
                    />

                    <div className="">
                      <p
                        className={cn(
                          "truncate text-[15px] 2xl:text-[17px] font-medium transition-colors duration-300",
                          active
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white",
                        )}
                      >
                        {item.title}
                      </p>

                      <p
                        className={cn(
                          " line-clamp-1 text-xs 2xl:text-sm transition-colors duration-300 font-josefin-sans",
                          active
                            ? "text-primary/90 "
                            : "text-gray-600 dark:text-gray-400",
                        )}
                      >
                        Practice area {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      active
                        ? "bg-primary/90 text-white dark:text-black shadow-cardLightShadow dark:shadow-cardDarkShadow"
                        : "bg-gray-600 dark:bg-gray-500 group-hover:bg-primary/90 text-gray-300 dark:text-gray-800 group-hover:translate-x-0.5 group-hover:text-white  ",
                    )}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* cta */}
      <div className="md:w-6/12 xl:w-full relative overflow-hidden rounded-md bg-card px-6 py-16 shadow-cardLightShadow dark:shadow-cardDarkShadow ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(251,220,16,0.1),transparent_24%)]" />

        <div className="relative">
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background backdrop-blur-sm">
              <PhoneCall className="h-7 w-7 text-amber-400" />
            </div>

            <div className="space-y-5">
              <h4 className="max-w-[220px] mx-auto text-2xl font-semibold leading-[1.25]">
                Need Advice For This Matter?
              </h4>

              <p className=" max-w-[260px] text-sm leading-[1.3] text-gray-700 dark:text-gray-300 font-josefin-sans">
                Speak with our legal team for clear guidance, practical next
                steps, and immediate support for your case.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+08653695698"
                className="text-xl md:text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-primary block"
              >
                +0 865.369.5698
              </a>

              <a href="tel:+08653695698" className="block">
                <Button size="lg" className="px-6">
                  <PhoneCall className="h-4 w-4" />
                  Call Us 24/7
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
