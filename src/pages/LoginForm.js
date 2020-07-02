import React from 'react';
import InputField from '../components/login-components/InputField';
import SubmitButton from '../components/login-components/SubmitButton';
import UserStore from '../stores/UserStore';
import axios from 'axios'
import { login } from '../services/User'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom'
import history from '../services/i'


class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      dat: '',
      buttonDisabled: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      response1: "",
      dat: '',
      buttonDisabled: false
    })
  }



  onSubmit() {


    const user = {
      email: this.state.email,
      name: this.state.password
    }



    login(user).then(res => {
      console.log(res)

      if (res) {
        history.push('/nomina')
        window.location.reload(true);
      }
    })
  }









  render() {

    return (

      <div className="loginForm">

        Log in
        <InputField
          type='text'
          placeholder='Username'
          value={this.state.username ? this.state.username : ''}
          onChange={(val) => this.setInputValue('username', val)}
        />

        <InputField
          type='password'
          placeholder='Password'
          value={this.state.password ? this.state.password : ''}
          onChange={(val) => this.setInputValue('password', val)}
        />
        <Link to={{
          pathname: `nomina`,

        }}>
          <SubmitButton
            text='Login'
            disabled={this.state.buttonDisabled}
            onClick={() => this.onSubmit()}
          />

        </Link>
        <div>
          <Link to={{
            pathname: `register`,

          }}>
            <button className="">


              Registar
                                    </button>
          </Link>
        </div>

      </div>



    );
  }
}

export default LoginForm; 
