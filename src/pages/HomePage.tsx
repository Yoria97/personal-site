import Hero from '@/components/sections/Hero'
import Nav from '@/components/sections/Nav'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import Honors from '@/components/sections/Honors'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      {/* 双栏主体 */}
      <div className="mx-auto max-w-5xl px-6 pb-0 pt-10 sm:px-10">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-16">
          {/* 左侧窄栏：简介 + 技能 */}
          <aside className="w-full shrink-0 lg:w-72">
            <About />
            <Skills />
            <Education />
          </aside>
          {/* 右侧主栏：经历 */}
          <main className="min-w-0 flex-1">
            <Timeline />
          </main>
        </div>
      </div>
      {/* 作品全宽展示 */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Portfolio />
      </div>
      {/* 联系方式放在页面最后，全宽展示 */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Contact />
      </div>
      <Honors />
      <Footer />
    </div>
  )
}
