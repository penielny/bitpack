import React from 'react'
import HistoryCard from '../components/history'

function Transaction() {
    return (
        <>
            <div className="my-5 mt-10">
                <h3 className="font-bold text-2xl">Transactions Record</h3>
                <div className="flex items-center space-x-3 font-bold mt-2 text-gray-500">
                    <h3 className="cursor-pointer border-b-2 border-purple-500">All</h3>
                    <h3 className="cursor-pointer">Buy</h3>
                    <h3 className="cursor-pointer">Sell</h3>
                    <h3 className="cursor-pointer">Rejected</h3>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
            </div>

        </>
    )
}

export default Transaction
