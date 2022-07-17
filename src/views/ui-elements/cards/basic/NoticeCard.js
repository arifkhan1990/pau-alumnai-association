// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardImg, CardTitle, CardBody, CardImgOverlay, CardText, Row, Col } from 'reactstrap'

// ** Images
import Avatar from '@components/avatar'
import img1 from '@src/assets/images/slider/06.jpg'
import img2 from '@src/assets/images/slider/09.jpg'
import img3 from '@src/assets/images/slider/10.jpg'
import profileImg from '@src/assets/images/portrait/small/avatar-s-7.jpg'
const NoticeCard = () => {
  return (
    <Card className='mb-0'>
    <CardBody>
        <CardTitle tag='h4'>Notice For - Attention <br />
        <small className='text-muted'>Author: Tabassum Tarin</small>
        </CardTitle>
        
        <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content
        is a little bit longer.
        </CardText>
        <CardText>
        <small className='text-muted'>Last updated 3 mins ago</small>
        </CardText>
    </CardBody>
        <CardImg bottom src={img2} alt='card-bottom' />
    </Card>
  )
}

export default NoticeCard
