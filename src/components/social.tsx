import { Facebook, Github, Instagram, Linkedin, PhoneCall } from "lucide-react";

export function Social() {
    return (
        <>
            <a href="https://www.linkedin.com/in/daniel-de-souza-iseri-12b558230/" target="_blank"><Linkedin /></a>
            <a href="https://github.com/daniiseri" target="_blank"><Github /></a>
            <a href="https://www.facebook.com/danieldesouza.iseri/" target="_blank"><Facebook /></a>
            <a href="https://www.instagram.com/daniiseri/" target="_blank"><Instagram /></a>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5517992352155" target="_blank"><PhoneCall /></a>
        </>
    )
}