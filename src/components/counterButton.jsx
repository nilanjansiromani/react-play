import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render(){

    return(
        <button onClick={this.increment}>
            Button clicked {this.state.counter} times !
        </button>
    )
  }
}

export default CounterButton;
