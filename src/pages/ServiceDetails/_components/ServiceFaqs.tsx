import MyAccordionItem from "@/components/Shared/Ui/MyAccordionItem";
import { Accordion } from "@/components/ui/accordion";
import type { TFaq } from "@/types/service.type";
import { useState } from "react";

export function ServiceFaqs({ faqs }: { faqs: TFaq[] }) {
  const [openItem, setOpenItem] = useState("item-0");

  return (
    <section className="pt-0">
      <div className="max-w-3xl">
        <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Questions You May Wonder?
        </h3>

        <p className="mt-4 text-base 2xl:text-lg leading-[1.3] text-gray-600 dark:text-gray-300 font-josefin-sans">
          Here are some of the most common questions clients ask before getting
          started. We keep the answers clear, practical, and focused on what
          matters next.
        </p>
      </div>

      {/* faqs */}
      <div className="mt-8 rounded-[4px] overflow-hidden border border-border/60">
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={(value) => setOpenItem(value)}
          className="w-full"
        >
          {faqs.map((faq, index) => {
            const itemValue = `item-${index}`;
            const isOpen = openItem === itemValue;

            return (
              <MyAccordionItem
                key={itemValue}
                itemValue={itemValue}
                faq={faq}
                isOpen={isOpen}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
