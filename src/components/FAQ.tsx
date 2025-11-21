import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Is Rocart a trusted place to buy game items?",
    answer: "Yes! Rocart is a secure and trusted platform with thousands of satisfied buyers worldwide."
  },
  {
    question: "What if I don't receive my items after purchasing?",
    answer: "Our 24/7 support team will assist you immediately. We guarantee delivery or full refund."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a comprehensive refund policy. If items are not delivered, you'll receive a full refund within 24 hours."
  },
  {
    question: "Can I resale my in-game items for items on Rocart?",
    answer: "Yes! We support item trading and reselling through our secure marketplace."
  },
  {
    question: "How do I receive my purchased items?",
    answer: "Items are delivered instantly to your game account after purchase confirmation."
  },
  {
    question: "Can I get free items?",
    answer: "We occasionally run promotions and giveaways. Follow our social media for updates!"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Have <span className="text-primary">Questions?</span> We Got You!
          </h2>
          <p className="text-muted-foreground">
            Get question free. We've got answers!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="bg-card border border-border rounded-lg">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 rounded-lg text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
