import React from "react";
import axios from "axios";
import { FlippingCard } from 'react-ui-cards';
import { FlippingCardBack } from 'react-ui-cards';
import { FlippingCardFront } from 'react-ui-cards';

import "./ShowMessages.css";
import { Link } from "react-router-dom";

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
    //const response = await axios.get("https://covid-motivator.herokuapp.com/get_messages")
    const response = await axios.get("http://127.0.0.1:5000/get_messages")
    const { data } = response
    console.log(data)
    this.setState({ messages: data })
  }

  render() {
    const messages = this.state.messages
    if (messages.length === 0) return <div>No Messages</div>

    return <div> 

      <Link to={'/post_messages'}>
        <div className="post-button"> 
        POST A MESSAGE
        </div>
      </Link>
      
      
      <ul  style={{
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
                    height: '100%',
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
                    height: '100%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundColor: '#85FFBD',
                    backgroundImage: 'linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
            </div>
        </FlippingCardFront>
    </FlippingCard>
      })
    }</ul></div>
  }
}



export default ShowMessages;
