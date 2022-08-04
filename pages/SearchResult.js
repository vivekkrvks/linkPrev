import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import NavBar from "./Component/NavBar"
import Footer from "./Component/Footer"
import ResultComp from "./Component/ResultComp"
import CopyResult from "./Component/CopyResult"
import { useRouter } from 'next/router'
import axios from "axios";

const SearchResult = () => {  
  const {theme,setTheme} = useTheme()
  const router = useRouter();
    const { searchData } = router.query;
    const [resData,setResData] = useState({})
    useEffect(() => {
      getData("");
    }, []);
    const getData = async () => {    
let data = {link:"https://www.aajtak.in/world/story/taiwan-china-fight-missile-fire-america-tension-ntc-1512550-2022-08-04"}
      await axios
        .post(`https://searchkarna.com/api/v1/addition/linkPrev/linkData`,data)
        .then((res) => (setResData(res.data)))
        .catch((err) => console.log(err));
      console.log(resData)
    };
  return (
    <>
    {/* <!-- Navbar --> */}
    <NavBar />
    {/* <!-- Navbar --> */}
    <div className="bg-green-100 flex rounded-lg py-5 px-6 m-2 text-base text-green-700 " role="alert">
      <div class="flex space-x-2 justify-center">
  <div>
    <button type="button" class="inline-block mr-4 px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
        class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
        </path>
      </svg>
      Go Back
    </button>
  </div>
</div>
  Below is the result 
</div>
<div className="flex">

<ResultComp 
resData={resData}
thumbImage={resData?.images?.[0]}
/>
  {/* middle */}
  
  {/* prev */}

  {/* prev */}
 

     
    </div>

    <Footer />

    </>
  )
}

export default SearchResult
