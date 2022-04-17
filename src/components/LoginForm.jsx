import React, {Component} from "react";
import Input from "./common/input";
import Joi from 'joi-browser';
import Form from "./common/Form";

class LoginForm extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }
    // email = React.createRef();
    // password = React.createRef();
    // input tag ref={this.email}

    schema = {
        email: Joi.string().required(),
        password: Joi.string().required()
    }


    doSubmit = () => {
        console.log('LoginForm submitted', {
            email: this.state.data.email,
            password: this.state.data.password
        });
    }

    render() {
        return (
            <div>
                <h1> Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password')}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;
