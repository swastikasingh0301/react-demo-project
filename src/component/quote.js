import React,{Component} from 'react';

class Quote extends Component{
    constructor(props){
        super(props);

        this.state = {
            quotes :[],
            quoteText:'',
            author :'',
            likeButtonClicked: "fa fa-thumbs-o-up"
        }
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        // this.handleLikes = this.handleLikes.bind(this);
    }

    getKey(){
        return this.keyCount++;
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
        var quoteLen = this.state.quotes.length;
        var id = 0;
        for (var j = 1; j <= quoteLen; j++){
            id = j;    
        }
        const newQuote = {
            quoteText: this.state.quoteText,
            id: id,
            author: this.state.author
        };
        this.setState({
            quotes: this.state.quotes.concat(newQuote),
            quoteText: '',
            author:''
        });
    }
    handleRemove(i) {
        let newItems = this.state.quotes.slice();
        newItems.splice(i, 1);
        for (var j = 0; j < newItems.length; j++){
            newItems[j].id = j;
            
        }
        if(this.state.quotes.length == 0) this.keyCount = 0;
        this.setState({ quotes: newItems });
    }
    // handleLikes(){
    //     this.setState({
    //         likeButtonClicked:"fa fa-thumbs-up"
    //     })
    // }

    render(){
        return(
            <React.Fragment>
                <form className="body-form" onSubmit={this.handleSubmit}>
                    <h3 className="body-form-heading">Add Quotes here!</h3>
                    <span>
                        <textarea rows="4" className = "body-form-textArea" cols="41" placeholder = "Quotes" value={this.state.quoteText} onChange={this.handleChange} name="quoteText"></textarea>
                    </span>
                    <span>
                        <input type ="text" value={this.state.author} placeholder = "Author" onChange={this.handleChange} name="author"/>
                    </span>
                    <span>
                        <input type ="submit" className = "button" value="Add Quote"/>
                    </span>
                </form>
                <hr className="form-line"/>
                <div className="quote-div">{this.state.quotes.map(quote => (
                    <div key={quote.id}>
                        <blockquote className="quote-inside-div"><q>{quote.quoteText}</q>
                            <div>
                                <span className="body-form-deleteBtn" onClick={() => this.handleRemove(quote.id)}>
                                    <i className = "fa fa-trash-o"></i>
                                </span>
                                {/* <span className="body-form-likeBtn" onClick={() => this.handleLikes()}>
                                    <i className = {this.state.likeButtonClicked}></i>
                                </span> */}
                                <p>-{quote.author}</p>
                            </div>
                        </blockquote>
                    </div>    
                ))}</div>   
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