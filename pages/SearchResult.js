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
    const [loading,setLoading] = useState(false)
    useEffect(() => {
      getData("");
    }, []);
    const getData = async () => {  
      setLoading(true)  
let data = {link:searchData}
      await axios
        .post(`https://searchkarna.com/api/v1/addition/linkPrev/linkData`,data)
        .then((res) => (setResData(res.data)))
        .catch((err) => console.log(err));
        setLoading(false)  

    };
  return (
    <>
    {/* <!-- Navbar --> */}
    <NavBar 
    isHomePage={false}
    />
    {/* <!-- Navbar --> */}
    <div className="bg-green-100 flex rounded-lg py-5 px-6 m-2 text-base text-green-700 " role="alert">
    
  Below is the result for {searchData}
</div>
<div className="flex">

{(resData?.url )&&(<ResultComp 
resData={resData}
thumbImage={resData?.images?.[0]}
/>)}
{(loading)&&(<div class="flex justify-center items-center">
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>)}
{(!(resData?.url))&&(
  <div className='mt-10 mb-20 flex-col justify-center items-center'>
<h6 className="text-4xl md:text-6xl ml-4 font-bold">
          Sorry  Not able to get data from this link    <a className="text-blue-600" href={resData?.url}>
             Try Another Search
          </a>
        
        </h6></div>)}
  {/* middle */}
  
  {/* prev */}

  {/* prev */}
 

     
    </div>

    <Footer />

    </>
  )
}

export default SearchResult

