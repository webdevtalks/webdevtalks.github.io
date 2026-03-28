import { useTranslation } from 'react-i18next'
import SiteShell from './components/SiteShell'
import { Card } from './components/ui/card'
import { Carousel } from './components/ui/carousel'
import main from './assets/images/main.jpg'
import image1 from './assets/images/1.jpg'
import image2 from './assets/images/2.jpg'
import image3 from './assets/images/3.jpg'
import image4 from './assets/images/4.jpg'
import image5 from './assets/images/5.jpg'
import image6 from './assets/images/6.jpg'
import image7 from './assets/images/7.jpg'
import image8 from './assets/images/8.jpg'
import image9 from './assets/images/9.jpg'
import image10 from './assets/images/10.jpg'
import image11 from './assets/images/11.jpg'
import image12 from './assets/images/12.jpg'
import image13 from './assets/images/13.jpg'
import image14 from './assets/images/14.jpg'
import image15 from './assets/images/15.jpg'
import image16 from './assets/images/16.jpg'
import image17 from './assets/images/17.jpg'
import image18 from './assets/images/18.jpg'
import image19 from './assets/images/19.jpg'
import image20 from './assets/images/20.jpg'
import image21 from './assets/images/21.jpg'
import image22 from './assets/images/22.jpg'
import image23 from './assets/images/23.jpg'
import image24 from './assets/images/24.jpg'

const galleryImages = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
].map((src) => ({ src, alt: 'Web Dev Talks' }))

function About() {
  const { t } = useTranslation()

  const sections = [
    {
      title: t('aboutUs.whoIs'),
      body: [t('aboutUs.description'), t('aboutUs.description2')],
    },
    {
      title: t('aboutUs.motivationHeader'),
      body: [t('aboutUs.motivationBody1'), t('aboutUs.motivationBody2')],
    },
    {
      title: t('aboutUs.dynamic'),
      body: [t('aboutUs.dynamicBody1'), t('aboutUs.dynamicBody2')],
    },
    {
      title: t('aboutUs.socialImpact'),
      body: [t('aboutUs.socialImpactBody1')],
    },
    {
      title: t('aboutUs.jobsOffer'),
      body: [t('aboutUs.jobsOfferBody1')],
    },
    {
      title: t('sponsorship.sponsor'),
      body: [t('aboutUs.sponsorBody')],
    },
  ]

  const offers = [
    t('aboutUs.socialMentions'),
    t('aboutUs.sharePosts'),
    t('aboutUs.promoteContent'),
    t('aboutUs.eventPresence'),
  ]

  const hero = (
    <section className="pt-8 mb-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Card className="overflow-hidden rounded-3xl">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8 lg:p-10">
            <div className="grid content-center gap-5 md:gap-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('aboutUs.heroEyebrow')}</span>
              <h1 className="text-4xl font-bold leading-none tracking-tight text-brand md:text-5xl lg:text-6xl">Web Dev Talks</h1>
              <blockquote className="border-l-4 border-yellow-300 pl-5 text-lg leading-8 text-slate-700">
                {t('aboutUs.quote')}
                <span className="mt-3 block font-semibold text-brand">{t('aboutUs.adrianReyes')}</span>
              </blockquote>
            </div>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-lg">
              <img src={main} alt="Web Dev Talks main event" className="h-full w-full object-cover" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )

  return (
    <SiteShell hero={hero}>
      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section.title} className="rounded-3xl p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:gap-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-brand md:text-3xl">{section.title}</h2>
              </div>
              <div className="space-y-4 text-base leading-8 text-black/80 md:col-span-2 md:text-lg">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Card>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden rounded-3xl">
            <img src={image1} alt="Web Dev Talks community" className="h-full min-h-80 w-full object-cover" />
          </Card>
          <Card className="overflow-hidden rounded-3xl">
            <img src={image8} alt="Web Dev Talks attendees" className="h-full min-h-80 w-full object-cover" />
          </Card>
        </div>

        <Card className="rounded-3xl p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('aboutUs.offer')}</p>
              <h2 className="text-2xl font-bold tracking-tight text-brand md:text-3xl">{t('aboutUs.offerRights')}</h2>
              <p className="text-slate-600">
                <strong>{t('aboutUs.note')}</strong> {t('aboutUs.benefitsNote')}
              </p>
            </div>
            <div className="grid gap-3">
              {offers.map((offer) => (
                <div key={offer} className="rounded-2xl border border-black/8 bg-white/70 px-5 py-4 text-slate-700 shadow-sm">
                  {offer}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-slate-600">{t('aboutUs.closingNote')}</p>
        </Card>

        <Card className="rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-sky-600">{t('aboutUs.communityHeader')}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand md:text-3xl">{t('aboutUs.gallery')}</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              {t('aboutUs.galleryDescription')}
            </p>
          </div>
          <Carousel images={galleryImages} />
        </Card>
      </div>
    </SiteShell>
  )
}

export default About
