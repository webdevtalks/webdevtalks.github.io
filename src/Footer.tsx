import logo from './assets/images/logo.png';
import { Link } from 'react-router-dom'
import { Box, Grid, Typography, Avatar } from '@mui/material';
import Icons from './Icons';

const Footer = () => {
    return (
        <Box
          sx={{
            backgroundColor: 'black',
            padding: 5,
            color: 'white',
            position: "sticky",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center" >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { xs: 'none', md: 'block' },
                textAlign: 'left',
              }}
            >
              <Link to="/" style={{ textDecoration: 'none', paddingLeft: '5rem', flexShrink: 0 }}>
                <Avatar src={logo} alt="Logo WDT" sx={{ width: '100%', height: '100%', maxWidth: '100px' }} />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: { xs: 'center', md: 'right' },
              }}
            >
              <Icons color={"#ffff"}/>
            </Grid>
          </Grid>
        </Box>
    );
};

export default Footer;