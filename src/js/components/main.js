import React from 'react';
import ReactDom from 'react-dom';
import Dragula from 'react-dragula';
import ReportItemMenu from 'components/report-item-menu';
import DragDrop from 'components/dragDrop';
import TableBuilder from 'components/tableBuilder';
import ChartBuilder from 'components/chartBuilder';
import Dropzone from 'components/CardDropZone';
import $ from 'jquery';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedCardItems: []
        }
    }

    componentWillMount() {
        this.menuItems = [
            { text: 'Get Started' },
            { text: 'Customization' },
            { text: 'Components' }
        ];
        this.headers = ['Id', 'Name', 'Status'];
        this.tableData = [
            [1, 'John Smith', 'Employed'],
            [2, 'Jane', 'Sacked'],
            [3, 'Chris', 'Employed']
        ];
        this.type = "line";
        this.data = {
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
        this.options = {
            animation: true
        };
        this.renderedCardItems = [];
        this.cardItems = [
            {image: "bar.svg", type: "bar", configOptions: {title: "", url: ""}},
            {title: "Pie Chart", image: "pie.svg", type: "pie", configOptions: {title: "", url: ""}},
            {title: "Line Chart", image: "line.svg", type: "line", configOptions: {title: "", url: ""}},
            {title: "Nut Chart", image: "doughnut.svg", type: "doughnut", configOptions: {title: "", url: ""}},
            {title: "Polar Chart", image: "polar.svg", type: "polar", configOptions: {title: "", url: ""}},
            {title: "Radar Chart", image: "radar.svg", type: "radar", configOptions: {title: "", url: ""}},
            {title: "Table", image: "table.svg", type: "table", configOptions: {title: "", url: ""}},
            {title: "Text", image: "text.svg", type: "text", configOptions: {title: "", url: ""}}
        ]
    }

    render() {
        return (
            <div className='container'>
                <ReportItemMenu cardItems={this.cardItems}/>
                <Dropzone cardItems={this.renderedCardItems}/>
            </div>
        );
    }
    componentDidMount() {
        var left = document.getElementById("slide-out");
        var right = document.getElementById("dropzone");
        console.log(left);
        var _this = this;

        Dragula([left, right], {
            copy: function (el, source) {
                return source === left
            },
            accepts: function (el, target) {
                return target !== left
            }
        }).on("drop", (el, source) => {
            $.each(this.cardItems, (index, item) => {
                if (el.firstChild.attributes[1].value === item.type) {
                    var selected = $.extend(true, {}, item);
                    selected.editable = true;
                    _this.renderedCardItems.push(selected);
                    _this.setState({renderedCardItems: _this.renderedCardItems});
                    el.remove();
                }
            });
        });
    }
}

export default Main;
