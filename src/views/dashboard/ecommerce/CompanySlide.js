// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Star } from 'react-feather'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import { CardText } from 'reactstrap'

// ** Related products images
import img1 from '@src/assets/images/elements/google2.png'
import img2 from '@src/assets/images/elements/facebook2.png'
import img3 from '@src/assets/images/elements/amazon2.png'
import img4 from '@src/assets/images/elements/microsoft2.png'
import img5 from '@src/assets/images/elements/netflix2.png'
import img6 from '@src/assets/images/elements/walmart1.png'
import img7 from '@src/assets/images/elements/nasa2.png'
// ** Styles
import '@styles/react/libs/swiper/swiper.scss'
import AvatarCompanySocialIcon from '../../components/avatar/AvatarCompanySocialIcon'

const CompanySlide = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [
    {
      name: 'Google',
      brand: 'Alpebate',
      ratings: 4,
      employee: 5,
      img: img1
    },
    {
      name: 'Facebook',
      brand: 'Meta',
      ratings: 2,
      employee: 7,
      img: img2
    },
    {
      name: 'Amazon',
      brand: 'Amazon',
      ratings: 3,
      employee: 2,
      img: img3
    },
    {
      name: 'Microsoft',
      brand: 'Microsoft',
      ratings: 3,
      employee: 1,
      img: img4
    },
    {
      name: 'Netfilex',
      brand: 'Netfilex',
      ratings: 4,
      employee: 11,
      img: img5
    },
    {
      name: 'Walmart',
      brand: 'Walmart',
      ratings: 1,
      employee: 1,
      img: img6
    },
    {
      name: 'Nasa',
      brand: 'nasa',
      ratings: 1,
      employee: 2,
      img: img7
    }
  ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 6,
    spaceBetween: 25,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 6,
        spaceBetween: 35
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 35
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 35
      },
      320: {
        slidesPerView: 4,
        spaceBetween: 35
      }
    }
  }

  return (
    <Fragment>
      {/* <div className='mt-1 mb-1 text-center'>
        <h4>Company Wise Employeer</h4>
        <CardText>People also search for this items</CardText>
      </div> */}
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
              <a href='/' onClick={e => e.preventDefault()}>
                <div className='img-container-compnay-card w-70 mx-auto py-0'>
                  <img src={slide.img} alt='swiper 1' className='h-50' />
                </div>
                <div className='item-heading'>
                {/* <a href='/'>
                  <h5 className='text-truncate mb-0'>{slide.name}</h5>
                </a> */}
                  {/* <small className='text-body'>by {slide.brand}</small> */}
                </div>
                <div className='item-meta'>
                  {/* <ul className='unstyled-list list-inline mb-25'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item me-25'>
                          
                        </li>
                      )
                    })}
                  </ul> */}
                  <AvatarCompanySocialIcon />
                  <hr className='mb-2' />
                  <CardText className='text-primary mb-0'>Total Employeer: <b>{slide.employee}</b></CardText>
                </div>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default CompanySlide
