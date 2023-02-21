import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
let email;
// let x;
let arr = [];

// let y;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      password: "",
      confirm_password: "",
    };
  }

  //   componentDidMount() {
  //   // Load form data from local storage if it exists
  //   const formData = JSON.parse(localStorage.getItem("formData"));
  //   if (formData) {
  //     this.setState({
  //       name: formData.name,
  //       email: formData.email,
  //     });
  //   }
  // }

  handleName = (e) => {
    let name = e.target.value;
    if (/^[a-zA-Z]+$/.test(name) === true) {
      this.setState({ name: e.target.value });
    } else {
      alert("Please wright only characters");
      this.setState({ name: "" });
    }
  };

  handleEmail = (e) => {
    email = e.target.value;
    this.setState({ email: email });
  };
  handleNumber = (e) => {
    if (email === "") {
      alert("Please input email address");
    } else if (email.indexOf("@") <= 0) {
      alert("Please enter @ in email field");
    } else if (email.includes("gmail") !== true) {
      alert("Please enter a valid email address");
    } else if (
      email.charAt(email.length - 4) !== "." &&
      email.charAt(email.length - 3) !== "."
    ) {
      alert("Please enter a valid . input");
    } else if (isNaN(e.target.value)) {
      alert("Please input Number Value");
    } else if (
      e.target.value.charAt(0) != 9 &&
      e.target.value.charAt(0) != 8 &&
      e.target.value.charAt(0) != 7
    ) {
      alert("Please Start Your Number with 9, 8, 7");
    } else {
      this.setState({ number: e.target.value });
    }
  };

  handlePassword = (e) => {
    if (this.state.number.length < 10) {
      alert("Please complete your mobile number");
    }
    this.setState({ password: e.target.value });
  };
  handleConfirm_password = (e) => {
    if (this.state.password.length < 6 || this.state.password.length > 16) {
      alert("Your password length between 6 to 16");
    }
    this.setState({ confirm_password: e.target.value });
  };
 submitForm = async(e) => {

    let name = this.state.name;
    let email = this.state.email;
    let number = this.state.number;
    let password = this.state.password;
    let confirm_password = this.state.confirm_password;
    e.preventDefault();

    let postdata = {

      name,
      email,
      number,
      password,
      confirm_password
         }
          console.log(postdata)
      let res = await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        body: JSON.stringify(postdata),
        headers:{"content-Type":"application/json"}
      })
      debugger
      let data = await res.json();
      alert(data.password);


    if (
      this.state.name == "" ||
      this.state.email == "" ||
      this.state.number == "" ||
      this.state.password == "" ||
      this.state.confirm_password == ""
    ) {
      alert("Please fill all the details");
    } else if (
      this.state.password.includes(this.state.confirm_password) !== true
    ) {
      alert("Please enter the same password");
    } else {
      alert("Yeah! Signed Up Successfully");
      window.location.reload();
    }
    // let obj = {};
    // obj.name = this.state.name;
    // obj.email = this.state.email;
    // arr.push(obj);
    // localStorage.setItem("formData", JSON.stringify(arr));

  

  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-4 mx-auto mt-5 p-5 bg-light">
            <form>
              <div class="form-group mt-2">
                <label htmlFor="name">Name</label>
                <input
                  maxLength={25}
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name..."
                  value={this.state.name}
                  onChange={(e) => {
                    this.handleName(e);
                  }}
                />
              </div>
              <div class="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input
                  type="Email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.handleEmail(e);
                  }}
                />
              </div>

              <div class="form-group mt-2">
                <label htmlFor="number">Mobile Number</label>
                <input
                  type="text"
                  maxLength={10}
                  name="number"
                  className="form-control"
                  id="number"
                  placeholder="Enter Number..."
                  value={this.state.number}
                  onChange={(e) => {
                    this.handleNumber(e);
                  }}
                />
              </div>

              <div class="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="Password"
                  name="password"
                  minLength={6}
                  maxLength="16"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={(e) => {
                    this.handlePassword(e);
                  }}
                />
              </div>

              <div class="form-group mt-2">
                <label htmlFor="con_password">Confirm Password</label>
                <input
                  type="Password"
                  name="con_password"
                  minLength="6"
                  maxLength="16"
                  className="form-control"
                  id="con_password"
                  placeholder="Confirm Password"
                  value={this.state.confirm_password}
                  onChange={(e) => {
                    this.handleConfirm_password(e);
                  }}
                />
              </div>

              <div className="text-center mt-3">
                <button
                  id="sign-up-btn"
                  class="btn btn-primary w-50 rounded-pill"
                  onClick={(e) => this.submitForm(e)}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}