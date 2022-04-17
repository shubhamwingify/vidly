import React from "react";
import Joi from 'joi-browser';
import Form from "./common/form";

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
                    {this.renderSubmitButton('Submit')}
                </form>
            </div>
        )
    }
}

export default LoginForm;
