import Image from "next/image"
import { Slider } from "./slider"
import { Status } from "./status"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export type Project = {
    title: string,
    description?: string,
    pages?: { route: string, imageUrl: string }[],
    url?: string,
    repositoryUrl?: string,
    status: 'online' | 'offline'
    project?: string,
}

const imagesPath: string = '/projects/'

const projects: Project[] = [
    {
        title: 'bingo-foods',
        status: 'online',
        url: 'https://bingo-foods.vercel.app/',
        description: 'Desenvolvi uma aplicação dedicada à criação de cartelas de bingo, com o propósito de promover interação e entretenimento entre os idosos. A iniciativa surgiu a partir da colaboração com minha irmã, nutricionista na Prefeitura Municipal de Palmares, que vislumbrou uma maneira lúdica e inclusiva de fortalecer os laços com essa comunidade.',
        pages: [
            { route: 'home', imageUrl: 'home.PNG' }
        ],
    },
    {
        title: 'raffle',
        status: 'online',
        url: 'https://raffle-delta-seven.vercel.app/raffle',
        description: 'Essa aplicação conduz e verifica o sorteio de maneira eficiente. Com a integração dessas funcionalidades, o objetivo é proporcionar uma experiência dinâmica e interativa para os idosos, contribuindo para a promoção do bem-estar e da alegria em suas atividades diárias.',
        pages: [
            { route: 'raffle', imageUrl: 'raffle.PNG' },
            { route: 'report', imageUrl: 'report.PNG' }
        ]
    },
    {
        title: 'discord-arrow',
        status: 'online',
        url: 'https://discord-arrow.vercel.app/',
        description: 'Esta aplicação foi desenvolvida durante a imersão em React na Alura. Trata-se de um chat público com a adição de stickers personalizados, proporcionando uma experiência única e envolvente de comunicação online.Além disso, a aplicação permite que os usuários vinculem sua conta do GitHub, capturando automaticamente sua foto de perfil para exibi-la no chat. Essa funcionalidade adiciona um toque pessoal e facilita a identificação visual dos participantes no ambiente de conversação.',
        pages: [
            { route: 'home', imageUrl: 'home.PNG' },
            { route: 'chat', imageUrl: 'chat.PNG' }
        ]
    },
    {
        title: 'puppeteer',
        status: 'offline',
        repositoryUrl: 'https://github.com/daniiseri/puppeteer',
        description: 'Desenvolvi uma API para minerar informações sobre hardwares disponíveis no Mercado Livre. A intenção principal dessa ferramenta é sugerir produtos de acordo com a necessidade específica do cliente. Os resultados são retornados com base em níveis pré-estabelecidos por mim, proporcionando uma abordagem personalizada na busca por hardware no mercado.',
        project: 'HelpTech: Orientação Personalizada para Compra de Hardwares com Base nas Necessidades do Cliente Identificadas por um Questionário. Desenvolvido como Trabalho de Conclusão de Curso (TCC).'
    },
    {
        title: 'web-App-HelpTech',
        status: 'offline',
        repositoryUrl: 'https://github.com/daniiseri/web-App-HelpTech',
        description: 'Desenvolvi a página que facilita o cadastro de perguntas e respostas, disponível apenas para administradores. Essa página também conduz um quiz, consistindo em uma série de perguntas e opções de resposta cuidadosamente elaboradas, destinado a identificar as necessidades específicas do cliente. Ao final do quiz, são exibidos os hardwares recomendados com base nas respostas fornecidas, oferecendo uma solução personalizada e alinhada com as preferências do usuário.',
        project: 'HelpTech: Orientação Personalizada para Compra de Hardwares com Base nas Necessidades do Cliente Identificadas por um Questionário. Desenvolvido como Trabalho de Conclusão de Curso (TCC).',
        pages: [
            {
                route: 'home', imageUrl: 'home.PNG'
            },
            {
                route: 'signin', imageUrl: 'signin.PNG'
            },
            {
                route: 'signup', imageUrl: 'signup.PNG'
            }
        ]
    },
    {
        title: 'back-end-App-HelpTech',
        status: 'offline',
        repositoryUrl: 'https://github.com/daniiseri/back-end-App-HelpTech',
        description: 'Esta API permite autenticação e autorização, além de possibilitar o cadastro de perguntas e opções de respostas. O principal objetivo é identificar as necessidades do cliente de forma personalizada. Destaca-se que apenas o administrador tem permissão para criar e gerenciar perguntas e respostas, garantindo um controle rigoroso sobre o conteúdo e proporcionando uma experiência segura e direcionada.',
        project: 'HelpTech: Orientação Personalizada para Compra de Hardwares com Base nas Necessidades do Cliente Identificadas por um Questionário. Desenvolvido como Trabalho de Conclusão de Curso (TCC).'
    }
]

export function Projects() {
    return (
        <div id="projects" className="flex flex-wrap gap-2 justify-center">
            <CardHeader className="w-full font-extrabold text-primary text-center"><CardTitle>Projetos</CardTitle></CardHeader>
            <Slider
                className='h-[520px]'
                length={projects.length}
                render={
                    (
                        <div className="flex">
                            {
                                projects.map(({ status, title, description, pages, repositoryUrl, url, project }) => (
                                    <Card key={title} className="w-[300px] border-none p-2">
                                        <CardContent className="p-1 rounded-lg h-96 border border-border">
                                            {
                                                <div className="flex h-1/2">
                                                    {
                                                        pages &&
                                                        <Image key={pages[0].imageUrl} width={200} height={200} alt={title} src={`${imagesPath}${title}/${pages[0].imageUrl}`} className="rounded-t-lg w-full bg-cover" />
                                                    }
                                                </div>
                                            }
                                            <div className="p-4 max-h-[50%] overflow-hidden">
                                                <p className="text-primary text-xs">{project}</p>
                                                <p className="text-xs">{description}</p>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="text-primary underline p-4 flex justify-between">
                                            {
                                                status === 'online'
                                                    ? <a href={url} target="_blank">acessar página</a>
                                                    : <a href={repositoryUrl} target="_blank">acessar repositório</a>
                                            }

                                            <Status status={status} />
                                        </CardFooter>
                                    </Card>
                                ))
                            }
                        </div>
                    )
                }
            />
        </div>
    )
}