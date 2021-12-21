import Main_Header from './BodyHeader'
import Report_Table from './ReportTable'
import React, { useState } from 'react'

export default function CreateForm(props) {

    return (
        <div>
                <form className="flex-col w-3/4 p-0 mx-auto my-8 bg-green-300 rounded-md font-semibold" onSubmit={props.handler} >
                        <h1 className="my-3 text-2xl text-center" type='text'>Create Cookie Stand</h1>
                        <div className="flex w-full ml-2 p-4">
                            <label className="">Location</label>
                            <input name="location" className="flex w-11/12 ml-1 mr-1 gray-100" />
                        </div>
                        <div className="flex w-full pt-4 pb-6 p-4" >
                            <div className="w-1/4 bg-green-200 p-4 m-auto">
                                <label>Minimum Custumer per Hour</label>
                                <input type='number' className="w-60" name="min" />
                            </div>
                            <div className="w-1/4 bg-green-200 p-4 m-auto">
                                <label >Maximum Custumer per Hour</label>
                                <input type='number' className="w-60" name="max" />
                            </div>
                            <div className="w-1/4 bg-green-200 p-4 m-auto">
                                <div className="flex text-l"></div><label >Average Cookies per Sales</label>
                                <input type='number' className="w-60  " name="avg" />
                            </div>
                            <button className="px-20 py-5 ml-2 bg-green-500 top-2 text-black-50 rounded-md">Create</button>
                        </div>
                </form>
        </div>
    )
}