import React from 'react';
import $ from 'jquery';
import Chart from 'chart.js';

class ChartBuilder extends React.Component {
    displayChart(type, data, options) {
        Chart.defaults.global.responsive = true;
        var ctx = document.getElementById("myChart").getContext("2d");
        switch(type) {
            case "line":
                new Chart(ctx).Line(data, options);
                break;
            case "bar":
                new Chart(ctx).Bar(data, options);
                break;
            case "radar":
                new Chart(ctx).Radar(data, options);
                break;
            case "polar":
                new Chart(ctx).PolarArea(data, options);
                break;
            case "pie":
                new Chart(ctx).Pie(data, options);
                break;
            case "doughnut":
                new Chart(ctx).Doughnut(data, options);
                break;
        }
    }

    componentDidMount() {
        var type = "line";

        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var options = {
            animation: true
        };
        this.displayChart(type, data, options);
    }
    render() {
        return (
            <canvas id="myChart" width="200" height="100"></canvas>
        )
    }
}

export default ChartBuilder
