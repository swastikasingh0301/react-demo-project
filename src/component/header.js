import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src = "src\images\quotesImage.png" className="logo-image" />
                <span className="header-heading"><h3>Amazing Quotes</h3></span>
            </div>
        )
    }
}

export default Header;