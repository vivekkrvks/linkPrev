import { useTheme } from 'next-themes'
import React, { useRef, useState } from 'react';
import Image from 'next/image'

function CopyResult({myTitle,value}) {
  const {theme,setTheme} = useTheme()
  const [copySuccess, setCopySuccess] = useState('Copy');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('Copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    // e.target.focus();
    setCopySuccess('Copied!');
    setTimeout(setCopySuccess('Copy'), 3000);
  };
    return(
<div className="grid  gap-6 xl:gap-x-12 align-middle mt-5  ml-2 bg-red w-full">
<div class="flex justify-center ">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <h3>{myTitle}</h3>
      <input type="search" ref={textAreaRef} value={value} class="form-control shadow-2xl relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
      </input>
      <button 
      onClick={() => {copyToClipboard()}}
      class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
       {copySuccess}
      </button>
    </div>
  </div>
</div>
      </div>
)
}

export default CopyResult;