import { Link as LinkIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import SiteShell from './components/SiteShell'
import { Card } from './components/ui/card'
import { Button } from './components/ui/button'
import { Tooltip } from './components/ui/tooltip'
import { useAnchorLinks } from './hooks/useAnchorLinks'

interface SectionDefinition {
  id: string
  title: string
  intro: string[]
  bullets?: string[]
  outro?: string[]
  tone?: 'default' | 'danger'
}

function CodeOfConduct() {
  const { t } = useTranslation()
  const { copyAnchorLink, scrollToElement } = useAnchorLinks()

  const sections: SectionDefinition[] = [
    {
      id: 'proposito',
      title: t('codeOfConduct.purpose.title'),
      intro: [t('codeOfConduct.purpose.description1'), t('codeOfConduct.purpose.description2'), t('codeOfConduct.purpose.appliesTo')],
      bullets: [
        t('codeOfConduct.purpose.inPersonEvents'),
        t('codeOfConduct.purpose.onlineEvents'),
        t('codeOfConduct.purpose.networking'),
        t('codeOfConduct.purpose.socialMedia'),
        t('codeOfConduct.purpose.communicationChannels'),
        t('codeOfConduct.purpose.memberInteractions'),
      ],
      outro: [t('codeOfConduct.purpose.participation')],
    },
    {
      id: 'valores',
      title: t('codeOfConduct.values.title'),
      intro: [t('codeOfConduct.values.description')],
      bullets: [
        t('codeOfConduct.values.respect'),
        t('codeOfConduct.values.inclusion'),
        t('codeOfConduct.values.professionalism'),
        t('codeOfConduct.values.collaboration'),
        t('codeOfConduct.values.diversity'),
        t('codeOfConduct.values.learning'),
      ],
      outro: [t('codeOfConduct.values.welcome')],
    },
    {
      id: 'conducta-esperada',
      title: t('codeOfConduct.expected.title'),
      intro: [t('codeOfConduct.expected.description')],
      bullets: [
        t('codeOfConduct.expected.respectful'),
        t('codeOfConduct.expected.avoidOffensive'),
        t('codeOfConduct.expected.respectStaff'),
        t('codeOfConduct.expected.professional'),
        t('codeOfConduct.expected.respectSpaces'),
        t('codeOfConduct.expected.constructive'),
      ],
    },
    {
      id: 'conducta-inaceptable',
      title: t('codeOfConduct.unacceptable.title'),
      intro: [t('codeOfConduct.unacceptable.description')],
      bullets: [
        t('codeOfConduct.unacceptable.harassment'),
        t('codeOfConduct.unacceptable.stalking'),
        t('codeOfConduct.unacceptable.offensiveComments'),
        t('codeOfConduct.unacceptable.intimidation'),
        t('codeOfConduct.unacceptable.sexualConduct'),
        t('codeOfConduct.unacceptable.insults'),
        t('codeOfConduct.unacceptable.interruptions'),
        t('codeOfConduct.unacceptable.uncomfortable'),
        t('codeOfConduct.unacceptable.propertyDamage'),
        t('codeOfConduct.unacceptable.invasivePromotion'),
      ],
      outro: [t('codeOfConduct.unacceptable.note'), t('codeOfConduct.unacceptable.admissionRights')],
      tone: 'danger',
    },
    {
      id: 'alcance-fuera-evento',
      title: t('codeOfConduct.scope.title'),
      intro: [t('codeOfConduct.scope.description')],
      bullets: [
        t('codeOfConduct.scope.directed'),
        t('codeOfConduct.scope.safety'),
        t('codeOfConduct.scope.hostileEnvironment'),
        t('codeOfConduct.scope.socialMediaHarassment'),
      ],
      outro: [t('codeOfConduct.scope.reserve')],
    },
    {
      id: 'cumplimiento-medidas',
      title: t('codeOfConduct.enforcement.title'),
      intro: [t('codeOfConduct.enforcement.description')],
      bullets: [
        t('codeOfConduct.enforcement.warnings'),
        t('codeOfConduct.enforcement.expulsion'),
        t('codeOfConduct.enforcement.ticketCancellation'),
        t('codeOfConduct.enforcement.futureAccess'),
        t('codeOfConduct.enforcement.speakerInvitations'),
        t('codeOfConduct.enforcement.participation'),
      ],
      outro: [t('codeOfConduct.enforcement.outsideEvents'), t('codeOfConduct.enforcement.finalDecisions')],
    },
    {
      id: 'reporte-incidentes',
      title: t('codeOfConduct.reporting.title'),
      intro: [t('codeOfConduct.reporting.description'), t('codeOfConduct.reporting.confidentiality'), t('codeOfConduct.reporting.howTo')],
      bullets: [
        t('codeOfConduct.reporting.duringEvent'),
        t('codeOfConduct.reporting.socialMedia'),
        t('codeOfConduct.reporting.email'),
      ],
    },
    {
      id: 'compromiso',
      title: t('codeOfConduct.commitment.title'),
      intro: [t('codeOfConduct.commitment.description'), t('codeOfConduct.commitment.responsibility')],
      outro: [t('codeOfConduct.commitment.community')],
    },
  ]

  const hero = (
    <section className="pt-8 mb-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Card className="rounded-3xl px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('codeOfConduct.heroEyebrow')}</span>
              <h1 className="mt-4 text-4xl font-bold leading-none tracking-tight text-brand md:text-5xl lg:text-6xl">{t('codeOfConduct.title')}</h1>
            </div>
            <div className="space-y-4 text-slate-600 self-end">
              <p>{t('codeOfConduct.purpose.description1')}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )

  return (
    <SiteShell hero={hero}>
      <div className="space-y-6">
        <Card className="rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('codeOfConduct.tableOfContents')}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand md:text-3xl">{t('codeOfConduct.tableOfContents')}</h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToElement(section.id)}
                className={`rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5 ${
                  section.tone === 'danger'
                    ? 'border-red-200 bg-red-50 text-red-900'
                    : 'border-black/8 bg-white/72 text-slate-800'
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-widest opacity-70">
                  {section.id.replace(/-/g, ' ')}
                </div>
                <div className="mt-2 text-xl font-bold tracking-tight">{section.title}</div>
              </button>
            ))}
          </div>
        </Card>

        {sections.map((section) => (
          <Card
            key={section.id}
            id={section.id}
            className={`rounded-3xl p-6 scroll-mt-24 md:p-8 ${
              section.tone === 'danger' ? 'border-red-200 bg-red-50/75' : ''
            }`}
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-2">
                <Tooltip content={t('codeOfConduct.copyLink')}>
                  <Button
                    variant={section.tone === 'danger' ? 'outline' : 'secondary'}
                    className="block h-fit w-fit rounded-full p-2 self-start"
                    onClick={async () => {
                      await copyAnchorLink(section.id)
                      toast.success(t('codeOfConduct.linkCopied'))
                    }}
                  >
                    <LinkIcon className="h-4 w-4" />
                    <span className="sr-only">{t('codeOfConduct.copyLink')}</span>
                  </Button>
                </Tooltip>
                <h2 className={`text-2xl font-bold tracking-tight md:text-3xl self-start ${section.tone === 'danger' ? 'text-red-950' : 'text-brand'}`}>
                  {section.title}
                </h2>
              </div>

              <div className="space-y-5 lg:col-span-2">
                {section.intro.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-black/80 md:text-lg">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <div className="grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className={`rounded-2xl border px-4 py-4 text-sm leading-6 shadow-sm ${
                          section.tone === 'danger'
                            ? 'border-red-200 bg-white/90 text-red-950'
                            : 'border-black/8 bg-white/78 text-slate-700'
                        }`}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                )}

                {section.outro?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${
                      section.tone === 'danger'
                        ? 'border-red-200 bg-white/88 text-red-950'
                        : 'border-black/8 bg-white/72 text-slate-600'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SiteShell>
  )
}

export default CodeOfConduct
