import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useSurvey } from './hooks/useSurvey'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Avatar from '@mui/icons-material/Adb'
import { LanguageSelector } from './LanguageSelector';
const LOGO = 'src/assets/images/logo.png'

function NavBar({ selected = null }) {
  const { openSurvey } = useSurvey()
  const { t } = useTranslation()

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Avatar src={LOGO} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '50px' }} />
            </Link>
            <Link to="/sponsorship" style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                <Typography>{t("navbar.sponsorship", "¿Te interesa patrocinar?")}</Typography>
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                <Typography>{t("navbar.aboutUs", "Acerca de nosotros")}</Typography>
              </Button>
            </Link>
            <Link to="/" onClick={openSurvey} style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                <Typography>{t("navbar.survey", "Encuesta")}</Typography>
              </Button>
            </Link>
            <LanguageSelector/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
