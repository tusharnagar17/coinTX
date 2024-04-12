import React, { useEffect, useState } from 'react'
import Multisection from './Multisection'
import { GetCoin, GetPrice, GetTrending } from '../services/GetData'
import { FetchGetPrice } from '../../types/types'

const MainSection = async () => {
    const [currentCoin, setCoin] = useState("Bitcoin")
    const [coinData, setCoinData] = useState()


    console.log("Get Price")
    // console.log(await GetTrending()) working
    // / / const tempData = await GetPrice({ ids: "bitcoin", vs_currencies: "usd", include_24hr_change: true })
    // console.log(tempData); WORKING

    const tempData = await GetCoin({ id: currentCoin.toLowerCase() })
    console.log(tempData)

    return (
        <div className='bg-[#faf8f5] px-28 py-5 text-md'>
            <span className='text-slate-600'>Cryptocurrencies &gt;&gt; </span>
            <span className='font-medium'>{currentCoin}</span>
            <Multisection currentCoin={currentCoin} setData={setCoin} coinData={coinData} setCoinData={setCoinData} />
        </div>
    )
}

export default MainSection