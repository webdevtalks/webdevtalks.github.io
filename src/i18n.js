import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const basePath = import.meta.env.VITE_BASE_URL

i18n.use(HttpApi)
  .use(initReactI18next)
  .init({
      fallbackLng: 'es',
      lng: 'es',
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: `${basePath}/i18n/{{lng}}.json`,
      },
  })

export default i18n