export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
            © {currentYear} Belmond Andean Explorer. Conteúdo promocional.
          </p>
          <a
            href="#contato"
            className="text-xs tracking-[0.2em] uppercase text-gold font-light hover:text-gold-light transition-colors"
          >
            Solicitar Proposta
          </a>
        </div>
      </div>
    </footer>
  );
}
