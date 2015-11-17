import React from 'react';


class ReportItem extends React.Component {

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

    render() {
        return (
            <div className="card white darken-1" style={this.state.styles}>

            </div>
        )
    }
}

export default ReportItem;
