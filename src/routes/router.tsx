import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MainLayout } from '../layouts/MainLayout'
import { WelcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <div>home</div>,
  },
  {
    path: '/',
    element: <MainLayout/>,
  },
  {
    path: '/',
    element: <Outlet/>,
    errorElement: <NotFoundPage />,
    children: [
      WelcomeRoutes,
    ],
  },
],

)
