import React from "react";
import Chart from "chart.js";

export default function CardPieChart1(props) {
  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: props.chartLabels,
        datasets: props.datasets,
      },
      
        };
        let ctx = document.getElementById("Pie-chart-staff1").getContext("2d");
          window.myBar = new Chart(ctx, config);
  },);
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg bg-blueGray-700">
        <div className="px-4 py-3 mb-0 bg-transparent rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full">
              <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-100">
                Overview
              </h6>
              <h2 className="text-xl font-semibold text-white">Students VS Staff Attendance</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="relative h-50-px">
            <canvas id="Pie-chart-staff1"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
