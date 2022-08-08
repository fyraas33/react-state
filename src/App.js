import React from "react";
import "./App.css";

import Time from "./Time";

class Welcome extends React.Component {
  state = {
    fullName: "Firas Chagra",
    bio: "Gabes",
    imgSrc: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000",
    profession: "web developer",
    show: false,

  };
  handleClick = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        
        <button className="button" onClick={this.handleClick}>
          {" "} Show State {" "}
          
        </button>
        
        {this.state.show ? (
          <div>
            
          <div className="profile">
            <img className="pic" src={this.state.imgSrc} alt="my_pic"></img>
            <div className="info">
              <h1>Name : {this.state.fullName}</h1>
              <h1>Location : {this.state.bio}</h1>
              <h1>Profession : {this.state.profession}</h1>
            </div>
          </div>
          <Time />
          
          </div>
        ) : null}
        
      </div>
    );
  }
}

export default Welcome;