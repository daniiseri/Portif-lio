import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Fragment } from "react"

const courses: { title: string, description?: string, url?: string }[] = [
    { title: 'Técnico em Manutenção e Suporte em Informática', description: 'O curso de Manutenção e Suporte em Informática é projetado para proporcionar aos participantes uma compreensão aprofundada dos princípios fundamentais da manutenção de sistemas e suporte técnico em ambientes de informática. Ao longo do programa, os alunos serão expostos a uma variedade de tópicos práticos e teóricos, equipando-os com as habilidades necessárias para diagnosticar, resolver problemas e oferecer suporte eficaz em ambientes de TI dinâmicos.' },
    { title: 'Bacharelado em Sistemas de Informação', description: 'O Bacharelado em Sistemas de Informação é um curso abrangente projetado para fornecer uma base sólida de conhecimentos teóricos e habilidades práticas na área de tecnologia da informação. Durante o programa, os estudantes explorarão as complexidades dos sistemas de informação, desde o design e desenvolvimento até a implementação eficaz em diversos ambientes organizacionais.' },
    { title: 'Tech Academy', description: 'Este certificado reconhece um desenvolvedor júnior full stack com talento exponencial', url: 'https://lms.startse.com/certificado/v2/62e293e41aa0ba726fbb04c4?studentId=6268545e8ca05b167fe97256' },
    { title: 'NLW IA', description: 'Pela participação no evento NLW IA, que aconteceu nos dias 11, 12, 13 e 14 de setembro de 2023, que inclui aulas ao vivo sobre o uso da inteligência artificial em programação', url: 'https://app.rocketseat.com.br/certificates/72e22fc3-2ece-4493-9c7c-b42115e5ffeb' },
    { title: 'DISCOVERY', description: 'Conclui com sucesso o curso Discovery entre 12/09/2023 e 18/09/2023, com carga horária de 12h. O currículo de aprendizado inclui: fundamentos da programação web, HTML, CSS, javascript, Git e Github', url: 'https://app.rocketseat.com.br/certificates/685f7ae7-8ddb-476c-b951-b841ee682d07' },
    { title: 'Curso de Java', description: 'Concluiu o Curso Online de Java, que aconteceu entre 09 e 15 de outubro de 2023. O curso teve carga horária de 4 horas e inclui aulas sobre a Criaçã de uma aplicação Java com Spring Boot. Conteúdo: Desenvolvimento de uma aplicação back-end em java; Maven; Spring Boot; API Rest; Lombok; Integração com H2 Database Engine; Implementando segurança noos dados doo usuário; Tratamento de Exceções e Deploy do back-end', url: 'https://app.rocketseat.com.br/certificates/ca2a50d5-d254-4a35-ae47-8442a8e07bc4' },
    { title: 'Google Cloud Skills Boost', description: 'A certificação Google Cloud Skills Boost é uma distinção reconhecida mundialmente que valida as habilidades e competências em tecnologias e serviços oferecidos pela plataforma Google Cloud. Este programa de certificação é projetado para profissionais de tecnologia que buscam destacar suas habilidades na implementação, gerenciamento e otimização de soluções em nuvem usando as tecnologias Google Cloud.', url: 'https://www.cloudskillsboost.google/public_profiles/a140dd45-bbeb-425c-a855-d641519ae273' }
]

export function AcademicEducation() {
    return (
        <>
            <h3 className="font-extrabold text-primary text-2xl">Formação Acadêmica</h3>
            <Card id="education">
                {
                    courses.map((course, index) => {
                        return (
                            <Fragment key={course.title}>
                                <CardHeader >
                                    <CardTitle>{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {
                                        course?.description
                                        &&
                                        course?.description
                                    }
                                </CardContent>
                                {
                                    course.url
                                    &&
                                    <CardFooter>
                                        <a href={course.url} target="_blank" className="flex items-center gap-1 underline font-extrabold text-primary"><Image src='/certificate.png' alt={course.title} width={40} height={40} className="w-6" /> acessar certificado</a>
                                    </CardFooter>
                                }
                                {
                                    index < courses.length - 1
                                    &&
                                    <Separator />
                                }
                            </Fragment>
                        )
                    })
                }
            </Card>
        </>
    )
} 