import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Coindescription from './Coindescription'
import Coinchart from './Coinchart'
import cryptocontext from '../context/cryptocontext'

const Coin = () => {
    const { id } = useParams()

    const { moneysymbole } = useContext(cryptocontext)


    const [data, setdata] = useState(null)

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then((res) => res.json())
            .then(res => setdata(res))

    }, [data])


    return (
        <>
            <div className='container p-4 '>

                {data != null ?
                    <div className='p-4 items-center flex justify-center gap-32 text-white flex-col md:flex-row'>
                        <Coindescription data={data} id={id} />
                        {/* i will back one day when the api stable */}
                        {/* <Coinchart data={data} id={id} /> */}
                    </div>
                    :
                    <div className='h-96 flex justify-center items-center'>

                        <div className='flex mx-auto justify-center border-transparent border-t-white border-8 w-20 h-20 rounded-full animate-spin'>

                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default Coin