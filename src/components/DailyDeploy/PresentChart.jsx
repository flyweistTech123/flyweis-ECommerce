import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PresentChart = () => {
    const options = {
        chart: {
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        credits: {
            enabled: false // Disable the Highcharts label
        },
        title: {
            text: ''

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
            title: {
                text: ''
            },
            labels: {
                style: {
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#000000' // Dark grey color for xAxis labels
                }
            }
        },
        colors: ['#03AE00'],
        series: [{
            name: 'Present',
            data: [5, 10, 7, 12, 8, 15, 9] // Replace this with your actual data
        }]
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

export default PresentChart;