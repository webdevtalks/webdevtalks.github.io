import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

export default function App() {
  return(
    <BrowserRouter basename='/website2.0'>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  )
}