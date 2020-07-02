
import React from 'react';
import InputField from '../components/login-components/InputField';
import SubmitButton from '../components/login-components/SubmitButton';
import UserStore from '../stores/UserStore';
import axios from 'axios'
import { register } from '../services/User'
import { Link } from 'react-router-dom'
class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            response: "",
            buttonDisabled: false
        }
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
            response: "",
            buttonDisabled: false
        })
    }

    async onSubmit() {


        const user = {
            name: this.state.username,
            email: this.state.password
        }




        await register(user).then(res => {
            console.log(res)

            if (res) {
                alert("asdsd")
            }
        })
        this.setState.dat = this.state.username
        console.log(this.state.dat)
    }




    render() {
        return (
            <div className="loginForm">

                Register
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
                <InputField
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={(val) => this.setInputValue('password', val)}
                />

                <SubmitButton
                    text='Registar'
                    disabled={this.state.buttonDisabled}
                    onClick={() => this.onSubmit()}
                />

                <div>
                    <Link to={{
                        pathname: `/`,

                    }}>
                        <button className="">


                            login
                                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default RegisterForm; 