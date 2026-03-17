import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UtensilsCrossed, Wine, Eye, Sofa } from 'lucide-react';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Vagões-Restaurante',
    description: 'O Llama e o Muña servem pratos com ingredientes frescos e sazonais da região, assinados por chefs renomados que trazem o melhor da gastronomia peruana.',
  },
  {
    icon: Wine,
    title: 'Vagão-Lounge',
    description: 'O espaço ideal para encerrar o dia com um coquetel ou um excelente vinho peruano, ao som de música ambiente e em boa companhia.',
  },
  {
    icon: Eye,
    title: 'Vagão-Observatório',
    description: 'Com terraço ao ar livre, convida a sentir a brisa andina enquanto se aprecia a paisagem ou o céu estrelado a mais de 3.800 metros de altitude.',
  },
  {
    icon: Sofa,
    title: '35 Cabines de Luxo',
    description: 'Suítes com banheiro privativo, mantas de lã de alpaca e acabamento inspirado na cultura andina. Capacidade para até 70 viajantes em 20 vagões.',
  },
];

export function AboardExperience() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">A Bordo</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              Gastronomia & Conforto
            </h2>
            <p className="text-muted-foreground font-extralight max-w-2xl mx-auto text-lg">
              Inaugurado em 2017, o Andean Explorer combina o charme dos grandes trens
              clássicos com toques sutis da cultura andina em cada detalhe.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div className="group p-8 border border-border hover:border-gold/30 transition-colors duration-500 bg-card/50">
                <item.icon className="size-8 text-gold mb-6 stroke-[1]" />
                <h3 className="text-xl font-light tracking-wide text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-extralight leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
