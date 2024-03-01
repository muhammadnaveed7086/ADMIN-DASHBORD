import React from 'react';
import './Customer.css';
import Chart from 'react-apexcharts'; // Adjust import statement

function Customer() {
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
          dropShadow: {
            enabled: false,
          },
          fill: {
            type: "gradient",
          },
          datalabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          tooltip: {
            x: {
              format: "dd/MM/yy  HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:00:00.000Z",
              "2018-09-19T02:00:00.000Z",
              "2018-09-19T03:00:00.000Z",
              "2018-09-19T04:00:00.000Z",
              "2018-09-19T05:00:00.000Z",
            ],
          },
        },
        series: [
          {
            name: 'Series 1',
            data: [30, 40, 45, 50, 49, 60]
          }
        ]
      };

    return (
        <div className='CustomerReview'>
            <Chart
                options={data.options}
                series={data.series}
                type="area" // Define chart type
                // Set height
            />
        </div>
    );
}

export default Customer;
