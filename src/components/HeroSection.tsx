import { Button } from "./ui/button-premium"
import { ArrowRight, Play } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9, 20, 45, 0.9), rgba(15, 32, 59, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-luxe-glow"></span>
            Marketing Exclusivo para Advogados de Elite
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Transforme seu
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              escritório jurídico
            </span>
            em uma marca de luxo
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Estratégias de marketing premium que atraem clientes de alto valor e elevam 
            seu posicionamento no mercado jurídico de elite.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500%</div>
              <div className="text-muted-foreground">Aumento ROI médio</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">R$ 2M+</div>
              <div className="text-muted-foreground">Faturamento gerado</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Escritórios atendidos</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button variant="luxury" size="xl" className="group">
              Quero uma Consultoria Gratuita
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" className="group">
              <Play className="mr-2" />
              Ver Cases de Sucesso
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-muted-foreground animate-fade-in-up">
            <p className="mb-4">Trusted by leading law firms:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Silva & Associados</div>
              <div className="text-lg font-semibold">Advocacia Premium</div>
              <div className="text-lg font-semibold">Elite Legal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}