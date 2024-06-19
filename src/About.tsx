import { Typography, Container, Avatar, List, ListItem, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import image1 from './assets/images/78743416_2588340067930838_9025297886149083136_n.jpeg'
import image2 from './assets/images/28378086_1616056785159176_862979226448649839_n.jpeg'
import image3 from './assets/images/88950387_2784083098356533_6828161491334594560_n.jpeg'
import image4 from './assets/images/87738062_2784085668356276_3167127129091473408_n.jpeg'
import NavBar from './NavBar'

function About() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}>
        <Typography variant="h1" sx={{ mb: 3 }}>Web Dev Talks</Typography>
        <Typography sx={{ my: 3 }}>{t("aboutUs.quote")}<b>{t("aboutUs.adrianReyes")}</b></Typography>

        <Avatar variant="square" src={image1} alt="" sx={{ width: '100%', height: '100%' }} />

        <Typography variant="h2" sx={{ my: 5 }}>{t("aboutUs.whoIs")}</Typography>
        <Typography>{t("aboutUs.description")}</Typography>
        <Typography>{t("aboutUs.description2")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.motivationHeader")}</Typography>
        <Typography>{t("aboutUs.motivationBody1")}</Typography>
        <Typography>{t("aboutUs.motivationBody2")}</Typography>
        <Typography variant="h2" sx={{ my: 3 }}>{t("aboutUs.dynamic")}</Typography>
        <Typography>{t("aboutUs.dynamicBody1")}</Typography>
        <Typography>{t("aboutUs.dynamicBody2")}</Typography>

        <Avatar variant="square" src={image2} alt="" sx={{ width: '100%', height: '100%', my: 5 }} />

        <Avatar variant="square" src={image3} alt="" sx={{ width: '100%', height: '100%', my: 5 }} />

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

      </Container>
    </>
  )
}

export default About
