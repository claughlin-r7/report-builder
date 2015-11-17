import React from 'react';
import ReactDOM from 'react-dom';
import RComp from 'components/rComp'
import Main from 'components/main'
import './../scss/main.scss';

let reportData = {
    cards: [
        {title: "Bar Chart", image: "", type: "line", configOptions: {title: "this is the user card title", url: ""}}
    ]
};

//ReactDOM.render(<Report report={reportData}/>, document.getElementById('content'));
ReactDOM.render(<Main/>, document.getElementById('content'));
