import logo from '../../assets/logo.svg'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <header className='flex bg-white items-center justify-between py-6 px-10'>
      <div className='flex'>
        <img className='mr-2.5' src={logo} alt="logo Bookverse" />
        <p className='text-3xl'><strong>Book</strong>Verse</p>
      </div>
        <Navbar/>
    </header>
  )
}

export default Header