import { type ReactNode } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function SiteShell({
  children,
  hero,
}: {
  children: ReactNode
  hero?: ReactNode
}) {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="pb-16">
        {hero}
        <div className="page-frame">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
