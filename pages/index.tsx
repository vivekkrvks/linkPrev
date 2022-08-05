import { useState } from "react";
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FcIdea } from "react-icons/fc";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { FcSearch } from "react-icons/fc";

import NavBar from "./Component/NavBar"
import Footer from "./Component/Footer"
import { useRouter } from 'next/router'
var validUrl = require('valid-url');
const Home = () => {
  const {theme,setTheme} = useTheme()
  const [searchData, setSearchData] = useState("");

  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const search = () => {
      router.push({
          pathname: '/SearchResult',
          query: {
              searchData
          }
      })
  }
  const handleSubmit = () => {
    console.log(searchData)

    if (validUrl.isUri(searchData)){
      console.log('Looks like an URI');
      search()
  } else {
    setShowError(true);
  }
  }

  return (
    <>
    {/* <!-- Navbar --> */}
    <NavBar 
    isHomePage={true}
    />
    {/* <!-- Navbar --> */}
    <div className="flex w-screen h-screen flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="vivek.org.in">
            LinkPrev
          </a>
        </h1>
     
  {/* middle */}
  <div className="  py-10">
  <div className="mb-3 xl:w-96">
    <div className="flex items-center border-2 
    rounded-full py-2
    border-rose-400
    shadow-lg ">
      <input type="search" value={searchData} onChange={e => (setSearchData(e.target.value),setShowError(false))} className="flex-grow pl-5 bg-transparent outline-none text-sm text-grey-600
    placeholder-grey-400" placeholder="Enter the link to Search" aria-label="Search" aria-describedby="button-addon2" />
      <button 
      onClick={handleSubmit}
      className="btn  inline-flex
     h-8 bg-red-400
    text-white rounded-full
    p-2 cursor-pointer mx-2" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
 {showError && ( <div className="bg-red-100 rounded-lg py-5 px-6  text-base text-red-700 " role="alert">
  Invalid Link - Check the Link again
</div>)}
</div>

  {/* middle */}
 
    <Footer />

     
    </div>
    </>
  )
}

export default Home
