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
      messages.map(info) => <FlippingCard>
      <FlippingCardBack>
          <div
              style={{
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundImage: 'url(https://i.imgur.com/wjbYGNv.jpg)'
              }}>
          </div>
      </FlippingCardBack>
      <FlippingCardFront>
          <div
              style={{
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
              }}>
          </div>
      </FlippingCardFront>
  </FlippingCard>
  </ul>
  </div>
  }
}



export default ShowMessages;
