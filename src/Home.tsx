import { type ReactElement } from 'react'
import { Box, Container, Avatar, IconButton, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PatreonIcon from './PatreonIcon'
import NavBar from './NavBar';
import logo from './assets/images/logo.png'

const Home = (): ReactElement => {
  return (
    <>
      <NavBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px', padding: 3 }}>
          <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '500px' }} />
        </Box>
        <Box>
          <IconButton component={Link} href="https://www.facebook.com/ColimaWebDevTalks" target="_blank">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://www.instagram.com/webdevtalksmx" target="_blank">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://twitter.com/webdevtalksmx" target="_blank">
            <XIcon fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://www.linkedin.com/company/web-dev-talks" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://patreon.com/WebDevTalksColima" target="_blank">
            <PatreonIcon/>
          </IconButton>
          <IconButton component={Link} href="mailto:contacto@webdevtalks.mx" target="_blank">
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </>
  )
}

export default Home