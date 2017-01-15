import React from 'react'; // var React  = require('reacct');
import AppBar from 'material-ui/AppBar';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';





class TodoInput extends React.Component {
    // props 란 불변성 데이터 
    constructor(props) {
        super(props);
        this.state = { TodoInputData: '', TodoStoage: [] }; // 변동이 가능한 데이터 
        this.onSave = this.onSave.bind(this); // bind scope 영역을 강제로 내부로 한정시킴
        this.onChangeHandler = this.onChangeHandler.bind(this);
        

    }

    onSave(e) {

        // console.log(e); // 이벤트 프록시 객체가 넘어옴 
        // console.log(e.charCode);

        if (e.type === 'keypress' && e.charCode === 13) {
            console.log("ENTER SAVE");
            //  console.log("VALUE : " + e.target.value);
            let todoInputData = this.state.TodoInputData;
            let tempArr = this.state.TodoStoage;
            // console.log("TEST : "+[...tempArr,todoInputData]);

            this.setState({ TodoStoage: [...tempArr, todoInputData] });

            // console.log(this.tableRow());
            
        } else if (e.type === 'click') {
            console.log("Click SAVE !!!");
            //  console.log("VALUE  : " + e.target.value);
        }

    }

    onChangeHandler(e) {
        // console.log(e);
        console.log("onChangeHandler " + e.target.value);
        this.setState({ TodoInputData: e.target.value });

    }


    
    render() {

        return (
            <div>
                <AppBar title="ToDo List" />
                <TextField
                    hintText="ToDo 를 입력하세요!" onKeyPress={this.onSave} onChange={this.onChangeHandler} />
                <FlatButton label="저장" primary={true} onClick={this.onSave} />
                <br />
                TODO 입력 확인 :{this.state.TodoStoage.map((elm,i) =>{ 
                return (<div>{elm}</div>);
                })}
                
            </div>

        );
    }

}

export default TodoInput;