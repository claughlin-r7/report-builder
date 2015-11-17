import React from 'react';
import {Card, CardTitle} from 'material-ui/lib';
import TableBuilder from 'components/tableBuilder';
import ChartBuilder from 'components/chartBuilder';
import ChartTypes from 'chartTypes';
import ChartData from 'chartData';

class ReportCard extends React.Component {
    render() {
        return (
            <Card style={{width: '50%'}}>
                <CardTitle title={this.props.card.configOptions.title} />
                <ChartBuilder type={this.props.card.type} data={ChartData[this.props.card.type]} chartId={this.props.index} />
            </Card>
        )
    }
}

export default ReportCard;
