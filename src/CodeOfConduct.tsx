import { Typography, Container, List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { useTranslation } from 'react-i18next'
import NavBar from './NavBar'
import Footer from './Footer'

function CodeOfConduct() {
  const { t } = useTranslation()

  return (
    <>
      <NavBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5, pb: 5 }}>
        <Typography variant="h1" sx={{ mb: 4, textAlign: 'center' }}>
          {t("codeOfConduct.title")}
        </Typography>

        {/* Sección 1: Propósito */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.purpose.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.purpose.description1")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.purpose.description2")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2, fontWeight: 'bold' }}>
            {t("codeOfConduct.purpose.appliesTo")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.inPersonEvents')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.onlineEvents')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.networking')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.socialMedia')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.communicationChannels')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.purpose.memberInteractions')} />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: 'justify', mt: 2, fontStyle: 'italic' }}>
            {t("codeOfConduct.purpose.participation")}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 2: Valores */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.values.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.values.description")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.respect')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.inclusion')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.professionalism')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.collaboration')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.diversity')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.values.learning')} />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: 'justify', mt: 2 }}>
            {t("codeOfConduct.values.welcome")}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 3: Conducta Esperada */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.expected.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.expected.description")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.respectful')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.avoidOffensive')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.respectStaff')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.professional')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.respectSpaces')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.expected.constructive')} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 4: Conducta Inaceptable */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'error.main' }}>
            {t("codeOfConduct.unacceptable.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.unacceptable.description")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.harassment')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.stalking')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.offensiveComments')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.intimidation')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.sexualConduct')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.insults')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.interruptions')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.uncomfortable')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.propertyDamage')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'error.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.unacceptable.invasivePromotion')} />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: 'justify', mt: 2 }}>
            {t("codeOfConduct.unacceptable.note")}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 5: Alcance fuera del evento */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.scope.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.scope.description")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.scope.directed')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.scope.safety')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.scope.hostileEnvironment')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.scope.socialMediaHarassment')} />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: 'justify', mt: 2 }}>
            {t("codeOfConduct.scope.reserve")}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 6: Cumplimiento y medidas */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.enforcement.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.enforcement.description")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.warnings')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.expulsion')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.ticketCancellation')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.futureAccess')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.speakerInvitations')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.enforcement.participation')} />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: 'justify', mt: 2 }}>
            {t("codeOfConduct.enforcement.outsideEvents")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mt: 2, fontWeight: 'bold' }}>
            {t("codeOfConduct.enforcement.finalDecisions")}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 7: Reporte de incidentes */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.reporting.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.reporting.description")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.reporting.confidentiality")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2, fontWeight: 'bold' }}>
            {t("codeOfConduct.reporting.howTo")}
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.reporting.duringEvent')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.reporting.socialMedia')} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: '20px', color: 'primary.main' }}>
                <CircleIcon sx={{ fontSize: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={t('codeOfConduct.reporting.email')} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        {/* Sección 8: Compromiso */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            {t("codeOfConduct.commitment.title")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.commitment.description")}
          </Typography>
          <Typography sx={{ textAlign: 'justify', mb: 2 }}>
            {t("codeOfConduct.commitment.responsibility")}
          </Typography>
          <Typography sx={{ textAlign: 'center', mt: 4, fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            {t("codeOfConduct.commitment.community")}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default CodeOfConduct