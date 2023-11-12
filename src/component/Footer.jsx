import { faFacebook, faInstagram, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='mt-20' style={{height: "400px",backgroundImage : `url("/assets/imgs/golden-coin.png")`,backgroundRepeat: "no-repeat",backgroundPosition : "bottom"}} >
            <div className="container">
                <div className='flex justify-center gap-4 '>
                    <a target="_blank"  href="https://github.com/Mohamed-gp">
                        <FontAwesomeIcon className='text-black w-8 h-8 p-2 rounded-lg bg-white cursor-pointer' icon={faInstagram} />

                    </a>
                    <a target="_blank"  href="https://github.com/Mohamed-gp">
                        <FontAwesomeIcon className='text-black w-8 h-8 p-2 rounded-lg bg-white cursor-pointer' icon={faX} />

                    </a>
                    <a  target="_blank" href="https://github.com/Mohamed-gp">

                        <FontAwesomeIcon className='text-black w-8 h-8 p-2 rounded-lg bg-white cursor-pointer' icon={faLinkedin} />
                    </a>
                    <a  target="_blank" href="https://github.com/Mohamed-gp">
                        <FontAwesomeIcon className='text-black w-8 h-8 p-2 rounded-lg bg-white cursor-pointer' icon={faFacebook} />

                    </a>
                </div>
                <div className='text-white flex justify-center gap-5 my-10'>
                    <a href='market' className='text-xl' >Market</a>
                    <a href='pricing' className='text-xl'>Pricing</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer