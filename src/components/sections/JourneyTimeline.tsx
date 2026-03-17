import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const days = [
  {
    day: 'Dia 1',
    title: 'De Cusco aos Templos Incas',
    location: 'Cusco → Raqchi',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    description:
      'A jornada começa no Belmond Monasterio, um seminário do século XVII transformado em hotel de luxo. O embarque acontece na charmosa estação Wanchaq, onde a equipe Belmond recebe cada viajante com atenção impecável. A primeira parada é o sítio arqueológico de Raqchi, com templos e construções incas que resistiram ao tempo.',
    highlights: ['Check-in no Belmond Monasterio', 'Embarque na estação Wanchaq', 'Visita ao sítio arqueológico de Raqchi'],
  },
  {
    day: 'Dia 2',
    title: 'Lago Titicaca e Ilhas Flutuantes',
    location: 'Puno → Lago Titicaca',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    description:
      'O segundo dia leva ao Lago Titicaca, o lago navegável mais alto do mundo. Na ilha de Taquile, a comunidade local recebe os viajantes com música e danças típicas, seguidas de um almoço à beira do lago preparado pela equipe Belmond. Na sequência, as ilhas flutuantes de Uros, construídas com totora, revelam um modo de vida único.',
    highlights: ['Navegação pelo Lago Titicaca', 'Almoço exclusivo em Taquile', 'Ilhas flutuantes de Uros'],
  },
  {
    day: 'Dia 3',
    title: 'Amanhecer Dourado a 4.000m',
    location: 'Saracocha → Cuevas de Sumbay',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description:
      'O momento mais marcante da viagem: o nascer do sol entre os lagos Saracocha e Lagunillas. Com café servido pela equipe, os viajantes sobem ao topo da montanha para ver a paisagem se transformar em ouro. A jornada segue até as Cuevas de Sumbay, com pinturas rupestres de 6.000 a 8.000 anos, acessadas por uma trilha exclusiva.',
    highlights: ['Nascer do sol entre dois lagos', 'Pinturas rupestres pré-históricas', 'Despedida com a equipe Belmond'],
  },
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
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {days.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={item.day} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-gold ring-4 ring-background"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: 'spring' }}
                      />
                    </div>

                    {/* Image side */}
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

                    {/* Text side */}
                    <div className={`w-full md:w-1/2 space-y-5 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl md:text-3xl font-extralight tracking-wide text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-extralight leading-relaxed">
                        {item.description}
                      </p>
                      <ul className={`space-y-2 ${isEven ? '' : 'md:ml-auto'}`}>
                        {item.highlights.map((h) => (
                          <li key={h} className={`flex items-center gap-3 text-sm text-gold/80 font-light tracking-wide ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
