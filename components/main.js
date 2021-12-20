import Main_Header from './main_header'
import React, { useState } from 'react'

export default function Main() {
    const [sorted, set_data] = useState([]);
    function Handler(event) {
        event.preventDefault();
        const save_data = {
            location: event.target.location.value,
            min_customers: event.target.min.value,
            max_customers: event.target.max.value,
            avg_cookies: event.target.avg.value,
        }
        set_data(sorted => [...sorted, save_data])
    }
    return (
        <div>
            <Main_Header/>
            <main className="min-h-screen bg-green-50">
                <form className="flex-col w-3/4 p-0 mx-auto my-8 bg-green-300 rounded-md font-semibold" onSubmit={Handler} >
                    <fieldset>
                        <h1 className="my-3 text-2xl text-center" type='text'>Create Cookie Stand</h1>
                        <div className="flex w-full ml-2 p-4">
                            <label className="">Location</label>
                            <input name="location" className="flex w-full ml-1 mr-1 gray-100" />
                        </div>
                        <div className="flex w-10/12 gap-12 pt-4 ml-2 pb-6 p-4" >
                            <div className="flex-col w-full ">
                                <label>Minimum Custumer per Hour</label>
                                <input type='number' className="w-60" name="min" />
                            </div>
                            <div className="flex-col w-1/3 ">
                                <label >Maximum Custumer per Hour</label>
                                <input type='number' className="w-60" name="max" />
                            </div>
                            <div className="flex-col w-1/3">
                                <div className="flex"></div><label >Average Cookies per Sales</label>
                                <input type='number' className="w-60  " name="avg" />
                            </div>
                            <button className="px-20 py-5 ml-8 bg-green-500 top-2 text-black-50">Create</button>
                        </div>
                    </fieldset>
                </form>
                {sorted.map((con) =>
                    <p className='my-3 text-center text-gray-600 text-1xl pb-4'>
                        {JSON.stringify(con)}
                    </p>
                )
                }
                <footer className="p-6 text-3xl bg-green-500 text-gray-700 text-base">&copy;2021</footer>

            </main>
        </div>
    )
}