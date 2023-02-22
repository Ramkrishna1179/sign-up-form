import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Header from "./component/header";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/header" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
      // <Signup />
      // <Signin />
    );
  }
}
