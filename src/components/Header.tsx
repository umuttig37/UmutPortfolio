const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Umut Efe Uygur home">
        <span>U</span>
        <strong>Umut Efe Uygur</strong>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
