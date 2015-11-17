import React from 'react';
import Chart from 'chart.js';

class ChartBuilder extends React.Component {
    displayChart(type, data) {
        let options = {
            animation: false
        };
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
        this.displayChart(this.props.type, this.props.data, this.props.options);
    }

    render() {
        return (
            <canvas id="myChart" width="200" height="100"></canvas>
        )
    }
}

export default ChartBuilder
