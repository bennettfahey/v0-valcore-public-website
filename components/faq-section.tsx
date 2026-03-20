"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Valcore?",
    answer:
      "Valcore is a group purchasing organization that helps companies reduce costs on key supplies and services by aggregating purchasing power. We negotiate contracts with trusted suppliers so members access pricing they're unlikely to secure on their own.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "No. Membership is 100% free. Our services are funded through fees paid by contracted suppliers — not by members.",
  },
  {
    question: "How does the savings analysis work?",
    answer:
      "Upload your AP data. Our platform analyzes it against 100+ supplier contracts and shows exactly where you can save — by vendor, category, and in some cases by SKU.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Savings analysis within 48 hours. Vendor approval 1-3 weeks. You start purchasing at GPO rates immediately after activation.",
  },
  {
    question: "Do I have to change vendors?",
    answer:
      "Not necessarily. Many contracts are with suppliers you already use — just at better pricing.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-primary hover:text-primary/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
