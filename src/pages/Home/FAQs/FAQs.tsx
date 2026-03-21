import Container from "@/components/Layout/Container";
import MyAccordionItem from "@/components/Shared/Ui/MyAccordionItem";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by clicking the 'Book Appointment' button on our website, which will redirect you to our scheduling page. Alternatively, you can call us directly or send a WhatsApp message.",
  },
  {
    question: "What documents should I bring to my first meeting?",
    answer:
      "Please bring any relevant documents related to your case, such as contracts, court notices, ID proof, and any correspondence. If you're unsure, we can discuss specific requirements during your initial call.",
  },
  {
    question: "Do you offer online consultation?",
    answer:
      "Yes, we offer both in-person and online consultations via video call. Online consultations are just as effective and can be scheduled at your convenience.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Our initial consultation fee varies based on the complexity of the matter. Please visit our Pricing page or contact us for specific details. We believe in transparent pricing with no hidden fees.",
  },
  {
    question: "What areas of law do you practice?",
    answer:
      "We specialize in Criminal Law, Civil Litigation, Family Law, Property & Land Law, Corporate & Contract Law, and Immigration matters. Visit our Services page for detailed information.",
  },
];

const FAQs = () => {
  const [openItem, setOpenItem] = useState("item-0");

  return (
    <Container>
      <div className="py-14 md:py-20">
        <SectionTitle subTitle="FAQs" title="Frequently Asked Questions" />

        <div className="max-w-4xl mx-auto">
          <div className="rounded-[4px] overflow-hidden border border-border/60 mt-12">
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
        </div>
      </div>
    </Container>
  );
};

export default FAQs;
