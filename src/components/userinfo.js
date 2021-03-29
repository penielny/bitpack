import React from 'react'

export default function UserInfo() {
    return (
        <>
             <div className="flex-1 h-full  w-full flex items-center justify-center ">
                        <div className="py-10 flex items-center justify-center flex-col bg-white px-20">
                            <div className="h-48 w-48 rounded-full bg-gray-400 border" />
                            <div className="my-3">
                                <h1 className="text-center text-3xl font-bold">Peniel Doe</h1>
                                <h1 className="text-center text-xl">+233 57 856 7316</h1>
                                <h1 className="text-center text-xl">penieldoe@email.com</h1>
                                <h1 className="text-center text-xs text-gray-500 my-3">account was created at 20-05-2021 21:32:11</h1>
                            </div>
                        </div>
                    </div>
        </>
    )
}
