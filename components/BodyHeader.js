import React, { useState } from 'react'

export default function BodyHeader() {
    return (
        <div>
            <header className='p-6 bg-green-500 my-0 flex justify-between'>
                <h1 className='text-2xl font-bold flex '>Cookie Stand Admin</h1>
                <button className='flex rounded-md bg-gray-100 px-2'>Overview</button>
            </header>
            
        </div>
    )
}