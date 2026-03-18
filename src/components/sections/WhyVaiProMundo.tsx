import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin, CalendarCheck, Heart, Compass, Star } from 'lucide-react';
import sedeImg from '@/assets/foto-sede.png';

const introPoints = [
  {
    icon: Compass,
    text: 'Porque uma viagem como essa pede mais do que reserva. Pede curadoria, cuidado com os detalhes e alguém que entenda como transformar um roteiro já extraordinário em uma experiência bem planejada do começo ao fim.',
  },
  {
    icon: Star,
    text: 'Com quase 20 anos de trajetória, mais de 550 avaliações 5 estrelas no Google e o reconhecimento de estar entre as 10 melhores agências de lazer do Brasil, a Vai Pro Mundo une experiência, repertório e atendimento próximo para cuidar da sua jornada com o nível de atenção que ela merece.',
  },
];

const highlights = [
  {
    icon: MapPin,
    title: 'Curadoria que vai além do trem',
    description:
      'O Andean Explorer já é único por si só. O nosso papel é fazer com que tudo ao redor dele esteja à altura da viagem, com escolhas bem pensadas de hospedagem, conexões, ritmo do roteiro e experiências complementares no Peru.',
  },
  {
    icon: CalendarCheck,
    title: 'Organização do antes, do durante e do depois',
    description:
      'Cuidamos da jornada como um todo: orientação, reservas, encaixes do roteiro, suporte e acompanhamento. Assim, você aproveita o que essa viagem tem de melhor sem precisar administrar cada detalhe sozinho.',
  },
  {
    icon: Heart,
    title: 'Alto padrão com atendimento humano',
    description:
      'Viagens especiais merecem um atendimento à altura, mas sem excesso e sem complicação. Unimos curadoria de alto padrão com uma relação próxima, atenta e realmente personalizada.',
  },
];

export function WhyVaiProMundo() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-8 bg-muted/30 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-5xl font-extralight tracking-wide text-foreground mb-16">
            Por que fazer essa viagem com a{' '}
            <span className="text-gold-gradient">Vai Pro Mundo</span>
          </h2>
        </ScrollReveal>

        {/* Intro paragraphs with icons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {introPoints.map((point, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="flex gap-5">
                <point.icon className="size-7 text-gold shrink-0 mt-1" strokeWidth={1.2} />
                <p className="text-muted-foreground font-extralight text-lg leading-relaxed">
                  {point.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sede photo */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16 rounded-lg overflow-hidden">
            <img
              src={sedeImg}
              alt="Sede da Vai Pro Mundo"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.15 * i}>
              <div className="space-y-4">
                <item.icon className="size-8 text-gold" strokeWidth={1.2} />
                <h3 className="text-xl font-light tracking-wide text-foreground">
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
