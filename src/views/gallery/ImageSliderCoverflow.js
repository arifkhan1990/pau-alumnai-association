// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Star } from 'react-feather'
import SwiperCore, { Navigation, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import { CardText } from 'reactstrap'

// ** Related products images
import img1 from '@src/assets/images/avatars/1.png'
import img2 from '@src/assets/images/avatars/2.png'
import img3 from '@src/assets/images/avatars/3.png'
import img4 from '@src/assets/images/avatars/4.png'
import img5 from '@src/assets/images/avatars/5.png'
import img6 from '@src/assets/images/avatars/6.png'
import img7 from '@src/assets/images/avatars/7.png'
// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

// import "swiper/css"
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

const ImageSliderConverfloew = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [
    {
      event_name: 'Google',
      author: 'Alpebate',
      img: img1
    },
    {
      event_name: 'Facebook',
      author: 'Meta',
      img: img2
    },
    {
        event_name: 'Walmart',
        author: 'Walmart',
        img: img6
    },
    {
      event_name: 'Amazon',
      author: 'Amazon',
      img: img3
    },
    {
      event_name: 'Microsoft',
      author: 'Microsoft',
      img: img4
    },
    {
      event_name: 'Netfilex',
      author: 'Netfilex',
      img: img5
    },
    {
      event_name: 'Nasa',
      author: 'nasa',
      img: img7
    }
  ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2 overide-bgColor',
    slidesPerView: 6,
    spaceBetween: 15,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 6,
        spaceBetween: 15
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  }

  return (
    <Fragment>

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {slides.map(slide => {
            return (
                <SwiperSlide>
                <a href='/' onClick={e => e.preventDefault()}>
                        <img src={slide.img} alt={slide.event_name} className="converflow_box_shado"/>
                </a>
                </SwiperSlide>
            )
            })}
        </Swiper>
    </Fragment>
  )
}

export default ImageSliderConverfloew
