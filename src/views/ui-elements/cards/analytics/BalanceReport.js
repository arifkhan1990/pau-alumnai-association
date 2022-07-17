// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'

const BalanceReport = props => {
  // ** State
  const [data, setData] = useState(null)
  const [dropdownData, setDropdwonData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue').then(res => setData(res.data))
  }, [])

  useEffect(() => {
    axios.get('/card/card-analytics/revenue-report').then(res => setDropdwonData(res.data))
    return () => setDropdwonData(null)
  }, [])

  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      type: 'line',
      offsetX: -10
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 12],
      width: [4, 3]
    },
    legend: {
      show: false
    },
    colors: ['#d0ccff', '#ebe9f1'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        inverseColors: false,
        gradientToColors: [props.primary, '#ebe9f1'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#b9b9c3',
          fontSize: '1rem'
        }
      },
      axisTicks: {
        show: false
      },
      categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
      axisBorder: {
        show: false
      },
      tickPlacement: 'on'
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        style: {
          colors: '#b9b9c3',
          fontSize: '1rem'
        },
        formatter(val) {
          return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
        }
      }
    },
    grid: {
      borderColor: '#e7eef7',
      padding: {
        top: -20,
        bottom: -10,
        left: 20
      }
    },
    tooltip: {
      x: { show: false }
    }
  },
  series = [
    {
      name: 'This Month',
      data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
    },
    {
      name: 'Last Month',
      data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
    }
  ]

  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2]
      },
      colors: [props.primary, '#dcdae3'],
      tooltip: {
        enabled: false
      }
    }

  return data !== null ? (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper-2' md='8' xs='12'>
                <CardHeader>
                    <CardTitle tag='h4'>Balance Report</CardTitle>
                    {/* <Settings size={18} className='text-muted cursor-pointer' /> */}
                </CardHeader>
                    <Chart options={options} series={series} type='line' height={220} />
        </Col>
        <Col className='budget-wrapper-2' md='4' xs='12'>
          <UncontrolledButtonDropdown>
          <Card>
                <CardBody>
                    <div className='d-flex justify-content-start mb-1'>
                    <div className='me-1'>
                        <CardText className='mb-50'>This Month</CardText>
                        <h3 className='fw-bolder'>
                        <sup className='font-medium-1 fw-bold me-25'>$</sup>
                        <span className='text-primary'>86,589</span>
                        </h3>
                    </div>
                    <div>
                        <CardText className='mb-50'>Last Month</CardText>
                        <h3 className='fw-bolder'>
                        <sup className='font-medium-1 fw-bold me-25'>$</sup>
                        <span>73,683</span>
                        </h3>
                    </div>
                    </div>
                </CardBody>
            </Card>
            {/* <DropdownToggle className='budget-dropdown' outline color='primary' size='sm' caret>
              2020
            </DropdownToggle>
            <DropdownMenu>
              {dropdownData && dropdownData.years.map(item => (
                <DropdownItem className='w-100' key={item}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu> */}
          </UncontrolledButtonDropdown>
          <div className='d-flex justify-content-center'>
            <span className='fw-bolder me-25'>Balance:</span>
            <span className='mb-25'>${dropdownData && dropdownData.price}</span>
          </div>
          <div className='d-flex justify-content-center mb-2'>
            <span className='fw-bolder me-25'>Expense:</span>
            <span>${dropdownData && dropdownData.budget}</span>
          </div>
          <Chart id='budget-chart' type='line' height='80' options={budgetOptions} series={budgetSeries} />

          <Button color='primary' className='mt-2'>Pay Monthly Fee</Button>
        </Col>
      </Row>
    </Card>
  ) : null
}

export default BalanceReport
