import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Coin = () => {
    const { id } = useParams()


    // useEffect(() => {
    //     fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&}&days=7")
    //             .then((res) => res.json())
    //             .then(res => 
    //                 console.log(res)
    //             )

        

    // }, [])


    return (
        <>
        </>
    )
}

export default Coin