import React from 'react'
import { IoSend } from 'react-icons/io5'
import { useDashUi } from '../context/dashui'

export default function MiniSupport() {
    const{onLineSupport,toggleSupport} = useDashUi();
    return (
        <>
            <div className="hidden lg:block bg-purple-900 w-96 absolute bottom-4 right-4 rounded overflow-hidden">
                <div className="p-3 flex items-center justify-between cursor-pointer" onClick={()=>toggleSupport()}>
                    <h1 className="font-bold text-white">Online Support</h1>
                    <div className="h-5 w-5 bg-green-500 rounded-full" />
                </div>
                <div className="hidden bg-white border w-full h-96 flex flex-col" ref={onLineSupport}>
                    <div className="flex-1">
                        <div className="flex p-2">
                         <p className="bg-gray-300  p-3 rounded text-sm font-semibold">   Hello Peniel Doe, How can we help you ?.</p>
                        </div>
                        <div className="flex p-2 justify-end">
                         <p className="bg-purple-300  p-3 rounded text-sm font-semibold">Can i sell 50000BTC to you ?</p>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-1 border-t">
                        <input placeholder="Type message here ..." className="flex-1 py-2" />
                        <button>
                            <IoSend />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
