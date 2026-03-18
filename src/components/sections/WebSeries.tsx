import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Play } from 'lucide-react';
import { useState } from 'react';

const episodes = [
  { id: 'VuOHktrktoA', title: 'Episódio 1 — De Cusco aos Templos Incas', day: 'Dia 1' },
  { id: '9QdmpBridfs', title: 'Episódio 2 — Lago Titicaca e Ilhas Flutuantes', day: 'Dia 2' },
  { id: 'i1ZjGvnIklM', title: 'Episódio 3 — Amanhecer Dourado a 4.000m', day: 'Dia 3' },
];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="relative aspect-video w-full overflow-hidden group cursor-pointer"
        aria-label={`Assistir: ${title}`}
      >
        <img src={thumbnail} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
            <Play className="size-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export function WebSeries() {
  return (
    <section id="serie" className="py-28 md:py-40 px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Série Documental</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
              Assista à jornada completa
            </h2>
            <p className="text-muted-foreground font-extralight max-w-2xl mx-auto text-lg">
              Acompanhe cada detalhe dessa experiência extraordinária em nossa série
              documental exclusiva com três episódios gravados a bordo do Andean Explorer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <ScrollReveal key={ep.id} delay={i * 0.12}>
              <div className="space-y-4">
                <YouTubeEmbed videoId={ep.id} title={ep.title} />
                <div className="space-y-1">
                  <span className="text-xs tracking-[0.25em] uppercase text-gold/70 font-light">{ep.day}</span>
                  <p className="text-sm font-light tracking-wide text-foreground/80">{ep.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
