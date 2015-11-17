import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

class TableBuilder extends React.Component {
    componentWillMount() {
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            columns: ['Id', 'Name', 'Status'],
            tableData: [

            ]
        };
    }

    renderTableColumns(column) {
        return (
            <TableHeaderColumn tooltip={'The' + column}>{column}</TableHeaderColumn>
        );
    }

    render() {
        return (
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
                        {this.state.columns.map(this.renderTableColumns)}
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}>
                    <TableRow selected={true}>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={true}>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Joyce Whitten</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>6</TableRowColumn>
                        <TableRowColumn>Samuel Roberts</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>7</TableRowColumn>
                        <TableRowColumn>Adam Moore</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default TableBuilder;
