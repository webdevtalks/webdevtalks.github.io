import { type ReactElement } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import Icons from './Icons'
import logo from './assets/images/logo.png'

const Home = (): ReactElement => {
  const { t } = useTranslation()

  const hero = (
    <section className="relative overflow-hidden pt-10">
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-6 md:pb-14">
        <div className="pointer-events-none absolute left-[-5rem] top-16 h-56 w-56 rounded-full bg-yellow-300/35 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-8 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <Card className="relative overflow-hidden rounded-3xl px-6 py-8 md:px-10 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="grid gap-5 md:gap-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">
                <Sparkles className="h-4 w-4" />
                {t('homePage.eyebrow')}
              </span>
              <div className="grid gap-5 md:gap-7">
                <h1 className="text-balance text-4xl font-bold leading-none tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                  {t('homePage.headline')}
                </h1>
                <p className="max-w-2xl text-lg text-slate-600 md:text-xl">
                  {t('homePage.description')}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/about">
                  <Button size="lg" className="w-full rounded-full sm:w-auto">
                    {t('navbar.aboutUs')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/sponsorship">
                  <Button variant="secondary" size="lg" className="w-full rounded-full sm:w-auto">
                    {t('navbar.sponsorship')}
                  </Button>
                </Link>
              </div>
              <Icons className="pt-4" />
            </div>

            <div className="mx-auto w-full min-w-0 max-w-md md:hidden lg:block">
              <div className="relative mx-auto w-full min-w-0 min-h-96 overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-4 shadow-2xl sm:p-6 lg:aspect-square lg:min-h-0">
                <div className="absolute inset-x-6 top-6 h-28 rounded-3xl bg-gradient-to-r from-yellow-300/70 to-sky-200/55 blur-2xl" />
                <div className="relative flex h-full min-w-0 flex-col rounded-3xl border border-black/8 bg-white/90 px-4 pb-4 pt-5 text-center sm:px-6 sm:pb-5 sm:pt-6">
                  <div className="flex min-h-56 flex-1 items-center justify-center overflow-hidden">
                    <img
                      src={logo}
                      alt="Logo WDT"
                      className="h-auto w-full max-w-xs max-h-full object-contain"
                    />
                  </div>
                  <div className="mt-3 shrink-0 space-y-2">
                    <p className="text-xl font-bold leading-tight text-slate-950 sm:text-3xl">Web Dev Talks</p>
                    <p className="text-xs uppercase tracking-widest text-slate-500 sm:text-sm">{t('homePage.communityLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )

  return (
    <SiteShell hero={hero}>
      <section className="-mt-2 grid gap-5 md:grid-cols-3">
        <Card className="rounded-3xl p-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('homePage.card1Eyebrow')}</p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{t('homePage.card1Title')}</h2>
          <p className="text-slate-600">
            {t('homePage.card1Body')}
          </p>
        </Card>
        <Card className="rounded-3xl p-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('homePage.card2Eyebrow')}</p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{t('homePage.card2Title')}</h2>
          <p className="text-slate-600">
            {t('homePage.card2Body')}
          </p>
        </Card>
        <Card className="rounded-3xl p-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('homePage.card3Eyebrow')}</p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{t('homePage.card3Title')}</h2>
          <p className="text-slate-600">
            {t('homePage.card3Body')}
          </p>
        </Card>
      </section>
    </SiteShell>
  )
}

export default Home
