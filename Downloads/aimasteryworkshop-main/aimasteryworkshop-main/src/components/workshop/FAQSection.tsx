import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "Do I need prior AI experience?", a: "No prior experience is needed. The workshop takes you from fundamentals to advanced concepts in a single day." },
  { q: "Will I receive a certificate?", a: "Yes! All attendees who complete the full-day workshop receive a Certificate of Completion." },
  { q: "Is this workshop beginner friendly?", a: "Absolutely. We start with basics and build up to advanced techniques, making it accessible for everyone." },
  { q: "What tools will be covered?", a: "We cover ChatGPT, Claude, Gemini, and other leading generative AI tools with hands-on practice." },
  { q: "Is recording provided?", a: "This is a fully hands-on workshop. While recordings aren't provided, you'll receive comprehensive materials and reference guides." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-xl px-4 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-foreground font-semibold hover:text-primary hover:no-underline py-4 text-left text-[15px]">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 text-[15px]">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  </section>
);

export default FAQSection;
