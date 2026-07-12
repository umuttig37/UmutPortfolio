export type ProjectStatus = 'live' | 'case-study' | 'planned'

export type Project = {
  title: string
  type: string
  status: ProjectStatus
  summary: string
  role?: string
  focus: string[]
  tech: string[]
  links?: {
    label: string
    href: string
  }[]
  notes?: string
}

export const projects: Project[] = [
  {
    title: 'Levoro',
    type: 'Real business / vehicle transport platform',
    status: 'case-study',
    summary:
      'A vehicle transport platform for handling customer orders, driver workflows and day-to-day admin work. My work has included pricing logic, order statuses, dashboard features and practical UI improvements.',
    role:
      'I work on Levoro as a product owner and developer, helping shape the product while developing its business logic, order flow and admin and driver features.',
    focus: ['Order workflow', 'Admin tools', 'Driver views', 'Pricing logic'],
    tech: ['Python', 'Flask', 'SQLite/PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
    links: [{ label: 'Architecture notes', href: '#contact' }],
    notes:
      'The operational backend is not publicly hosted, so the project is presented as a case study.',
  },
  {
    title: 'Duunex',
    type: 'Marketplace / full stack web app',
    status: 'live',
    summary:
      'A service marketplace I am developing around authentication, listings and the steps between finding a service and getting in touch. It is a practical full stack project built around real marketplace interactions.',
    focus: ['Authentication', 'Listings', 'User flows', 'Marketplace UI'],
    tech: ['Next.js', 'TypeScript', 'Supabase/Firebase', 'Tailwind', 'Modern frontend stack'],
    links: [
      { label: 'GitHub', href: 'https://github.com/umuttig37' },
      { label: 'Details', href: '#contact' },
    ],
  },
  {
    title: 'Suomenpaperitukku / SaniteettiSivu',
    type: 'Real business website',
    status: 'case-study',
    summary:
      'A business website and product catalogue for paper and sanitary supplies. The work combines clear product presentation with a straightforward contact and order enquiry flow.',
    focus: ['Catalog structure', 'Contact flow', 'Business content', 'Frontend polish'],
    tech: ['React', 'Vite', 'TypeScript', 'Node/Express', 'Nodemailer'],
    links: [{ label: 'GitHub', href: 'https://github.com/umuttig37' }],
  },
]
