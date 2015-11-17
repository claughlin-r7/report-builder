import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'
import ReportItemMenu from 'components/report-item-menu'

class Main extends React.Component {

    render() {
        return (
            <div className='container'>
                    <ReportItemMenu />
                <div>
                    CONTENT GOES HERE
                </div>
            </div>
        );
    }
}

export default Main;
