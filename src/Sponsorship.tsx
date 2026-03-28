import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend, type ChartOptions } from 'chart.js'
import { Clock3, Megaphone, Presentation, Share2 } from 'lucide-react'
import SiteShell from './components/SiteShell'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Tooltip } from './components/ui/tooltip'
import logo from './assets/images/logo.png'
import rubyCentral from './assets/images/sponsors/ruby_central.png'
import laFronteraCaseCafe from './assets/images/sponsors/la_frontera_casa_cafe.png'
import vauxoo from './assets/images/sponsors/vauxoo.png'
import alejandroRebollar from './assets/images/patreons/alejandro_rebollar.png'
import alexisChavez from './assets/images/patreons/alexis_chavez.png'
import alexisNavarro from './assets/images/patreons/alexis_navarro.png'
import l from './assets/images/patreons/l.jpg'
import benjaminPena from './assets/images/patreons/benajmin_pena.jpeg'
import edsonPaul from './assets/images/patreons/edson_paul.png'
import miguelUrbina from './assets/images/patreons/miguel_urbina.jpeg'
import oscarSwanros from './assets/images/patreons/oscar_swanros.jpg'
import sorielVallejo from './assets/images/patreons/soriel_vallejo.png'
import juanMeza from './assets/images/patreons/juan_meza.jpeg'
import edwinCruz from './assets/images/patreons/edwin_cruz.jpeg'
import mariaAvila from './assets/images/patreons/maria_avila.jpg'
import franciscoChacon from './assets/images/patreons/francisco_chacon.jpg'
import abrilGonzalez from './assets/images/patreons/abril_gonzalez.png'
import walterMata from './assets/images/patreons/walter_mata.jpeg'
import myrkaLarios from './assets/images/patreons/myrka_larios.jpeg'
import gibranLopez from './assets/images/patreons/gibran_lopez.jpeg'
import gil from './assets/images/patreons/gil.png'
import reginaEspinosa from './assets/images/patreons/regina_espinosa.jpeg'
import edmundoPerez from './assets/images/patreons/edmundo_perez.jpeg'
import hectorAlvarez from './assets/images/patreons/hector_alvarez.jpeg'

ChartJS.register(ArcElement, ChartTooltip, Legend)

const patreons = [
  ['Alejandro Rebollar', alejandroRebollar],
  ['Alexis Chavez', alexisChavez],
  ['Alexis Navarro', alexisNavarro],
  ['L', l],
  ['Benjamin Pena', benjaminPena],
  ['Edson Paul', edsonPaul],
  ['Miguel Urbina', miguelUrbina],
  ['Oscar Swanros', oscarSwanros],
  ['Soriel Vallejo', sorielVallejo],
  ['Juan Meza', juanMeza],
  ['Edwin Cruz', edwinCruz],
  ['Maria Avila', mariaAvila],
  ['Francisco Chacon', franciscoChacon],
  ['Walter Mata', walterMata],
  ['Myrka Larios', myrkaLarios],
  ['Gibran Lopez', gibranLopez],
  ['Abril Gonzalez', abrilGonzalez],
  ['Gil', gil],
  ['Regina Espinosa', reginaEspinosa],
  ['Edmundo Perez', edmundoPerez],
  ['Hector Alvarez', hectorAlvarez],
] as const

const sponsors = [
  { name: 'La Frontera Casa Cafe', image: laFronteraCaseCafe },
  { name: 'Vauxoo', image: vauxoo },
  { name: 'Ruby Central', image: rubyCentral },
]

const benefitIcons = [Clock3, Share2, Presentation, Megaphone]

