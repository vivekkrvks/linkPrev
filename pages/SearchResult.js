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
let data = {link:searchData}
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
    
  Below is the result for {searchData}
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
