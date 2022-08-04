import { useTheme } from 'next-themes'
import { FcIdea } from "react-icons/fc";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";

function Header() {
  const {theme,setTheme} = useTheme()

    return(
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
)
}

export default Header;