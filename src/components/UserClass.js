import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    console.log("UserClass Constructor");
    super(props);

    this.state = {
      userInfo: { name: "Dummy User", location: "Dummy Location", login: "" },
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("UserClass Component Mounted");
    // API call - GitHub get user details
    const response = await fetch("https://api.github.com/users/shubham-alavni");
    const data = await response.json();

    console.log("UserClass Component Mounted - Data", data);

    this.setState({
      userInfo: data,
    });

    // memory leak example - perform
    this.timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("UserClass Component Updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer Cleared");
    console.log("UserClass Component Unmounted");
  }

  render() {
    console.log("UserClass Component Rendered");
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        {/* verify componentDidUpdate count */}
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location || "India"}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
