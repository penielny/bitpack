import React from 'react'
import Buy from '../components/buy';
import Ratecard from '../components/ratecard'

import Sell from '../components/sell';

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

export default function Exchange() {



    return (
        <>
            <div className="my-5 mt-10 px-3">
                <h3 className="font-bold text-2xl">Buy and Sell.</h3>
                <p className="text-sm text-gray-500">This page is for user looking to buy or sell any of the accepted coins on these platform.</p>
            </div>
            <div className="space-x-3 px-3">
                <button className="py-3 px-10 font-bold text-white rounded bg-red-500" >Buy</button>
                <button className="py-3 px-10 font-bold text-white rounded bg-green-500" >Sell</button>
            </div>
            <div className="flex-1 lg:overflow-y-auto px-3">
                <div className="flex flex-col md:flex-row w-full items-center space-y-4 md:space-x-10 my-6 flex-wrap">
                    {crypto.map((item, index) => <Ratecard key={`exchange-rate-${index}`} exchange name={item.name} icon={item.img} />)}
                </div>
                <div className="flex flex-col md:flex-row flex-1 space-y-4  md:space-x-10">
                    <Sell />
                    <Buy />
                </div>
            </div>

        </>
    )
}
