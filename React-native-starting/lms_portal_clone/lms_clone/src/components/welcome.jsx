import React from 'react'

export default function wel() {
    return (
        <div className='border-2 w-140 h-100'>
            <div>
                <h1 className='text-4xl font-semibold'>Welcome Back</h1>
                <p className='text-gray-400'>Sign in to your account</p>
            </div>
            <div className='ml-6'>

                <div>
                    <h1 className='flex text-1xl font-semibold flex-start mt-2'>Role</h1>
                </div>
                <div className='flex gap-2'>
                    <button className="mt-2 bg-gray-200 text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition">
                        Student
                    </button>
                    <button className="mt-2 bg-gray-200 text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition">
                        Mentor
                    </button>
                    <button className="mt-2 bg-gray-200 text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition">
                        Admin
                    </button>
                </div>
                <div className='flex'>
                    <h1 className='flex text-1xl font-semibold flex-start mt-8'>University UID</h1>
                </div>
                <div>
                    <input type="text" placeholder='Enter your University UID' className='flex mt-2 border-2 border-amber-50 p-3 rounded-md mr-8 text-white w-lg' />
                </div>
                <div className='flex'>
                    <h1 className='flex text-1xl font-semibold flex-start mt-8'>Password</h1>
                </div>
                <div>
                    <input type="text" placeholder='Enter your Password' className='flex mt-2 border-2 border-amber-50 p-3 rounded-md mr-8 text-black w-lg' />
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
    )
}