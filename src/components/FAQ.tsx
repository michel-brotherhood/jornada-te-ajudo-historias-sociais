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
      question: "Como visualizar o conteúdo das histórias sociais?",
      answer: (
        <div className="space-y-4">
          <p className="text-foreground font-medium">O kit é entregue em formato digital. Siga os passos abaixo para acessar:</p>
          
          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary space-y-3">
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                📥 Passo 1: Baixar o arquivo
              </h4>
              <p className="text-sm text-muted-foreground">Após a compra, você receberá um email com um link para download. Clique no link e o arquivo .zip será baixado para seu computador (geralmente na pasta "Downloads").</p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                📂 Passo 2: Extrair o arquivo .zip
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>No Windows:</strong> Clique com o botão direito no arquivo .zip e selecione "Extrair tudo..." ou "Extrair aqui"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>No Mac:</strong> Basta dar dois cliques no arquivo .zip que ele será extraído automaticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>No Celular/Tablet:</strong> Use um aplicativo de arquivos (como "Arquivos" no iPhone ou "Meus Arquivos" no Android) para extrair</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                📄 Passo 3: Abrir os arquivos PDF
              </h4>
              <p className="text-sm text-muted-foreground">Após extrair, você verá várias pastas organizadas por categoria. Dentro de cada pasta estão os arquivos PDF das histórias. Clique duas vezes em qualquer PDF para abrir e visualizar. Você pode também imprimir diretamente do visualizador de PDF.</p>
            </div>
          </div>
          
          <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
            <p className="text-sm text-foreground">
              <strong>💡 Dica:</strong> Não precisa instalar nenhum programa especial! Seu computador ou celular já tem tudo que precisa para abrir arquivos .zip e PDF.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "O que são histórias sociais?",
      answer: "Histórias sociais são narrativas estruturadas com figuras e textos que explicam situações do dia a dia. Elas ajudam crianças autistas a entender o que esperar em diferentes contextos, reduzindo ansiedade e oferecendo previsibilidade."
    },
    {
      question: "Quais são as 36 histórias sociais incluídas no kit?",
      answer: (
        <div className="space-y-6">
          <p className="text-foreground font-medium">O kit contém 31 histórias sociais + 5 extras, totalizando 36 histórias organizadas em categorias:</p>
          
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                🏥 Atividades do Cotidiano <span className="text-sm font-normal text-muted-foreground">(7 histórias)</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Cortar as unhas</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Higiene pessoal</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Porque eu tomo remédios</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Cirurgia</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Exame de sangue</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Alimentação saudável</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Vacina</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-lg p-4 border-l-4 border-secondary">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                🎉 Eventos Especiais <span className="text-sm font-normal text-muted-foreground">(13 histórias)</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Natal</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Férias</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Ano Novo</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Vamos ao cinema</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Visita ao museu</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Volta às aulas</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Halloween</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Meu aniversário</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Carnaval</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Feriado</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Estações do ano</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Noite e dia</li>
                <li className="flex items-start gap-2"><span className="text-secondary">✓</span> Viagem de avião</li>
              </ul>
            </div>

            <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                💡 Situações Extras <span className="text-sm font-normal text-muted-foreground">(11 histórias)</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Quando perdemos alguém</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Cumprimentar as pessoas</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Divórcio</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Mudança de casa</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Porque as pessoas trabalham</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Minha mãe vai ter um bebê</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Como eu posso me comunicar</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> O que eu posso fazer pra me acalmar</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Quando eu estou bravo</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Parque de diversões</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Consequências</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                🎁 Bônus - Sequências Visuais <span className="text-sm font-normal text-muted-foreground">(5 extras)</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">★</span> Sequência lavar as mãos</li>
                <li className="flex items-start gap-2"><span className="text-primary">★</span> Escovar os dentes</li>
                <li className="flex items-start gap-2"><span className="text-primary">★</span> Apoio visual o que vestir</li>
                <li className="flex items-start gap-2"><span className="text-primary">★</span> Banho</li>
                <li className="flex items-start gap-2"><span className="text-primary">★</span> Como preservar meu corpo</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Posso personalizar as histórias?",
      answer: "Sim! O material permite que você adapte as histórias para situações específicas da rotina da sua criança, tornando-as ainda mais efetivas e significativas."
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
