import { useState } from 'react'
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./constants";
import { Select, FormControl, Box, InputLabel, MenuItem} from '@mui/material';

export const LanguageSelector = () => {
  const [language, setLanguage] = useState('');
  const { i18n } = useTranslation();

  const onChangeLang = (e) => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
    setLanguage(languageCode);
  };

  return(
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="language-input">Idioma</InputLabel>
          <Select
            labelId="language-input"
            id="demo-simple-select"
            value={language}
            label="Idioma"
            onChange={onChangeLang}
          >
           {LANGUAGES.map(({code, label}) => (
              <MenuItem key={code} value={code}>
                  {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}