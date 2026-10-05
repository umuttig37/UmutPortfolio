import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]['href']>('#top')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}` as (typeof navItems)[number]['href'])
        }
      },
      { rootMargin: '-20% 0px -65%', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            className={activeSection === item.href ? 'active' : undefined}
            key={item.href}
            href={item.href}
            aria-current={activeSection === item.href ? 'location' : undefined}
            onClick={() => setActiveSection(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
