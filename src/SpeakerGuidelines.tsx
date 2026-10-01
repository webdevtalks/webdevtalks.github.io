import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SiteShell from './components/SiteShell'
import { Card } from './components/ui/card'

interface SectionDefinition {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  note?: string
  linkNote?: boolean
}

function SpeakerGuidelines() {
  const { t } = useTranslation()

  const sections: SectionDefinition[] = [
    {
      id: 'duracion',
      title: t('speakerGuidelines.duration.title'),
      paragraphs: [t('speakerGuidelines.duration.description')],
      bullets: [
        t('speakerGuidelines.duration.max'),
        t('speakerGuidelines.duration.ideal'),
      ],
    },
    {
      id: 'material',
      title: t('speakerGuidelines.material.title'),
      paragraphs: [t('speakerGuidelines.material.description')],
      bullets: [
        t('speakerGuidelines.material.formats'),
        t('speakerGuidelines.material.access'),
        t('speakerGuidelines.material.recording'),
      ],
      note: t('speakerGuidelines.material.note'),
    },
    {
      id: 'diseno-slides',
      title: t('speakerGuidelines.slides.title'),
      paragraphs: [t('speakerGuidelines.slides.description')],
      bullets: [
        t('speakerGuidelines.slides.count'),
        t('speakerGuidelines.slides.typography'),
        t('speakerGuidelines.slides.contrast'),
        t('speakerGuidelines.slides.distance'),
      ],
    },
    {
      id: 'temas',
      title: t('speakerGuidelines.topics.title'),
      paragraphs: [t('speakerGuidelines.topics.description')],
      bullets: [
        t('speakerGuidelines.topics.welcome'),
        t('speakerGuidelines.topics.intent'),
      ],
      note: t('speakerGuidelines.topics.codeOfConduct'),
      linkNote: true,
    },
  ]

  const hero = (
    <section className="pt-8 mb-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Card className="rounded-3xl px-6 py-8 md:px-8 md:py-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">
            {t('speakerGuidelines.heroEyebrow')}
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-none tracking-tight text-brand md:text-5xl">
            {t('speakerGuidelines.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {t('speakerGuidelines.intro')}
          </p>
        </Card>
      </div>
    </section>
  )

  return (
    <SiteShell hero={hero}>
      <Card className="rounded-3xl p-6 text-left md:p-8">
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 text-left">
              <h2 className="text-xl font-bold tracking-tight text-brand md:text-2xl">
                {section.title}
              </h2>

              <div className="mt-3 space-y-3 text-base leading-7 text-slate-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="text-slate-600">
                    {section.linkNote ? (
                      <>
                        {section.note}{' '}
                        <Link
                          to="/code-of-conduct"
                          className="font-semibold text-brand underline underline-offset-2 hover:text-sky-700"
                        >
                          {t('speakerGuidelines.topics.codeOfConductLink')}
                        </Link>
                        .
                      </>
                    ) : (
                      section.note
                    )}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
      </Card>
    </SiteShell>
  )
}

export default SpeakerGuidelines
