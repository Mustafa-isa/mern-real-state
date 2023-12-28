import { Link } from 'react-router-dom' 
import {FaSearch} from 'react-icons/fa'
function Header() {
  return (
    <header className=' bg-slate-200 p-3 text-slate-800'>
    <div className='gap-2 flex items-center w-4/5 mx-auto justify-between'>
    <Link to='/'> 
    <h1 className='flex font-bold flex-wrap'>
        <span className=' text-slate-500'>Qena</span>
        <span>State</span>
      </h1> 
    </Link>

      <form className='flex items-center cursor-pointer bg-slate-50 p-1 rounded-sm' > 
        <input className=' bg-transparent focus:outline-none' type="text" placeholder='Search...'/>
        <FaSearch />
      </form> 
      <ul className='flex items-center gap-3'>
      <Link to='/'>
      <li className='hidden sm:inline hover:text-slate-500' >Home</li>
      </Link>
      <Link to='/about'>
      <li className='hidden sm:inline hover:text-slate-500'>About</li>
      </Link>
      <Link to='/sign-in'>
      <li className='  hover:text-slate-500'>Sign</li>
      </Link>
      </ul>
    </div>
    </header>
  )
}

export default Header