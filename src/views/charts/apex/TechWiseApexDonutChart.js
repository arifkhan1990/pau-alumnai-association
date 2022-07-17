// ** Third Party Components
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const TechWiseApexDonutChart = () => {
  const donutColors = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
    series6: '#5D6D7E',
    series7: '#EB984E',
    series8: '#EC7063',
    series9: '#A569BD'
  }

  // ** Chart Options
  const options = {
    legend: {
      show: true,
      position: 'bottom'
    },
    labels: ['Networking', 'Software Engineer', 'Mobile Apps Developer', 'Games Developer', 'QA Tester', 'Frontend Developer', 'Backend Developer',  'Fullstack Developer', 'Others'],

    colors: [donutColors.series1, donutColors.series2, donutColors.series3, donutColors.series4, donutColors.series5, donutColors.series6, donutColors.series7, donutColors.series8, donutColors.series9],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Networking',
              formatter() {
                return '31%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  // ** Chart Series
  const series = [85, 16, 50, 50, 22, 117, 22, 18, 20]

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Technology Ratio
          </CardTitle>
          <CardSubtitle className='text-muted'>Technology wise Primeasian ratio</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='donut' height={350} />
      </CardBody>
    </Card>
  )
}

export default TechWiseApexDonutChart
