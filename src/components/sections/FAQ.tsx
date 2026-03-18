import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual é o trajeto e duração da viagem?',
    answer:
      'O trem parte de Cusco, passa por Puno (Lago Titicaca) e termina em Arequipa. A viagem tem duração de 2 noites a bordo.',
  },
  {
    question: 'O que está incluído no preço?',
    answer:
      'Acomodação de luxo em cabine deluxe, todas as refeições (café da manhã, almoço, chá da tarde e jantar), todas as bebidas a bordo (incluindo alcoólicas), entretenimento a bordo e excursões conforme o itinerário.',
  },
  {
    question: 'Quais são os principais pontos turísticos visitados?',
    answer:
      "Dia 1: Sítio arqueológico de Raqch'i e Cordilheira de La Raya. Dia 2: Ilhas flutuantes dos Uros, Ilha de Taquile e Praia de Collata (Lago Titicaca). Dia 3: Lago Lagunillas e Cavernas de Sumbay (pinturas rupestres de 8.000 anos).",
  },
  {
    question: 'Como é a estrutura do trem?',
    answer:
      'O trem possui cabines elegantes com banheiro privativo, vagões-restaurante com gastronomia andina contemporânea e um vagão-bar para socialização com observatório.',
  },
  {
    question: 'Onde o trem pernoita?',
    answer:
      'Na primeira noite, o trem pernoita às margens do Lago Titicaca. Na segunda noite, pernoita em Sacacoha, seguindo viagem até Arequipa na manhã seguinte.',
  },
  {
    question: 'O que acontece na chegada em Arequipa?',
    answer:
      'Ao desembarcar, você pode escolher entre um tour panorâmico pela cidade ou transfer direto para o aeroporto.',
  },
  {
    question: 'Como faço para reservar?',
    answer:
      'Entre em contato com nossos agentes pelo telefone (41) 3232-1965.',
  },
  {
    question: 'Posso personalizar minha viagem?',
    answer:
      'Sim! A equipe da Vai Pro Mundo pode ajudar a personalizar sua jornada e cuidar de todos os detalhes.',
  },
];

export function FAQ() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-gold font-light">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              FAQ
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left font-extralight tracking-wide text-foreground hover:no-underline hover:text-gold transition-colors py-6 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-extralight leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
