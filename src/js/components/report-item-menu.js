import React from 'react';
import Card from 'components/report-item';


class ReportItemMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    renderCards() {
        return this.props.cardItems.map((card, i) => {
            return (
                <li>
                    <Card data={card}></Card>
                </li>
            )
        });
    };

    render() {
        return (
            <ul id="slide-out" className="side-nav fixed">
                {this.renderCards()}
            </ul>
        );
    }
}

export default ReportItemMenu;

//<li><div className="row">
//    <div className="col s12">
//        <div className="card blue-grey darken-1">
//            <div className="card-content white-text">
//                <span className="card-title">First Chart</span>
//                <p>This is a card</p>
//            </div>
//        </div>
//    </div>
//</div></li>
