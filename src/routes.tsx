import { useRoutes } from "react-router-dom";
import { type ReactElement } from 'react'
import Home from './Home'
import Sponsorship from './Sponsorship'

export default function Router (): ReactElement | null {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sponsorship', element: <Sponsorship /> },
  ])

  return routes
}
