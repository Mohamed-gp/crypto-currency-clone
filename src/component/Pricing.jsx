import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Pricing = () => {
    const [pricing, setpricing] = useState("Monthly")
    return (
        <>
            <div className="container p-4" id='pricing'>

                <p className='text-center text-2xl text-white mt-10 lg:text-6xl  sm:text-1xl xl:text-6xl'>OUR <span className='bg-gradient-to-b bg-transparent  bg-clip-text  mt-2 from-[#2600fc] to-[#ff00ea] text-transparent
  -webkit-background-clip: text'>PRICING</span></p>
                <p className='text-white text-lg  text-center mt-3'>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
                <div className='chosing-pricing w-fit mx-auto bg-white items-center flex justify-center mt-14 mb-10 gap-4 rounded-2xl'>
                    <p className={`${pricing == "Monthly" ? "bg-[#9333EA] text-white" : ""} rounded-2xl h-full py-2 px-3  cursor-pointer`} onClick={() => {setpricing("Monthly")}}>Montlhy</p>
                    <p className={`${pricing == "Yearly" ? "bg-[#9333EA] text-white" : ""} rounded-2xl h-full py-2 px-10  cursor-pointer`}  onClick={() => {setpricing("Yearly")}}>Yearly</p>
                </div>
                <div className="pricing-container gap-5 md:gap-0 flex md:flex-row flex-col items-center justify-center">
                    <div style={{height : "370px"}} className='bg-white  w-72 px-4 py-3 rounded-xl md:rounded-none md:rounded-l-xl'>
                        <p><span className='text-[#231D4F] text-3xl font-bold'>{pricing == "Monthly" ?  "$19" : "$220"}</span> /month</p>
                        <p className='text-[#231D4f] font-bold text-3xl'>Starter</p>
                        <p>Unleash the power of automation
                            with strong bench press</p>
                        <ul className='mt-6 mb-2'>
                            <li className='flex gap-2 items-center'>
                                <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                        </ul>
                        <button className='w-full py-2 mt-4 rounded-3xl bg-[#867e9c]  duration-300 hover:bg-[#ae9fd8]'>Choose plan</button>
                    </div>
                    <div style={{height : "370px"}} className='bg-white rounded-xl md:rounded-none w-72 px-4 py-3'>
                        <p><span className='text-[#231D4F] text-3xl font-bold'>{pricing == "Monthly" ? "$54" : "$620"}</span> /month</p>
                        <p className='text-[#231D4f] font-bold text-3xl'>Professional</p>
                        <p>Unleash the power of automation
                            with strong bench press</p>
                        <ul className='mt-6 mb-2'>
                            <li className='flex gap-2 items-center'>
                                <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                        </ul>
                        <button className='w-full py-2 mt-4 rounded-3xl bg-[#867e9c]  duration-300 hover:bg-[#ae9fd8]'>Choose plan</button>
                    </div>
                    <div style={{height : "410px"}} className='bg-[#231D4F] rounded-xl text-white w-80 flex flex-col justify-center  px-4 py-3 rounded-l-xl'>
                        <p><span className=' text-3xl font-bold'>{pricing == "Monthly" ? "$89" : "$1020"}</span> /month</p>
                        <p className=' font-bold text-3xl'>Company</p>
                        <p>Unleash the power of automation
                            with strong bench press</p>
                        <ul className='mt-6 mb-2'>
                            <li className='flex gap-2 items-center'>
                                <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 my-1 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                            <li className='flex gap-2 items-center'>
                            <FontAwesomeIcon className='bg-[#DACEE2] text-[#BB6BD9] rounded-full w-4 p-1 h-4' icon={faCheck} />
                                <p>Multi-step Zaps</p>
                            </li>
                        </ul>
                        <button className='w-full py-2 mt-4 rounded-3xl bg-[#ab8dff]  duration-300 hover:bg-[#8b61ff]'>Choose plan</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pricing