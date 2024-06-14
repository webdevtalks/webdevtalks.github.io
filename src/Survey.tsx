import { useSurvey } from './hooks/useSurvey'

const Survey = () => {
  const { navigateToSurvey } = useSurvey()

  navigateToSurvey()

  return null
}

export default Survey