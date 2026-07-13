import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const root = document.documentElement
    const targets = document.querySelectorAll<HTMLElement>('.reveal-target')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12%', threshold: 0.08 },
    )

    root.classList.add('reveal-enabled')
    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-enabled')
    }
  }, [])

  return null
}
