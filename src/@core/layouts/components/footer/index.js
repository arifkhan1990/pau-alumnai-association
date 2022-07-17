// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        © {new Date().getFullYear()}{' '}
        <a href='#' target='_blank' rel='noopener noreferrer'>
          PAU CSE & CSIT ALUMNI ASSOCIATION
        </a>
        <span className='d-none d-sm-inline-block'>. All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Powered By 
        <Heart size={14} />
        {'  '}
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <span className='fst-italic powered_by'>
            AGAMIRIT.SOLUTION'S
          </span>
           
        </a>
      </span>
    </p>
  )
}

export default Footer
