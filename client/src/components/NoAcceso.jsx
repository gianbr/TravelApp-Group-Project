import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const NoAcceso = () => {
  return (
    <div className='bg-indigo-500'>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <h1 className="text-center text-2xl font-bold">
                            No tienes acceso a esta sección
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default NoAcceso