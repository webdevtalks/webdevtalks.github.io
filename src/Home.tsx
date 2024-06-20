import { type ReactElement } from 'react'
import { Box, Container, Avatar } from '@mui/material'
import NavBar from './NavBar';
import Footer from './Footer';
import Icons from './Icons';
import logo from './assets/images/logo.png'

const Home = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px', padding: 3 }}>
          <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '500px' }} />
        </Box>
        <Icons color={"#8d8d8d"}/>
      </Container>
      <Footer/>
    </Box>
  ) as ReactElement;
}

export default Home