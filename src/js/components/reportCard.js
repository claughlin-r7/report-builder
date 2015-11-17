import React from 'react';
import {Card, CardTitle} from 'material-ui/lib';
import TableBuilder from 'components/tableBuilder';
import ChartBuilder from 'components/chartBuilder';
import ChartTypes from 'chartTypes';
import ChartData from 'chartData';

class ReportCard extends React.Component {
    renderReportCardContent(card) {
        if (ChartTypes.indexOf(card.type) !== -1) {
            //Render Chart in card
            return <ChartBuilder type={card.type} data={ChartData[card.type]} />
        } else {
            return <TableBuilder type={card.type} data={ChartData[card.type]} />
        }
    }

    render() {
        return (
            <Card style={{width: '80%'}}>
                <CardTitle title={this.props.card.configOptions.title} />
                {this.renderReportCardContent(this.props.card)}
            </Card>
        )
    }
}

export default ReportCard;
