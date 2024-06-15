import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Pie } from 'react-chartjs-2'
import {
  Container,
  Typography,
  Box,
  Link,
  Avatar,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider
} from '@mui/material'
import MaterialTooltip from '@mui/material/Tooltip';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import NavBar from './NavBar'
import communitySupporters from './assets/images/sponsors/community_supporters.png'
import laFronteraCaseCafe from './assets/images/sponsors/la_frontera_casa_cafe.png'
import magma from './assets/images/sponsors/magma.png'
import salesloft from './assets/images/sponsors/salesloft.png'
import softwareGuru from './assets/images/sponsors/software_guru.png'
import vauxoo from './assets/images/sponsors/vauxoo.png'
import alejandroRebollar from './assets/images/patreons/alejandro_rebollar.png'
import alexisChavez from './assets/images/patreons/alexis_chavez.png'
import alexisNavarro from './assets/images/patreons/alexis_navarro.png'
import anonymous from './assets/images/patreons/anonymous.png'
import benjaminPena from './assets/images/patreons/benajmin_pena.jpeg'
import edsonPaul from './assets/images/patreons/edson_paul.png'
import miguelUrbina from './assets/images/patreons/miguel_urbina.jpeg'
import oscarSwanros from './assets/images/patreons/oscar_swanros.jpg'
import sorielVallejo from './assets/images/patreons/soriel_vallejo.png'
import logo from './assets/images/logo.png'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ShareIcon from '@mui/icons-material/Share'
import FacebookIcon from '@mui/icons-material/Facebook'

ChartJS.register(ArcElement, Tooltip, Legend)

const Sponsorship = (): ReactElement =>  {
  const { t } = useTranslation()

  const data = {
    labels: [t("sponsorship.areas"), 'Software', 'PM', 'QA', t("sponsorship.design"), t("sponsorship.students")],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 51, 6, 4, 2, 30],
        backgroundColor: [
          '#E59866',
          '#5499C7',
          '#E67E22',
          '#F7DC6F',
          '#85C1E9',
          '#58D68D',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <NavBar/>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '250px' }} />
        </Box>
        <Typography variant="body1" paragraph>{t("sponsorship.description1")}</Typography>
        <Typography variant="body1">{t("sponsorship.description2")}</Typography>
        <Typography variant="body1" paragraph>{t("sponsorship.description3")}</Typography>
        <Typography variant="h2" sx={{ my: 8 }}>{t("sponsorship.attendeesTitle")}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ width: '50%' }}>
            <Pie data={data} />
          </Box>
        </Box>
        <Typography variant="h3" sx={{ my: 8 }}>{t("sponsorship.wdtVideo")}</Typography>
        <Box mb={4}>
          <iframe width="100%" style={{ maxHeight: '600px', height: '60vw' }} src="https://www.youtube.com/embed/3kLz1Q0myiM" title="YouTube video player" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowFullScreen></iframe>
        </Box>
        <Typography variant="h3" sx={{ my: 8 }}>Venues</Typography>
        <Typography variant="body1" paragraph>{t("sponsorship.venues")}</Typography>
        <Typography variant="h3" sx={{ my: 8 }}>{t("sponsorship.sponsorshipPlans")}</Typography>
        <Typography variant="body1" paragraph>{t("sponsorship.sponsorshipPlansBody")}</Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Gold
                </Typography>
                <Divider/>
                <Stack spacing={5} sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.minutes", { minutes: 5 })}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldTime")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ShareIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.shares", { shares: 5 })}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldShares")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.boothSpace")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldBoothSpace")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <FacebookIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.socialNetwork")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldSocialNetwork")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.promotion")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldPromotion")}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Silver
                </Typography>
                <Divider/>
                <Stack spacing={5} sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        -
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverTime")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ShareIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.shares", { shares: 2 })}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverShares")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        -
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverBoothSpace")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <FacebookIcon/>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.socialNetwork")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverSocialNetwork")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.promotion")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverPromotion")}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h3" sx={{ my: 4 }}>{t("sponsorship.costs")}</Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Gold
                </Typography>
                <Divider/>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.annually")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldAnnually", { peso: '$8,874 MXN', dolar: '$510 USD' })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.semester")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldSemester", { peso: '$4,698 MXN', dolar: '$270 USD' })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.perEvent")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.goldPerEvent", { peso: '$1,740 MXN', dolar: '$100 USD' })}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Silver
                </Typography>
                <Divider/>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.annually")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverAnnually", { peso: '$5,916 MXN', dolar: '$340 USD' })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.semester")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverSemester", { peso: '$3,9132 MXN', dolar: '$180 USD' })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
                        {t("sponsorship.perEvent")}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: 1, textAlign: 'center' }} color="text.secondary">
                      {t("sponsorship.silverPerEvent", { peso: '$1,160 MXN', dolar: '$70 USD' })}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h3" sx={{ my: 8}}>{t('sponsorship.ourSponsors')}</Typography>
        <Grid container spacing={4} sx={{ mt: 8, alignItems: 'center', flexWrap: 'wrap', px: 4 }}>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={communitySupporters} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={laFronteraCaseCafe} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={magma} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={salesloft} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={softwareGuru} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '100%' }}>
            <Avatar variant='square' src={vauxoo} sx={{ height: '100%', width: '100%', '& img': { objectFit: 'contain' } }} />
          </Grid>
        </Grid>
        <Typography variant="h3" sx={{ my: 8}}>{t('sponsorship.ourPatreons')}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <MaterialTooltip title="Alejandro Rebollar" sx={{ p: 4 }}>
            <Avatar src={alejandroRebollar} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Alexis Chavez">
            <Avatar src={alexisChavez} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Alexis Navarro">
            <Avatar src={alexisNavarro} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Anonymous">
            <Avatar src={anonymous} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Benjamin Peña">
            <Avatar src={benjaminPena} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Edson Paul">
            <Avatar src={edsonPaul} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Miguel Urbina">
            <Avatar src={miguelUrbina} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Oscar Swanros">
            <Avatar src={oscarSwanros} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
          <MaterialTooltip title="Soriel Vallejo">
            <Avatar src={sorielVallejo} sx={{ height: '50px', width: '50px', m: 2 }} />
          </MaterialTooltip>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="caption">{t("sponsorship.tax")}</Typography>
          <Typography variant="caption" paragraph>{t("sponsorship.contact1")} <Link href="mailto:contacto@webdevtalks.mx">contacto@webdevtalks.mx</Link> {t("sponsorship.contact2")}</Typography>
        </Box>
      </Container>
    </>
  )
}

export default Sponsorship
