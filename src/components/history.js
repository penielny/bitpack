import React from 'react'
import { IoArrowUp, IoEllipsisHorizontalOutline } from 'react-icons/io5'

export default function HistoryCard() {
    return (
        <>
            <div className="w-full bg-white p-3 rounded flex items-center my-4 cursor-pointer">
                <div className="w-10 border-r flex items-center justify-center">
                    <IoEllipsisHorizontalOutline className="text-gray-500 w-6 h-6" />
                </div>
                <div className="flex-1 px-3 space-y-1">
                    <h3 className="text-xl font-bold items-center flex">Bitcoin <span className="text-gray-600">(BTC)</span> <span className="text-black text-sm ml-2">processing</span></h3>
                    <p className="font-bold text-gray-500 text-sm">Selling 0.0000041BTC Worth GH₵6.50 </p>
                </div>
                <div className="hidden md:flex text-red-500 flex items-center font-semibold space-x-3">
                    <p>GH₵6.50</p>
                    <IoArrowUp className="w-6 h-6" />
                </div>
            </div>
        </>
    )
}
