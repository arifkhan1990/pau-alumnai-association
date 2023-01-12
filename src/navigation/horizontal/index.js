// ** Navigation imports
import apps from './apps'
import pages from './pages'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import events from './events'
import gallery from './gallery'

// ** Merge & Export
export default [...dashboards, ...apps, ...uiElements, ...formsAndTables, ...pages, ...charts, ...events, ...gallery, ...others]
