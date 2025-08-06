import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button-premium"
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Zap, 
  Shield,
  ArrowRight 
} from "lucide-react"

export const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Posicionamento Digital Premium",
      description: "Construímos uma presença digital sofisticada que reflete a excelência do seu escritório",
      features: ["Website de luxo", "SEO estratégico", "Branding premium"],
      price: "A partir de R$ 15.000",
      badge: "Mais Popular"
    },
    {
      icon: TrendingUp,
      title: "Marketing de Conteúdo Jurídico",
      description: "Criamos conteúdo educativo que posiciona você como autoridade no seu nicho",
      features: ["Artigos especializados", "LinkedIn estratégico", "Newsletter premium"],
      price: "A partir de R$ 8.000",
      badge: null
    },
    {
      icon: Users,
      title: "Geração de Leads Qualificados",
      description: "Atraímos clientes de alto valor através de campanhas precisas e segmentadas",
      features: ["Google Ads premium", "Facebook Ads", "Automação de vendas"],
      price: "A partir de R$ 12.000",
      badge: "ROI Garantido"
    },
    {
      icon: Award,
      title: "Gestão de Reputação Online",
      description: "Protegemos e fortalecemos sua reputação digital com monitoramento 24/7",
      features: ["Monitoramento contínuo", "Gestão de reviews", "PR digital"],
      price: "A partir de R$ 6.000",
      badge: null
    },
    {
      icon: Zap,
      title: "Automação de Marketing",
      description: "Sistemas inteligentes que nutrem leads e otimizam sua captação de clientes",
      features: ["CRM integrado", "E-mail marketing", "Chatbots premium"],
      price: "A partir de R$ 10.000",
      badge: null
    },
    {
      icon: Shield,
      title: "Consultoria Estratégica",
      description: "Análise completa do seu negócio com plano de crescimento personalizado",
      features: ["Auditoria completa", "Plano estratégico", "Mentoria mensal"],
      price: "A partir de R$ 20.000",
      badge: "VIP"
    }
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Serviços Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções de Marketing
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Sob Medida para Você
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada estratégia é cuidadosamente desenvolvida para maximizar seus resultados 
            e posicionar seu escritório no topo do mercado jurídico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {service.price}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="luxury" size="xl">
            Solicitar Proposta Personalizada
          </Button>
        </div>
      </div>
    </section>
  )
}