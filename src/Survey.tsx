import { useSurvey } from './hooks/useSurvey'

const Survey = () =>  {
  const { navigateToSurvey } = useSurvey()

  navigateToSurvey()
}

export default Survey