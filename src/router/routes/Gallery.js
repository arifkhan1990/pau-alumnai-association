// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const GalleryRoutes = [
    {
        path: '/gallery',
        component: lazy(() => import('../../views/gallery')),
        exact: true
    }
]

export default GalleryRoutes