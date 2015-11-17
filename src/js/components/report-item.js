import React from 'react';
import ReactDom from 'react-dom'
import $ from 'jquery';
import ReportCard from 'components/reportCard';


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
                height: '110px'
            }
        }
    }
    saveCard(evt, dom) {
        this.setState({graphTitle: this.refs.titleInput.value, graphUrl: this.refs.urlInput.value, graphRendered: true});
    }
    clearFields() {

    }

    render() {
        if (this.state.graphRendered) {
            return <ReportCard card={this.props.data} />

        } else if (this.props.data.editable) {
            return (
                <div className="card blue-grey darken-1 " data-type={this.props.data.type} style={this.state.styles}>
                    <div id="selectedCard">
                        <div className='card-content'>
                            <input ref="titleInput" placeholder="Enter title"> {this.props.title} </input>
                            <input ref="urlInput" placeholder="Enter url"> {this.props.title} </input>
                            <button type="button" onClick={this.saveCard.bind(this)}> Save </button>
                            <button type="button" onClick={this.clearFields.bind(this)}> Cancel </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card blue-grey darken-1 " data-type={this.props.data.type} style={this.state.styles}></div>
            )
        }

    }
}

export default ReportItem;
