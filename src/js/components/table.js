import FixedDataTable from 'fixed-data-table';
import React from 'react';

const {Table, Column, Cell} = FixedDataTable;

const TextCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        {data[rowIndex][col]}
    </Cell>
);

class TableBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataList: props.tableData
        };
    }

    rendercolumn = (column) => {
        return <Column
            header={<Cell>{column.name}</Cell>}
            cell={<TextCell data={this.state.dataList} col={column.header} />}
            fixed={true}
            width={100}
            />
    };

    render() {
        var {dataList} = this.state;
        return (
            <Table
                rowHeight={50}
                headerHeight={50}
                rowsCount={dataList.length}
                width={1000}
                height={500}
                {...this.props}>
                {this.props.tableColums.map(this.rendercolumn)}
            </Table>
        );
    }
}

export default TableBuilder
