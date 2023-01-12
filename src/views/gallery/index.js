// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, CardHeader} from 'reactstrap'
// ** Table Import
// import Table from './Table'
import Breadcrumbs from '@components/breadcrumbs'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import MediaPlayer from './MediaPlayer'
import ImageSliderConverfloew from './ImageSliderCoverflow'
import ImageSliderCube from './ImageSliderCube'
import ImageSliderCard from './ImageSliderCard'

const Events = () => {
  // ** Hooks

  // ** Theme Colors
  const { colors } = useContext(ThemeColors)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Gallery' breadCrumbParent='Media gallery' breadCrumbActive='Monthly Meetout Event 2022' />
      <Row className='match-height'>
        <Col sm='12'>
          <MediaPlayer />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col sm='12'>
        <Card className='card-transaction'>
          <CardHeader>
            <CardTitle tag='h4'>Reunion Event Photo Gallery 2022</CardTitle>
          </CardHeader>
          <div className="d-flex p-1">
          <ImageSliderConverfloew />
          </div>
          </Card>
        </Col>
        <Col sm='4'>
          <Card className='card-transaction'>
          <CardHeader>
            <CardTitle tag='h4'>CF Contest Photo Gallery 2022</CardTitle>
          </CardHeader>
          <div className="d-flex p-1">
          <ImageSliderCube />
          </div>
          </Card>
        </Col>
        <Col sm='4'>
          <Card className='card-transaction'>
          <CardHeader>
            <CardTitle tag='h4'>CF Contest Photo Gallery 2022</CardTitle>
          </CardHeader>
          <div className="d-flex p-1">
          <ImageSliderCard />
          </div>
          </Card>
        </Col>
        <Col sm='4'>
          <Card className='card-transaction'>
          <CardHeader>
            <CardTitle tag='h4'>CF Contest Photo Gallery 2022</CardTitle>
          </CardHeader>
          <div className="d-flex p-1">
          <ImageSliderCube />
          </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Events
