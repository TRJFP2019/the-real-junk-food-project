import React, { Component } from "react";

class Button extends Component {
  state = {
    toggled: false
  };
  toggle = () => {
    this.setState((prevState, props) => {
      return { toggled: !prevState.toggled };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          Click me! Maybe soon I will be the submit button for the form.
        </button>
        {this.state.toggled && (
          <p>
            Howdy{" "}
            <span role="img" aria-label="cowboy emoji">
              🤠
            </span>
          </p>
        )}
      </div>
    );
  }
}

export default Button;
