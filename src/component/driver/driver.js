import React from "react";
import decode from "jwt-decode";
import Logout from "../buttons/logout/logout.js";
import CentreDiv from "../../styling/centreDiv.js";
import Code from "../../styling/code.js";

class Driver extends React.Component {
  state = {
    code: ""
  };

  //API call to Airtable for the daily code
  getCodeFunc = () => {
    fetch("/getcode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(codeData => {
        this.setState({
          code: codeData.Code
        });
      });
  };

  //Runs API call on page render
  componentDidMount() {
    this.getCodeFunc();
  }

  populateId = () => {
    return decode(localStorage.getItem("id_token")).id;
  };

  render() {
    return (
      <div>
        <CentreDiv>
          <p>TODAY'S CODE</p>
          <Code>
            <p>{this.state.code || "loading"}</p>
          </Code>
          <p>YOUR ID</p>
          <Code>
            <p>{this.populateId()}</p>
          </Code>
          <Logout />
        </CentreDiv>
      </div>
    );
  }
}

export default Driver;
