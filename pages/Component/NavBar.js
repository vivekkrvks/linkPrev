import { useTheme } from 'next-themes'
import { FcIdea } from "react-icons/fc";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import Image from "next/image";
import { useRouter } from 'next/router'

function Header() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();
  const searchData1 = "https://www.indiatoday.in/science/story/super-earth-with-possibility-for-life-discovered-1983719-2022-08-04"
  const searchData2 = "https://youtu.be/7V5wAKzesO0"
  const sample1 = (searchData) => {
    router.push({
        pathname: '/SearchResult',
        query: {
            searchData
        }
    })
}
  const sample2 = (searchData) => {
    router.push({
        pathname: '/SearchResult',
        query: {
            searchData
        }
    })
}

    return(
        <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">         
          </div>
          <div className="navbar-collapse relative flex collapse grow items-center" id="navbarSupportedContentY">

            <ul className="navbar-nav mr-auto flex lg:flex lg:flex-row">
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out"  onClick={() => router.push(`/`)} data-mdb-ripple="true" data-mdb-ripple-color="light">Home Page</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" onClick={() => sample1(searchData1)}href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Sample 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" onClick={() => sample2(searchData2)}href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Sample 2</a>
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