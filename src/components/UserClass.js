import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    console.log("UserClass Constructor");
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("UserClass Component Mounted");
  }

  render() {
    console.log("UserClass Component Rendered");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
