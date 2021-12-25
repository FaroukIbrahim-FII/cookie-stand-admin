import React, { useState } from 'react'

export default function ReportTable(props) {
    const table_head = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
    let total = props.total_for_location;
    let hourly_total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let total_of_totals = 0;
    {
        props.responses.map(i => {
            i.hourly_sales.map((item, index) =>
                hourly_total[index] += parseInt(item)
            )

            i.hourly_sales.map(item =>
                total_of_totals += parseInt(item)
            )
        })
    }
    return (
        <div>
            <table className="table-auto border-collapse border border-gray-500 rounded-t-lg w-3/4 mx-auto mb-8 text-center">
                <thead className='rounded-t-lg'>
                    {table_head.map((i) =>
                        <th className='border border-gray-600 bg-green-500'>
                            {JSON.stringify(i)}
                        </th>
                    )
                    }
                </thead>
                <tbody>
                    {props.responses.map(i =>
                        <tr>
                            <td className='border border-gray-400 bg-green-300'>
                                {i.location}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-5 h-5 cursor-pointer'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    onClick={() => props.deleteStand(i._id)}
                                > <path
                                        fillRule='evenodd'
                                        d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </td>
                            {i.hourly_sales.map(sale =>
                                <td className='border border-gray-400 bg-green-300'>{sale}</td>
                            )}
                            <td className='border border-gray-400 bg-green-300'>
                                {/* {props.get_location_total(i.hourly_sales)} */}
                                {i.hourly_sales.reduce(function (sum, value) { return sum + value }, 0)}
                            </td>
                        </tr>
                    )}

                </tbody>
                <tfoot className="text-center bg-green-500">
                    <th>Totals</th>
                    {hourly_total.map(item =>
                        <th>{item}</th>
                    )}
                    <th>{total_of_totals}</th>

                </tfoot>
            </table>
        </div>
    )
}