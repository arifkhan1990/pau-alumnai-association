// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import EventRoutes from './Events'
import GalleryRoutes from './Gallery'
// ** Document title
const TemplateTitle = '%s - PAU CSE & CSIT Alumni Association'

// ** Default Route
const DefaultRoute = 'home/dashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...EventRoutes,
  ...ChartsRoutes,
  ...GalleryRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
