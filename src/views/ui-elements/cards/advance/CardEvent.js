// ** Custom Components
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'

// ** Icons Imports
import { Calendar, MapPin } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText, Button, Badge } from 'reactstrap'

// ** Images
import illustration from '@src/assets/images/illustration/email.svg'
import imgGuest from '@src/assets/images/portrait/small/avatar-s-2.jpg'

const CardEvent = () => {
  const data = [
    {
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Amy Carson',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Brandon Miles',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Daisy Weber',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Jenny Looper',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      meta: '+42'
    }
  ]

  return (
    <Card className='card-developer-meetup'>
      <div className='meetup-img-wrapper rounded-top text-center'>
        <img src={illustration} height='170' />
      </div>
      <CardBody>
        <div className='meetup-header d-flex align-items-center'>
          <div className='meetup-day'>
            <h6 className='mb-0'>THU</h6>
            <h3 className='mb-0'>24</h3>
          </div>
          <div className='my-auto'>
            <CardTitle tag='h4' className='mb-25'>
              Developer Meetup
            </CardTitle>
            <CardText className='mb-0'>Meet world popular developers</CardText>
            <Badge color='info'>
              FREE
            </Badge>
          </div>
        </div>
        <div className='d-flex mb-2'>
          {/* <Avatar color='light-primary' className='rounded me-1' icon={<Calendar size={18} />} /> */}
          <img src={imgGuest} color='light-primary' className='rounded me-1' height='30' />
          <div>
            <h6 className='mb-0'>Arif Khan, Guest</h6>
            <small>Sr. Software Engineer, Entertech</small>
          </div>
        </div>
        <div className='d-flex'>
          <Avatar color='light-primary' className='rounded me-1' icon={<Calendar size={18} />} />
          <div>
            <h6 className='mb-0'>Sat, May 25, 2020</h6>
            <small>10:AM to 6:PM</small>
          </div>
        </div>
        <div className='d-flex mt-2'>
          <Avatar color='light-primary' className='rounded me-1' icon={<MapPin size={18} />} />
          <div>
            <h6 className='mb-0'>Central Park</h6>
            <small>Manhattan, New york City</small>
          </div>
        </div>
        <div className='d-flex'>
          <AvatarGroup data={data} />
          <div className='marginLeft'>
            <Button color='primary' className='mt-2'>Sit Book</Button>
          </div>
          
        </div>
      </CardBody>
    </Card>
  )
}

export default CardEvent
