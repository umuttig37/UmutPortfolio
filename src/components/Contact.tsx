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
        text="I am keeping the public contact details simple while the portfolio is still growing. GitHub is the best place to start for now."
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
        <form className="contact-form" aria-label="Contact form preview" onSubmit={(event) => event.preventDefault()}>
          <p className="contact-form-intro">
            A real contact form can be connected later. For the first public version, this stays as a static UI preview.
          </p>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Project, role or collaboration idea" rows={5} />
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}
