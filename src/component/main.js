import React,{Component} from 'react';
import Header from './header';
import App from './quote';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />,
                <App />
            </React.Fragment>
        );
    }
}

export default Main;