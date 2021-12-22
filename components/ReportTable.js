import React, { useState } from 'react'

export default function ReportTable(props) {
    const table_head = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
    let total = props.total_for_location;
    let hourly_total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let total_of_totals = 0;
    {props.sorted.map(i =>
    {
        i.hourly_sales.map((item, index) =>
        hourly_total[index] += parseInt(item)
        )

        i.hourly_sales.map(item=>
            total_of_totals += parseInt(item)
            )
    })}
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
                    {props.sorted.map(i =>
                        <tr>
                            <td className='border border-gray-400 bg-green-300'>
                                {i.location}
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