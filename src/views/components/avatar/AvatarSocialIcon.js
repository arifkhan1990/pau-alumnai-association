// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { GitHub, Youtube, Twitter, Facebook, Linkedin, Star } from 'react-feather'

const AvatarSocialIcon = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-warning' icon={<Linkedin size={14} />} />
      <Avatar color='secondary' icon={<GitHub size={14} />} />
      <Avatar color='light-info' icon={<Facebook size={14} />} />
      
      <Avatar color='light-danger' icon={<Youtube size={14} />} />
      <Avatar color='info' icon={<Twitter size={14} />} />
    </div>
  )
}
export default AvatarSocialIcon
