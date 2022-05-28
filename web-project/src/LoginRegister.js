import './App.css';
import React, { Fragment } from 'react';



class LoginRegister extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true
      };
    }
  
    showLoginBox() {
      this.setState({isLoginOpen: true});
    }
  
    showRegisterBox() {
      this.setState({isLoginOpen: false});
    }
  
    render() {
  
      return (
        <Fragment>
          <div class="header">
            Brilliant Pro
          </div>
          <div class="box-container">
            {this.state.isLoginOpen && <LoginBox loginStatus={this.props.loginStatus}/>}
            {!this.state.isLoginOpen && <RegisterBox/>}
          </div>
          <div class="mx-auto" style={{width:'400px'}}>
            {!this.state.isLoginOpen && <div
              class="btn btn-primary"
              onClick={this
              .showLoginBox
              .bind(this)}>
              Login
            </div>}
            {this.state.isLoginOpen && <div
              class="btn btn-primary"
              onClick={this
              .showRegisterBox
              .bind(this)}>
              Register
            </div>}
          </div>
        </Fragment>
        
      );
  
    }
  
  }
  
  
  //Login Box
  class LoginBox extends React.Component {
    //default username and password. delete it later.
    userPass;

    constructor(props) {
      super(props);
      this.state = {};
      this.userPass= {
        username: 'admin',
        password: '1234'
      };
      this.user = React.createRef();
      this.pass = React.createRef();
    }
  
    submitLogin(e) {
        if(this.user.current.value===this.userPass.username && this.pass.current.value===this.userPass.password){
          this.props.loginStatus(true);
        }
        else{
            alert('Login Failed'+this.user.current.value+this.pass.current.value);
        }
    }
  
    render() {
      return (
        <div class="mx-auto" style={{width:'400px', marginTop:'200px'}}>
          <div class="header">
            Login to Brilliant Pro
          </div>
          <div class="box">
  
            <div class="mb-3">
              <label class="form-label" htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                ref={this.user}
                class="form-control"
                placeholder="Username"/>
            </div>
  
            <div class="mb-3">
              <label class="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                ref={this.pass}
                class="form-control"
                placeholder="Password"/>
            </div>
  
            <button
              type="submit"
              class="btn btn-primary"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  
  }
  
  //Register Box 
  class RegisterBox extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitRegister(e) {}
  
    render() {
      return (
        <div class="mx-auto" style={{width:'400px', marginTop:'200px'}}>
          <div class="header">
            Register to Brilliant Pro
          </div>
          <div class="box">
  
            <div class="mb-3">
              <label class="form-label" htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="Username"/>
            </div>
  
            <div class="mb-3">
              <label class="form-label" htmlFor="email">Email</label>
              <input type="email" name="email" class="form-control" placeholder="Email"/>
            </div>
  
            <div class="mb-3">
              <label class="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"/>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={this
              .submitRegister
              .bind(this)}>Register</button>
          </div>
        </div>
      );
    }
  }


  export default LoginRegister;