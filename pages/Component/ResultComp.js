import { useTheme } from 'next-themes'

import Image from 'next/image'
import CopyResult from './CopyResult';

function ResultComp({resData,thumbImage}) {
  const {theme,setTheme} = useTheme()

    return(
<div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12 align-middle  mt-10 ">
        <div className="relative block ml-4  rounded-lg 
        cursor-pointer
       ">
          <div className="flex">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={thumbImage? thumbImage:"https://res.cloudinary.com/mera-tender/image/upload/v1659645140/defaultLogo/download_ptwxbb.png"} alt={`No Image available`} className="w-full" />
          
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">{resData?.title}</h5>
            <p className=" mb-4">
              <small className='flex'>Published  by
                <a href="" className="ml-2 mr-2">{resData?.siteName}</a>
              <img src={resData?.favicons?.[0]} alt={`link favicon`} className="" />
                
                </small>
            </p>
            <p className="mb-4 pb-2">
          {resData?.description}
            </p>
            <a href={resData?.url} data-mdb-ripple="true" data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
        <div className='col-span-2 '>
        <h6 className="text-4xl md:text-6xl ml-4 font-bold">
          Data From the   <a className="text-blue-600" href={resData?.url}>
            Link
          </a>
        
        </h6>

          <div className="grid lg:grid-cols-2">
          <CopyResult
          myTitle={`Title`}
          value={resData?.title}
          />
          <CopyResult
          myTitle={`Description`}
          value={resData?.description}
          />
          <CopyResult
          myTitle={`Url Searched`}
          value={resData?.url}
          />
          <CopyResult
          myTitle={`Site Name`}
          value={resData?.siteName}
          />
          <CopyResult
          myTitle={`Link Type`}
          value={resData?.mediaType}
          />
          <CopyResult
          myTitle={`Content Type`}
          value={resData?.contentType}
          />
          <CopyResult
          myTitle={`Image`}
          value={resData?.images?.[0]}
          />
          <CopyResult
          myTitle={`Videos`}
          value={resData?.videos?.[0]}
          />
          <CopyResult
          myTitle={`Favicons`}
          value={resData?.favicons?.[0]}
          />
       
    
          </div>
   

        </div>

      </div>
)
}

export default ResultComp;