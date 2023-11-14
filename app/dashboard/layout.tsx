import SideNav from "@/components/dashboard/sidenav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
