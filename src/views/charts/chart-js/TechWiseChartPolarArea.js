// ** Third Party Components
import { PolarArea } from 'react-chartjs-2'
import { MoreVertical } from 'react-feather'

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const TechWiseChartPolarArea = props => {
  // ** Props
  const { lineChartPrimary, blueLightColor, primaryColorShade, blueColor, labelColor, greyColor, yellowColor, infoColorShade, successColorShade } = props

  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45
      }
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  // ** Chart Data
  const data = {
    labels: ['Networking', 'Software Engineer', 'Mobile Apps Developer', 'Games Developer', 'QA Tester', 'Frontend Developer', 'Backend Developer',  'Fullstack Developer', 'Others'],
    datasets: [
      {
        borderWidth: 0,
        label: 'Population (millions)',
        data: [85, 65, 50, 52, 49, 100, 92, 78, 60],
        backgroundColor: [lineChartPrimary, blueLightColor, primaryColorShade, blueColor, labelColor, greyColor, yellowColor, infoColorShade, successColorShade]
      }
    ]
  }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Job Holder Skills</CardTitle>
        <UncontrolledDropdown>
          <DropdownToggle className='cursor-pointer' tag='span'>
            <MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className='w-100'>Last 28 days</DropdownItem>
            <DropdownItem className='w-100'>Last Month</DropdownItem>
            <DropdownItem className='w-100'>Last Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <div style={{ height: '350px' }}>
          <PolarArea data={data} options={options} height={350} />
        </div>
      </CardBody>
    </Card>
  )
}

export default TechWiseChartPolarArea
