import { AcademicEducation } from '@/components/academic-education'
import { Introducao } from '@/components/introducao'
import { ModeToggle } from '@/components/mode-toggle'
import { NavigationMenuDemo } from '@/components/navigation-menu'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <>
      <header className='fixed'>
        <div className='flex-1 w-screen relative'>
          <NavigationMenuDemo />
          <div className='absolute right-0 top-0'><ModeToggle /></div>
        </div>
      </header>
      <main className='flex flex-col gap-4 p-12'>
        <Introducao />
        <AcademicEducation/>
        <Skills/>
      </main>
    </>
  )
}
