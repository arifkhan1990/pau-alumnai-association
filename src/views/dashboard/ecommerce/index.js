// ** React Imports
import { useContext, Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardText, CardTitle, CardImg, Button} from 'reactstrap'
import axios from 'axios'
// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
// ** Demo Components
import CompanyTable from './CompanyTable'
import ThisMonthCollection from '@src/views/ui-elements/cards/statistics/ThisMonthCollection'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import DashboardJobCard from '@src/views/ui-elements/cards/advance/DashboardJobCard'
import CardEvent from '@src/views/ui-elements/cards/advance/CardEvent'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import BalanceReport from '@src/views/ui-elements/cards/analytics/BalanceReport'
import LastMonthExpense from '@src/views/ui-elements/cards/statistics/LastMonthExpense'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CurrentBalance from '@src/views/ui-elements/cards/statistics/CurrentBalance'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

import StatsVertical from '@components/widgets/stats/StatsVertical'
import CompanySlide from './CompanySlide'
import TechWiseApexDonutChart from '../../charts/apex/TechWiseApexDonutChart'
import TechWiseChartPolarArea from '../../charts/chart-js/TechWiseChartPolarArea'
import Avatar from '@components/avatar'
import TodayBirthday from './TodayBirthday'

import {
  Heart,
  MessageSquare,
  Users,
  Briefcase,
  XOctagon
} from 'react-feather'
// ** Styles
import '@styles/react/pages/page-profile.scss'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import '@styles/base/themes/dark-layout.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import DashboardBlogContent from './DashboardBlogContent'
import CardProjectShow from '../../ui-elements/cards/advance/CardProjectShow'
import NoticeCard from '../../ui-elements/cards/basic/NoticeCard'
import QuestionCard from '../../ui-elements/cards/advance/QuestionCard'


const EcommerceDashboard = () => {
  const [birthdayData, setBirthdayData] = useState()
  useEffect(() => {
    axios.get('/profile/data').then(response => setBirthdayData(response.data))
  }, [])

  // ** Context
  const { colors } = useContext(ThemeColors),
  { skin } = useSkin(),
  labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
  tooltipShadow = 'rgba(0, 0, 0, 0.25)',
  gridLineColor = 'rgba(200, 200, 200, 0.2)',
  lineChartPrimary = '#666ee8',
  lineChartDanger = '#ff4961',
  warningColorShade = '#ffbd1f',
  warningLightColor = '#FDAC34',
  successColorShade = '#28dac6',
  primaryColorShade = '#836AF9',
  infoColorShade = '#299AFF',
  yellowColor = '#ffe800',
  greyColor = '#4F5D70',
  blueColor = '#2c9aff',
  blueLightColor = '#84D0FF',
  greyLightColor = '#EDF1F4'
  // ** vars
  const trackBgColor = '#e9ecef'

  return (
    <div className='app-ecommerce-details'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Heart size={21} />} color='info' stats='460' statTitle='Alumni' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Users size={21} />} color='primary' stats='380' statTitle='Current Students' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Briefcase size={21} />} color='success' stats='370' statTitle='Employed' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<XOctagon size={21} />} color='danger' stats='242' statTitle='Unemployed' />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <LastMonthExpense warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <CurrentBalance info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <ThisMonthCollection success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='8' md='12'>
          <BalanceReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='12' md='12'>
          <Card>
            <CardBody>
              <CompanySlide />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='6' lg='12'>
          <TechWiseApexDonutChart />
        </Col>
        <Col lg='6' sm='12'>
          <TechWiseChartPolarArea
            lineChartPrimary={lineChartPrimary}
            blueLightColor={blueLightColor}
            primaryColorShade={primaryColorShade}
            blueColor={blueColor}
            labelColor={labelColor}
            greyColor={greyColor}
            yellowColor={yellowColor}
            infoColorShade={infoColorShade}
            successColorShade={successColorShade}
          />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='6' xs='12'>
          <DashboardJobCard />
        </Col>
        <Col lg='4' md='6' xs='12'>
        <CardEvent colors={colors} trackBgColor={trackBgColor} />
        
          {/* <GoalOverview success={colors.success.main} /> */}
        </Col>
        <Col lg='4' md='6' xs='12'>
        <CardProjectShow colors={colors} trackBgColor={trackBgColor} />
        </Col>
      </Row>
      <Row className="match-height">
        <h5 className='mt-2'> Latest Blog Post</h5>
        <Col xl='12' lg='12'>
          <DashboardBlogContent />
        </Col>
      </Row>
      <Row className='match-height mb-2'>
        {/* <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardMeetup />
        </Col> */}
        {birthdayData && 
          <Col lg='4' md='6' xs='12'>
            <TodayBirthday data={birthdayData.latestPhotos} />
            {/* <CardBrowserStates colors={colors} trackBgColor={trackBgColor} /> */}
          </Col>
        }
        <Col lg='4' md='6' xs='12'>
          <QuestionCard colors={colors} trackBgColor={trackBgColor}/>
        </Col>
        <Col lg='4' md='6' xs='12'>
        <NoticeCard colors={colors} trackBgColor={trackBgColor} />
        </Col>
      </Row>

    </div>
  )
}

export default EcommerceDashboard
