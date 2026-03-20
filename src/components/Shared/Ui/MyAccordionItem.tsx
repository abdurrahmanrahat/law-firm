import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import type { TFaq } from "@/types/service.type";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

type TMyAccordionItemProps = {
  faq: TFaq;
  itemValue: string;
  isOpen: boolean;
};

const MyAccordionItem = ({ faq, itemValue, isOpen }: TMyAccordionItemProps) => {
  return (
    <AccordionItem
      value={itemValue}
      className="border-b border-border last:border-b-0"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={`group flex w-full items-center justify-between px-5 md:px-7 py-4 md:py-5 text-left text-[17px] font-medium leading-[1.3] transition-all duration-300 hover:no-underline cursor-pointer ${
            isOpen ? "bg-card " : ""
          }`}
        >
          <span className="pr-5 md:pr-6">{faq.question}</span>

          <span className="ml-4 inline-flex h-5 w-5 shrink-0 items-center justify-center">
            {isOpen ? (
              <Minus className="h-4 w-4" strokeWidth={2.2} />
            ) : (
              <Plus className="h-4 w-4" strokeWidth={2.2} />
            )}
          </span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionContent className="h-auto data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="border-t border-border px-5 md:px-7 py-4 md:py-5 text-base leading-[1.3] text-gray-600 dark:border-gray-800 dark:text-gray-300 font-josefin-sans">
          {faq.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default MyAccordionItem;
