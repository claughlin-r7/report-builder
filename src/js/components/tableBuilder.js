import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

class TableBuilder extends React.Component {
    componentWillMount() {
        this.headers = ['Id', 'Name', 'Status'];
        this.tableData = [
            [1, 'John Smith', 'Employed'],
            [2, 'Jane', 'Sacked'],
            [3, 'Chris', 'Employed']
        ];
        this.state = {
            fixedHeader: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            columns: this.headers,
            tableData: this.tableData
        };
    }

    renderTableColumn(column, index) {
        return (
            <TableHeaderColumn key={index} tooltip={'The' + column}>{column}</TableHeaderColumn>
        );
    }

    renderTableRow(row, index) {
        let renderRowCell = (cell, index) => {
            return(
                <TableRowColumn key={index}>{cell}</TableRowColumn>
            );
        };

        return (
            <TableRow key={index}>
                {row.map(renderRowCell)}
            </TableRow>
        );
    }

    render() {
        return (
            <div style={{width: '400px'}}>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    onRowSelection={this._onRowSelection}>
                    <TableHeader enableSelectAll={this.state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
                                Super Header
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            {this.state.columns.map(this.renderTableColumn)}
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}>
                        {this.state.tableData.map(this.renderTableRow)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default TableBuilder;