const Sponsorship = (): ReactElement => {
  const { t } = useTranslation()

  const audienceData = {
    labels: [t('sponsorship.areas'), 'Software', 'PM', 'QA', t('sponsorship.design'), t('sponsorship.students')],
    datasets: [
      {
        label: t('sponsorship.votes'),
        data: [4, 51, 6, 4, 2, 30],
        backgroundColor: ['#f59e0b', '#2563eb', '#fb7185', '#10b981', '#8b5cf6', '#f97316'],
        borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        borderWidth: 3,
      },
    ],
  }

  const audienceOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
          },
        },
      },
    },
    layout: {
      padding: 8,
    },
  }

  const sponsorshipPlans = [
    {
      tier: 'Gold',
      accent: 'from-yellow-200 via-sky-100 to-white',
      benefits: [
        { title: t('sponsorship.minutes', { minutes: 5 }), body: t('sponsorship.goldTime') },
        { title: t('sponsorship.shares', { shares: 5 }), body: t('sponsorship.goldShares') },
        { title: t('sponsorship.boothSpace'), body: t('sponsorship.goldBoothSpace') },
        { title: t('sponsorship.socialNetwork'), body: t('sponsorship.goldSocialNetwork') },
        { title: t('sponsorship.promotion'), body: t('sponsorship.goldPromotion') },
      ],
      pricing: [
        { label: t('sponsorship.annually'), value: t('sponsorship.goldAnnually', { peso: '$8,874 MXN', dolar: '$510 USD' }) },
        { label: t('sponsorship.semester'), value: t('sponsorship.goldSemester', { peso: '$4,698 MXN', dolar: '$270 USD' }) },
        { label: t('sponsorship.perEvent'), value: t('sponsorship.goldPerEvent', { peso: '$1,740 MXN', dolar: '$100 USD' }) },
      ],
    },
    {
      tier: 'Silver',
      accent: 'from-slate-300 via-slate-200 to-white',
      benefits: [
        { title: '-', body: t('sponsorship.silverTime') },
        { title: t('sponsorship.shares', { shares: 2 }), body: t('sponsorship.silverShares') },
        { title: '-', body: t('sponsorship.silverBoothSpace') },
        { title: t('sponsorship.socialNetwork'), body: t('sponsorship.silverSocialNetwork') },
        { title: t('sponsorship.promotion'), body: t('sponsorship.silverPromotion') },
      ],
      pricing: [
        { label: t('sponsorship.annually'), value: t('sponsorship.silverAnnually', { peso: '$5,916 MXN', dolar: '$340 USD' }) },
        { label: t('sponsorship.semester'), value: t('sponsorship.silverSemester', { peso: '$3,132 MXN', dolar: '$180 USD' }) },
        { label: t('sponsorship.perEvent'), value: t('sponsorship.silverPerEvent', { peso: '$1,160 MXN', dolar: '$70 USD' }) },
      ],
    },
  ]

  const hero = (
    <section className="pt-8 mb-6">
      <div className="page-frame">
        <Card className="overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-8 lg:p-10">
            <div className="space-y-5">
              <span className="eyebrow">{t('sponsorship.heroEyebrow')}</span>
              <h1 className="section-title text-slate-950">{t('navbar.sponsorship')}</h1>
              <p className="text-lg leading-8 text-slate-600">{t('sponsorship.description1')}</p>
              <p className="text-slate-600">{t('sponsorship.description2')}</p>
              <p className="text-slate-600">{t('sponsorship.description3')}</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-black/10 bg-white/72 p-5 shadow-sm">
                <img src={logo} alt="Logo WDT" className="mb-6 h-16 w-auto object-contain" />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-black/8 bg-yellow-50 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-yellow-700">{t('sponsorship.attendeesTitle')}</div>
                    <div className="mt-2 text-3xl font-bold text-slate-950">97</div>
                  </div>
                  <div className="rounded-2xl border border-black/8 bg-sky-50 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-sky-700">{t('sponsorship.ourSponsors')}</div>
                    <div className="mt-2 text-3xl font-bold text-slate-950">3</div>
                  </div>
                  <div className="rounded-2xl border border-black/8 bg-emerald-50 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">{t('sponsorship.ourPatreons')}</div>
                    <div className="mt-2 text-3xl font-bold text-slate-950">{patreons.length}</div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-slate-950 shadow-lg">
                <iframe
                  width="100%"
                  className="aspect-video"
                  src="https://www.youtube.com/embed/3kLz1Q0myiM"
                  title={t('sponsorship.wdtVideo')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="eyebrow">{t('sponsorship.attendeesTitle')}</p>
              <h2 className="section-subtitle mt-4 text-slate-950">{t('sponsorship.audienceProfile')}</h2>
              <p className="mt-4 text-slate-600">{t('sponsorship.venues')}</p>
            </div>
            <div className="mx-auto w-full min-w-0 max-w-xl rounded-3xl border border-black/8 bg-white/82 p-4 shadow-sm sm:col-span-2 sm:p-6">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <Pie data={audienceData} options={audienceOptions} />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {sponsorshipPlans.map((plan) => (
            <Card key={plan.tier} className="overflow-hidden rounded-3xl">
              <div className={`h-24 bg-gradient-to-r ${plan.accent}`} />
              <CardHeader className="-mt-12 pt-0">
                <div className="inline-flex w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-widest text-slate-700 shadow-sm">
                  {plan.tier}
                </div>
                <CardTitle>{plan.tier} {t('sponsorship.sponsor')}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  {plan.benefits.map((benefit, index) => {
                    const Icon = benefitIcons[index % benefitIcons.length]
                    return (
                      <div key={`${plan.tier}-${benefit.body}`} className="rounded-2xl border border-black/8 bg-white/72 p-4">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="font-semibold text-slate-950">{benefit.title}</div>
                        </div>
                        <p className="text-sm leading-6 text-slate-600">{benefit.body}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="rounded-3xl border border-black/8 bg-slate-950 px-5 py-5 text-white">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-300">{t('sponsorship.costs')}</p>
                  <div className="grid gap-3">
                    {plan.pricing.map((price) => (
                      <div key={`${plan.tier}-${price.label}`} className="flex flex-col justify-between gap-1 rounded-xl border border-white/10 bg-white/6 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-sm text-slate-300">{price.label}</span>
                        <span className="font-semibold text-white">{price.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{t('sponsorship.ourSponsors')}</p>
              <h2 className="section-subtitle mt-4 text-slate-950">{t('sponsorship.ourSponsors')}</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex min-h-36 items-center justify-center rounded-3xl border border-black/8 bg-white/78 p-6 shadow-sm">
                <img src={sponsor.image} alt={sponsor.name} className="max-h-20 w-full object-contain" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{t('sponsorship.ourPatreons')}</p>
              <h2 className="section-subtitle mt-4 text-slate-950">{t('sponsorship.ourPatreons')}</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {patreons.map(([name, image]) => (
              <Tooltip key={name} content={name}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-black/8 bg-white/74 px-3 py-4 shadow-sm">
                  <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover ring-2 ring-white" />
                  <span className="text-center text-xs font-medium text-slate-600">{name}</span>
                </div>
              </Tooltip>
            ))}
          </div>
        </Card>

        <Card className="rounded-3xl p-6 md:p-8">
          <div className="text-slate-600">
            <p>{t('sponsorship.tax')}</p>
            <p>
              {t('sponsorship.contact1')}{' '}
              <a className="font-semibold text-slate-950 underline decoration-sky-400 underline-offset-4" href="mailto:webdevtalkscolima@gmail.com">
                webdevtalkscolima@gmail.com
              </a>{' '}
              {t('sponsorship.contact2')}
            </p>
            <p className="text-sm text-slate-500">
              {t('sponsorship.closingNote')}
            </p>
          </div>
        </Card>
      </div>
    </SiteShell>
  )
}

export default Sponsorship
