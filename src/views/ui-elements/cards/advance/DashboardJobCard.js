// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'

// ** Images
import profileImg from '@src/assets/images/portrait/small/avatar-s-7.jpg'

const DashboardJobCard = () => {
  return (
    <Card className='card-apply-job-d'>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <div className='d-flex align-items-center'>
            <Avatar className='me-1' img={profileImg} imgHeight='42' imgWidth='42' />
            <div>
              <h6 className='mb-0'>Mittie Evans</h6>
              <small className='text-muted'>Updated 12m ago</small>
            </div>
          </div>
        </div>
        <div className='mb-2'>
        <Badge className='marginL-5' color='light-warning' pill>Php</Badge>
          <Badge className='marginL-5' color='light-danger' pill>Laravel</Badge>
          <Badge className='marginL-5' color='light-info' pill>
            Fullstack Web Developer
          </Badge>
          <Badge className='marginL-5' color='light-primary' pill>3 Years Ex.</Badge>
          </div>
        <h3 className='apply-job-title'>Sr. Web Developer</h3>
        <p> <span className='vacancy'>Vacancy</span>  : <b> 5</b></p>
        <CardText className='mb-2'>
          Design high-quality designs, graphics, mock-ups and layouts for both new and existing web sites/ web
          applications / mobile applications.

          Country’s leading private commercial bank - Standard Bank published job recruitment circular to fulfill vacant position of Head of Security and Head of Procurement. The bank aims to ensure work environment that promotes diversity,
          embraces change, and provides leadership opportunities to every team member
        </CardText>
        <div className='apply-job-package-d bg-light-primary rounded'>
          <div>
            <sup className='text-body'>
              <small>$</small>
            </sup>
            <h2 className='d-inline me-20'>9,800</h2>
            <sub className='text-body'>
              <small>/ month</small>
            </sub>
          </div>
          <div>
          <Badge className='marginL-5' color='light-primary' pill>
            Full Time
          </Badge>
          <Badge className='marginL-5' color='light-info' pill>
            Remote
          </Badge>
          </div>
        </div>
        <div className='d-grid'>
          <Button color='success'>Details For This Job</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default DashboardJobCard
