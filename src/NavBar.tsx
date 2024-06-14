import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSurvey } from './hooks/useSurvey'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Avatar
} from '@mui/material'
import { LanguageSelector } from './LanguageSelector';
import { ReactElement } from 'react'
const LOGO = 'src/assets/images/logo.png'

const NavBar = (): ReactElement => {
  const location = useLocation()
  const { openSurvey } = useSurvey()
  const { t } = useTranslation()

  const isActive = (path: string): boolean => {
    return location.pathname.includes(path)
  }

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none', marginRight: '1rem' }}>
              <Avatar src={LOGO} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '50px' }} />
            </Link>
            <Link to="/sponsorship" style={{ textDecoration: 'none', height: '100%' }}>
              <Button sx={{ height: '100%', backgroundColor: isActive('/sponsorship') ? '#c1c1c1' : 'transparent' }}>
                <Typography>{t("navbar.sponsorship", "¿Te interesa patrocinar?")}</Typography>
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', height: '100%' }}>
              <Button sx={{ height: '100%', backgroundColor: isActive('/about') ? '#c1c1c1' : 'transparent' }}>
                <Typography>{t("navbar.aboutUs", "Acerca de nosotros")}</Typography>
              </Button>
            </Link>
            <Link to="/" onClick={openSurvey} style={{ textDecoration: 'none', height: '100%' }}>
              <Button sx={{ height: '100%'}}>
                <Typography>{t("navbar.survey", "Encuesta")}</Typography>
              </Button>
            </Link>
            <Box sx={{ ml: 1 }}>
              <LanguageSelector/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
