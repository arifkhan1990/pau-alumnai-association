// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { GitHub, Youtube, Twitter, Facebook, Linkedin, Star } from 'react-feather'

const AvatarCompanySocialIcon = () => {
  return (
    <div className='demo-inline-spacing avatarIcon'>
      <Avatar className ="company-avatar" color='light-warning' icon={<Linkedin size={14} />} />
      <Avatar className ="company-avatar" color='light-info' icon={<Facebook size={14} />} />
      <Avatar className ="company-avatar" color='info' icon={<Twitter size={14} />} />
    </div>
  )
}
export default AvatarCompanySocialIcon
