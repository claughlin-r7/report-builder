import React from 'react';

class ComponentMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id="slide-out" className="side-nav fixed">
                <li><div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">First Chart</span>
                                <p>This is a card</p>
                            </div>
                        </div>
                    </div>
                </div></li>
                <li><div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Second Chart</span>
                                <p>This is a card</p>
                            </div>
                        </div>
                    </div>
                </div></li>
                <li><div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Second Chart</span>
                                <p>This is a card</p>
                            </div>
                        </div>
                    </div>
                </div></li>
                <li><div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Second Chart</span>
                                <p>This is a card</p>
                            </div>
                        </div>
                    </div>
                </div></li>
            </ul>
        );
    }
}

export default ComponentMenu;
