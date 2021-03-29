import React, { useState } from 'react'
import Select from 'react-select';
const options = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'Ethereum', label: 'Ethereum' },
    { value: 'Bitcoin Cash', label: 'Bitcoin Cash' },
];
export default function Sell() {
    const [currency, setCurrency] = useState()
    return (
        <>
            <div className="flex-1 bg-white shadow-lg p-4 rounded h-full border">
                <h3 className="font-bold text-xl">Selling to Bitpack</h3>
                <div className="my-2 font-bold text-gray-700">
                    <label className="text-sm mb-1">Select the E-currency</label>
                    <Select
                        value={currency}
                        onChange={setCurrency}
                        options={options}
                    />
                </div>
                <div className="my-2 font-bold text-gray-700">
                    <label className="text-sm mb-1">Enter BTC USD Amount to buy</label>
                    <input
                        className="w-full border p-2 rounded border-gray-300"
                        placeholder="0.00"
                    />
                </div>
                <div className="my-2 font-bold text-gray-700">
                    <label className="text-sm mb-1">Enter GH¢ Amount to pay</label>
                    <input
                        className="w-full border p-2 rounded border-gray-300"
                        placeholder="0.00"
                    />
                </div>
                <div className="my-2 font-bold text-gray-700">
                    <label className="text-sm mb-1">Select Payment Method</label>
                    <Select
                        value={currency}
                        onChange={setCurrency}
                        options={options}
                    />
                </div>
                <div className="my-2">
                    <button className="py-3 px-10 font-bold text-white rounded bg-red-500">Procced to Sell</button>
                </div>
            </div>
        </>
    )
}
