// components/services/service-sidebar.tsx
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ServiceSidebarProps = {
  currentSlug: string;
};

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  return (
    <aside className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="border-b border-zinc-200 bg-zinc-100 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-800/70">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Practice Area
          </h3>
        </div>

        <div className="p-4">
          <nav className="space-y-1">
            {services.map((item) => {
              const active = item.slug === currentSlug;

              return (
                <Link
                  key={item.id}
                  to={`/services/${item.slug}`}
                  className={cn(
                    "group flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-300",
                    active
                      ? "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item.title}
                  </span>

                  <span
                    className={cn(
                      "text-xs transition-transform duration-300",
                      active ? "translate-x-0" : "group-hover:translate-x-1",
                    )}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-slate-950 p-8 text-white shadow-xl dark:bg-slate-900">
        <div className="mx-auto flex max-w-[240px] flex-col items-center text-center">
          <div className="mb-5 rounded-full border border-white/15 bg-white/5 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9a2.25 2.25 0 01-2.25-2.25V8.1a2.25 2.25 0 011.408-2.087l4.5-1.875a2.25 2.25 0 011.684 0l4.5 1.875A2.25 2.25 0 0118.75 8.1v8.4a2.25 2.25 0 01-2.25 2.25z"
              />
            </svg>
          </div>

          <p className="text-xl font-semibold leading-snug">
            Get Free Advice From This Case
          </p>

          <div className="my-5 text-4xl font-bold tracking-tight text-white">
            +0 865.369.5698
          </div>

          <button className="inline-flex rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Call Us 24/7
          </button>
        </div>
      </div>
    </aside>
  );
}
