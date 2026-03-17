import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'A Experiência', path: '/#experiencia' },
  { name: 'Galeria', path: '/#galeria' },
  { name: 'Contato', path: '/#contato' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = location.pathname === '/' && !isScrolled;

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/95 backdrop-blur-lg border-b border-border'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-sm tracking-[0.3em] uppercase font-light text-cream hover:text-gold transition-colors duration-300"
          >
            Belmond Andean Explorer
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-sm tracking-[0.15em] uppercase font-light text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#contato'); }}
              className="px-5 py-2 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase font-light hover:bg-gold/10 transition-colors duration-300"
            >
              Solicitar Proposta
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 text-cream hover:bg-cream/10"
                  aria-label="Menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className="text-left text-lg font-light tracking-wide text-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
