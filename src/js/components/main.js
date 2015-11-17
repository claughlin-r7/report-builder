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
    }

    render() {
        return (
            <div>
                <LeftNav ref="leftNav" menuItems={this.menuItems} />
                <TableBuilder />
            </div>
        );
    }
}

export default Main;
