import React from 'react';
import ReactDom from 'react-dom';
import Dragula from 'react-dragula';

//var DragDrop = React.createClass({
//    render: function () {
//        return <div className='container'>
//            <div>Swap me around</div>
//            <div>Swap her around</div>
//            <div>Swap him around</div>
//            <div>Swap them around</div>
//            <div>Swap us around</div>
//            <div>Swap things around</div>
//            <div>Swap everything around</div>
//        </div>;
//    },
//    componentDidMount: function () {
//        var container = React.findDOMNode(this);
//        dragula([container]);
//    }
//});


class DragDrop extends React.Component {
    render()  {
    return <div className='container'>
    </div>;
    }
    componentDidMount() {
        var container = ReactDom.findDOMNode(this);
        Dragula([container]);
    }
}

export default DragDrop;
