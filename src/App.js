import "./App.css";
import "./index.css";
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
    axios.get("https://covid-motivator.herokuapp.com/get_messages")
    //axios.get("http://localhost:5000/get_messages")
  }

  submitQuote = (event: any) => {
    event.preventDefault();
    const quote = this.state.quote;
    const name = this.state.name;
    axios.post("https://covid-motivator.herokuapp.com/my_app",{
    //axios.post("http://localhost:5000/my_app",{
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
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <form name="message_form" action="#" method = "post" ref={form => this.form = form}>
          <label>
        {" "}
            <textarea class="txt_box" id="msgfield" name="quote" rows="15" cols="60" placeholder="write your message here " onChange={this.handleChange}/><br></br>
          </label>
          <div class="note" ><p>*(the message sent will be approved by the admin after classification for offensive speech)</p>
          </div>
          <label>
            <input id="username" name="name" placeholder="enter your name" onChange={this.handleChange}/>
          </label>
          <button className="button" onClick={this.submitQuote}>send</button>
        </form>
      </div>
    );
  }
}

export default App;
