export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type SiteConfig = {
  name: string
  description: string
  mainNav: NavItem[]
  subLinks: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Dashboard app",
  description: "A simple note taking app that uses AI to summarize your notes.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "invoices",
      href: "/dashboard/invoices",
    },
    {
      title: "customers",
      href: "/dashboard/customers",
    },
  ],
  subLinks: [],
}
