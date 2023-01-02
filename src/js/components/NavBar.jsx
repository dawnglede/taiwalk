import Logo from '../../assets/image/Logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar container'>
      <div className='navbar__logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <div className='navbar__link'>
        <Link>探索景點</Link>
        <Link>節慶活動</Link>
        <Link>品嘗美食</Link>
      </div>
    </div>
  )
}

export default NavBar