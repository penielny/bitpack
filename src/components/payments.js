import React from 'react'

export default function Payments() {
    return (
        <>
            <div className="flex-1 h-full  w-full flex items-center justify-center ">
                <div className="py-10 flex  flex-col bg-white px-20">
                    <h3 className="text-left text-3xl font-bold mb-2">Change Payments Accounts</h3>
                    <p className="mb-2 text-sm ">This page is for users who wish to change or set thier current payment details for security or any othe reasons. If you dont know what your are doingthe best thing is to go back.</p>
                    <div className="my-3 space-y-2 ">
                        <div>
                            <label>Bitcoin wallet</label>
                            <input placeholder="Wallet address" className="w-full p-3 border" />
                        </div>
                        <div>
                            <label>Etherieum wallet</label>
                            <input placeholder="Wallet address" className="w-full p-3 border" />
                        </div>
                        <div>
                            <label>Bitcoin Cash wallet</label>
                            <input placeholder="Wallet address" className="w-full p-3 border" />
                        </div>
                        <div>
                            <label>Dash wallet</label>
                            <input placeholder="Wallet address" className="w-full p-3 border" />
                        </div>
                    </div>
                    <div className="my-3 space-y-4">
                        <div>
                            <h3 className="text-xl mb-2 font-bold text-gray-700">MTN MobileMoney</h3>
                            <div>
                                <label>Account Name</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                            <div>
                                <label>Account Number</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl mb-2 font-bold text-gray-700">Vodafone Cash</h3>
                            <div>
                                <label>Account Name</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                            <div>
                                <label>Account Number</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl mb-2 font-bold text-gray-700">AirtelTigo Money</h3>
                            <div>
                                <label>Account Name</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                            <div>
                                <label>Account Number</label>
                                <input placeholder="Wallet address" className="w-full p-3 border" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-purple-500 font-bold p-3 text-white">Update Information</button>
                    </div>
                    <h1 className="text-center text-xs text-gray-500 my-3">account was created at 20-05-2021 21:32:11</h1>
                </div>
            </div>
        </>
    )
}
