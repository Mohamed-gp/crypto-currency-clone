import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [toogle,settoogle] = useState(false)
    const menu = useRef(null)

    const tooglehandler = (e) => {
        settoogle(!toogle)
        if (menu.current.classList.contains("-top-48")) {
            menu.current.classList.add("top-full","opacity-100")
            menu.current.classList.remove("-top-48","opacity-0")
        }
        else{
            menu.current.classList.add("-top-48","opacity-0")
            menu.current.classList.remove("top-full","opacity-100")
        }
    }  

    return (
        <header className='text-white relative py-4'>
            <div className="container flex p-4 justify-between items-center">
                <Link to="/" className="self-start text-xl sm:text-3xl font-bold">BUY2COIN</Link>
                <nav ref={menu} className='menu absolute w-full duration-1000 opacity-0 md:opacity-100  left-0 -top-48 text-black md:text-white px-10 py-5 md:p-0 bg-white md:bg-transparent md:w-auto md:static md:block'>
                    <ul className='flex-col md:flex-row flex gap-5 text-lg sm:text-xl '>
                        <li>
                            <Link>Market</Link>
                        </li>
                        <li>
                            <Link>Pricing</Link>
                        </li>
                    </ul>
                </nav>
                <select className='bg-[#26272b] focus:outline-none rounded-lg py-1 px-2'>
                    <option className='h' value="usd">USD</option>
                    <option className='' value="eur">EUR</option>
                </select>
                {toogle == false ? <FontAwesomeIcon onClick={(e) => {tooglehandler(e)}} icon={faBars} className='md:hidden cursor-pointer text-xl '/> : <FontAwesomeIcon onClick={(e) => {tooglehandler(e)}} icon={faX} className=' text-xl md:hidden cursor-pointer'/> }
            </div>
        </header>
    )
}

export default Header