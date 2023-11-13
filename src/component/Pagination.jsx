import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import cryptocontext from '../context/cryptocontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'





const Pagination = ({ money }) => {


    //  get the data from the context with 100 data 
    const { Data, moneysymbole, setData } = useContext(cryptocontext)

    // save Data in data

    const [data, setdata] = useState(Data)
    // save the data in pagination data 


    const [paginationData, setpaginationData] = useState([])

    const [currentPage, setcurrentPage] = useState(1)

    const elementsPage = 14
    const firstIndex = currentPage * elementsPage - elementsPage
    const finalIndex = currentPage * elementsPage

    const [emptyarray, setemptyarray] = useState([])

    // to verify for the pagination idex pages 
    const [fullarray, setfullarray] = useState(false)


    useEffect(() => {
        if (data) {
            const pagesnumber = Math.ceil(data.length / elementsPage)

            setemptyarray([])
            for (let i = 1; i < pagesnumber; i++) {
                setemptyarray(prev => [...prev, i])

            }





        }
    }, [data])

    useEffect(() => {
        if (data) {
            setpaginationData(data.slice(firstIndex, finalIndex))

        }
    }, [data, currentPage])

    useEffect(() => {
        const input = document.querySelector("#inputfind")
        if (Data.length > 0 && data.length == 0 && input.value == "") {
            setdata(Data)
        }
    },[Data,data])




    //change url 
    const changeurl = (id) => {
        location.href = `coins/${id}`
    }



    const changedata = (e) => {
        setcurrentPage(1)
        const serbas = Data.filter(ele => ele.name.toLocaleLowerCase().includes(e.currentTarget.value.toLocaleLowerCase()))
        setdata(serbas)
    }

    return (
        <div className="container px-4 " id='market'>
            <div className='search flex flex-col gap-2'>
                <p className='text-white font-bold text-lg '>MARKET STATUS</p>
                <input id='inputfind' placeholder="Search For A Crypto Currency" type="text" className='w-full py-2 pl-7 focus:outline-none' onInput={(e) => { changedata(e) }} />
            </div>
            <div className='my-5'>
                <table className='text-white w-full text-xs sm:text-lg' cellSpacing={100}>
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
                            <tr key={e.id} className='hover:scale-105 duration-500 cursor-pointer' onClick={() => { changeurl(i) }}>
                                <td className='rounded-l-2xl text-left pl-4'>{i + 1}</td>
                                <td className='text-center ' ><div className='flex items-center justify-center gap-2'><img src={`${e.image}`} className='w-6' alt="" />{e.name}</div></td>
                                <td className='text-center'>{moneysymbole} {e.current_price.toFixed(2)}</td>
                                <td className={`${e.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"} text-center`}> {(e.price_change_percentage_24h).toFixed(2)}%</td>
                                <td className='rounded-r-2xl text-right pr-4'>{moneysymbole} {e.market_cap}</td>
                            </tr>
                        ) : <></>}
                    </tbody>
                </table>

                <div className='my-5 flex justify-center'>
                    <button disabled={currentPage == 1} onClick={() => { setcurrentPage(e => e - 1) }} className='mr-1 sm:w-9 h-7 w-7 sm:h-9 rounded-full bg-[#26262B] flex justify-center items-center text-white'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    {emptyarray.length >= 1 ? emptyarray.map(ele => {
                        return (<button className={`${ele == currentPage ? "opacity-50" : "opacity-100"} sm:w-9 text-white bg-[#26262B] h-7 w-7 sm:h-9 rounded-full mx-1 flex justify-center items-center`} onClick={(e) => { setcurrentPage(ele) }}>{ele}</button>)
                    }) : <></>}
                    <button onClick={() => { setcurrentPage(e => e + 1) }} disabled={currentPage == emptyarray.length} className='ml-1 sm:w-9 h-7 w-7 sm:h-9 rounded-full bg-[#26262B] flex justify-center items-center text-white'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination