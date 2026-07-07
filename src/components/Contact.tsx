import { SectionHeading } from './SectionHeading'

const contactLinks = [
  { label: 'GitHub', value: 'github.com/umuttig37', href: 'https://github.com/umuttig37' },
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'LinkedIn', value: 'Add LinkedIn URL', href: '#' },
]

export function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something useful"
        text="Open to junior developer roles, practical web projects and business software work."
      />
      <div className="contact-layout">
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
        <form className="contact-form" aria-label="Frontend-only contact form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me what you have in mind" rows={5} />
          </label>
          <button type="button">Frontend-only for now</button>
        </form>
      </div>
    </section>
  )
}
