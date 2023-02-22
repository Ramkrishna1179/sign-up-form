import React, { Component } from "react";
import signup from "./Signup";
import { Link } from "react-router-dom";

let name;
let email;
let password;
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleName = (e) => {
    name = e.target.value;
    this.setState({ name: e.target.value });
  };

  handleemail = (e) => {
    email = e.target.value;
    this.setState({ email: e.target.vale });
  };

  handlePassword = (e) => {
    password = e.target.value;
    this.setState({ password: e.target.value });
  };

  render() {
    async function SubmitSignin(event) {
      event.preventDefault();
      // debugger;
      const res = await fetch(`http://localhost:3000/posts`);
      const data = await res.json();

      console.log(data);
      // alert(data.id);

      // alert(name);
    }
    return (
      <div id="sign">
        <div className="container mt-5 ">
          <div id="formDiv">
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                placeholder="Enter Name..."
                onChange={(e) => {
                  this.handleName(e);
                }}
                type="text"
                value={this.state.name}
                id="name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                placeholder="Enter Email..."
                type="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleemail(e);
                }}
                handleEmail
                id="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label> <br />
              <input
                placeholder="Enter password..."
                type="password"
                value={this.state.password}
                onChange={(e) => {
                  this.handlePassword(e);
                }}
                id="password"
              />
            </div>
            <br />
            <div>
              <button
                className="btn btn-primary me-1"
                onClick={(e) => {
                  SubmitSignin(e);
                }}
              >
                Sign in
              </button>
              <button className="btn btn-success ms-1">
                <Link to="/">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
