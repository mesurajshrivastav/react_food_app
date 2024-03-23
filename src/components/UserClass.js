import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Default Name",
      followers: 10,
      userInfo: {},
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        "https://api.github.com/users/mesurajshrivastav"
      );
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("error fetching user data:", error);
    }
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="user-card">
        <h3>Full Name: {userInfo.name}</h3>
        <h3>Followers in Github: {userInfo.followers}</h3>
      </div>
    );
  }
}

export default UserClass;
