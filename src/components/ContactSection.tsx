import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button-premium"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Badge } from "./ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              transformar seu escritório?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Agende uma consultoria gratuita e descubra como podemos elevar seu negócio jurídico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Solicite sua consultoria gratuita
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome completo</label>
                  <Input placeholder="Dr. João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <Input placeholder="joao@escritorio.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Área de atuação</label>
                  <Input placeholder="Direito Empresarial" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nome do escritório</label>
                <Input placeholder="Silva & Associados" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Faturamento mensal atual</label>
                <select className="w-full p-3 rounded-md border border-input bg-background">
                  <option>Até R$ 50.000</option>
                  <option>R$ 50.000 - R$ 100.000</option>
                  <option>R$ 100.000 - R$ 500.000</option>
                  <option>Acima de R$ 500.000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Desafios principais</label>
                <Textarea 
                  placeholder="Conte-nos sobre seus principais desafios de marketing e captação de clientes..."
                  rows={4}
                />
              </div>

              <Button variant="luxury" size="xl" className="w-full">
                Solicitar Consultoria Gratuita
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão protegidos pela LGPD. Não fazemos spam.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p className="text-primary font-medium">(11) 3456-7890</p>
                      <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-primary font-medium">contato@legallux.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-primary font-medium">São Paulo, SP</p>
                      <p className="text-sm text-muted-foreground">Atendimento nacional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Horário</h3>
                      <p className="text-primary font-medium">Seg - Sex: 9h às 18h</p>
                      <p className="text-sm text-muted-foreground">Urgências: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Box */}
            <Card className="border-primary/30 bg-gradient-primary/5 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Consultoria Gratuita de 60 minutos
                </h3>
                <p className="text-muted-foreground mb-6">
                  Análise completa do seu marketing atual + plano de ação personalizado.
                </p>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  Valor: R$ 2.500 - Grátis por tempo limitado
                </Badge>
                <Button variant="luxury" size="xl" className="w-full">
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}