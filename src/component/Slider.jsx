import React, { useContext, useEffect, useState } from 'react'
import cryptocontext from '../context/cryptocontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Slider = () => {
    const { loading, Data } = useContext(cryptocontext)
    const [sliderindex, setsliderindex] = useState(0)
    const [sliderData, setsliderData] = useState([])

    const {moneysymbole} = useContext(cryptocontext)
    useEffect(() => {
        if (Data) {
            setsliderData(Data.slice(0, 10))

        }

    }, [Data])

    useEffect(() => {

    }, [sliderindex])

    const changeurl = (id) => {
        location.pathname = `coins/${id}`
    }

    return (

        <>
            <p className='text-center font-bold mt-8 text-white mb-6 text-3xl'>Track Your Money In Our Website</p>

            {sliderData.length == 0 ?
                <div className='flex justify-center items-center'>
                    <span className='w-20 h-20 border-transparent rounded-full border-r-white border-8 my-20 animate-spin'>

                    </span>
                </div>
                :
                <div className='container px-4 relative h-32  mb-20 overflow-hidden'>
                    <div className="slider-wraper text-white absolute h-full flex rounded-3xl duration-1000" style={{ width: `${300 * sliderData.length}px`, left: `${-sliderindex * 200}px` }}>

                        {sliderData.map((e,id) =>
                            <div key={e.id} className='flex py-2 gap-1 flex-col items-center' style={{ width: "300px" }} onClick={() => {changeurl(id)}}>
                                <p className='font-bold'>{e.name}</p>
                                <img src={`${e.image}`} alt={`${e.name}`} className='w-16' />
                                <p className='font-bold'>{moneysymbole} {e.current_price}</p>
                            </div>
                        )}
                    </div>
                    <button disabled={sliderindex == 0} onClick={() => { setsliderindex(e => e - 1) }} className="disabled:opacity-50 cursor-pointer left-4 absolute flex justify-center items-center top-1/2 -translate-y-1/2 w-8 text-xl h-8 rounded-full text-white bg-green-600">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button disabled={sliderindex == (sliderData.length + 3)} onClick={() => { setsliderindex(e => e + 1) }} className='disabled:opacity-50 cursor-pointer  justify-center  absolute w-8 h-8 rounded-full top-1/2 right-4 -translate-y-1/2 bg-green-600 text-white text-xl items-center flex '>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                </div>
            }

        </>
    )
}

export default Slider