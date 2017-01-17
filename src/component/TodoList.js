import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';



class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    return ( 

      <div style={styles.root}>
        <List>  
          <ListItem primaryText={this.props.text} leftCheckbox={<Checkbox />} />
        </List>
      </div>



    );
  }

}

export default TodoList;