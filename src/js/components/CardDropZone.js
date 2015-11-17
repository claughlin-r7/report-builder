import React from 'react';
import Card from 'components/report-item';
class CardDropZone extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
        console.log("Here");
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
            <div id="dropzone">
                {this.renderCards()}
            </div>
        );
    }
}

export default CardDropZone;
