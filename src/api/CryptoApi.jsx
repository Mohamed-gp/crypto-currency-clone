import React, { Children, useEffect, useState } from 'react'
import cryptocontext from '../context/cryptocontext'

const CryptoApi = ({ children }) => {
    const [loading, setloading] = useState(true)
    const [money, setmoney] = useState("usd")
    const [Data,setData] = useState(null)
    

    useEffect(() => {
        const getData = async (url) => {
            fetch(url)
            .then((res) => res.json())
            .then(res => {
                setData(res)
            }) 
            
            .catch(() => {
                console.log("error with fetching api")
            })
            
        }
    
        getData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    },[]) 


  return (
        <cryptocontext.Provider value={{ money, setmoney, loading,Data}}>
            {children}
        </cryptocontext.Provider>
    )
}

export default CryptoApi