import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Icons from './Icons'
import logo from './assets/images/logo.png'

const Footer = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-black/8 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img src={logo} alt="Logo WDT" className="h-full w-full object-contain p-2" />
            </span>
            <span className="text-base font-bold tracking-tight text-slate-950">
              Web Dev Talks
            </span>
          </Link>
          <span className="hidden text-sm text-slate-500 md:inline">{t('navbar.subtitle')}</span>
        </div>
        <Icons />
      </div>
    </footer>
  )
}

export default Footer
