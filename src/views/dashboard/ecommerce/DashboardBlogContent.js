// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import { MessageSquare } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'

const DashboardBlogContent = () => {
  // ** States
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/blog/list/data').then(res => setData(res.data))
  }, [])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  const renderRenderList = () => {
    return data.map((item, k) => {
         if (k < 4) {
            const renderTags = () => {
                return item.tags.map((tag, index) => {
                return (
                    <a key={index} href='/' onClick={e => e.preventDefault()}>
                    <Badge
                        className={classnames({
                        'me-50': index !== item.tags.length - 1
                        })}
                        color={badgeColorsArr[tag]}
                        pill
                    >
                        {tag}
                    </Badge>
                    </a>
                )
                })
            }

            return (
                <Col key={item.title} md='3'>
                <Card>
                    <Link to={`/pages/blog/detail/${item.id}`}>
                    <CardImg className='img-fluid' src={item.img} alt={item.title} top />
                    </Link>
                    <CardBody>
                    <CardTitle tag='h4'>
                        <Link className='blog-title-truncate text-body-heading' to={`/pages/blog/detail/${item.id}`}>
                        {item.title}
                        </Link>
                    </CardTitle>
                    <div className='d-flex'>
                        <Avatar className='me-50' img={item.avatar} imgHeight='24' imgWidth='24' />
                        <div>
                        <small className='text-muted me-25'>by</small>
                        <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                            {item.userFullName}
                            </a>
                        </small>
                        <span className='text-muted ms-50 me-25'>|</span>
                        <small className='text-muted'>{item.blogPosted}</small>
                        </div>
                    </div>
                    <div className='my-1 py-25'>{renderTags()}</div>
                    <CardText className='blog-content-truncate'>{item.excerpt}</CardText>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to={`/pages/blog/detail/${item.id}`}>
                        <MessageSquare size={15} className='text-body me-50' />
                        <span className='text-body fw-bold'>{item.comment} Comments</span>
                        </Link>
                        <Link className='fw-bold' to={`/pages/blog/detail/${item.id}`}>
                        Read More
                        </Link>
                    </div>
                    </CardBody>
                </Card>
                </Col>
            )
         }
    })
  }
  return (
    <Fragment>

            {data !== null ? (
              <div className='blog-list-wrapper'>
                <Row>{renderRenderList()}</Row>
              </div>
            ) : null}
    </Fragment>
  )
}

export default DashboardBlogContent
