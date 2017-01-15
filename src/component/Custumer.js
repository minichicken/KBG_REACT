import React from 'react'; // var React  = require('reacct');


class Custumer extends React.Component{
    // props 란 불편성 데이터 
    constructor(props){
        super(props);
    }

    render(){


        return (
            <div>
            
                <div>{this.props.name}</div>
                <div>{this.props.gender}</div>
                <div>{this.props.age}</div>
                
            </div>
            
        );
    }

}

// 타입 지정 하기
Custumer.propTypes = {
    name: React.PropTypes.string,
    gender: React.PropTypes.string,
    age: React.PropTypes.number,
};

// 기본값
Custumer.defaultProps = {
    name: "CustumerName",
    gender: "GenderType",
    age: 0   
};


export default Custumer;