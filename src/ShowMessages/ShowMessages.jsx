import React from "react";
import axios from "axios";
import { FlippingCard } from 'react-ui-cards';
import { FlippingCardBack } from 'react-ui-cards';
import { FlippingCardFront } from 'react-ui-cards';

import "./ShowMessages.css";

class ShowMessages extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  async componentDidMount() {
    this.getMessages();
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

    return <div> <ul  style={{
    display : "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }}>{
      messages.map((info) => {
        return <FlippingCard>
        <FlippingCardBack>
            <div 
                style={{
                    width: '100%',
                    height: '75%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundColor: '#8BC6EC',                   
                    backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                }}>
                  <div className="motivation-text">
                  {info.message}
                  </div>
            </div>
        </FlippingCardBack>
        <FlippingCardFront>
            <div
                style={{
                    width: '100%',
                    height: '75%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundColor: '#85FFBD',
                    backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
                }}>
            </div>
        </FlippingCardFront>
    </FlippingCard>
      })
    }</ul></div>
  }
}



export default ShowMessages;
