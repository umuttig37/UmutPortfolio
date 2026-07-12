import { SectionHeading } from './SectionHeading'

type ContactItem = {
  label: string
  value: string
  href?: string
}

const contactLinks: ContactItem[] = [
  { label: 'GitHub', value: 'github.com/umuttig37', href: 'https://github.com/umuttig37' },
  { label: 'Location', value: 'Finland' },
  { label: 'Status', value: 'Open to junior developer roles' },
]

export function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Contact"
        text="I am open to junior developer roles, project work and conversations about building useful software. GitHub is the easiest place to reach me for now."
      />
      <div className="contact-layout">
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            link.href ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ) : (
              <div className="contact-info-card" key={link.label}>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </div>
            )
          ))}
        </div>
        <div className="contact-note">
          <span>Let&apos;s talk</span>
          <h3>Have something in mind?</h3>
          <p>
            Whether it is a junior role, a practical web project or simply a question about my work, feel free to start a conversation on GitHub.
          </p>
          <a className="button" href="https://github.com/umuttig37" target="_blank" rel="noreferrer">
            Open GitHub profile
          </a>
        </div>
      </div>
    </section>
  )
}
