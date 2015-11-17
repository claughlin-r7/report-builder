import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import TableBuilder from 'components/tableBuilder';

class Main extends React.Component {

    componentWillMount() {
        this.menuItems = [
            { text: 'Get Started' },
            { text: 'Customization' },
            { text: 'Components' }
        ];
        this.headers = ['Id', 'Name', 'Status'];
        this.tableData = [
            [1, 'John Smith', 'Employed'],
            [2, 'Jane', 'Sacked'],
            [3, 'Chris', 'Employed']
        ]
    }

    render() {
        return (
            <div>
                <TableBuilder headers={this.headers} tableData={this.tableData}/>
            </div>
        );
    }
}

export default Main;
