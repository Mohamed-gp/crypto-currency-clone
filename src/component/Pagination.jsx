import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import cryptocontext from '../context/cryptocontext'






const Pagination = () => {

    //  get the data from the context with 100 data 
    const { Data } = useContext(cryptocontext)

    // save the data in pagination data 

    const [paginationData, setpaginationData] = useState([])

    const [currentPage, setcurrentPage] = useState(1)

    const elementsPage = 14
    const firstIndex = currentPage * elementsPage - elementsPage
    const finalIndex = currentPage * elementsPage

    const [emptyarray, setemptyarray] = useState([])

    // to verify for the pagination idex pages 
    const [fullarray,setfullarray] = useState(false)


    useEffect(() => {
        if (Data) {


            const pagesnumber = Math.ceil(Data.length / elementsPage)
            
            if (!fullarray) {
                for (let i = 1; i < pagesnumber; i++) {
                    console.log(emptyarray)
                    
                    setemptyarray(prev => [...prev, i])
    
                }
                setfullarray(!fullarray)
            }
           


        }
    }, [Data])

    useEffect(() => {
        if (Data) {
            setpaginationData(Data.slice(firstIndex, finalIndex))

        }
    }, [Data])






    return (
        <div className="container px-4">
            <div className='search flex flex-col gap-2'>
                <p className='text-white font-bold text-lg '>MARKET STATUS</p>
                <input placeholder="Search For A Crypto Currency" type="text" className='w-full py-2 pl-7 focus:outline-none' />
            </div>
            <div className='my-5'>
                <table className='text-white w-full' cellSpacing={100}>
                    <thead>
                        <tr className='text-center py-3 px-2 rounded-xl overflow-hidden'>
                            <td className='rounded-l-2xl pl-4 text-left'>#</td>
                            <td>Coin</td>
                            <td>Price</td>
                            <td>24h</td>
                            <td className='rounded-r-2xl text-right pr-4'>Market Cap</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {paginationData.length > 1 ? paginationData.map((e, i) =>
                            <tr key={e.id} className='hover:scale-105 duration-500 cursor-pointer'>
                                <td className='rounded-l-2xl text-left pl-4'>{i + 1}</td>
                                <td className='text-center ' ><div className='flex items-center justify-center gap-2'><img src={`${e.image}`} className='w-6' alt="" />{e.name}</div></td>
                                <td className='text-center'>$ {e.current_price}</td>
                                <td className='text-center'>$ {e.price_change_percentage_24h}</td>
                                <td className='rounded-r-2xl text-right pr-4'>$ {e.market_cap}</td>
                            </tr>
                        ) : <></>}
                    </tbody>
                </table>
                <div className='my-5 flex justify-center'>
                    {emptyarray.length > 2 ? emptyarray.map(e => {
                        return(<button className='w-9 text-white bg-[#26262B] h-9 rounded-full mx-1 flex justify-center items-center'>{e}</button>)
                    }): <></>}
                </div>
            </div>
        </div>
    )
}

export default Pagination