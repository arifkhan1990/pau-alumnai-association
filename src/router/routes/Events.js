// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const EventRoutes = [
    {
        path: '/events',
        component: lazy(() => import('../../views/events')),
        exact: true
    }
]

export default EventRoutes