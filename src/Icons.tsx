import { FC, type ReactElement } from 'react'
import { Box, IconButton, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PatreonIcon from './PatreonIcon'

interface IconsProps {
  color: string
}

  const Icons: FC<IconsProps> = ({ color }): ReactElement => {
    return (
      <Box sx={{ display: 'flex' }}>
        <IconButton
          component={Link}
          href="https://www.facebook.com/ColimaWebDevTalks"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/webdevtalksmx"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/webdevtalksmx"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <XIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/company/web-dev-talks"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://patreon.com/WebDevTalksColima"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <PatreonIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:webdevtalkscolima@gmail.com"
          target="_blank"
          sx={{ color: color ?? 'inherit' }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    )
  }

  export default Icons
