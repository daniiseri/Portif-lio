import { AcademicEducation } from '@/components/academic-education'
import { Introducao } from '@/components/introducao'
import { ModeToggle } from '@/components/mode-toggle'
import { NavigationMenuDemo } from '@/components/navigation-menu'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <>
      <header className='fixed w-full'>
        <div className='w-full flex justify-between'>
          <NavigationMenuDemo />
          <ModeToggle />
        </div>
      </header>
      <main className='flex flex-col gap-4 p-12 items-center'>
        <Introducao />
        <AcademicEducation />
        <Skills />
        <Projects />
      </main>
    </>
  )
}
