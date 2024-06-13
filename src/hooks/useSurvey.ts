import { useNavigate } from 'react-router-dom'
import useSheets from './useSheets'

export const useSurvey = () => {
  const { value: link } = useSheets(`select A where A contains 'https' limit 1`)
  const navigate = useNavigate()

  const navigateToSurvey = () => { if (link) window.location = link }

  const openSurvey = () => {
    if (link) {
      window.open(link)
      navigate('/')
    }
  }

  return { openSurvey, navigateToSurvey }
}