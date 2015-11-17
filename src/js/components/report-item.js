import React from 'react';


class ReportItem extends React.Component {

    componentWillReceiveProps(previousProp, nextProp) {
        console.log(previousProp);
    }
    constructor(props) {
        super(props);
        var _this = this;
        this.state = {
            styles: {
                backgroundImage: 'url(' + _this.props.data.image + ')',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                height: '120px'
            }
        }
    }

    render() {
        if (this.props.data.editable) {
            return (

                <div id="selectedCard">
                    <input placeholder="Enter title"> {this.props.title} </input>
                    <input placeholder="Enter url"> {this.props.title} </input>
                    <button type="button" onClick={this.saveCard}> "Save" </button>
                    <button type="button" onClick={this.clearFields}> "Cancel" </button>
                </div>
            );
        } else {
            return (
                <div className="card blue-grey darken-1 " data-type={this.props.data.type} style={this.state.styles}>
                    <div className="card-content white-text">
                        <a className="card-title-holder">
                            <span className="card-title">{this.props.data.title}</span>
                        </a>
                    </div>
                </div>
            )
        }

    }
}

export default ReportItem;
