import React, { useState } from 'react'
import BodyHeader from './BodyHeader'
import Footer from './footer';
import Main from './main';

export default function CookieStandAdmin() {
    const hours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
    const [sorted, set_data] = useState([]);
    function Handler(event) {
        event.preventDefault();
        const save_data = {
            location: event.target.location.value,
            min_customers: event.target.min.value,
            max_customers: event.target.max.value,
            avg_cookies: event.target.avg.value,
            hourly_sales: get_hourly_sales(event.target.min.value, event.target.max.value),
        }
        set_data(sorted => [...sorted, save_data])
    }
    function get_hourly_sales(min, max){
        const sales_list = [];
        for (let i = 0; i < hours.length - 1; i++){
            let ran = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
            sales_list.push(ran);
            get_location_total(ran)
            
        }
        return sales_list;
    }
    let total;
    function get_location_total(hour_sale){
        let total = 0;
        for (let i = 0; i < hour_sale.length; i++) {
            total += parseInt(hour_sale[i]);
            
        }
        return total;
    }
    function get_hourly_total(list, index, item){
        list[index] += parseInt(item)
        return list
    }
    return (
        <div>
            <BodyHeader/>
            <Main
            Handler ={Handler}
            sorted = {sorted}
            get_hourly_sales = {get_hourly_sales}
            get_location_total = {get_location_total}
            get_hourly_total = {get_hourly_total}
            />
            <Footer
            sorted = {sorted}
            />
        </div>
    )
}