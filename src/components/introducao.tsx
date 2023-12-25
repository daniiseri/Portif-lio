import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar } from "./avatar"
import { Social } from "./social"

export function Introducao() {
    return (
        <Card id="introduction">
            <CardHeader>
                <CardTitle className="flex flex-col gap-1">
                    <Avatar />
                    <span className="font-extrabold text-primary" >INTRODUÇÃO</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h1>
                    Bem-vindo ao meu mundo digital,
                    onde a paixão pela codificação se traduz em soluções inovadoras.
                    Sou <span className='font-extrabold text-primary'>DANIEL DE SOUZA ISERI</span>, um desenvolvedor entusiasta dedicado a transformar ideias em experiências funcionais e envolventes.
                    Explore meu portfólio para descobrir o que posso criar e como posso contribuir para o seu próximo projeto.
                </h1>
            </CardContent>
            <CardFooter className="flex gap-1">
                <Social/>
            </CardFooter>
        </Card>
    )
}
