// ** Icons Imports
import { Award } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

// ** Images
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'

const CardHappayBirthday = () => {
  return (
    <Card className='card-congratulations'>
      <CardBody className='text-center birthWishCard'>
        <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
        <img className='congratulations-img-right' src={decorationRight} alt='decor-right' />
        <Avatar icon={<Award size={20} />} className='shadow' color='primary' size='xl' />
        <div className='text-center'>
          <h1 className='text-white'>Happay Birthday</h1>
          <CardText className='m-auto w-75'>
          All Birthday Person
          </CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardHappayBirthday
