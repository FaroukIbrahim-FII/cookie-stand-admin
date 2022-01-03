import React, { useState, useEffect } from "react";
import axios from 'axios'

import CardLineChart from "./Cards/CardLineChart.js";
import StaffChart from "./Cards/StaffAttendanceLeave.js";
import StudentChart from "./Cards/StudentAttendanceLeave.js";
import CardPieChart from "./Cards/CardPieChart.js";
import AdminNavbar from "./Navbars/AdminNavbar.js";
import Sidebar from "./Sidebar/Sidebar.js";
import HeaderStats from "./Headers/HeaderStats.js";
import FooterAdmin from "./Footers/FooterAdmin.js";


const baseUrl = 'http://127.0.0.1:8000/';
const staff_url = baseUrl + 'staff_list/';
const student_url = baseUrl + 'student_list/';
const course_url = baseUrl + 'course_list/';





export default function Dashboard(props) {

    const [staff, setstaff] = useState([]);
    const [student, setstudent] = useState([]);
    const [course, setcourse] = useState([]);


    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${props.token}` }
        }
        axios.get(staff_url, config).then(res => {
            setstaff(res.data)
            console.log(res.data);
        });
        axios.get(student_url, config).then(res => {
            setstudent(res.data)
            console.log(res.data);
        });
        axios.get(course_url, config).then(res => {
            setcourse(res.data)
            console.log(res.data);
        });
    }, [])
    const staff_num = staff.length
    const student_num = student.length
    const course_num = course.length
    const courses_count = []
    const course_names = course.map(item => {
        return item.course_name
    })
    function countUnique(iterable) {
        return new Set(iterable).size;
    }
    
    console.log(countUnique(course_names));
    var unique_courses = new Array(countUnique(course_names)).fill(1)
    console.log(unique_courses);
    for (let index = 0; index < course_names.length; index++) {
        const getOccurrence = function (course_num, value) {
            var count = 0;
            course_num.forEach((v) => (v === value && count++));
            return count;
        }
        unique_courses
    }
    console.log(courses_count);





    const chartLabels_student_Staff = [
        'Staff',
        'Student',
    ]
    const datasets_student_Staff = [{
        label: 'My First Dataset',
        data: [staff_num, student_num],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
    const chartLabels_course = course_names
    const datasets_course = [{
        label: 'My First Dataset',
        data: unique_courses,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        // hoverOffset: 4
    }]
    // const chartLabels = [
    //     'Red',
    //     'Blue',
    //     'Yellow'
    // ]
    // const datasets = [{
    //     label: 'My First Dataset',
    //     data: [300, 50, 100],
    //     backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)',
    //         'rgb(255, 205, 86)'
    //     ],
    //     hoverOffset: 4
    // }]
    const pieChartId = "pie-chart-1"
    const pieChartId1 = "pie-chart-2"
    const pieChartId3 = "pie-chart-3"
    // const pieChartId4 = "pie-chart-4"
    const pieChartName1 = "Student VS Staff"
    const pieChartName2 = "Courses"
    const pieChartName3 = "Subjects"

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 xl:w-full xl:mb-0">
                            <CardPieChart
                                chartName={pieChartName1}
                                pieChartId={pieChartId3}
                                chartLabels={chartLabels_student_Staff}
                                datasets={datasets_student_Staff}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
                            <CardPieChart
                                chartName={pieChartName3}
                                pieChartId={pieChartId}
                                chartLabels={chartLabels_course}
                                datasets={datasets_course}
                            />
                        </div>
                        <div className="w-full px-4 xl:w-6/12">
                            <CardPieChart
                                chartName={pieChartName2}
                                pieChartId={pieChartId1}
                                chartLabels={chartLabels_course}
                                datasets={datasets_course}
                            />
                        </div>
                    </div>


                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
                            <StaffChart />
                        </div>
                        <div className="w-full px-4 xl:w-6/12">
                            <StudentChart />
                        </div>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
