import "../App.css";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true });
  }

  showRegisterBox() {
    this.setState({ isLoginOpen: false });
  }

  render() {
    return (
      <Fragment>
        <div class="header">Brilliant Pro</div>
        <div class="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {!this.state.isLoginOpen && <RegisterBox />}
        </div>
        <div class="mx-auto" style={{ width: "400px" }}>
          {!this.state.isLoginOpen && (
            <div class="btn btn-primary" onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
          )}
          {this.state.isLoginOpen && (
            <div
              class="btn btn-primary"
              onClick={this.showRegisterBox.bind(this)}
            >
              Register
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const LoginBox = () => {
  const dispatch = useDispatch();
  const userPass = {
    username: "admin",
    password: "1234",
  };
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (user === userPass.username && pass === userPass.password) {
      dispatch(login(userPass));
    }
  };
  return (
    <div class="mx-auto" style={{ width: "400px", marginTop: "200px" }}>
      <div class="header">Login to Brilliant Pro</div>
      <div class="box">
        <div class="mb-3">
          <label class="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            class="form-control"
            placeholder="Username"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            class="form-control"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => submitLogin(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

//Register Box
class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div class="mx-auto" style={{ width: "400px", marginTop: "200px" }}>
        <div class="header">Register to Brilliant Pro</div>
        <div class="box">
          <div class="mb-3">
            <label class="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Username"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
