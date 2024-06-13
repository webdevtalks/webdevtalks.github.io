import { useRoutes } from "react-router-dom";
import { type ReactElement } from 'react'
import Home from './Home'
import Sponsorship from './Sponsorship'
import About from './About'

export default function Router (): ReactElement | null {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/sponsorship', element: <Sponsorship /> },
  ])

  return routes
}
