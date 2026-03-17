import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline';
import { AboardExperience } from '@/components/sections/AboardExperience';
import { WebSeries } from '@/components/sections/WebSeries';

const WHATSAPP_NUMBER = '5511999999999'; // placeholder

const galleryImages = [
{ src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', alt: 'Andes peruanos' },
{ src: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80', alt: 'Trem de luxo' },
{ src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', alt: 'Machu Picchu' },
{ src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Paisagem andina' },
{ src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Gastronomia refinada' },
{ src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', alt: 'Lago Titicaca' }];

const openWhatsApp = () => {
  const message = encodeURIComponent(
    'Olá! Tenho interesse no Belmond Andean Explorer e gostaria de receber uma proposta personalizada.'
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Belmond Andean Explorer | Trem de Luxo no Peru"
        description="Descubra a experiência incomparável do Belmond Andean Explorer. Viaje pelos Andes peruanos em suítes de luxo com gastronomia refinada." />
      

      <div className="min-h-screen bg-background">
        {/* ===== HERO ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay muted loop playsInline preload="metadata"
              className="w-full h-full object-cover">
              
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-8 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}>
              

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.15em] text-cream leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}>
                
                BELMOND
                <br />
                <span className="text-gold-gradient">ANDEAN EXPLORER</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-extralight tracking-wide text-cream/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}>
                
                Uma jornada cultural e gastronômica pelos Andes peruanos.
                <br className="hidden md:block" />
                De Cusco ao Lago Titicaca, uma experiência que transforma.
              </motion.p>

              <motion.a
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-sm tracking-[0.2em] uppercase font-light hover:bg-gold-light transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}>
                
                Solicite sua proposta
                <ArrowRight className="size-4" />
              </motion.a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}>
              
              <span className="text-xs tracking-[0.3em] uppercase text-cream/50 font-light">Descubra</span>
              <motion.div
                className="w-px h-8 bg-gold/50"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
              
            </motion.div>
          </div>
        </section>

        {/* ===== JORNADA TIMELINE ===== */}
        <JourneyTimeline />

        {/* ===== GASTRONOMIA & A BORDO ===== */}
        <AboardExperience />

        {/* ===== GALERIA ===== */}
        <section className="py-28 md:py-40 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 px-6 space-y-4">
              <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Galeria</span>
              <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
                Paisagens que inspiram
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {galleryImages.map((img, i) =>
            <ScrollReveal key={img.src} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end p-6">
                    <span className="text-cream/0 group-hover:text-cream/90 transition-colors duration-500 text-sm tracking-widest uppercase font-light">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* ===== CONTATO / LEAD FORM ===== */}
        <section id="contato" className="py-28 md:py-40 px-6 lg:px-8 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-4 mb-12">
                <span className="text-sm tracking-[0.3em] uppercase text-gold font-light">Exclusivo</span>
                <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-foreground">
                  Solicite sua proposta
                </h2>
                <p className="text-muted-foreground font-extralight text-lg max-w-lg mx-auto">
                  Preencha seus dados e nossa equipe entrará em contato
                  com uma proposta personalizada para a sua viagem.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-light">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-light tracking-wide focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Seu nome"
                    maxLength={100} />
                  
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-light">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-light tracking-wide focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                    placeholder="seu@email.com"
                    maxLength={255} />
                  
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-gold text-primary-foreground text-sm tracking-[0.2em] uppercase font-light hover:bg-gold-light transition-colors duration-300">
                    
                    Enviar
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/40 text-gold text-sm tracking-[0.2em] uppercase font-light hover:bg-gold/10 transition-colors duration-300">
                    
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>);

}