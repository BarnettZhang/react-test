import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: () => import('../pages/Home').then((m) => ({ Component: m.default })),
      },
      {
        path: 'about',
        lazy: () => import('../pages/About').then((m) => ({ Component: m.default })),
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('../pages/NotFound').then((m) => ({ Component: m.default })),
  },
])

export default router
