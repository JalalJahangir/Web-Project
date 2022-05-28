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
      this.setState({isLoggedIn: true});
    }
  }

  render(){
    return (
      <div className="App">
        {!this.state.isLoggedIn && <LoginRegister loginStatus={this.loginStatus}></LoginRegister>}
      </div>
    )
  }
}




export default App;
