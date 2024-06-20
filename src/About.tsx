import { Typography, Container, Avatar, List, ListItem, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import main from './assets/images/main.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import image1 from './assets/images/1.jpg'
import image2 from './assets/images/2.jpg'
import image3 from './assets/images/3.jpg'
import image4 from './assets/images/4.jpg'
import image5 from './assets/images/5.jpg'
import image6 from './assets/images/6.jpg'
import image7 from './assets/images/7.jpg'
import image8 from './assets/images/8.jpg'
import image9 from './assets/images/9.jpg'
import image10 from './assets/images/10.jpg'
import image11 from './assets/images/11.jpg'
import image12 from './assets/images/12.jpg'
import image13 from './assets/images/13.jpg'
import image14 from './assets/images/14.jpg'
import image15 from './assets/images/15.jpg'
import image16 from './assets/images/16.jpg'
import image17 from './assets/images/17.jpg'
import image18 from './assets/images/18.jpg'
import image19 from './assets/images/19.jpg'
import image20 from './assets/images/20.jpg'
import image21 from './assets/images/21.jpg'
import image22 from './assets/images/22.jpg'
import image23 from './assets/images/23.jpg'
import image24 from './assets/images/24.jpg'
import NavBar from './NavBar'
import Carousel from 'react-material-ui-carousel'
import Footer from './Footer';

function About() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}>
        <Typography variant="h1" sx={{ mb: 3 }}>Web Dev Talks</Typography>
        <Typography sx={{ my: 3 }}>{t("aboutUs.quote")}<b>{t("aboutUs.adrianReyes")}</b></Typography>

        <Avatar variant="square" src={main} alt="" sx={{ width: '100%', height: '100%' }} />

        <Typography variant="h2" sx={{ my: 5 }}>{t("aboutUs.whoIs")}</Typography>
        <Typography>{t("aboutUs.description")}</Typography>
        <Typography>{t("aboutUs.description2")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.motivationHeader")}</Typography>
        <Typography>{t("aboutUs.motivationBody1")}</Typography>
        <Typography>{t("aboutUs.motivationBody2")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.dynamic")}</Typography>
        <Typography>{t("aboutUs.dynamicBody1")}</Typography>
        <Typography>{t("aboutUs.dynamicBody2")}</Typography>

        <Avatar variant="square" src={image1} alt="" sx={{ width: '100%', height: '100%', my: 5 }} />

        <Avatar variant="square" src={image8} alt="" sx={{ width: '100%', height: '100%', my: 5 }} />

        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.socialImpact")}</Typography>
        <Typography>{t("aboutUs.socialImpactBody1")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.jobsOffer")}</Typography>
        <Typography>{t("aboutUs.jobsOfferBody1")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("sponsorship.sponsor")}</Typography>
        <Typography>{t("aboutUs.sponsorBody")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.offer")}</Typography>
        <Typography>{t("aboutUs.offerRights")}</Typography>

        <List sx={{ width: '100%' }}>
          <ListItem>
            <ListItemText primary={t('aboutUs.socialMentions')}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={t('aboutUs.communityPagePosts')}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={t('aboutUs.sharePosts')}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={t('aboutUs.promoteContent')}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={t('aboutUs.eventPresence')}/>
          </ListItem>
        </List>

        <Typography>{t("aboutUs.note")}</Typography>
        <Typography>{t("aboutUs.benefitsNote")}</Typography>
        <Typography>{t("aboutUs.closingNote")}</Typography>

        <Typography variant="h3" sx={{ my: 3 }}>{t("aboutUs.communityHeader")}</Typography>

        <Typography variant="h3" sx={{ my: 5 }}>{t("aboutUs.gallery")}</Typography>
        <Carousel sx={{ width: '100%', marginBottom: '1rem' }} interval={5000} animation={'slide'} height={'50vw'} indicators={false} duration={750}>
          <LazyLoadImage src={image2} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image3} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }}/>
          <LazyLoadImage src={image4} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }}/>
          <LazyLoadImage src={image5} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image6} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image7} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image9} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image10} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image11} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image12} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image13} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image14} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image15} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image16} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image17} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image18} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image19} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image20} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image21} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image22} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image23} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          <LazyLoadImage src={image24} alt={''} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </Carousel>
      </Container>
      <Footer/>
    </>
  )
}

export default About
