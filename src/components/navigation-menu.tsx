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
                    <MenubarTrigger>Introdução</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#education">
                <MenubarMenu>
                    <MenubarTrigger>Formação Acadêmica</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#skills">
                <MenubarMenu>
                    <MenubarTrigger>Competências</MenubarTrigger>
                </MenubarMenu>
            </a>
            <a href="#projects">
                <MenubarMenu>
                    <MenubarTrigger>Projetos</MenubarTrigger>
                </MenubarMenu>
            </a>
            <MenubarMenu>
                <MenubarTrigger>Avaliação</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}