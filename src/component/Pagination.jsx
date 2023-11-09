import React, { useState } from 'react'
import { useContext } from 'react'
import cryptocontext from '../context/cryptocontext'

// const { loading, Data } = useContext(cryptocontext)







// const [pageindex,setpageindex] = useState(1) 

// const [paginationData,setpaginationData] = useState(Data)


// const currentpageitems = 14
// const pages = paginationData.length / currentpageitems



const Pagination = () => {

    //  get the data from the context with 100 data 
    const {Data} = useContext(cryptocontext)


    // save the data in pagination data 
    
    const [paginationData,setpaginationData]  = useState(Data)



    console.log(paginationData)

    

    console.log(paginationData)
    return (
        <div className="container px-4">
            <div className='search flex flex-col gap-2'>
                <p className='text-white font-bold text-lg '>MARKET STATUS</p>
                <input placeholder="Search For A Crypto Currency" type="text" className='w-full py-2 pl-7 focus:outline-none' />
            </div>
            <div>
                <table className='text-white w-full'>
                    <thead>
                        <tr className='text-center'>
                            <td className='text-left'>#</td>
                            <td>Coin</td>
                            <td>Price</td>
                            <td>24h</td>
                            <td className='text-right'>Market Cap</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Pagination