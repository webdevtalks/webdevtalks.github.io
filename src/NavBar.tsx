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
import logo from './assets/images/logo.png'

const NavBar = (): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const location = useLocation()
  const { openSurvey } = useSurvey()
  const { t } = useTranslation()

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
          <Toolbar variant="dense" sx={{ alignItems: 'stretch', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ display: { xs: 'flex', md: 'none' }}}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' } }>
              <Link to="/" style={{ textDecoration: 'none', marginRight: '1rem', flexShrink: 0 }}>
                <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '50px', py: 1 }} />
              </Link>
              <Link to="/sponsorship" style={{ textDecoration: 'none', height: '100%' }}>
                <Button className={isActive('/sponsorship') ? 'active' : '' } sx={{ height: '100%', borderRadius: '0' }}>
                  <Typography>{t("navbar.sponsorship")}</Typography>
                </Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', height: '100%' }}>
                <Button className={isActive('/about') ? 'active' : '' } sx={{ height: '100%', borderRadius: '0' }}>
                  <Typography>{t("navbar.aboutUs")}</Typography>
                </Button>
              </Link>
              <Link to="/" onClick={openSurvey} style={{ textDecoration: 'none', height: '100%' }}>
                <Button sx={{ height: '100%', borderRadius: '0' }}>
                  <Typography>{t("navbar.survey")}</Typography>
                </Button>
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LanguageSelector/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem sx={{ px: 0 }}>
              <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/') ? 'active' : ''}>
                  <Typography>{t("navbar.home")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link to="/sponsorship" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/sponsorship') ? 'active' : ''}>
                  <Typography>{t("navbar.sponsorship")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link to="/about" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/about') ? 'active' : ''}>
                  <Typography>{t("navbar.aboutUs")}</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link to="#" onClick={openSurvey} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton sx={{ height: '100%' }}>
                  <Typography>{t("navbar.survey")}</Typography>
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
