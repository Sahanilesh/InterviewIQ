import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {FaTimes} from "react-icons/fa"
import Auth from "../pages/Auth"

function Authmodel({onClose}) {
    const {userData} = useSelector((state) => state.user)

    useEffect(()=>{
        if(userData){
            onClose()
        }
    },[userData, onClose])

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md px-4 py-4'>
            <div className='relative w-full max-w-md animate-fade-in'>
                <button 
                    onClick={onClose}
                    className='absolute top-6 right-6 z-10 p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-110'
                >
                    <FaTimes size={18}/>
                </button>
                <Auth isModel={true} />
            </div>
        </div>
    )
}

export default Authmodel
