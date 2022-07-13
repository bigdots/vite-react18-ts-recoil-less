import React, { lazy, FC } from 'react'

import { Index } from '../pages/index'
import { Demo } from '../pages/demo'

import { useRoutes, RouteObject } from 'react-router-dom'

// const About = lazy(() => import('../pages/about'))

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]

const RenderRouter: FC = () => {
  const element = useRoutes(routeList)
  return element
}

export default RenderRouter
