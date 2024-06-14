import { useState, useEffect } from 'react'
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
  IconButton,
  Button,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import { LanguageSelector } from './LanguageSelector'
import { ReactElement } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import logo from './assets/images/logo.png'

const NavBar = (): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const location = useLocation()
  const { openSurvey } = useSurvey()
  const { t } = useTranslation()
  const theme = useTheme()

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen)
  }


  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  useEffect(() => {
    return () => {
      setIsDrawerOpen(false)
    }
  }, [])

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="xl">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={{ textDecoration: 'none', marginRight: '1rem', flexShrink: 0, color: theme.palette.primary.main }}>
              <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '50px' }} />
            </Link>
            <Link to="/sponsorship" style={{ textDecoration: 'none', height: '100%', color: theme.palette.primary.main }}>
              <Button sx={{ height: '100%', backgroundColor: isActive('/sponsorship') ? '#c1c1c1' : 'transparent' }}>
                <Typography>{t("navbar.sponsorship", "¿Te interesa patrocinar?")}</Typography>
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', height: '100%', color: theme.palette.primary.main }}>
              <Button sx={{ height: '100%', backgroundColor: isActive('/about') ? '#c1c1c1' : 'transparent' }}>
                <Typography>{t("navbar.aboutUs", "Acerca de nosotros")}</Typography>
              </Button>
            </Link>
            <Link to="/" onClick={openSurvey} style={{ textDecoration: 'none', height: '100%', color: theme.palette.primary.main }}>
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
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem>
              <Link to="/" style={{ textDecoration: 'none', height: '100%', width: '100%', color: theme.palette.primary.main }}>
                <ListItemButton sx={{ height: '100%', color: '#000000', backgroundColor: isActive('/') ? '#c1c1c1' : 'transparent' }}>
                  <Typography>{t("navbar.home", "Inicio")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/sponsorship" style={{ textDecoration: 'none', height: '100%', width: '100%', color: theme.palette.primary.main }}>
                <ListItemButton sx={{ height: '100%', color: '#000000', backgroundColor: isActive('/sponsorship') ? '#c1c1c1' : 'transparent' }}>
                  <Typography>{t("navbar.sponsorship", "¿Te interesa patrocinar?")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/about" style={{ textDecoration: 'none', height: '100%', width: '100%', color: theme.palette.primary.main }}>
                <ListItemButton sx={{ height: '100%', color: '#000000', backgroundColor: isActive('/about') ? '#c1c1c1' : 'transparent' }}>
                  <Typography>{t("navbar.aboutUs", "Acerca de nosotros")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" onClick={openSurvey} style={{ textDecoration: 'none', height: '100%', width: '100%', color: theme.palette.primary.main }}>
                <ListItemButton sx={{ height: '100%', color: theme.palette.primary.main }}>
                  <Typography>{t("navbar.survey", "Encuesta")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default NavBar
