import React from 'react'

export default function Report_Table() {
    return (
        <div>
            <h2 className="text-center pb-6">Report Table Coming Soon ...</h2>
            {sorted.map((i) =>
                <p className='my-3 text-center text-gray-600 text-1xl pb-4'>
                    {JSON.stringify(i)}
                </p>
            )
            }
        </div>
    )
}