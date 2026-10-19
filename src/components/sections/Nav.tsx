import { useState, useEffect } from 'react'
import { profile } from '@/data/content'

const links = [
  { label: '关于', en: 'About', href: '#about' },
  { label: '经历', en: 'Exp', href: '#timeline' },
  { label: '技能', en: 'Skills', href: '#skills' },
  { label: '作品', en: 'Work', href: '#portfolio' },
  { label: '联系', en: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          {profile.name.zh}
          <span className="ml-1.5 font-normal text-muted-foreground">{profile.name.en}</span>
        </a>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
