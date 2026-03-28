import { useTranslation } from 'react-i18next'
import { LANGUAGES } from './constants'
import { Select, SelectItem } from './components/ui/select'

export const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'es'

  return (
    <div className="flex items-center gap-2">
      <Select value={currentLanguage} onValueChange={i18n.changeLanguage} placeholder="Idioma">
        {LANGUAGES.map(({ code, label }) => (
          <SelectItem key={code} value={code}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
