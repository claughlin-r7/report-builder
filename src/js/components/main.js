import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'

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
            </div>
        );
    }
}

export default Main;
