import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Entre em Contato
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Vamos trabalhar juntos?</CardTitle>
            <CardDescription>
              Estou sempre aberto a discutir novos projetos, ideias criativas ou
              oportunidades para fazer parte da sua visão.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:seu@email.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    seu@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a
                    href="tel:+5511999999999"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm text-muted-foreground">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href="mailto:seu@email.com">Enviar Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contacts;
