import React from "react";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {
  
  const total_student = 500
  const total_staff = 50
  const total_courses = 4
  const total_subjects = 8
  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-32 bg-blueGray-800 md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Students"
                  statTitle={total_student}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Staff"
                  statTitle={total_staff}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Courses"
                  statTitle={total_courses}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Subjects"
                  statTitle={total_subjects}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
