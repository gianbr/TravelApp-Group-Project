import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
        <hr />
        <form method='POST' action="https://getform.io/f/fbddc065-2f07-4fcb-a2a0-3167a9233913" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black'>Contacto</p>
                <p className='text-indigo-300 py-4'></p>
            </div>
            <input className='bg-indigo-200  hover:border-indigo-200 p-2' type="text" placeholder='Nombre' name='name' />
            <input className='my-4 p-2 bg-indigo-200 hover:border-indigo-200' type="email" placeholder='Correo' name='email' />
            <textarea className='bg-indigo-200  hover:border-indigo-200 p-2' name="message" rows="10" placeholder='Mensaje'></textarea>
            <button className='text-black border-indigo-200 border-2 hover:bg-indigo-200 hover:border-indigo-200 hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Contactanos</button>
        </form>
    </div>
  )
}

export default Contact