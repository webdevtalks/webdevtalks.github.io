import { useRoutes } from "react-router-dom";
import { type ReactElement } from 'react'
import Home from './Home'

export default function Router (): ReactElement | null {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])

  return routes
}
