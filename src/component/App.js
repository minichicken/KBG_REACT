import React from 'react'; // var React  = require('reacct');
import Custumer from './Custumer';

class App extends React.Component{

    render(){
        return(    
            <div>
            <Custumer name={"고객명"} gender={"남자"} age={10} />
        
            
            <Custumer />
            </div>
            
            );        
    }

}

export default App; 