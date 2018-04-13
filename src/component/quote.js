import React,{Component} from 'react';

class Quote extends Component{
    constructor(props){
        super(props);

        this.state = {
            quotes :[],
            quoteText:'',
            author :''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    handleChange(event){
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.quoteText.length) {
            return;
        }
        const newQuote = {
            quoteText: this.state.quoteText,
            id:this.state.quotes.length+1,
            author: this.state.author
        };
        
        this.setState({
            quotes: this.state.quotes.concat(newQuote),
            quoteText: '',
            author:''
        });
    }
    handleRemove(i) {
        console.log(this.state.quotes);
        let newItems = this.state.quotes.slice();
        newItems.splice(i -1, 1);
        this.setState({ quotes: newItems });
    }

    render(){
        return(
            <React.Fragment>
                <form className="body-form" onSubmit={this.handleSubmit}>
                    <span>
                    <textarea rows="4" cols="50" placeholder = "Quotes" value={this.state.quoteText} onChange={this.handleChange} name="quoteText"></textarea>
                    </span>
                    <span>
                        <input type ="text" value={this.state.author} placeholder = "Author" onChange={this.handleChange} name="author"/>
                    </span>
                    <span>
                        <input type ="submit" className = "button" value="Add"/>
                    </span>
                </form>
                <hr className="form-line"/>
                {this.state.quotes.map(quote => (
                    <span className="quote-div" key={quote.id}><q>{quote.quoteText}</q>
                        <span>-{quote.author}</span>
                        <button onClick={() => this.handleRemove(quote.id)}>
                            &times;
                        </button>
                    </span>
                    
                 ))}
                
            </React.Fragment>
        )
    }
}

export class AddQuote extends Component{ 
    
    render(){
        return(
            <React.Fragment>
                {this.props.quotes.map(quote => (
                    <span className="quote-div" key={quote.id}><q>{quote.quoteText}</q>
                        <span>-{quote.author}</span>
                        <button onClick={() => this.handleRemove(quote.id)}>
                            &times;
                        </button>
                    </span>
                    
                 ))}
            </React.Fragment>
        )
    }
}

export default Quote;