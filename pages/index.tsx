import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FcIdea } from "react-icons/fc";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { FcSearch } from "react-icons/fc";
const Home = () => {
  const {theme,setTheme} = useTheme()
  return (
    <>
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">         
        </div>
        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
          <ul className="navbar-nav mr-auto flex lg:flex lg:flex-row">
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Qualifier</a>
            </li>
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Vivek</a>
            </li>
           
          </ul>
        </div>
      </div>
      <div className='mx-8  h-10 aligin-item'
       onClick={() => setTheme(theme ==='light'?'dark':'light')}
      >
      {
      theme === 'light' ?
       <FcIdea className='w-10 h-10'/>:
       <WiMoonAltWaningCrescent5 className='w-10 h-10' />
       }
        
        
      </div>
  

    </nav>
    {/* <!-- Navbar --> */}
    <div className="flex w-screen h-screen flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            LinkPrev
          </a>
        </h1>
     
  {/* middle */}
  <div className="  py-10">
  <div className="mb-3 xl:w-96">
    <div className="flex items-center border-2 
    rounded-full py-2
    shadow-sm ">
      <input type="search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-grey-600
    placeholder-grey-400" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn  inline-flex
     h-8 bg-red-400
    text-white rounded-full
    p-2 cursor-pointer mx-2" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
  {/* middle */}
 


      <footer className="flex h-24 w-full items-center my-10 justify-center border-t">
        <a
          className="flex items-center gap-2"
          href="https://www.findcoder.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="font-poppins text-2xl font-normal text-[#2D88E2]">
          {/* <Image src="/findCoder.svg" alt="Find Coder Logo" width={72} height={16} /> */}
          FindCoder.io</span>
        </a>
      </footer>
    </div>
    </>
  )
}

export default Home
