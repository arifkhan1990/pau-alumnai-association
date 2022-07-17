// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'
import { Star } from 'react-feather'

// ** Images
import profileImg from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import profileImg2 from '@src/assets/images/portrait/small/avatar-s-9.jpg'

const QuestionCard = () => {
  return (
    <Card className='card-apply-job-d'>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <div className='d-flex align-items-center'>
            <Avatar className='avatar2 me-1' img={profileImg} imgHeight='42' imgWidth='42' />
            <div>
              <h6 className='mb-0'>Mittie Evans</h6>
              <small className='text-muted'>Updated 12m ago</small>
            </div>
          </div>
        </div>

            <div className='mb-1'>
            <Badge className='marginL-5' color='light-warning' pill>Docker</Badge>
            <Badge className='marginL-5' color='light-danger' pill>Laravel</Badge>
            </div>
        <h3 className='apply-job-title'>Why I use Docker in my Laravel project?</h3>
        <div className='divider divider-center'>
            <div className='divider-text'>
            <Star size={15} />
            </div>
        </div>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <div className='d-flex align-items-center'>
            <Avatar className='avatar2 me-1' img={profileImg2} imgHeight='42' imgWidth='42' />
            <div>
              <h6 className='mb-0'>Arif Khan</h6>
              <small className='text-muted'>Updated 02m ago</small>
            </div>
          </div>
        </div>

            <div className='mb-1'>
            <Badge className='marginL-5' color='light-warning' pill>Php</Badge>
            <Badge className='marginL-5' color='light-danger' pill>Laravel</Badge>
            </div>
        <h3 className='apply-job-title'>How to upgrate in my Laravel project laravel 8 to laravel 9?</h3>
        <div className='divider divider-center'>
            <div className='divider-text'>
            <Star size={15} />
            </div>
        </div>
        <div className='d-grid'>
          <Button color='info'>Please Share Your Opinion</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default QuestionCard
