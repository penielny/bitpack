import React from 'react'

export default function ChangePasswod() {
    return (
        <>
             <div className="flex-1 h-full  w-full flex items-center justify-center ">
                        <div className="py-10 flex  flex-col bg-white px-20">
                            <h3 className="text-left text-3xl font-bold mb-2">Change Password</h3>
                            <p className="mb-2 text-sm ">This page is for users who wish to change thier current password details for security reasons. If you dont know what your are doingthe best thing is to go back.</p>
                            <div className="my-3 space-y-2">
                                <input placeholder="New Password" className="w-full p-3 border" />
                                <input placeholder="Repeat New Password" className="w-full p-3 border" />
                            </div>
                            <div>
                                <button className="bg-purple-500 font-bold p-3 text-white">Change Password</button>
                            </div>
                                <h1 className="text-center text-xs text-gray-500 my-3">account was created at 20-05-2021 21:32:11</h1>
                        </div>
                    </div>
        </>
    )
}
