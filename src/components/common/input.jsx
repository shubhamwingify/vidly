const Input = ({name, label, handleChange, errorMessage, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                className="form-control"
                id={name}
                onChange={(e) => handleChange(e)}/>
            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default Input;
