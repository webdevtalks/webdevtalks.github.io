import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

const basePath = import.meta.env.VITE_BASE_URL

export default function App() {
  return(
    <BrowserRouter basename={basePath}>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  )
}