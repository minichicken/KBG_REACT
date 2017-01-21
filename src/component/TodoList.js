import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';



class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  isChecked : false };
    this.onChecked = this.onChecked.bind(this);
  }
  
  onChecked(e, isInputChecked) {
    
    console.log(e.target);
    console.log(isInputChecked);

    this.setState({isChecked : isInputChecked});
    
    // 부모 컴포넌트로부터 받음 함수를 콜백 형식으로 사용한다.
    this.props.getIndexOfTodoList( { index :this.props.index  , isChecked : isInputChecked});
  }



  render() {


    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    return (

      <div  index={this.props.index} style={styles.root}>
        <List  >
          <ListItem leftCheckbox={<Checkbox onCheck={this.onChecked} />} primaryText={this.props.text} />
        </List>
      </div>



    );
  }

}

export default TodoList;