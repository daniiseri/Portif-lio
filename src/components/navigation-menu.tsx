import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./mode-toggle"


export function NavigationMenuDemo() {
    return (
        <Menubar className="flex">
            <a href="#introduction">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Introdução</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#education">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Formação Acadêmica</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#skills">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Competências</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#projects">
                <MenubarMenu >
                    <MenubarTrigger className="cursor-pointer">Projetos</MenubarTrigger>
                </MenubarMenu>
            </a>
            <MenubarMenu>
                <MenubarTrigger>Avaliação</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}