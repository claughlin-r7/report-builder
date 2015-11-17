import React from 'react';
import ReactDom from 'react-dom';
import Dragula from 'react-dragula';
import ReportItemMenu from 'components/report-item-menu';
import DragDrop from 'components/dragDrop';
import TableBuilder from 'components/tableBuilder';
import ChartBuilder from 'components/chartBuilder';
import SelectedCard from 'components/selectedCard';

class Main extends React.Component {

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
        this.selectedCard = {title: "Bar Chart", image: "/some/path", type: "Bar", configOptions: {title: "", url: ""}};

    }

    render() {
        return (
            <div className='container'>
                <ReportItemMenu />
                <TableBuilder headers={this.headers} tableData={this.tableData}/>
                <div id="dropzone">
                    </div>
                <ChartBuilder type={this.type} data={this.data} options={this.options}/>

                <SelectedCard type={this.selectedCard.type} />
            </div>
        );
    }
    componentDidMount() {
        var left = document.getElementById("slide-out");
        var right = document.getElementById("dropzone");

        Dragula([left, right], {
            copy: function (el, source) {
                return source === left
            },
            accepts: function (el, target) {
                return target !== left
            }
        });
    }
}

export default Main;
