// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import { CardHeader, Row, Col, Card, CardBody, CardText, CardTitle, CardImg, Button } from 'reactstrap'
import img1 from '@src/assets/images/pages/lock-screen.png'
import CompanySlide from '../dashboard/ecommerce/CompanySlide'
import ImageSlider from './ImageSlider'
import img2 from '@src/assets/images/avatars/1.png'
import img3 from '@src/assets/images/avatars/3.png'
import img4 from '@src/assets/images/avatars/4.png'
import img5 from '@src/assets/images/avatars/5.png'
import img6 from '@src/assets/images/avatars/6.png'
import img7 from '@src/assets/images/avatars/7.png'
const MediaPlayer = () => {
  const transactionsArr = [
    {
      title: 'Wallet',
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Bank Transfer',
      color: 'light-success',
      subtitle: 'Add Money',
      amount: '+ $480',
      Icon: Icon['Check']
    },
    {
      title: 'Paypal',
      color: 'light-danger',
      subtitle: 'Add Money',
      amount: '+ $590',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Mastercard',
      color: 'light-warning',
      subtitle: 'Ordered Food',
      amount: '- $12',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Transfer',
      color: 'light-info',
      subtitle: 'Refund',
      amount: '+ $98',
      Icon: Icon['TrendingUp']
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      {/* <CardHeader>
        <CardTitle tag='h4'>Transactions</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader> */}
      <div className="d-flex p-1">
        <div className="col-8 p-2">
          <div className="midea-player">
            <img className='img-fluid rounded w-100 img-h' src={img1} alt='latest-photo' />
          </div>
         {/* <CardBody>{renderTransactions()}</CardBody> */}
         
         <div className="mt-2">
            <ImageSlider />
         </div>
        </div>
        <div className="col-4">
           {/* <h4>More Photo File Upload By Another Author</h4> */}
          <div className="d-flex m-2 h-img-group">
              <div className="col-6">
                <img src={img2} alt='test' className='img-size2' />
              </div>
              <div className="col-6">
                <h5>
                 Reunion 2022 (PAU ALumni Association Reunion)
                </h5>
                <p className="text-opacity">Author: Arif khan</p>
                <p className="text-opacity">245 items, 2 Years ago.</p>
              </div>

          </div>

          <div className="d-flex m-2 h-img-group">
              <div className="col-6">
                <img src={img5} alt='test' className='img-size2' />
              </div>
              <div className="col-6">
                <h5>
                 Job Fair 2022 - 2023
                </h5>
                <p className="text-opacity">Author: PAU Authorization</p>
                <p className="text-opacity">95 items, 10 Days ago.</p>
              </div>

          </div>

          <div className="d-flex m-2 h-img-group">
              <div className="col-6">
                <img src={img6} alt='test' className='img-size2' />
              </div>
              <div className="col-6">
                <h5>
                 Orientation 2022 (Organized By PAU Culture Club)
                </h5>
                <p className="text-opacity">Author: Nadia Newaz</p>
                <p className="text-opacity">145 items, 1 Years ago.</p>
              </div>

          </div>

          <div className="d-flex m-2 h-img-group">
              <div className="col-6">
                <img src={img2} alt='test' className='img-size2' />
              </div>
              <div className="col-6">
                <h5>
                 PAU Internal CF Contest 2022 (Organized By PAU Computer Club)
                </h5>
                <p className="text-opacity">Author: Shihab Newaz</p>
                <p className="text-opacity">345 items, 6 Months ago.</p>
              </div>

          </div>

          {/* <div className="d-flex m-2 h-img-group">
              <div className="col-6">
                <img src={img7} alt='test' className='img-size2' />
              </div>
              <div className="col-6">
                <h5>
                 Orientation 2022 (Organized By PAU Culture Club)
                </h5>
                <p className="text-opacity">Author: Nadia Newaz</p>
                <p className="text-opacity">345 items, 1 Years ago.</p>
              </div>

          </div> */}

        </div>
      </div>
    </Card>
  )
}

export default MediaPlayer
