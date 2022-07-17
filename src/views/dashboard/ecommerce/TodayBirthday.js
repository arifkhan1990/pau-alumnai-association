// ** Reactstrap Imports
import { Card, CardBody, Row, Col, CardFooter, CardHeader, CardTitle } from 'reactstrap'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import CardCongratulations from '../../ui-elements/cards/advance/CardCongratulations'
import CardHappayBirthday from '../../ui-elements/cards/advance/CardHappayBirthday'
const TodayBirthday = ({ data }) => {
  const renderPhotos = () => {
    return data.map((item, index) => {
      return (
        <Col key={index} md='3' xs='6' className='birthday-person-img'>
          <a href='/' onClick={e => e.preventDefault()}>
            <img className='img-fluid rounded' src={item.img} alt='latest-photo' />
          </a>
        </Col>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <CardHappayBirthday />
        <Row className='birthday-person-img'>{renderPhotos()}</Row>
      </CardBody>
    </Card>
  )
}

export default TodayBirthday
