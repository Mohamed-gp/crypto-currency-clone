import React, { useContext, useEffect, useState } from 'react'
import cryptocontext from '../context/cryptocontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Slider = () => {
    const { loading, Data } = useContext(cryptocontext)
    const [sliderindex, setsliderindex] = useState(0)
    const [sliderData, setsliderData] = useState([])

    useEffect(() => {
        if (Data) {
            setsliderData(Data.slice(0, 10))

        }

    }, [Data])
    useEffect(() => {

        if (sliderData.length != 0) {

            setInterval(() => {
                if (sliderindex <= sliderData.length) {
                    console.log(`slider index : ${sliderindex}`)
                    setsliderindex(sliderindex + 1)
                    console.log(`slider data length : ${sliderData.length}`)
                }

            }, 3000);



        }

    }, [sliderData,sliderindex])
    return (
        <>
            <p className='text-center font-bold '></p>
            <div className='container px-4 relative h-32  overflow-hidden'>
                <div className="slider-wraper absolute h-full  flex rounded-3xl duration-1000" style={{ width: `${300 * sliderData.length}px`, background: "red", left: `${-sliderindex * 200}px` }}>

                    {sliderData.map(e =>
                        <div className='flex py-2 flex-col items-center' style={{ width: "300px" }}>
                            <p>{e.name}</p>
                            <img src={`${e.image}`} alt={`${e.name}`} className='w-16' />
                        </div>
                    )}
                </div>
                <button disabled={sliderindex == 0} onClick={() => { setsliderindex(e => e - 1) }} className="disabled:opacity-50 cursor-pointer left-4 absolute flex justify-center items-center top-1/2 -translate-y-1/2 w-8 text-xl h-8 rounded-full text-white bg-green-600">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button disabled={sliderindex == (sliderData.length)} onClick={() => { setsliderindex(e => e + 1) }} className='disabled:opacity-50 cursor-pointer  justify-center  absolute w-8 h-8 rounded-full top-1/2 right-4 -translate-y-1/2 bg-green-600 text-white text-xl items-center flex '>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>
        </>
    )
}

export default Slider