import React from 'react';

class SelectedCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentWillMount() {
        this.state = {
            editable: true
        };
    }
    saveCard() {
        // save shit
    }
    clearFields() {

    }

    render() {
        return (
            <div id="selectedCard">
                <input placeholder="Enter title"> {this.props.title} </input>
                <input placeholder="Enter url"> {this.props.title} </input>
                <button type="button" onClick={this.saveCard}> "Save" </button>
                <button type="button" onClick={this.clearFields}> "Cancel" </button>
            </div>
        );
    }
}

export default SelectedCard;
