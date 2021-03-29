import React from 'react'
import HistoryCard from '../components/history'
import Ratecard from '../components/ratecard'
const crypto = [
    {
      name: "bitcoin",
      symbol: "btc",
      img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/btc.svg",
    }
  
    ,
    {
      name: "ethereum",
      symbol: "eth",
      img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/eth.svg",
    }
    ,
  
    {
      name: "bitcoin Cash",
      symbol: "bch",
      img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/bch.svg",
    }
    ,
    {
      name: "dash",
      symbol: "dash",
      img: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/dash.svg",
    }
  
  ]
  
export default function Home() {
    return (
        <>
            <div className="flex-1 flex flex-col px-2 bg-gray-100">
                <h1 className="capitalize text-2xl lg:text-4xl mt-10 font-bold">Current Prices</h1>
                <div className="flex items-center space-y-2 lg:space-x-10 my-4 lg:my-14 flex-wrap">
                    {crypto.map((item, index) => <Ratecard key={`current-price-${index}`} name={item.name} icon={item.img} />)}
                </div>
                <div className="w-full lg:h-full flex-1">
                    <h1 className="text-2xl font-bold text-gray-600">Recent Transactions.</h1>
                    <div className="w-full lg:h-full">
                        <HistoryCard />
                        <HistoryCard />
                        <HistoryCard />
                    </div>
                </div>
            </div>
        </>
    )
}
