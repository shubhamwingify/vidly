import React, {Component} from "react";
import Joi from "joi-browser";
import Input from "./input";


class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate() {
        const result = Joi.validate(this.state.data, this.schema, {
            abortEarly: false
        });
        if (!result.error) {
            return null;
        }
        const errors = {};
        result.error.details.forEach((error) => {
            errors[error.path[0]] = error.message;
        });
        return errors;
    }

    validateProperty({name, value}) {
        const obj = {[name]: value};
        const tempSchema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, tempSchema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors});
        if (errors) {
            return;
        }
        this.doSubmit();
    }

    handleChange = (e) => {
        const target = e.currentTarget;
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(target);
        if (errorMessage) {
            errors[target.name] = errorMessage;
        } else {
            delete errors[target.name];
        }

        const data = {...this.state.data};
        data[target.name] = target.value;
        this.setState({
            data,
            errors
        });
    }

    renderInput = (name, label) => {
        const {data, errors} = this.state;
        return (
            <Input value={data[name]} type="text" name={name}
                   errorMessage={errors && errors[name]}
                   handleChange={this.handleChange} label={label} placeholder={`Enter ${label}`}/>
        )
    }

    renderSubmitButton = (text) => {
        return (
            <button type="submit" disabled={this.validate()} className="btn btn-primary">{text}</button>
        )
    }
}

export default Form;
