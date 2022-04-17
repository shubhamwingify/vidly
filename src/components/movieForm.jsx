import React from "react";
import Joi from 'joi-browser';
import Form from "./common/form";

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required(),
        password: Joi.string().min(5).required(),
        name: Joi.string()
    }


    doSubmit = () => {
        console.log('Register Form submitted', {
            email: this.state.data.email,
            password: this.state.data.password,
            name: this.state.data.name
        });
    }

    render() {
        return (
            <div>
                <h1> Register Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name')}
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password')}
                    {this.renderSubmitButton('Register')}
                </form>
            </div>
        )
    }
}

export default MovieForm;
