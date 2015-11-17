import React from 'react';
import Table from 'components/table'

class Rcomp extends React.Component {
    render() {
        let tableData = [
            {name: 'Rylan'},
            {name: 'Amelia'},
            {name: 'Estevan'},
            {name: 'Florence'},
            {name: 'Tressa'}
        ];

        let tableColums = ['name'];

        return (
            <div>This is the react view
                <div>
                    <Table tableData={tableData} tableColums={tableColums}/>
                </div>
            </div>
        );
    }
}

export default Rcomp;
