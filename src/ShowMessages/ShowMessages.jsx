import React from "react";
import axios from "axios";

class ShowMessages extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  async componentDidMount() {
    setInterval(this.getMessages, 5000)
  }

  getMessages = async () => {
    const response = await axios.get("http://127.0.0.1:5000/get_messages")
    const { data } = response
    console.log(data)
    this.setState({ messages: data })
  }

  render() {
    const messages = this.state.messages
    if (messages.length == 0) return <div>No Messages</div>

    return <div> <ul>{
      messages.map((info) => {
        return <li key={info.id}> {info.message} </li>
      })
    }</ul></div>
  }
}



export default ShowMessages;
