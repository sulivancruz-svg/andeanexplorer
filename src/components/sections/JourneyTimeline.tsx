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
  'O embarque é em Cusco, antiga capital do Império Inca. Você se acomoda na cabine enquanto o trem inicia o trajeto em direção a Puno.',
  'O almoço já acontece a bordo, com pratos que valorizam ingredientes locais, bem executados e servidos com cuidado.',
  'Ao longo do dia, há uma parada em Raqch\'i, um importante sítio arqueológico Inca. Na sequência, o percurso passa pela cordilheira de La Raya, um dos pontos mais altos da rota.',
  'À noite, jantar a bordo e tempo livre para aproveitar o trem. O pernoite acontece próximo ao Lago Titicaca.']
},
{
  day: 'Dia 2',
  title: 'Puno e Lago Titicaca',
  location: 'Lago Titicaca → Uros → Taquile → Sacacoha',
  image: taquileImg,
  paragraphs: [
  'O dia começa com café da manhã a bordo, seguido de um passeio até as ilhas dos Uros. Um lugar simples e impressionante, construído com juncos e mantido até hoje pelos próprios moradores.',
  'Depois, visita à Ilha de Taquile, com almoço incluído, e passagem pela Praia de Collata.',
  'No retorno ao trem, um chá da tarde marca essa pausa antes de seguir viagem. À noite, o trajeto continua em direção a Sacacoha.']
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
  'A chegada marca o fim da viagem, com a opção de um tour panorâmico pela cidade ou transfer direto ao aeroporto.']
}];


const included = [
'Acomodação a bordo do trem Belmond',
'Todas as refeições e bebidas durante a jornada',
'Experiências e entretenimento a bordo',
'Excursões guiadas ao longo do percurso'];


export function JourneyTimeline() {
  return (
    <section id="jornada" className="py-28 md:py-40 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">A Jornada</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              Três dias pelos Andes
            </h2>
            <p className="text-muted-foreground font-extralight max-w-2xl mx-auto text-lg">De Cusco a Arequipa, cada dia revela a sua história, sua cultura e suas paisagens de tirar o fôlego.

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
                        transition={{ delay: 0.3, type: 'spring' }} />
                      
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[16/10] overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        
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
                        {item.paragraphs.map((p, idx) =>
                        <p key={idx} className="text-muted-foreground font-extralight leading-relaxed text-sm">
                            {p}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>);

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
                {included.map((item) =>
                <div key={item} className="flex items-start gap-3 p-4 border border-border rounded-sm">
                    <Check className="size-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground font-extralight tracking-wide text-sm">{item}</span>
                  </div>
                )}
              </div>

              {/* ===== INVESTIMENTO ===== */}
              <div className="mt-16 text-center border border-gold/20 p-10 md:p-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="size-5 text-gold" />
                  <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">VALOR PARA DUAS PESSOAS</span>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-extralight tracking-wide text-foreground">R$49.900

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
    </section>);

}