import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message}/>
        <h1>{charsLeft}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
