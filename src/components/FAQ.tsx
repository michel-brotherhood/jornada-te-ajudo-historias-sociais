import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o Prazo de Garantia?",
      answer: "O Prazo de Garantia de 7 dias permite que você solicite o reembolso integral caso o kit não atenda suas expectativas. O reembolso é processado automaticamente em até 5 dias."
    },
    {
      question: "Como acesso o kit após a compra?",
      answer: "Você receberá o acesso ao Kit de Histórias Sociais por email imediatamente após a confirmação do pagamento. O material pode ser baixado, visualizado e impresso de qualquer dispositivo."
    },
    {
      question: "O que são histórias sociais?",
      answer: "Histórias sociais são narrativas estruturadas com figuras e textos que explicam situações do dia a dia. Elas ajudam crianças autistas a entender o que esperar em diferentes contextos, reduzindo ansiedade e oferecendo previsibilidade."
    },
    {
      question: "Posso personalizar as histórias?",
      answer: "Sim! O material é editável, permitindo que você adapte as histórias para situações específicas da rotina da sua criança, tornando-as ainda mais efetivas e significativas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fredoka">
              ❓ Perguntas <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o Kit de Histórias Sociais 💭
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 mb-4 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
