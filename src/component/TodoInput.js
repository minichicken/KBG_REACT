import React from 'react'; // var React  = require('reacct');
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TodoList from './TodoList';

import StringUtils from '../util/StringUtils';




class TodoInput extends React.Component {
    // props 란 불변성 데이터 
    constructor(props) {
        super(props); 
        this.state = { TodoInputData: '', TodoStoage: [], TodoRemoveList: [] }; // 변동이 가능한 데이터 
        this.onSave = this.onSave.bind(this); // bind scope 영역을 강제로 내부로 한정시킴
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onGetCheckedIndexTodoList = this.onGetCheckedIndexTodoList.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }



    textFieldClear() {

    }

    onSave(e) {
        let todoInputData = this.state.TodoInputData;
        let tempArr = this.state.TodoStoage;

        if (e.type === 'keypress' && e.charCode === 13) {
            console.log("ENTER SAVE");

            if (StringUtils.isNotEmpty(todoInputData)) {

                this.setState({ TodoStoage: [...tempArr, todoInputData] });
                // 입력값 초기화 
                this.setState({ TodoInputData: '' });
                this.textField.input.value = '';

            } else {
                alert('입력이 안됨!!!!!');
            }
        } else if (e.type === 'click') {

            if (StringUtils.isNotEmpty(todoInputData)) {
                console.log("Click SAVE !!!");
                this.setState({ TodoStoage: [...tempArr, todoInputData] });
                // 입력값 초기화 
                this.setState({ TodoInputData: '' });
                this.textField.input.value = '';
            } else {
                alert('입력이 안됨!!!!!');
            }
        }




    }

    // TextField에 데이터적인 변화가 생기면 계속 저장함 
    onChangeHandler(e) {
        // console.log("onChangeHandler!!: " + e.target.value);
        this.setState({ TodoInputData: e.target.value });
    }


    // 콜백 함수로 지정 
    onGetCheckedIndexTodoList(state){
        console.log(state);
        let tempArr = this.state.TodoRemoveList;
        let isInputChecked = this.state.isInputChecked;
        if (isInputChecked){
            this.setState({ TodoRemoveList: [...tempArr, state.index] });
        } else{

        }
        //console.log(tempArr);
        //console.log(tempArr.splice(state.index,1));
        //this.setState({ TodoStoage: tempArr });

    }


    onRemove(){
        let targetIndexArr = this.state.TodoRemoveList;
        let tempArr = this.state.TodoStoage;
        // 배열에서 제거 todoList 정보 제거 
        targetIndexArr.forEach((element, index, array) => {
            console.log(element);
            tempArr.splice(element,1);
            
            console.log(tempArr);  
            console.log(array);  
        });

        // 다시 초기화함 
        this.setState({ TodoStoage: tempArr ,TodoRemoveList:[] });

    }
 
    render() {

        return (
            <div>
                <AppBar title="ToDo List" />
                <TextField ref={(ref) => { this.textField = ref } }
                    hintText="ToDo 를 입력하세요!" onKeyPress={this.onSave} onChange={this.onChangeHandler} />
                <FlatButton label="저장" primary={true} onClick={this.onSave} />
                <FlatButton label="수정" primary={true} />
                <FlatButton label="선택삭제" primary={true}  onClick={this.onRemove}/>
                <br />
                <div>
                TODO 입력 확인 :{
                    this.state.TodoStoage.map((elm, i) => {   
                        return (<TodoList text={elm} index={i} getIndexOfTodoList={this.onGetCheckedIndexTodoList}/>);
                    })
                }
                </div>
            </div>

        );
    }

}

export default TodoInput;