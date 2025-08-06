import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Star } from "lucide-react"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Silva",
      role: "Sócio-fundador",
      company: "Silva & Associados",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "Em 6 meses, nosso faturamento aumentou 400%. A LegalLux transformou completamente nossa presença digital e nossa carteira de clientes premium.",
      rating: 5,
      result: "+400% faturamento"
    },
    {
      name: "Dra. Marina Costa",
      role: "Advogada Criminalista",
      company: "Costa Advocacia Criminal",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: "Conseguimos nos posicionar como referência em direito criminal de alta complexidade. Os leads que recebemos agora são de muito mais qualidade.",
      rating: 5,
      result: "+250% leads qualificados"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Especialista em M&A",
      company: "Mendes Corporate Law",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "A estratégia de conteúdo nos trouxe visibilidade nacional. Agora atendemos grandes corporações que nos encontraram online.",
      rating: 5,
      result: "Visibilidade nacional"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos clientes
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              estão dizendo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de advogados que transformaram seus negócios conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-luxury transition-all duration-500 border-border/50 hover:border-primary/30 bg-card backdrop-blur-sm relative overflow-hidden"
            >
              {/* Result Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {testimonial.result}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos clientes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">350%</div>
            <div className="text-muted-foreground">ROI médio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Tempo de resposta</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5 anos</div>
            <div className="text-muted-foreground">Experiência no setor</div>
          </div>
        </div>
      </div>
    </section>
  )
}