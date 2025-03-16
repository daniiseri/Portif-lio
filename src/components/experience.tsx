import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const EXPERIENCE = [
  {
    enterprise: 'Tráfego Soluções Integradas',
    start: new Date(2024, 3),
    end: new Date(2024, 10),
    imageUrl: '/trafego.jpeg',
    position: 'Desenvolvedor Jr Fullstack',
    description: 'Desenvolver softwares do setor imobiliário',
    locale: 'Americana, São Paulo, Brasil',
    type: 'Remota'
  },
  {
    enterprise: 'DRS V - Departamento Regional de Saúde - Secretaria de Estado da Saúde',
    start: new Date(2018, 5),
    end: new Date(2019, 5),
    position: 'Estagiario',
    imageUrl: undefined,
    description: 'Auxiliar na manutenção, e na transmissão de video e webconferência',
    locale: 'Barretos, São Paulo, Brasil',
    type: 'Presencial'
  }
] as const

export function Experience() {
  return (
    <div id="experience" className="w-full space-y-4">
      <h3 className="font-extrabold text-primary text-2xl text-center">Experiência profissional</h3>
      {
        EXPERIENCE.map(({ description, end, enterprise, imageUrl, position, start, locale, type }, index) => (
          <Card className="pt-4">
            <CardContent className="flex gap-2">
              <div>
                {
                  imageUrl
                    ? (
                      <Image src={`/experience${imageUrl}`} width={120} height={120} alt={enterprise} />
                    ) : <ImageIcon className="size-28 stroke-1" />
                }
              </div>

              <div>
                <h3 className="font-semibold">{position}</h3>

                <div className="text-sm">
                  <p>{enterprise}</p>
                  <p>
                    {start.toLocaleDateString('pt-br', {
                      year: 'numeric',
                      month: 'long'
                    })}
                    {' '}-{' '}
                    {end.toLocaleDateString('pt-br', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                  <p>{locale} . {type}</p>
                  <p>{description}</p>
                </div>

              </div>
            </CardContent>
          </Card>
        ))
      }
    </div>

  )
}