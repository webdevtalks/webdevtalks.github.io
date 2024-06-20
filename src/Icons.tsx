import { FC, ReactElement } from 'react';
import { Box, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PatreonIcon from './PatreonIcon';

interface IconsProps {
    color: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
      patreon?: string;
      email?: string;
    };
  }

  const Icons: FC<IconsProps> = ({ color }) => {
    return (
      <Box>
        <IconButton
          component={Link}
          href="https://www.facebook.com/ColimaWebDevTalks"
          target="_blank"
          sx={{ color: color?.facebook || 'inherit' }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/webdevtalksmx"
          target="_blank"
          sx={{ color: color?.instagram || 'inherit' }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/webdevtalksmx"
          target="_blank"
          sx={{ color: color?.twitter || 'inherit' }}
        >
          <XIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/company/web-dev-talks"
          target="_blank"
          sx={{ color: color?.linkedin || 'inherit' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://patreon.com/WebDevTalksColima"
          target="_blank"
          sx={{ color: color?.patreon || 'inherit' }}
        >
          <PatreonIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:contacto@webdevtalks.mx"
          target="_blank"
          sx={{ color: color?.email || 'inherit' }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    ) as ReactElement;
  };
  
  export default Icons;
