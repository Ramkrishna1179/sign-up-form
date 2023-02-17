import React, { Component } from "react";

export default class Sign extends Component {
  render() {
    return (
      <div id="sign">
        <form>
          <input placeholder="Enter Name..." type="text" />
          <input placeholder="Enter Email..." type="email" />
        </form>
      </div>
    );
  }
}









// import React from 'react'
// import Sign from './sign';
// let x;
// let y;
// let arr =[];
// export default class FormComponent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//     };
//   }

//   componentDidMount() {
//     // Load form data from local storage if it exists
//     const formData = JSON.parse(localStorage.getItem("formData"))||[];
//     if (formData) {
//       this.setState({
//         name: formData.name,
//         email: formData.email,
//       });
//     }
//   }

//   componentWillUnmount() {
//     // Save form data to local storage before the component unmounts
//   }

//   handleNameChange = (event) => {
//     const name = event.target.value;
//     this.setState({ name });
//   };

//   handleEmailChange = (event) => {
//     const email = event.target.value;
//     this.setState({ email });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
// let obj={}
// alert(obj)
//      obj.x = this.state.name;
//      obj.y = this.state.email;
//      arr.push(obj)
//     localStorage.setItem("formData", JSON.stringify(arr));
//     // window.location.reload();
//     // Handle form submission logic here
//     // window.location.href="#sign";
//     // React.render( <Sign /> , document.getElementById('App'))
//   };

//   render() {
//     return (
//       <div>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={this.state.email}
//             onChange={this.handleEmailChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <h1>{x}</h1>
//       <h2>{y}</h2>
//       </div>
//     );
//   }
// }
