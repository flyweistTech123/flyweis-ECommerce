import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DoubleDuty = () => {
    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            borderRadius: 10,
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // Disable the Highcharts label
        },
        xAxis: {
            categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            labels: {
                style: {
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#747474' // Dark grey color for xAxis labels
                }
            }
        },
        yAxis: {
            min: 0,
            max: 7, // Adjusting the y-axis limit as per your image
            title: {
                text: ''
            },
            labels: {
                enabled: true,
                style: {
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#000000'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal', // Stacked columns
                borderRadius: 10, // Rounded bars
                pointWidth: 20, // Adjust column width (increase/decrease this to make it thinner/thicker)
                // Alternatively, use pointPadding for more flexibility:
                // pointPadding: 0.1, // Adjust the space between columns
                dataLabels: {
                    enabled: false
                }
            }
        },
        colors: ['#0578FF', '#A2A0FF'],
        series: [
            {
                name: 'Top Layer', // Second layer (blue)
                data: [4, 3, 5, 3, 3, 3, 2], // Add the top layer to create stacked effect
                color: '#0578FF' // Blue shade
            },
            {
                name: 'Base Layer', // First layer (light purple)
                data: [3, 4, 4, 4, 4, 4, 3], // Set a lower base
                color: '#A2A0FF' // Light purple shade
            }
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default DoubleDuty;