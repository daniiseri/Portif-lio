import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const skills: { imageUrl: string, title: string }[] = [
    { imageUrl: 'html.png', title: 'HTML' },
    { imageUrl: 'css.png', title: 'CSS' },
    { imageUrl: 'javascript.png', title: 'Javascript' },
    { imageUrl: 'nodejs.png', title: 'NodeJs' },
    { imageUrl: 'express.png', title: 'Express' },
    { imageUrl: 'fastify.png', title: 'Fastify' },
    { imageUrl: 'mysql.png', title: 'MySQL' },
    { imageUrl: 'postgresql.png', title: 'Postgresql' },
    { imageUrl: 'prisma.png', title: 'Prisma' },
    { imageUrl: 'tailwindcss.png', title: 'TailwindCSS' },
    { imageUrl: 'graphql.png', title: 'Graphql' },
    { imageUrl: 'next.png', title: 'NextJs' },
    { imageUrl: 'react.png', title: 'React' },
    { imageUrl: 'typescript.png', title: 'Typescript' },
    { imageUrl: 'git.png', title: 'Git' },
]

export function Skills() {
    return (
        <Card id="skills" className="border-none">
            <CardHeader>
                <CardTitle className="font-extrabold text-primary text-center">Tecnologias</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex gap-4 items-center flex-wrap">
                {
                    skills.map(skill => {
                        return (
                            <Image
                                key={skill.title}
                                src={`/skills/${skill.imageUrl}`}
                                alt={skill.title}
                                className="w-1/6 max-w-52"
                                height={200}
                                width={200}
                            />
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}