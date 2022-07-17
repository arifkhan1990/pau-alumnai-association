import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/home/dashboard',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/dashboard/ecommerce'))
  }
]

export default DashboardRoutes
