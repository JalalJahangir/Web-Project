import './App.css';
import React from 'react';
import LoginRegister from './LoginRegister.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      isLoggedIn: false
    };
  }

  loginStatus = (data) => {
    if(data===true){
      alert('Login Successful');
    }
  }

  render(){
    return (
      <LoginRegister loginStatus={this.loginStatus}></LoginRegister>
    )
  }
}




export default App;
