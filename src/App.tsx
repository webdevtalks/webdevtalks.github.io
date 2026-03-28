import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import Router from './routes'
import { TooltipProvider } from './components/ui/tooltip'
import ScrollToTop from './components/ScrollToTop'

const basePath = import.meta.env.VITE_BASE_URL

export default function App() {
  return(
    <BrowserRouter basename={basePath}>
      <TooltipProvider>
        <ScrollToTop />
        <Router />
        <Toaster position="bottom-center" theme="dark" />
      </TooltipProvider>
    </BrowserRouter>
  )
}
