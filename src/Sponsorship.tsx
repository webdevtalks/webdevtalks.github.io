import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Pie } from 'react-chartjs-2'
import {
  Container,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Avatar
} from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import NavBar from './NavBar'
const LOGO = 'src/assets/images/logo.png'

ChartJS.register(ArcElement, Tooltip, Legend)

const Sponsorship = (): ReactElement =>  {
  const { t } = useTranslation()

  const data = {
    labels: [t("sponsorship.areas",'Otras areas'), 'Software', 'PM', 'QA', t("sponsorship.design",'Diseño'), t("sponsorship.students",'Estudiantes')],
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
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px', padding: 3 }}>
          <Avatar src={LOGO} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '250px' }} />
        </Box>
        <Typography variant="body1" paragraph>
          {t("sponsorship.description1","WebDevTalks es una comunidad de desarrollo y tecnología, que inició hace más de 10 años con la finalidad de acercar desarrolladores a diversos temas dentro del área del desarrollo de software, web, móvil, IoT, manejo de proyectos, diseño y más.")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("sponsorship.description2","Gracias al esfuerzo y apoyo de diversas empresas hemos podido llegar hasta el día de hoy, proporcionando un evento de calidad, ayudando a incentivar a las nuevas generaciones y fortalecer la comunidad de desarrollo en la ciudad de Colima.")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("sponsorship.description3","El evento se lleva a cabo en el último miércoles de cada dos meses donde por medio de una sesión 3 personas exponen sobre cualquier tema en el desarrollo. Donde generalmente intentamos balancear las pláticas en 3 distintos niveles: Novatos, Proficientes y Avanzados. Esto para seguir teniendo atracción no solo por estudiantes o neófitos sino también para atraer a asistentes con experiencia y tener una comunidad más enriquecida.")}
        </Typography>
        <Typography variant="h4" paragraph>{t("sponsorship.attendeesTitle","Perfil de Asistentes")}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ width: '50%' }}>
            <Pie data={data} />
          </Box>
        </Box>
        <Typography variant="h4" paragraph>{t("sponsorship.wdtVideo","Video de WebDevTalks")}</Typography>
        <Box mb={4}>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/3kLz1Q0myiM" title="YouTube video player" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowFullScreen></iframe>
        </Box>
        <Typography variant="h4" paragraph>Venues</Typography>
        <Typography variant="body1" paragraph>
          {t("sponsorship.venues","Intentamos rotar el lugar donde se hace el evento, varias empresas y asociaciones nos han ayudado colaborando y proporcionando sus oficinas y espacios para llevar el evento a cabo.")}
        </Typography>
        <Typography variant="h4" paragraph>{t("sponsorship.sponsorshipPlans","Planes de patrocinio")}</Typography>
        <Typography variant="body1" paragraph>
          {t("sponsorship.sponsorshipPlansBody","Con el ideal de seguir mejorando la comunidad, WebDevTalks busca patrocinio y ofrece las siguientes modalidades:")}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>GOLD</TableCell>
              <TableCell>SILVER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{t("sponsorshipsponsorship.sponsorshipGold1","5 minutos durante la sesión bimestral (Para hablar de la empresa, promocionar vacantes, workshops, etc).")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sponsorship.sponsorshipGold2","Compartir FB/IG posts y tweets de los patrocinadores (5 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)")}</TableCell>
              <TableCell>{t("sponsorship.sponsorshipSilver1","Compartir FB/IG posts y tweets de los patrocinadores (2 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sponsorship.sponsorshipGold3","Espacio para Booth en el lugar")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sponsorship.sponsorshipGold4","Promoción durante la campaña de promoción de la sesión bimestral en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)")}</TableCell>
              <TableCell>{t("sponsorship.sponsorshipSilver2","Promoción durante la campaña de promoción de la sesión bimestral en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sponsorship.sponsorshipGold5","Promoción de su logo durante la sesión bimestral.")}</TableCell>
              <TableCell>{t("sponsorship.sponsorshipGold5","Promoción de su logo durante la sesión bimestral.")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sponsorship.sponsorshipGold6", "Agradecimiento por redes sociales después del evento bimestral como patrocinador", { level: "Gold" })}</TableCell>
              <TableCell>{t("sponsorship.sponsorshipGold6", "Agradecimiento por redes sociales después del evento bimestral como patrocinador", { level: "Silver" })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h4" paragraph>{t("sponsorship.costs","Costos de patrocinio")}</Typography>
        <Typography variant="h5" paragraph>{t("sponsorship.anualPlan","Plan anual:")}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("sponsorship.sponsor","Patrocinio")}</TableCell>
              <TableCell>{t("sponsorship.contribution","Contribución")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gold</TableCell>
              <TableCell>{t("sponsorship.goldAnualCost", "$8,874 MXN por año", { dolar: "$510 USD", peso: "$8,874 MXN" })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Silver</TableCell>
              <TableCell>{t("sponsorship.silverAnualCost", "$5,916 MXN por año", { dolar: "$340 USD", peso: "$5,916 MXN" })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h5" paragraph>{t("sponsorship.trimestralPlan","Pago por 3 eventos:")}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("sponsorship.sponsor","Patrocinio")}</TableCell>
              <TableCell>{t("sponsorship.contribution","Contribución")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gold</TableCell>
              <TableCell>{t("sponsorship.gold3sesionsCost", "$4,698 MXN por 3 eventos", { dolar: "$270 USD", peso: "$4,698 MXN" })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Silver</TableCell>
              <TableCell>{t("sponsorship.silver3sesionsCost", "$3,132 MXN por 3 eventos", { dolar: "$180 USD", peso: "$3,132 MXN" })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h5" paragraph>{t("sponsorship.monthlyPlan","Pago por evento:")}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("sponsorship.sponsor","Patrocinio")}</TableCell>
              <TableCell>{t("sponsorship.contribution","Contribución")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gold</TableCell>
              <TableCell>{t("sponsorship.goldSesionCost", "$1,740 MXN por evento", { dolar: "$100 USD", peso: "$1,740 MXN" })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Silver</TableCell>
              <TableCell>{t("sponsorship.silverSesionCost", "$1,160 MXN por evento", { dolar: "$70 USD", peso: "$1,160 MXN" })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="body1" paragraph><b>{t("sponsorship.tax","Todos nuestros precios incluyen IVA.")}</b></Typography>
        <Typography variant="body1" paragraph>{t("sponsorship.contact","Para cualquier duda o aclaración puede dirigirse a")} <Link href="mailto:contacto@webdevtalks.mx">contacto@webdevtalks.mx</Link></Typography>
      </Container>
    </>
  )
}

export default Sponsorship

