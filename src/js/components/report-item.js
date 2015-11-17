import React from 'react';


class ReportItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{this.props.data.title}</span>
                    <p>This is a card</p>
                </div>
            </div>
        )
    }
}

export default ReportItem;
