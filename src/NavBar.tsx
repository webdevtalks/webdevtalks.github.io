import { useState, type ReactElement } from 'react'
import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSurvey } from './hooks/useSurvey'
import { Button } from './components/ui/button'
import { Sheet } from './components/ui/sheet'
import { cn } from './lib/utils'
import { LanguageSelector } from './LanguageSelector'
import logo from './assets/images/logo.png'

const NavBar = (): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const location = useLocation()
  const { openSurvey } = useSurvey()
  const { t } = useTranslation()

  const links = [
    { to: '/about', label: t('navbar.aboutUs') },
    { to: '/sponsorship', label: t('navbar.sponsorship') },
    { to: '/code-of-conduct', label: t('navbar.codeOfConduct') },
  ]

  const isActive = (path: string) => location.pathname === path
  const navLinkClass = (active: boolean) =>
    cn(
      'inline-flex h-9 items-center justify-center rounded-full px-3.5 text-sm font-semibold transition-all duration-200',
      active
        ? 'bg-slate-950 text-white shadow-xl'
        : 'text-slate-700 hover:bg-white/70',
    )

  return (
    <header className="sticky top-0 z-30 border-b border-black/8 bg-amber-50/70 backdrop-blur-xl">
      <div className="page-frame flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={t('navbar.openMenu')}
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-800 shadow-sm lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="inline-flex h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img src={logo} alt="Logo WDT" className="h-full w-full object-contain p-2" />
            </span>
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-slate-950">Web Dev Talks</div>
              <div className="text-sm text-slate-500">{t('navbar.subtitle')}</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={navLinkClass(isActive(link.to))}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="rounded-full px-3.5" onClick={openSurvey}>
            {t('navbar.survey')}
          </Button>
        </nav>

        <LanguageSelector />
      </div>

      <Sheet
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        title={t('navbar.openMenu')}
        description={t('navbar.subtitle')}
      >
        <div className="mt-4 flex flex-col gap-3">
          <Link to="/" className="mb-2 flex items-center gap-3" onClick={() => setIsDrawerOpen(false)}>
            <span className="inline-flex h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img src={logo} alt="Logo WDT" className="h-full w-full object-contain p-2" />
            </span>
            <div>
              <div className="text-lg font-bold tracking-tight text-slate-950">Web Dev Talks</div>
              <div className="text-sm text-slate-500">{t('navbar.home')}</div>
            </div>
          </Link>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsDrawerOpen(false)}
              className={cn(
                'inline-flex h-11 items-center rounded-2xl px-5 text-sm font-semibold transition-all',
                isActive(link.to) ? 'bg-slate-950 text-white' : 'border border-black/10 bg-white/80 text-slate-900',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="justify-start rounded-2xl"
            onClick={() => {
              setIsDrawerOpen(false)
              openSurvey()
            }}
          >
            {t('navbar.survey')}
          </Button>
        </div>
      </Sheet>
    </header>
  )
}

export default NavBar
