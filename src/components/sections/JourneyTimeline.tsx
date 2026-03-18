import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Check, Users } from 'lucide-react';
import raqchiImg from '@/assets/raqchi.jpg';
import taquileImg from '@/assets/taquile.jpg';
import nascerSolImg from '@/assets/nascer-sol-saracocha.jpeg';

const days = [
  {
    day: 'Dia 1',
    title: 'Cusco',
    location: 'Cusco → La Raya → Lago Titicaca',
    image: raqchiImg,
    paragraphs: [
      'A jornada começa em Cusco, antiga capital do Império Inca. O embarque já dá o tom do que vem pela frente: calma, cuidado e uma transição suave entre destino e experiência.',
      'Você se acomoda na sua cabine e, aos poucos, o trem segue em direção ao sudeste, rumo a Puno.',
      'O primeiro almoço acontece a bordo, em vagões-restaurante elegantes, com pratos que valorizam ingredientes andinos em uma leitura contemporânea.',
      'Durante o percurso, uma parada especial na estação de Tinta leva você até Raqch\'i, um sítio arqueológico que revela uma parte única da história Inca.',
      'No caminho, a travessia pela cordilheira de La Raya entrega uma das paisagens mais marcantes da jornada.',
      'À noite, o jantar é servido a bordo e o clima naturalmente convida a desacelerar. O trem segue até as margens do Lago Titicaca, onde permanece durante a noite.',
    ],
  },
  {
    day: 'Dia 2',
    title: 'Puno e Lago Titicaca',
    location: 'Lago Titicaca → Uros → Taquile → Sacacoha',
    image: taquileImg,
    paragraphs: [
      'O dia começa com um café da manhã tranquilo, com vista para uma das regiões mais emblemáticas do Peru.',
      'A experiência continua com um passeio de barco até as ilhas dos Uros. Um lugar que impressiona não só pela paisagem, mas pela forma como a vida acontece ali, em ilhas construídas com juncos, renovadas constantemente.',
      'Depois, a visita segue até a Ilha de Taquile, onde o almoço é servido e o tempo parece passar em outro ritmo.',
      'Há ainda uma parada na Praia de Collata, antes do retorno ao trem.',
      'No fim da tarde, um chá é servido a bordo, marcando essa pausa entre experiências.',
      'À noite, o trem segue em direção a Sacacoha.',
    ],
  },
  {
    day: 'Dia 3',
    title: 'Arequipa',
    location: 'Lagunillas → Sumbay → Arequipa',
    image: nascerSolImg,
    paragraphs: [
      'O amanhecer traz uma das cenas mais bonitas da viagem: o nascer do sol sobre o Lago Lagunillas.',
      'Depois do café da manhã, a jornada continua até as cavernas de Sumbay, onde pinturas rupestres com mais de 8 mil anos revelam histórias silenciosas do passado.',
      'O almoço acontece a bordo, enquanto o trem segue para Arequipa.',
      'A chegada marca o fim da viagem, com a opção de um tour panorâmico pela cidade ou transfer direto ao aeroporto.',
    ],
  },
];

const included = [
  'Acomodação a bordo do trem Belmond',
  'Todas as refeições e bebidas durante a jornada',
  'Experiências e entretenimento a bordo',
  'Excursões guiadas ao longo do percurso',
];

export function JourneyTimeline() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">A Jornada</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              Três dias pelos Andes
            </h2>
            <p className="text-muted-foreground font-extralight max-w-2xl mx-auto text-lg">
              De Cusco ao Lago Titicaca, cada dia revela uma nova dimensão
              do Peru — sua história, sua cultura e suas paisagens de tirar o fôlego.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {days.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={item.day} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-gold ring-4 ring-background"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: 'spring' }}
                      />
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[16/10] overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-5">
                          <span className="text-xs tracking-[0.3em] uppercase text-gold font-light">{item.day}</span>
                          <p className="text-cream/60 text-sm font-light tracking-wide mt-1">{item.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`w-full md:w-1/2 space-y-4 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl md:text-3xl font-extralight tracking-wide text-foreground">
                        {item.title}
                      </h3>
                      <div className="space-y-3">
                        {item.paragraphs.map((p, idx) => (
                          <p key={idx} className="text-muted-foreground font-extralight leading-relaxed text-sm">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ===== O QUE ESTÁ INCLUÍDO ===== */}
        <div className="mt-32">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Detalhes</span>
                <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-foreground">
                  O que está incluído
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 border border-border rounded-sm">
                    <Check className="size-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground font-extralight tracking-wide text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* ===== INVESTIMENTO ===== */}
              <div className="mt-16 text-center border border-gold/20 p-10 md:p-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="size-5 text-gold" />
                  <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Para duas pessoas</span>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-extralight tracking-wide text-foreground">
                    Consulte valores
                  </p>
                  <p className="text-muted-foreground font-extralight text-sm max-w-md mx-auto">
                    Os valores variam conforme a data de embarque e tipo de cabine escolhida. Entre em contato para uma proposta personalizada.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
