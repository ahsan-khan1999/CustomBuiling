import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
function Chart(props) {
    // Preparing the chart data

    // Create a JSON object to store the chart configurations
    const chartConfigs = {
        type: "bar2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "2018 Data", //Set the chart caption
                
                xAxisName: "Country", //Set the x-axis name
                yAxisName: "Reserves (MMbbl)", //Set the y-axis name
                numberSuffix: "K",
                theme: "fusion" //Set the theme for your chart
            },
            // Chart Data - from step 2
            data: props.data,
        }
    };
    return ( <
        div > < ReactFC {...chartConfigs }
        /> < /
        div >
    )
}
export default Chart;