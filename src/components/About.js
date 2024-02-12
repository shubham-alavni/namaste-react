import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About Us!!</h1>
//       <h2>This is my React App!!!</h2>
//       <UserClass
//         name="Shubham ALAVNI"
//         location="Pune"
//         contact="@shubham-alavni"
//       />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    console.log("About Constructor");
    super(props);
  }

  componentDidMount() {
    console.log("About Component Mounted");
  }

  render() {
    console.log("About Component Rendered");
    return (
      <div>
        <h1>About Us!!</h1>
        <h2>This is my React App!!!</h2>
        <UserClass
          name="Shubham ALAVNI"
          location="Pune"
          contact="@shubham-alavni"
        />
      </div>
    );
  }
}

export default About;
