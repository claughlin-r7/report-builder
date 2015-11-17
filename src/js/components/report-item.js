import React from 'react';


class ReportItem extends React.Component {

    constructor(props) {
        super(props);
        var _this = this;
        this.state = {
            styles: {
                backgroundImage: 'url(' + _this.props.data.image + ')'
            }
        }
    }

    render() {
        return (
            <div className="card blue-grey darken-1" style={this.state.styles}>
                <div className="card-content white-text">
                    <a className="card-title-holder">
                        <span className="card-title">{this.props.data.title}</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default ReportItem;
