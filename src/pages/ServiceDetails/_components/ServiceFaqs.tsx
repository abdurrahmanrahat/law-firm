import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceFaq } from "@/types/service.type";

export function ServiceFaqs({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <section className="border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <div className="max-w-3xl">
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Questions You May Wonder?
        </h3>

        <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">
          Here are some of the most common questions clients ask before getting
          started. We keep the answers clear, practical, and focused on what
          matters next.
        </p>
      </div>

      <div className="mt-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white px-0 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-base font-medium text-zinc-900 hover:no-underline dark:text-zinc-100">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-zinc-200 px-6 pb-6 pt-5 text-base leading-8 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
