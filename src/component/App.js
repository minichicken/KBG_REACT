import React from 'react'; // var React  = require('reacct');
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
                             
class App extends React.Component {

    render() {
        return (
            <div>
              <MuiThemeProvider>
                <TodoInput/>
             </MuiThemeProvider>    
            </div> 
        );
    }

}

export default App;