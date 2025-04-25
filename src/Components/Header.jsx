import logo from '../assets/school_logo.png';
import avatar from '../assets/avatar.png';
import icon from '../assets/logout-icon.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
  }


  return (
    <div className="bg-primary w-full h-19 px-10 flex items-center">
      <div className='content flex justify-between w-full'>
        <div className="right flex items-center">
          <img src={logo} alt="logo" className='w-19'/>
        <div className='text-white text-lg ml-2'>
          <p className='font-headings'>Rosa L. Susano</p>
          <p className='font-headings'>Novaliches Elementary School</p>
        </div>
        </div>
        <div className='left flex items-center'>
          <img src={avatar} alt="avatar" className='w-15 h-15'/>
          <div className='mr-3'>
            <p className='text-white text-lg font-headings'>Michael Obidos</p>
            <p className='text-sm font-headings text-tertiary'>Teacher</p>
            
          </div>
          <img src={icon} alt="icon" className='w-8 h-8 ml-5 cursor-pointer' onClick={logout}/>
        </div>
      </div>
      
    </div>
  )
}

export default Header;