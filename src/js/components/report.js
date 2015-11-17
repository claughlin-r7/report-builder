import React from 'react';
import ReportCard from 'components/reportCard';

class Report extends React.Component {
    renderReportCard(card, index) {
        return (
            <ReportCard key={index} card={card}/>
        )
    }

    render() {
        return (
            <div style={{width: '80%', display: 'block', 'margin-left': 'auto', 'margin-right': 'auto'}}>
                {this.props.report.cards.map(this.renderReportCard)}
            </div>
        );
    }
}

export default Report;
