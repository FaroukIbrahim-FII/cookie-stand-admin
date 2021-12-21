import Main_Header from './BodyHeader'
import CreateForm from './CreateForm'
import Report_Table from './ReportTable'
import React, { useState } from 'react'

export default function Main(props) {
    return (
        <div>
            <main className="min-h-screen bg-green-50">
                <CreateForm
                handler = {props.Handler}
                sorted = {props.sorted}
                
                />
                {props.sorted?.length > 0 ? <Report_Table sorted = {props.sorted} get_hourly_sales = {props.get_hourly_sales} get_location_total = {props.get_location_total} get_hourly_total = {props.get_hourly_total} /> : <p className=" text-xl font-bold text-center">No Cookies Stands Available</p>}
                

            </main>
        </div>
    )
}