import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./mode-toggle"


export function NavigationMenuDemo() {
    return (
        <Menubar className="flex">
            <MenubarMenu>
                <MenubarTrigger>Introdução</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Formação Acadêmica</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Competências</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Projetos</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Avaliação</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}