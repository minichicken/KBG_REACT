import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class TableList extends React.Component {

  constructor(props){
     super(props);
   }   

  render() {
    return
      (
         <TableRow>
          <TableRowColumn>{this.props.no}</TableRowColumn>
          <TableRowColumn>{this.props.todo}</TableRowColumn>
         </TableRow>
      );
  }

}


export default TableList;