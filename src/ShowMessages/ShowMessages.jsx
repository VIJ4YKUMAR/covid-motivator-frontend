import React from "react";
import axios from "axios";
import { FlippingCard } from 'react-ui-cards';
import { FlippingCardBack } from 'react-ui-cards';
import { FlippingCardFront } from 'react-ui-cards';
import "./ShowMessages.css";
import PostButton from "./PostButton";


class ShowMessages extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
      number: '',
    };
  }

  async componentDidMount() {
    this.getMessages();
    setInterval(this.getMessages, 5000)
  }

  getMessages = async () => {
    const response = await axios.get("https://covid-motivator.onrender.com/my_app")
    //const response = await axios.get("http://127.0.0.1:5000/get_messages")
    const { data } = response
    console.log(data)
    //const count = data.length
    this.setState({ messages: data })
    const count = this.state.messages.length;
    this.setState({ number: count })
    console.log(count);
  }

  render() {
    const messages = this.state.messages
    const number = this.state.number
    if (messages.length === 0) return <div className="no_msg">No Messages :(
      <PostButton />
      </div>
    return <div>
      {/* <div className="msg_count">
      <p>total messages: {number}</p>
      </div> */}
      <PostButton />
      <ul className="flipcardlayout" >{
        messages.map((info) => {
          return <FlippingCard>
            <FlippingCardBack>
              <div className="flip-card-back">
                <div className="motivation-text">
                  {info.message}
                </div>
                <div className="author">
                  {info.name}
                </div>
              </div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flip-card-front"></div>
            </FlippingCardFront>
          </FlippingCard>
        })
      }</ul>
      <div className="msg_count">
      <p>total messages: {number}</p>
      </div>
    </div>
  }
}



export default ShowMessages;
