import { type ReactElement}  from 'react'
import logo from './assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Box, Avatar } from '@mui/material'
import Icons from './Icons'

const Footer = (): ReactElement => {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.primary.main,
        px: 6,
        py: 1,
        color: 'white',
        position: "sticky",
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-between' }
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '50px' }} />
        </Link>
      </Box>
      <Icons color={"#ffff"}/>
    </Box>
  )
}

export default Footer