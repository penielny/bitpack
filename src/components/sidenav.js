import React from 'react'
import { IoHomeOutline, IoTabletPortraitOutline } from 'react-icons/io5'
import { Link, useRouteMatch } from 'react-router-dom';
import { useDashUi } from '../context/dashui';

function SideNav() {
    const { url } = useRouteMatch();
    const { smNavShowBtn, smNavHideBtn, smToggle, setSmToggle,smNav } = useDashUi();

    return (
        <>
            <div className="w-full flex items-center justify-between lg:hidden p-5 bg-white">
                <h1 className="text-2xl text-white font-extrabold uppercase  text-purple-800">Bitpack</h1>
                {smToggle ? <button ref={smNavHideBtn} onClick={()=>{smNav.current.classList.add('hidden');setSmToggle(false)}}>
                    <svg className="text-purple-800 h-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> :
                    <button ref={smNavShowBtn} onClick={()=>{smNav.current.classList.remove('hidden');setSmToggle(true)}}>
                        <svg className="text-purple-800 h-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>}
            </div>
            <div className="w-full lg:w-1/6 bg-purple-800 lg:h-full flex flex-col  font-bold text-white overflow-hidden flex-shrink-0 ">
                <div className="hidden lg:block  my-16">
                    <h1 className="text-2xl text-white font-extrabold uppercase px-10">Bitpack</h1>
                </div>
                <div ref={smNav} className="hidden lg:block space-y-5 px-10 flex-1 py-10">
                    <Link to={`${url}`} className="flex items-center space-x-5 cursor-pointer">
                        <IoHomeOutline className="w-6 h-6" />
                        <h5>Home</h5>
                    </Link>
                    <Link to={`${url}/exchange`} className="flex items-center space-x-5 cursor-pointer">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h5>Buy / Sell</h5>
                    </Link>
                    <Link to={`${url}/transactions`} className="flex items-center space-x-5 cursor-pointer">
                        <IoTabletPortraitOutline className="w-6 h-6" />
                        <h5>Transactions</h5>
                    </Link>
                    <Link to={`${url}/account`} className="flex items-center space-x-5 cursor-pointer">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <h5>Account</h5>
                    </Link>
                    <button className="flex items-center space-x-5 cursor-pointer font-bold">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <h5>Support</h5>
                    </button>
                </div>
                <div className="hidden bg-purple-900 lg:flex items-center space-x-5 cursor-pointer rounded-3xl rounded-r-2xl cursor-pointer">
                    <div className="bg-red-600 flex h-20 w-20 rounded-3xl rounded-bl-none items-center justify-center">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 className="text-center text-xl">Contact Support</h3>
                </div>
            </div>
        </>
    )
}

export default SideNav
