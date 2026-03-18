import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin, CalendarCheck, Heart, Compass, Star } from 'lucide-react';
import sedeImg from '@/assets/foto-sede.png';

const highlights = [
{
  icon: MapPin,
  title: 'Curadoria que vai além do trem',
  description:
  'O Andean Explorer já é único por si só.\nO nosso papel é fazer com que tudo ao redor dele esteja à altura da viagem, com escolhas bem pensadas de hospedagem, conexões, ritmo do roteiro e experiências complementares no Peru.'
},
{
  icon: CalendarCheck,
  title: 'Organização do antes, do durante e do depois',
  description:
  'Cuidamos da jornada como um todo: orientação, reservas, encaixes do roteiro, suporte e acompanhamento. Assim, você aproveita o que essa viagem tem de melhor sem precisar administrar cada detalhe sozinho.'
},
{
  icon: Heart,
  title: 'Alto padrão com atendimento humano',
  description:
  'Viagens especiais merecem um atendimento à altura, mas sem excesso e sem complicação. Unimos curadoria de alto padrão com uma relação próxima, atenta e realmente personalizada.'
}];


export function WhyVaiProMundo() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Sobre nós</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              Por que viajar com a{' '}
              <span className="text-gold-gradient">Vai Pro Mundo</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Photo + text side by side — same layout as JourneyTimeline */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-24">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={sedeImg}
                  alt="Sede da Vai Pro Mundo"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-xs tracking-[0.3em] uppercase text-gold font-light">Nossa sede</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex gap-5">
                <Compass className="size-6 text-gold shrink-0 mt-1" strokeWidth={1.2} />
                <p className="text-muted-foreground font-extralight leading-relaxed text-sm">
                  Porque uma viagem como essa pede mais do que reserva. Pede curadoria, cuidado com os
                  detalhes e alguém que entenda como transformar um roteiro já extraordinário em uma
                  experiência bem planejada do começo ao fim.
                </p>
              </div>
              <div className="flex gap-5">
                <Star className="size-6 text-gold shrink-0 mt-1" strokeWidth={1.2} />
                <p className="text-muted-foreground font-extralight leading-relaxed text-sm">Com 20 anos de trajetória, mais de 550 avaliações 5 estrelas no Google e o reconhecimento de estar entre as 10 melhores agências de lazer do Brasil, a Vai Pro Mundo une experiência, repertório e atendimento próximo para cuidar da sua jornada com o nível de atenção que ela merece.




                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, i) =>
          <ScrollReveal key={item.title} delay={0.15 * i}>
              <div className="space-y-4">
                <item.icon className="size-8 text-gold" strokeWidth={1.2} />
                <h3 className="text-xl font-light tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-extralight leading-relaxed whitespace-pre-line text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}