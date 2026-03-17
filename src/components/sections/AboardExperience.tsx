import { ScrollReveal } from '@/components/ui/ScrollReveal';
import gastronomiaImg from '@/assets/gastronomia.jpeg';
import vagaoLoungeImg from '@/assets/vagao-lounge.jpg';
import observatorioImg from '@/assets/observatorio.jpeg';
import cabineImg from '@/assets/cabine.jpg';

const features = [
  {
    image: gastronomiaImg,
    title: 'Vagões-Restaurante',
    description: 'O Llama e o Muña servem pratos com ingredientes frescos e sazonais da região, assinados por chefs renomados que trazem o melhor da gastronomia peruana.',
  },
  {
    image: vagaoImg,
    title: 'Vagão-Lounge',
    description: 'O espaço ideal para encerrar o dia com um coquetel ou um excelente vinho peruano, ao som de música ambiente e em boa companhia.',
  },
  {
    image: vagaoLoungeImg,
    title: 'Vagão-Observatório',
    description: 'Com terraço ao ar livre, convida a sentir a brisa andina enquanto se aprecia a paisagem ou o céu estrelado a mais de 3.800 metros de altitude.',
  },
  {
    image: cabineImg,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div className="group overflow-hidden border border-border hover:border-gold/30 transition-colors duration-500 bg-card/50">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-light tracking-wide text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-extralight leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
