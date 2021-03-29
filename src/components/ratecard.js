import React from 'react'
import { IoArrowDown, IoArrowUp } from "react-icons/io5"
export default function Ratecard({ icon, name, exchange }) {
  return (
    <>
      <div className="flex-1 bg-white rounded p-10 flex-shrink-0 shadow-lg w-full">
        <div className="flex-1 ">
          <div className="flex items-center space-x-4">
            <img alt="coin svg" src={icon} />
            <h3 className="text-xl font-bold">{name} <span className="text-gray-600">(BTC)</span></h3>
          </div>
          {exchange ? <>
            <div className="my-3">
              <div className="flex items-center justify-between font-bold text-red-500">
                <div className="flex items-center ">
                  <IoArrowUp /> <p>Sell</p>
                </div>
                <div>GHC 6.50</div>
              </div>
              <div className="flex items-center justify-between font-bold text-green-500">
                <div className="flex items-center">
                  <IoArrowDown /> <p>Buy</p>
                </div>
                <div>GHC 6.50</div>
              </div>
            </div>
          </> : <div className="my-2 text-gray-600">
            <h3 className="font-bold text-3xl">$1.00 </h3>
          </div>}
        </div>
      </div>
    </>
  )
}
