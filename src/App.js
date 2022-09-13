import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: "",
      name: "",
    }; 
  }
  componentDidMount() {
    //axios.get("https://covid-motivator.herokuapp.com/get_messages")
    axios.get("http://localhost:5000/get_messages")
  }

  submitQuote = (event: any) => {
    event.preventDefault();
    const quote = this.state.quote;
    const name = this.state.name;
    //axios.post("https://covid-motivator.herokuapp.com/my_app",{
    axios.post("http://localhost:5000/my_app",{
      message:quote,
      u_name:name,
    })
    this.form.reset()
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
    return(
      <div key="main-app" className="App">
        <form name="message_form" action="#" method = "post" ref={form => this.form = form}>
          <label>
        {" "}
            <input type="text" className="msgfield" name="quote" placeholder="ENTER YOUR MESSAGE" maxLength={200} onChange={this.handleChange} /><br></br>
          </label>
          <label>
            <input type="text" className="username" name="name" placeholder="ENTER YOUR NAME" maxLength={100} onChange={this.handleChange}/>
          </label>
          <button className="button" onClick={this.submitQuote}>SEND</button>
        </form>
      </div>
    );
  }
}

export default App;
