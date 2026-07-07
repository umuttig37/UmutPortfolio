export type ProjectStatus = 'live' | 'case-study' | 'planned'

export type Project = {
  title: string
  type: string
  status: ProjectStatus
  summary: string
  role?: string
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
      'A business-oriented vehicle transport platform for customer transport orders, driver workflows and admin operations. The work centers on order flows, pricing logic, status handling, dashboard features and practical UI improvements.',
    role:
      'Product owner and developer, focused on product direction, business logic, order workflow, admin and driver features, and UI polish.',
    tech: ['Python', 'Flask', 'SQLite/PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
    links: [{ label: 'Architecture notes', href: '#contact' }],
    notes:
      'If the backend is not public, this should be presented with real screenshots, architecture notes and workflow details instead of a live demo.',
  },
  {
    title: 'Duunex',
    type: 'Marketplace / full stack web app',
    status: 'live',
    summary:
      'A service marketplace style web application with authentication, listings, user flows and a modern interface. Built as a full stack product direction exercise around real marketplace interactions.',
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
      'A business website and catalog experience for paper and sanitary products, including product presentation and a contact/order flow for customer inquiries.',
    tech: ['React', 'Vite', 'TypeScript', 'Node/Express', 'Nodemailer'],
    links: [{ label: 'GitHub', href: 'https://github.com/umuttig37' }],
  },
]
