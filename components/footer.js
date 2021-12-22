import Main_Header from './BodyHeader'
import Report_Table from './ReportTable'
import React, { useState } from 'react'

export default function Footer(props) {

    return (
        <div>

                <footer className="p-6 text-3xl bg-green-500 text-gray-700 text-base">{props.sorted.length} Locations World Wide</footer>
        </div>
    )
}