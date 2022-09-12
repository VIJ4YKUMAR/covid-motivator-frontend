import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: "",
    }; 
  }
  componentDidMount() {
    axios.get("https://covid-motivator.herokuapp.com/get_messages")
    
  }

  submitQuote = (event: any) => {
    event.preventDefault();
    const quote = this.state.quote;
    axios.get("https://covid-motivator.herokuapp.com/my_app",{
      params: {
        message:quote 
      }
    })
    this.form.reset()
  };

  handleChange = (event: any) => {
    this.setState({
      quote: event.target.value,
    });
  };

  render(){
    return(
      <div key="main-app" className="App">
        <form name="message_form" action="#" ref={form => this.form = form}>
          <label>
        {" "}
            <input type="text" name="message" placeholder="ENTER YOUR MESSAGE" maxLength={200} onChange={this.handleChange} />
          </label>
          <button className="button" onClick={this.submitQuote}>SEND</button>
        </form>
      </div>
    );
  }
}

export default App;
