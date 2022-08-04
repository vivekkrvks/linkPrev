import { useTheme } from 'next-themes'

import Image from 'next/image'

function Footer() {
  const {theme,setTheme} = useTheme()

    return(
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
)
}

export default Footer;