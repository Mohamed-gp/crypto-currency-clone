import React, { useContext, useEffect } from 'react'
import cryptocontext from '../context/cryptocontext'

const Coindescription = ({ data, id }) => {

    const {moneysymbole} = useContext(cryptocontext)
    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <img src={data[id].image} className='w-32 mb-4' />
                <p className='font-bold text-3xl'>{data[id].name}</p>
                <p className='text-center text-xl'>{moneysymbole} {data[id].current_price.toFixed(2)}</p>
                <p className={`${data[id].price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"} text-center`}> {(data[id].price_change_percentage_24h).toFixed(2)}%</p>
                <p className='rounded-r-2xl text-right pr-4 text-lg'>{moneysymbole} {data[id].market_cap}</p>
            </div>

        </>




    )
}

export default Coindescription