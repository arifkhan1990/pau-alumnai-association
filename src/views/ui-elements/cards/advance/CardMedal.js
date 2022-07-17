// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
// import AvatarIcons from './components/avatar/AvatarIcons'
// ** Images
import medal from '@src/assets/images/illustration/badge.svg'
import userImg from '@src/assets/images/avatars/8.png'
import AvatarSocialIcons from '../../../components/avatar/AvatarSocialIcon'

import {
  avatarIcons,
  avatarSizes,
  avatarGroup,
  avatarColors,
  avatarStatus,
  avatarInitials,
  avatarLightColors,
  avatarGroupTooltip
} from '../../../components/avatar/AvatarSourceCode'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h4>Congratulations 🎉 Arif!</h4>
        <CardText className='font-small-3'>You have won new job as a Jr. Software Engineer</CardText>
        <div className='profile-user-info'>
          <div className='row'>
              <Col key={0} md='3' xs='3' className='profile-latest-img'>
                <a href='/' onClick={e => e.preventDefault()}>
                  <img className='img-fluid rounded' src={userImg} alt='user-photo' />
                </a>
              </Col>
              <div className='col'>
                <div className='row'>
                  <h5 className='mb-0'>Arif Khan</h5>
                  <h6 className='font-small-3'>Jr. Software Engineer,<a href='/#' > Entertech</a> </h6>
                  <AvatarSocialIcons />
                </div>
          </div>
          </div>
        </div>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
