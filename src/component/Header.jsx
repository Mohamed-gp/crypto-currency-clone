import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import cryptocontext from '../context/cryptocontext'

const Header = () => {
    const header = useRef(null)
    window.onscroll = () => {
        scrollY > 5 ? header.current.classList.add("shadow-2xl", "bg-[#120644]", "box-shadow") : header.current.classList.remove("bg-red-500", "shadow-2xl", "bg-[#120644]", "box-shadow")
    }
    // money type
    const { money,setmoney } = useContext(cryptocontext)
    const changecurrency = (e) => {
        setmoney(e.currentTarget.value)
    }

    // toogle and menu
    const [toogle, settoogle] = useState(false)
    const menu = useRef(null)

    const tooglehandler = (e) => {
        settoogle(!toogle)
        if (menu.current.classList.contains("-top-48")) {
            menu.current.classList.add("top-full", "opacity-100")
            menu.current.classList.remove("-top-48", "opacity-0")
        }
        else {
            menu.current.classList.add("-top-48", "opacity-0")
            menu.current.classList.remove("top-full", "opacity-100")
        }
    }

    return (
        <header ref={header} className={`text-white sticky top-0 z-50 py-4 `}>
            <div className="container flex p-4  justify-between items-center">
                <Link to="/" className="self-start text-xl sm:text-3xl font-bold">BUY2COIN</Link>
                <nav ref={menu} className='z-30 menu absolute w-full duration-1000 opacity-0 md:opacity-100  left-0 -top-48 text-black md:text-white px-10 py-5 md:p-0 bg-white md:bg-transparent md:w-auto md:static md:block'>
                    <ul className='flex-col md:flex-row flex gap-5 text-lg sm:text-xl '>
                        <li>
                            <a href="/#market">Market</a>
                        </li>
                        <li>
                            <a href='/#pricing'>Pricing</a>
                        </li>
                    </ul>
                </nav>
                <select className='bg-[#26272b] focus:outline-none rounded-lg py-1 px-2' onChange={(e) => changecurrency(e)}>
                    <option value="usd" defaultValue={money == "usd"}>USD</option>
                    <option value="eur" defaultValue={money == "eur"}>EUR</option>
                </select>
                {toogle == false ? <FontAwesomeIcon onClick={(e) => { tooglehandler(e) }} icon={faBars} className='md:hidden cursor-pointer text-xl ' /> : <FontAwesomeIcon onClick={(e) => { tooglehandler(e) }} icon={faX} className=' text-xl md:hidden cursor-pointer' />}
            </div>
        </header>
    )
}

export default Header