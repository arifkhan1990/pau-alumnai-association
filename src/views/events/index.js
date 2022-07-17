// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card } from 'reactstrap'

// ** Table Import
// import Table from './Table'

const Events = () => {
  return (
    <Fragment>
      <h3>Event List</h3>
      <p>Each category (Basic, Professional, and Business) includes the four predefined roles shown below.</p>
      <Card>
        <div className='card-datatable app-user-list table-responsive'>
          <h1>Events Heading</h1>
        </div>
      </Card>
    </Fragment>
  )
}

export default Events
